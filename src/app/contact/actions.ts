"use server";

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

  // TODO: connect a delivery provider (Resend, EmailJS, Formspree, or a
  // custom API route) here. For now, inquiries are logged server-side.
  console.log("New project inquiry:", values);

  return {
    status: "success",
    message: "Thanks — your project inquiry has been sent. I'll be in touch soon.",
  };
}
