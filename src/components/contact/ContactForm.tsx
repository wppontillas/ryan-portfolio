"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitInquiry, type ContactFormState } from "@/app/contact/actions";

const initialState: ContactFormState = { status: "idle" };

const needOptions = [
  "Short-Form Editing",
  "YouTube Editing",
  "Podcast Editing",
  "Commercial / Promotional Video",
  "Creative VA Support",
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
      {pending ? "Sending..." : "Start a Project"}
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

export function ContactForm() {
  const [state, formAction] = useActionState(submitInquiry, initialState);
  const errors = state.fieldErrors ?? {};

  return (
    <form action={formAction} noValidate className="flex flex-col gap-6">
      {state.status !== "idle" && state.message && (
        <div
          role="status"
          className={`rounded-xl border px-4 py-3 text-sm ${
            state.status === "success"
              ? "border-accent/40 bg-accent/10 text-fg"
              : "border-red-400/40 bg-red-400/10 text-fg"
          }`}
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
  );
}
