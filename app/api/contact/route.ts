import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations";

// Rate limiting (basic in-memory, use Redis in production)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 5;
const WINDOW_MS = 60_000; // 1 minute

function getRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + WINDOW_MS });
    return true;
  }

  if (entry.count >= RATE_LIMIT) return false;
  entry.count++;
  return true;
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0] ||
      request.headers.get("x-real-ip") ||
      "unknown";

    if (!getRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    // Parse and validate body
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
    }

    const validation = contactFormSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { error: "Validation failed", details: validation.error.flatten() },
        { status: 422 }
      );
    }

    const { fullName, email, phone, service, message } = validation.data;

    // Send email via Resend (configure RESEND_API_KEY in .env.local)
    const resendApiKey = process.env.RESEND_API_KEY;

    if (resendApiKey) {
      try {
        const { Resend } = await import("resend");
        const resend = new Resend(resendApiKey);

        await resend.emails.send({
          from: "EduConsult Pro <noreply@edconsultpro.com>",
          to: [process.env.CONTACT_EMAIL || "info@edconsultpro.com"],
          subject: `New Consultation Request from ${fullName}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <div style="background: linear-gradient(135deg, #0a1628, #1e3a8a); padding: 32px; border-radius: 12px 12px 0 0;">
                <h1 style="color: white; margin: 0; font-size: 24px;">New Consultation Request</h1>
                <p style="color: rgba(255,255,255,0.7); margin: 8px 0 0;">EduConsult Pro — Educational Consulting</p>
              </div>
              <div style="background: #f8fafc; padding: 32px; border-radius: 0 0 12px 12px; border: 1px solid #e2e8f0;">
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #1e293b; width: 140px;">Name</td>
                    <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #475569;">${fullName}</td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #1e293b;">Email</td>
                    <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #475569;">${email}</td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #1e293b;">Phone</td>
                    <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #475569;">${phone}</td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #1e293b;">Service</td>
                    <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #475569;">${service}</td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 0; font-weight: bold; color: #1e293b; vertical-align: top;">Message</td>
                    <td style="padding: 12px 0; color: #475569; line-height: 1.6;">${message.replace(/\n/g, "<br>")}</td>
                  </tr>
                </table>
                <div style="margin-top: 24px; padding: 16px; background: #eff6ff; border-radius: 8px; border: 1px solid #bfdbfe;">
                  <p style="margin: 0; color: #1d4ed8; font-size: 14px;">
                    Reply to this email to respond directly to ${fullName} at ${email}
                  </p>
                </div>
              </div>
            </div>
          `,
          replyTo: email,
        });

        // Send confirmation to the client
        await resend.emails.send({
          from: "EduConsult Pro <noreply@edconsultpro.com>",
          to: [email],
          subject: "We received your consultation request — EduConsult Pro",
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <div style="background: linear-gradient(135deg, #0a1628, #1e3a8a); padding: 40px; border-radius: 12px 12px 0 0; text-align: center;">
                <h1 style="color: white; margin: 0 0 8px; font-size: 28px;">Thank You, ${fullName}!</h1>
                <p style="color: rgba(255,255,255,0.7); margin: 0;">We've received your consultation request</p>
              </div>
              <div style="background: #f8fafc; padding: 32px; border-radius: 0 0 12px 12px; border: 1px solid #e2e8f0;">
                <p style="color: #475569; line-height: 1.7;">
                  Thank you for reaching out to EduConsult Pro. We're excited to learn more about your educational goals and how we can help you achieve them.
                </p>
                <p style="color: #475569; line-height: 1.7;">
                  One of our expert consultants will contact you within <strong style="color: #1e293b;">24 hours</strong> to schedule your free discovery call.
                </p>
                <div style="background: #eff6ff; border-left: 4px solid #2563eb; padding: 16px; border-radius: 0 8px 8px 0; margin: 24px 0;">
                  <p style="margin: 0; color: #1d4ed8; font-weight: bold;">Your Request Summary</p>
                  <p style="margin: 8px 0 0; color: #475569;">Service: ${service}</p>
                </div>
                <p style="color: #475569; margin-top: 24px;">
                  In the meantime, feel free to explore our <a href="#" style="color: #2563eb;">blog</a> for educational insights.
                </p>
                <p style="color: #94a3b8; font-size: 14px; margin-top: 32px;">
                  EduConsult Pro | 123 Education Drive, Suite 500, New York, NY 10001<br>
                  <a href="tel:+12345678900" style="color: #94a3b8;">+1 (234) 567-8900</a> |
                  <a href="mailto:info@edconsultpro.com" style="color: #94a3b8;">info@edconsultpro.com</a>
                </p>
              </div>
            </div>
          `,
        });
      } catch (emailError) {
        // Log email failure but don't fail the request
        console.error("Email sending failed:", emailError);
      }
    }

    return NextResponse.json(
      { success: true, message: "Your message has been received. We'll be in touch soon!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again." },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ status: "ok" });
}
