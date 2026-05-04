"use server";

export type ContactState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; errorKey: "errorRequired" | "errorEmail" | "errorConsent" | "errorGeneric" };

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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

  try {
    // TODO: wire to email provider (Resend / Postmark / SES) when API key is configured.
    // For now, log on the server so the dispatcher can verify the form is reaching the backend.
    console.log("[jmit:contact]", { name, email, phone, subject, message });
    return { status: "success" };
  } catch {
    return { status: "error", errorKey: "errorGeneric" };
  }
}
