"use client";
import { useRef, useState, type FormEvent } from "react";
import { ArrowUpRight, Upload, CheckCircle2, LoaderCircle, AlertCircle, FileText } from "lucide-react";
import { applicationRoles, MAX_FILE_BYTES, MAX_TOTAL_FILE_BYTES, MAX_SUPPORTING_FILES, ALLOWED_FILE_EXTENSIONS } from "@/lib/network-application";

export default function NetworkApplicationForm() {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [fileNames, setFileNames] = useState<{ cv: string; documents: string[] }>({ cv: "", documents: [] });
  const requestId = useRef<string | null>(null);
  const notice = useRef<HTMLDivElement>(null);
  function showError(message: string) { setError(message); requestAnimationFrame(() => notice.current?.focus()); }
  function checkDocuments(input: HTMLInputElement) {
    const files = Array.from(input.files || []);
    const max = input.name === "cv" ? 1 : MAX_SUPPORTING_FILES;
    const invalid = files.some(f => !ALLOWED_FILE_EXTENSIONS.includes(f.name.split(".").pop()?.toLowerCase() || "") || f.size === 0 || f.size > MAX_FILE_BYTES);
    if (files.length > max || invalid) {
      input.value = "";
      setFileNames(prev => ({ ...prev, [input.name]: input.name === "cv" ? "" : [] }));
      showError("Use PDF, DOCX, JPG or PNG files, up to 2 MB each. You may attach a CV and up to two supporting documents.");
      return;
    }
    setError("");
    setFileNames(prev => ({ ...prev, [input.name]: input.name === "cv" ? files[0]?.name || "" : files.map(f => f.name) }));
  }
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    const files = [data.get("cv"), ...data.getAll("documents")].filter((f): f is File => f instanceof File && f.size > 0);
    if (files.reduce((sum, f) => sum + f.size, 0) > MAX_TOTAL_FILE_BYTES) {
      showError("Your documents exceed 3 MB in total. Please reduce their size and try again.");
      return;
    }
    setError(""); setPending(true);
    requestId.current ||= crypto.randomUUID();
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 40_000);
    try {
      const response = await fetch("/api/network-application", { method: "POST", body: data, headers: { "x-application-id": requestId.current }, signal: controller.signal });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error(result.error || "We couldn't send your application. Please try again.");
      setSuccess(result.message);
      form.reset(); setFileNames({ cv: "", documents: [] }); requestId.current = null;
      requestAnimationFrame(() => notice.current?.focus());
    } catch (e) {
      showError(e instanceof Error && e.name !== "AbortError" ? e.message : "We couldn't confirm delivery. Your details are still here. Please retry, or contact us by email.");
    } finally { clearTimeout(timeout); setPending(false); }
  }
  if (success) return <div id="application-form" className="application-success" ref={notice} tabIndex={-1} role="status"><CheckCircle2 size={40} /><h2>Thank you for applying.</h2><p>{success}</p><button className="action-text" onClick={() => setSuccess("")}>Submit another application <ArrowUpRight size={16} /></button></div>;
  return (
    <form id="application-form" method="post" action="/api/network-application" className="network-application-form" onSubmit={submit} onChange={() => { requestId.current = null; }} aria-busy={pending} encType="multipart/form-data">
      <div className="application-form-heading"><p className="eyebrow">Your application</p><h2>Let&apos;s get to know you.</h2><p>Fields marked * are required.</p></div>
      <div ref={notice} tabIndex={-1} role={error ? "alert" : undefined} className={error ? "application-error" : "application-notice-empty"}>{error && <><AlertCircle size={20} /><span>{error} <a href="mailto:platinumaccolades@gmail.com">Email us for help</a>.</span></>}</div>
      <fieldset disabled={pending}><legend><span>01</span> Personal details</legend>
        <div className="application-fields">
          <label>Full name *<input name="fullName" autoComplete="name" required minLength={2} maxLength={120} /></label>
          <label>Email address *<input name="email" type="email" autoComplete="email" required maxLength={254} /></label>
          <label>Phone / WhatsApp number *<input name="phone" type="tel" autoComplete="tel" required minLength={7} maxLength={40} placeholder="+267 ..." /></label>
          <label>Country *<input name="country" autoComplete="country-name" required minLength={2} maxLength={80} /></label>
          <label>City / Town *<input name="city" autoComplete="address-level2" required minLength={2} maxLength={80} /></label>
          <label>Professional profile / Portfolio<input name="profileUrl" type="url" maxLength={500} placeholder="https://..." /></label>
        </div>
      </fieldset>
      <fieldset disabled={pending}><legend><span>02</span> Your expertise</legend>
        <div className="application-fields">
          <label>Professional role *<select name="role" required defaultValue=""><option value="" disabled>Select your role</option>{applicationRoles.map(role => <option key={role}>{role}</option>)}</select></label>
          <label>Years of experience *<select name="experience" required defaultValue=""><option value="" disabled>Select experience</option>{["0–2 years", "3–5 years", "6–10 years", "Over 10 years"].map(v => <option key={v}>{v}</option>)}</select></label>
          <label className="application-field-wide">Subjects / Areas of expertise *<input name="subjects" required minLength={3} maxLength={500} placeholder="For example: IGCSE English, research support, quality assurance" /></label>
          <label className="application-field-wide">Highest qualification / Professional certification *<input name="qualification" required minLength={2} maxLength={200} /></label>
          <label>Availability *<select name="availability" required defaultValue=""><option value="" disabled>Select availability</option>{["Part-time", "Full-time", "Project-based", "Flexible"].map(v => <option key={v}>{v}</option>)}</select></label>
          <label>Preferred delivery *<select name="deliveryMode" required defaultValue=""><option value="" disabled>Select preference</option>{["Online", "In person", "Both"].map(v => <option key={v}>{v}</option>)}</select></label>
          <label className="application-field-wide">Tell us about your experience and the contribution you could make *<textarea name="message" required minLength={20} maxLength={3000} rows={5} /></label>
        </div>
      </fieldset>
      <fieldset disabled={pending}><legend><span>03</span> Your documents</legend>
        <p className="application-document-help">PDF, DOCX, JPG or PNG. Up to 2 MB per file and 3 MB combined. Attach your CV and, optionally, up to two qualifications or supporting documents.</p>
        <div className="application-uploads">
          <label className="application-upload"><Upload size={26} /><strong>CV / Résumé *</strong><span>Choose one document</span><input name="cv" type="file" required accept=".pdf,.docx,.jpg,.jpeg,.png" onChange={e => checkDocuments(e.currentTarget)} />{fileNames.cv && <span className="application-selected-file"><FileText size={14} />{fileNames.cv}</span>}</label>
          <label className="application-upload"><Upload size={26} /><strong>Supporting documents</strong><span>Qualifications, certificates or portfolio</span><input name="documents" type="file" multiple accept=".pdf,.docx,.jpg,.jpeg,.png" onChange={e => checkDocuments(e.currentTarget)} />{fileNames.documents.map(name => <span className="application-selected-file" key={name}><FileText size={14} />{name}</span>)}</label>
        </div>
      </fieldset>
      <div className="application-honeypot" aria-hidden="true"><label>Leave this field empty<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
      <label className="application-consent"><input name="consent" type="checkbox" required disabled={pending} /><span>I confirm that the information I have provided is accurate and agree that Platinum Accolades may review my application and documents and contact me about professional network opportunities. *</span></label>
      <button type="submit" className="action-gold application-submit" disabled={pending}>{pending ? <><LoaderCircle size={18} className="application-spinner" />Sending application...</> : <>Submit application <ArrowUpRight size={18} /></>}</button>
    </form>
  );
}
