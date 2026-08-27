"use server";

import { Resend } from "resend";

export interface ContactFormState {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Record<string, string>;
}

const REQUIRED_FIELDS = ["name", "email", "need", "volume", "description"] as const;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitInquiry(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const fieldErrors: Record<string, string> = {};

  const values = {
    name: String(formData.get("name") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    company: String(formData.get("company") ?? "").trim(),
    need: String(formData.get("need") ?? "").trim(),
    volume: String(formData.get("volume") ?? "").trim(),
    description: String(formData.get("description") ?? "").trim(),
    budget: String(formData.get("budget") ?? "").trim(),
  };

  for (const field of REQUIRED_FIELDS) {
    if (!values[field]) {
      fieldErrors[field] = "This field is required.";
    }
  }

  if (values.email && !EMAIL_RE.test(values.email)) {
    fieldErrors.email = "Enter a valid email address.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "Please fix the highlighted fields and try again.",
      fieldErrors,
    };
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const { error } = await resend.emails.send({
    from: "Portfolio Contact <onboarding@resend.dev>",
    to: process.env.CONTACT_TO_EMAIL!,
    replyTo: values.email,
    subject: `New project inquiry from ${values.name}`,
    text: [
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      `Company: ${values.company || "-"}`,
      `Need: ${values.need}`,
      `Volume: ${values.volume}`,
      `Budget: ${values.budget || "-"}`,
      "",
      "Description:",
      values.description,
    ].join("\n"),
  });

  if (error) {
    console.error("Failed to send project inquiry:", error);
    return {
      status: "error",
      message: "Something went wrong sending your inquiry. Please try again.",
    };
  }

  return {
    status: "success",
    message: "Thanks — your project inquiry has been sent. I'll be in touch soon.",
  };
}
