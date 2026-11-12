import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { applicationRoles, MAX_FILE_BYTES, MAX_TOTAL_FILE_BYTES, MAX_SUPPORTING_FILES } from "@/lib/network-application";

export const runtime = "nodejs";
export const maxDuration = 30;
const MAX_REQUEST_BYTES = 4 * 1024 * 1024;
const attempts = new Map<string, { count: number; until: number }>();
const schema = z.object({
  fullName: z.string().trim().min(2).max(120).regex(/^[^\r\n\u0000-\u001f]+$/),
  email: z.string().trim().email().max(254),
  phone: z.string().trim().min(7).max(40).regex(/^[+()\d\s.-]+$/).refine(value => value.replace(/\D/g, "").length >= 7),
  country: z.string().trim().min(2).max(80),
  city: z.string().trim().min(2).max(80),
  role: z.enum(applicationRoles),
  subjects: z.string().trim().min(3).max(500),
  experience: z.enum(["0–2 years", "3–5 years", "6–10 years", "Over 10 years"]),
  qualification: z.string().trim().min(2).max(200),
  availability: z.enum(["Part-time", "Full-time", "Project-based", "Flexible"]),
  deliveryMode: z.enum(["Online", "In person", "Both"]),
  profileUrl: z.union([z.literal(""), z.string().url().max(500).refine(v => /^https?:\/\//i.test(v))]),
  message: z.string().trim().min(20).max(3000),
  consent: z.literal("on"),
  website: z.string().max(0),
});
class SubmissionError extends Error {
  constructor(message: string, public status: number) { super(message); }
}
async function readForm(request: NextRequest) {
  if (!request.headers.get("content-type")?.startsWith("multipart/form-data"))
    throw new SubmissionError("Please submit the application using the form.", 415);
  const length = Number(request.headers.get("content-length") || 0);
  if (length > MAX_REQUEST_BYTES) throw new SubmissionError("The application is too large. Attach up to 3 MB in total.", 413);
  if (!request.body) throw new SubmissionError("The application is empty.", 400);
  const reader = request.body.getReader();
  const chunks: Uint8Array[] = [];
  let size = 0;
  try {
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > MAX_REQUEST_BYTES) { await reader.cancel(); throw new SubmissionError("The application is too large. Attach up to 3 MB in total.", 413); }
      chunks.push(value);
    }
  } finally { reader.releaseLock(); }
  const body = Buffer.concat(chunks);
  try { return await new Request(request.url, { method: "POST", headers: { "content-type": request.headers.get("content-type")! }, body }).formData(); }
  catch { throw new SubmissionError("We couldn't read the application. Please try again.", 400); }
}
async function attachment(file: File, prefix: string) {
  if (!file.size || file.size > MAX_FILE_BYTES) throw new SubmissionError("Each document must contain data and be 2 MB or smaller.", 422);
  const name = file.name.split(/[\\/]/).pop() || "document";
  const extension = name.split(".").pop()?.toLowerCase();
  const content = Buffer.from(await file.arrayBuffer());
  const valid =
    (extension === "pdf" && content.subarray(0, 5).toString() === "%PDF-") ||
    (extension === "docx" && content.subarray(0, 4).equals(Buffer.from([80, 75, 3, 4]))) ||
    (["jpg", "jpeg"].includes(extension || "") && content[0] === 255 && content[1] === 216 && content[2] === 255) ||
    (extension === "png" && content.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10])));
  if (!valid) throw new SubmissionError("Please attach valid PDF, DOCX, JPG or PNG documents.", 422);
  const safeName = name.replace(/[\u0000-\u001f\u007f<>:"|?*]/g, "_").slice(-100);
  return { filename: prefix + safeName, content };
}
export async function POST(request: NextRequest) {
  try {
    const origin = request.headers.get("origin");
    const allowedOrigin = process.env.NEXT_PUBLIC_SITE_URL ? new URL(process.env.NEXT_PUBLIC_SITE_URL).origin : undefined;
    if (origin && origin !== request.nextUrl.origin && origin !== allowedOrigin)
      throw new SubmissionError("Please submit the application from our website.", 403);
    const now = Date.now();
    for (const [ip, entry] of attempts) if (entry.until <= now) attempts.delete(ip);
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";
    const entry = attempts.get(ip);
    if (entry && entry.count >= 5) return NextResponse.json({ error: "Too many attempts. Please try again in 10 minutes." }, { status: 429, headers: { "Retry-After": "600" } });
    if (!entry && attempts.size >= 2000) throw new SubmissionError("Applications are busy right now. Please try again shortly.", 503);
    attempts.set(ip, { count: (entry?.count || 0) + 1, until: entry?.until || now + 600_000 });
    const form = await readForm(request);
    const result = schema.safeParse(Object.fromEntries(Object.keys(schema.shape).map(key => [key, form.get(key) ?? ""])));
    if (!result.success) throw new SubmissionError("Please complete all required fields, check your email address and confirm your consent.", 422);
    const fields = result.data;
    const cv = form.get("cv");
    const documents = form.getAll("documents").filter((f): f is File => f instanceof File && f.size > 0);
    if (!(cv instanceof File) || cv.size === 0) throw new SubmissionError("Please attach your CV or résumé.", 422);
    if (documents.length > MAX_SUPPORTING_FILES) throw new SubmissionError("Attach no more than two supporting documents.", 422);
    if (cv.size + documents.reduce((sum, f) => sum + f.size, 0) > MAX_TOTAL_FILE_BYTES) throw new SubmissionError("The combined size of your documents must be 3 MB or smaller.", 422);
    const attachments = await Promise.all([attachment(cv, "CV-"), ...documents.map((f, i) => attachment(f, "Supporting-" + (i + 1) + "-"))]);
    const key = process.env.RESEND_API_KEY;
    if (!key || key.includes("your_api_key")) throw new SubmissionError("Applications cannot be sent right now. Please contact us by email or try again later.", 503);
    const requestId = request.headers.get("x-application-id");
    if (requestId && !/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(requestId)) throw new SubmissionError("Please reload the form and try again.", 422);
    const labels: [string, string][] = [
      ["Name", fields.fullName], ["Email", fields.email], ["Phone", fields.phone],
      ["Country", fields.country], ["City / Town", fields.city], ["Professional role", fields.role],
      ["Subjects / Expertise", fields.subjects], ["Experience", fields.experience],
      ["Highest qualification", fields.qualification], ["Availability", fields.availability],
      ["Delivery preference", fields.deliveryMode], ["Professional profile", fields.profileUrl || "Not provided"],
      ["Professional introduction", fields.message], ["Consent", "Applicant consented to application review and contact."],
    ];
    const resend = new Resend(key);
    const { data, error } = await resend.emails.send({
      from: process.env.APPLICATION_FROM_EMAIL || process.env.CONTACT_FROM_EMAIL || "Platinum Accolades <noreply@platinumaccolades.com>",
      to: ["platinumaccolades@gmail.com"],
      replyTo: fields.email,
      subject: "Professional Network Application — " + fields.fullName,
      text: "PLATINUM ACCOLADES — PROFESSIONAL NETWORK APPLICATION\n\n" + labels.map(([label, value]) => label + ": " + value).join("\n\n") + "\n\nDocuments are attached to this email.",
      attachments,
    }, requestId ? { idempotencyKey: "network-application-" + requestId } : undefined);
    if (error || !data?.id) {
      console.error("Network application delivery failed", error?.name || "no_provider_receipt");
      throw new SubmissionError("We couldn't send your application. Your details are still in the form; please try again or contact us by email.", 502);
    }
    return NextResponse.json({ success: true, message: "Your application has been sent for review. Thank you for your interest in our network." });
  } catch (error) {
    if (error instanceof SubmissionError) return NextResponse.json({ error: error.message }, { status: error.status });
    console.error("Network application failed", error instanceof Error ? error.name : "unknown_error");
    return NextResponse.json({ error: "We couldn't send your application. Please try again or contact us by email." }, { status: 500 });
  }
}
