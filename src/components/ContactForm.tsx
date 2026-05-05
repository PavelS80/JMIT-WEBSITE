"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { useTranslations } from "next-intl";
import { submitContact, type ContactState } from "@/app/actions/contact";

const initialState: ContactState = { status: "idle" };

export function ContactForm() {
  const t = useTranslations("contactForm");
  const [state, action] = useActionState(submitContact, initialState);

  return (
    <form action={action} className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Honeypot — hidden from humans, bots will fill it. */}
      <label
        aria-hidden
        className="absolute left-[-10000px] top-auto w-px h-px overflow-hidden"
      >
        Company
        <input
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
        />
      </label>

      <Field label={`${t("name")} *`} name="name" required autoComplete="name" />
      <Field
        label={`${t("email")} *`}
        name="email"
        type="email"
        required
        autoComplete="email"
      />
      <Field label={t("phone")} name="phone" type="tel" autoComplete="tel" />
      <Field label={t("subject")} name="subject" />

      <div className="md:col-span-2">
        <label className="block text-[12px] font-semibold tracking-[0.18em] uppercase text-ink-muted mb-2">
          {`${t("message")} *`}
        </label>
        <textarea
          name="message"
          required
          rows={6}
          className="w-full rounded-xl border border-line bg-white px-4 py-3 text-[15px] text-ink focus:outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 transition-colors resize-y"
        />
      </div>

      <label className="md:col-span-2 flex items-start gap-3 text-[14px] text-ink-muted leading-relaxed cursor-pointer">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-1 h-4 w-4 rounded border-line text-brand-red focus:ring-brand-red/30"
        />
        <span>{t("consent")} *</span>
      </label>

      <div className="md:col-span-2 flex flex-wrap items-center gap-4 pt-2">
        <SubmitButton label={t("submit")} pendingLabel={t("submitting")} />
        {state.status === "success" && (
          <span
            role="status"
            className="text-[14px] font-semibold text-brand-red"
          >
            {t("success")}
          </span>
        )}
        {state.status === "error" && (
          <span role="alert" className="text-[14px] font-semibold text-brand-red">
            {t(state.errorKey)}
          </span>
        )}
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <label className="block">
      <span className="block text-[12px] font-semibold tracking-[0.18em] uppercase text-ink-muted mb-2">
        {label}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        autoComplete={autoComplete}
        className="w-full rounded-xl border border-line bg-white px-4 py-3 text-[15px] text-ink focus:outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 transition-colors"
      />
    </label>
  );
}

function SubmitButton({
  label,
  pendingLabel,
}: {
  label: string;
  pendingLabel: string;
}) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-red px-6 py-3 text-[15px] font-semibold text-white hover:bg-brand-red-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
    >
      {pending ? pendingLabel : `${label} →`}
    </button>
  );
}
