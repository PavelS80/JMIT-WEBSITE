"use server";

import { Resend } from "resend";
import { site } from "@/lib/site";

export type ContactState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; errorKey: "errorRequired" | "errorEmail" | "errorConsent" | "errorGeneric" };

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const escape = (s: string) =>
  s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!)
  );

export async function submitContact(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const subject = String(formData.get("subject") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const consent = formData.get("consent") === "on";
  const honeypot = String(formData.get("company") ?? "").trim();

  if (honeypot) return { status: "success" };
  if (!name || !email || !message) {
    return { status: "error", errorKey: "errorRequired" };
  }
  if (!EMAIL.test(email)) {
    return { status: "error", errorKey: "errorEmail" };
  }
  if (!consent) {
    return { status: "error", errorKey: "errorConsent" };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO ?? site.emails.main;
  const from = process.env.CONTACT_FROM ?? "J.M.I.T. <noreply@jmit.cz>";

  if (!apiKey) {
    console.log("[jmit:contact] (no RESEND_API_KEY — logging only)", {
      name,
      email,
      phone,
      subject,
      message,
    });
    return { status: "success" };
  }

  try {
    const resend = new Resend(apiKey);
    const lines = [
      `Jméno: ${name}`,
      `E-mail: ${email}`,
      phone && `Telefon: ${phone}`,
      subject && `Předmět: ${subject}`,
      "",
      message,
    ].filter(Boolean);

    const html = `
      <table style="font-family:system-ui,sans-serif;font-size:14px;color:#101624;border-collapse:collapse">
        <tr><td style="padding:4px 12px 4px 0;color:#5b6478">Jméno</td><td>${escape(name)}</td></tr>
        <tr><td style="padding:4px 12px 4px 0;color:#5b6478">E-mail</td><td><a href="mailto:${escape(email)}">${escape(email)}</a></td></tr>
        ${phone ? `<tr><td style="padding:4px 12px 4px 0;color:#5b6478">Telefon</td><td>${escape(phone)}</td></tr>` : ""}
        ${subject ? `<tr><td style="padding:4px 12px 4px 0;color:#5b6478">Předmět</td><td>${escape(subject)}</td></tr>` : ""}
        <tr><td colspan="2" style="padding:16px 0 0 0;white-space:pre-wrap">${escape(message)}</td></tr>
      </table>
    `;

    const result = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: subject ? `[Web] ${subject}` : `[Web] Poptávka od ${name}`,
      text: lines.join("\n"),
      html,
    });

    if (result.error) {
      console.error("[jmit:contact] resend error", result.error);
      return { status: "error", errorKey: "errorGeneric" };
    }
    return { status: "success" };
  } catch (e) {
    console.error("[jmit:contact] exception", e);
    return { status: "error", errorKey: "errorGeneric" };
  }
}
