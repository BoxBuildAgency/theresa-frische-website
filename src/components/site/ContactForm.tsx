"use client";

import { useState } from "react";
import Link from "next/link";
import type { Locale, SiteContent } from "@/content/types";
import { Button } from "@/components/ui/Button";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm({
  form,
  privacyHref,
  locale,
}: {
  form: SiteContent["contact"]["form"];
  privacyHref: string;
  locale: Locale;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [serverError, setServerError] = useState<string | null>(null);

  function validate(data: { name: string; email: string; message: string; consent: boolean }) {
    const e: Record<string, string> = {};
    if (!data.name.trim()) e.name = form.validation.name;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) e.email = form.validation.email;
    if (data.message.trim().length < 2) e.message = form.validation.message;
    if (!data.consent) e.consent = form.validation.consent;
    return e;
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setServerError(null);
    const fd = new FormData(event.currentTarget);
    const data = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      message: String(fd.get("message") ?? ""),
      consent: fd.get("consent") === "on",
      contactReference: String(fd.get("contact_reference") ?? ""), // honeypot
      locale,
    };

    const e = validate(data);
    setErrors(e);
    if (Object.keys(e).length > 0) return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      // Success is shown only when the server confirms the message was accepted
      // for delivery. A 2xx alone is not enough, and neither is the absence of a
      // thrown error — the visitor must never be told their enquiry is on its
      // way when it is not.
      const body = (await res.json().catch(() => null)) as { ok?: boolean } | null;
      if (!res.ok || body?.ok !== true) throw new Error("Request failed");

      setStatus("success");
    } catch {
      setStatus("error");
      setServerError(form.errorGeneric);
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-2xl border border-forest/20 bg-forest/5 p-8 text-center"
      >
        <h2 className="font-serif text-2xl text-forest">{form.successTitle}</h2>
        <p className="mx-auto mt-3 max-w-md leading-relaxed text-ink-soft">{form.successBody}</p>
      </div>
    );
  }

  // Split consent label around the {privacy} token to inject a link.
  const [before, after] = form.consentLabel.split("{privacy}");
  const privacyWord = locale === "de" ? "Datenschutzerklärung" : "privacy notice";

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-6">
      {status === "error" && serverError && (
        <p role="alert" className="rounded-xl border border-red-300 bg-red-50 p-4 text-sm text-red-800">
          <strong className="font-medium">{form.errorTitle}</strong> {serverError}
        </p>
      )}

      <Field label={form.nameLabel} error={errors.name} htmlFor="name">
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder={form.namePlaceholder}
          aria-invalid={!!errors.name}
          className={inputClass}
        />
      </Field>

      <Field label={form.emailLabel} error={errors.email} htmlFor="email">
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder={form.emailPlaceholder}
          aria-invalid={!!errors.email}
          className={inputClass}
        />
      </Field>

      <Field label={form.messageLabel} error={errors.message} htmlFor="message">
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder={form.messagePlaceholder}
          aria-invalid={!!errors.message}
          className={`${inputClass} resize-y`}
        />
      </Field>

      {/*
        Honeypot — hidden from real users.

        The field name matters. This was previously `company`, which browsers
        recognise as an autofill token and fill from the saved address profile
        even with autoComplete="off" — so genuine enquiries were being flagged
        as bots and silently discarded. Keep the name outside the autofill
        vocabulary (no company/organisation/address/url/tel/name).
      */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label>
          Leave this field empty
          <input
            name="contact_reference"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            data-1p-ignore
            data-lpignore="true"
          />
        </label>
      </div>

      <div>
        <label className="flex items-start gap-3 text-sm text-ink-soft">
          <input
            name="consent"
            type="checkbox"
            className="mt-0.5 h-4 w-4 shrink-0 accent-forest"
            aria-invalid={!!errors.consent}
          />
          <span>
            {before}
            <Link href={privacyHref} className="text-forest underline underline-offset-2">
              {privacyWord}
            </Link>
            {after}
          </span>
        </label>
        {errors.consent && <p className="mt-1.5 text-xs text-red-700">{errors.consent}</p>}
      </div>

      <Button type="submit" size="lg" disabled={status === "submitting"} className="w-full sm:w-auto">
        {status === "submitting" ? form.submitting : form.submit}
      </Button>
    </form>
  );
}

const inputClass =
  "w-full rounded-xl border border-line-strong bg-cream px-4 py-3 text-sm text-ink placeholder:text-ink-muted/70 transition-colors focus:border-forest focus:outline-none focus-visible:outline-none";

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-ink">
        {label}
      </label>
      {children}
      {error && <p className="mt-1.5 text-xs text-red-700">{error}</p>}
    </div>
  );
}
