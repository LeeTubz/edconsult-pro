const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const ts = require("typescript");
const path = require("node:path");
function compile(file, customRequire = require) {
  const code = ts.transpileModule(fs.readFileSync(path.join(__dirname, "..", file), "utf8"), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, esModuleInterop: true } }).outputText;
  const module = { exports: {} };
  new Function("require", "module", "exports", code)(customRequire, module, module.exports);
  return module.exports;
}
const shared = compile("lib/network-application.ts");
function setup(mode = "success") {
  const sent = [];
  process.env.RESEND_API_KEY = "re_test_never_sent";
  process.env.APPLICATION_EMAIL = "applications@example.com";
  process.env.APPLICATION_FROM_EMAIL = "Team <apply@example.com>";
  process.env.NEXT_PUBLIC_SITE_URL = "https://platinumaccolades.co.bw";
  class Resend {
    emails = { send: async (payload, options) => {
      sent.push({ payload, options });
      if (mode === "throw") throw new Error("mock connection failure");
      return mode === "error" ? { data: null, error: { name: "validation_error" } } : { data: { id: "mock-provider-receipt" }, error: null };
    } };
  }
  const api = compile("app/api/network-application/route.ts", name => name === "resend" ? { Resend } : name === "@/lib/network-application" ? shared : require(name));
  return { ...api, sent };
}
let ip = 0;
function form(changes = {}) {
  const data = new FormData();
  const fields = { fullName: "Application Test", email: "applicant@example.com", phone: "+267 77000000", country: "Botswana", city: "Gaborone", role: "Teacher / Tutor", subjects: "IGCSE English", experience: "3–5 years", qualification: "Bachelor of Education", availability: "Part-time", deliveryMode: "Both", profileUrl: "", message: "I have classroom and online teaching experience.", consent: "on", website: "", ...changes };
  for (const [key, value] of Object.entries(fields)) if (value !== null) data.set(key, value);
  data.set("cv", new File(["%PDF-1.4\nTest CV"], "cv.pdf", { type: "application/pdf" }));
  return data;
}
function request(body, headers = {}) {
  const { NextRequest } = require("next/server");
  return new NextRequest("https://platinumaccolades.co.bw/api/network-application", { method: "POST", body, headers: { "x-forwarded-for": "test-ip-" + (++ip), ...headers } });
}
test("sends all details and exact attachment bytes to the Platinum Accolades inbox", async () => {
  const api = setup(); const data = form();
  data.append("documents", new File(["%PDF-1.4\nCertificate"], "qualification.pdf"));
  data.append("documents", new File([new Uint8Array([137,80,78,71,13,10,26,10,0])], "certificate.png"));
  const id = "e755009b-2097-48b4-9448-46292244e38e";
  const response = await api.POST(request(data, { "x-application-id": id }));
  assert.equal(response.status, 200);
  assert.equal(api.sent.length, 1);
  const { payload, options } = api.sent[0];
  assert.deepEqual(payload.to, ["platinumaccolades@gmail.com"]);
  assert.equal(payload.replyTo, "applicant@example.com");
  assert.equal(payload.from, "Team <apply@example.com>");
  assert.equal(payload.attachments.length, 3);
  assert.equal(payload.attachments[0].content.toString(), "%PDF-1.4\nTest CV");
  assert.equal(payload.attachments[1].filename, "Supporting-1-qualification.pdf");
  assert.match(payload.text, /Subjects \/ Expertise: IGCSE English/);
  assert.match(payload.text, /Highest qualification: Bachelor of Education/);
  assert.equal(options.idempotencyKey, "network-application-" + id);
  assert.equal(payload.html, undefined);
});
for (const [name, changes] of [["missing consent", { consent: null }], ["invalid email", { email: "not-an-email" }], ["invalid phone", { phone: "......." }], ["unrecognised role", { role: "Other" }], ["honeypot filled", { website: "spam" }], ["invalid professional URL", { profileUrl: "javascript:alert(1)" }], ["header injection in name", { fullName: "Test\r\nInjected: header" }]]) {
  test("rejects " + name, async () => { const api = setup(); assert.equal((await api.POST(request(form(changes)))).status, 422); assert.equal(api.sent.length, 0); });
}
test("requires a CV", async () => { const api = setup(); const data = form(); data.delete("cv"); assert.equal((await api.POST(request(data))).status, 422); assert.equal(api.sent.length, 0); });
test("rejects a file disguised as a PDF", async () => { const api = setup(); const data = form(); data.set("cv", new File(["<script>bad</script>"], "cv.pdf")); assert.equal((await api.POST(request(data))).status, 422); assert.equal(api.sent.length, 0); });
test("rejects oversized individual attachments", async () => { const api = setup(); const data = form(); data.set("cv", new File([new Uint8Array(2 * 1024 * 1024 + 1)], "cv.pdf")); assert.equal((await api.POST(request(data))).status, 422); });
test("rejects documents over the combined upload limit", async () => { const api = setup(); const data = form(); const content = Buffer.alloc(1700000, 32); content.write("%PDF-"); data.set("cv", new File([content], "cv.pdf")); data.append("documents", new File([content], "certificate.pdf")); assert.equal((await api.POST(request(data))).status, 422); });
test("rejects more than two supporting documents", async () => { const api = setup(); const data = form(); for (let i = 0; i < 3; i++) data.append("documents", new File(["%PDF-1.4"], "document.pdf")); assert.equal((await api.POST(request(data))).status, 422); });
test("rejects large request bodies before parsing multipart data", async () => { const api = setup(); const response = await api.POST(request("oversized", { "content-type": "multipart/form-data; boundary=test", "content-length": String(5 * 1024 * 1024) })); assert.equal(response.status, 413); assert.equal(api.sent.length, 0); });
test("bounds bodies without a Content-Length header", async () => { const api = setup(); const response = await api.POST(request(new Uint8Array(4 * 1024 * 1024 + 1), { "content-type": "multipart/form-data; boundary=test" })); assert.equal(response.status, 413); assert.equal(api.sent.length, 0); });
test("rejects requests from an unrelated website", async () => { const api = setup(); assert.equal((await api.POST(request(form(), { origin: "https://unrelated.example" }))).status, 403); assert.equal(api.sent.length, 0); });
test("does not claim success when email is unconfigured", async () => { const api = setup(); delete process.env.RESEND_API_KEY; const response = await api.POST(request(form())); assert.equal(response.status, 503); assert.equal((await response.json()).success, undefined); assert.equal(api.sent.length, 0); });
for (const [mode, status] of [["error", 502], ["throw", 500]]) test("reports email provider " + mode + " without success", async () => { const api = setup(mode); const response = await api.POST(request(form())); assert.equal(response.status, status); assert.equal((await response.json()).success, undefined); });
test("limits repeated attempts", async () => { const api = setup(); for (let i = 0; i < 5; i++) assert.equal((await api.POST(request(form(), { "x-forwarded-for": "rate-test" }))).status, 200); const response = await api.POST(request(form(), { "x-forwarded-for": "rate-test" })); assert.equal(response.status, 429); assert.equal(response.headers.get("retry-after"), "600"); assert.equal(api.sent.length, 5); });
