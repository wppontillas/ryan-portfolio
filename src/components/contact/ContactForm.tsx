"use client";

import { useActionState, useEffect, useState } from "react";
import { useFormStatus } from "react-dom";
import { submitInquiry, type ContactFormState } from "@/app/contact/actions";

const initialState: ContactFormState = { status: "idle" };

const needOptions = [
  "Speedramp Editing",
  "Motion Graphics",
  "Cinematic Editing",
  "Reels & Short-Form",
  "Other",
];

const volumeOptions = ["1–4", "5–10", "10–20", "20+", "One-time project"];

const fieldClasses =
  "w-full rounded-xl border border-border bg-bg-secondary px-4 py-3 text-sm text-fg placeholder:text-fg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-3 text-sm font-medium text-accent-fg transition-colors hover:bg-accent/90 disabled:opacity-60"
    >
      {pending ? "Sending..." : "Send Inquiry"}
    </button>
  );
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p role="alert" className="text-sm text-red-400">
      {message}
    </p>
  );
}

function SuccessModal({
  message,
  onClose,
}: {
  message: string;
  onClose: () => void;
}) {
  useEffect(() => {
    const timer = setTimeout(onClose, 6000);
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Inquiry sent"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative flex w-full max-w-md flex-col items-center gap-4 rounded-2xl border border-border bg-bg px-6 py-12 text-center shadow-2xl"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-fg-secondary transition-colors hover:bg-bg-secondary hover:text-fg"
        >
          &times;
        </button>
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-fg">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M5 13l4 4L19 7"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <h3 className="font-display text-2xl font-medium text-fg">
          Inquiry Sent
        </h3>
        <p className="max-w-sm text-base text-fg-secondary">{message}</p>
        <button
          type="button"
          onClick={onClose}
          className="mt-2 rounded-full bg-accent px-6 py-2.5 text-sm font-medium text-accent-fg transition-colors hover:bg-accent/90"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export function ContactForm() {
  const [state, formAction] = useActionState(submitInquiry, initialState);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formKey, setFormKey] = useState(0);
  const errors = state.fieldErrors ?? {};

  useEffect(() => {
    if (state.status === "success") setShowSuccess(true);
  }, [state]);

  const closeSuccess = () => {
    setShowSuccess(false);
    setFormKey((k) => k + 1);
  };

  return (
    <>
      {showSuccess && (
        <SuccessModal
          message={state.message ?? "Thanks for reaching out."}
          onClose={closeSuccess}
        />
      )}
      <form
        key={formKey}
        action={formAction}
        noValidate
        className="flex flex-col gap-6"
      >
      {state.status === "error" && state.message && (
        <div
          role="status"
          className="rounded-xl border border-red-400/40 bg-red-400/10 px-4 py-3 text-sm text-fg"
        >
          {state.message}
        </div>
      )}

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-medium text-fg">
            Name <span className="text-accent">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={fieldClasses}
          />
          {errors.name && <FieldError message={errors.name} />}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium text-fg">
            Email <span className="text-accent">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={fieldClasses}
          />
          {errors.email && <FieldError message={errors.email} />}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="company" className="text-sm font-medium text-fg">
          Company / Channel
        </label>
        <input id="company" name="company" type="text" className={fieldClasses} />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="need" className="text-sm font-medium text-fg">
            What do you need? <span className="text-accent">*</span>
          </label>
          <select
            id="need"
            name="need"
            required
            defaultValue=""
            aria-invalid={Boolean(errors.need)}
            aria-describedby={errors.need ? "need-error" : undefined}
            className={fieldClasses}
          >
            <option value="" disabled>
              Select a service
            </option>
            {needOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          {errors.need && <FieldError message={errors.need} />}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="volume" className="text-sm font-medium text-fg">
            Estimated videos per month <span className="text-accent">*</span>
          </label>
          <select
            id="volume"
            name="volume"
            required
            defaultValue=""
            aria-invalid={Boolean(errors.volume)}
            aria-describedby={errors.volume ? "volume-error" : undefined}
            className={fieldClasses}
          >
            <option value="" disabled>
              Select a range
            </option>
            {volumeOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          {errors.volume && <FieldError message={errors.volume} />}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="description" className="text-sm font-medium text-fg">
          Project Description <span className="text-accent">*</span>
        </label>
        <textarea
          id="description"
          name="description"
          required
          rows={5}
          aria-invalid={Boolean(errors.description)}
          aria-describedby={errors.description ? "description-error" : undefined}
          className={fieldClasses}
        />
        {errors.description && <FieldError message={errors.description} />}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="budget" className="text-sm font-medium text-fg">
          Budget
        </label>
        <input
          id="budget"
          name="budget"
          type="text"
          placeholder="Optional"
          className={fieldClasses}
        />
      </div>

        <SubmitButton />
      </form>
    </>
  );
}
