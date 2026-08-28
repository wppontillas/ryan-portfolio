"use server";

import nodemailer from "nodemailer";

export interface ContactFormState {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Record<string, string>;
}

const REQUIRED_FIELDS = ["name", "email", "need", "volume", "description"] as const;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildInquiryEmailHtml(values: {
  name: string;
  email: string;
  company: string;
  need: string;
  volume: string;
  description: string;
  budget: string;
}): string {
  const row = (label: string, value: string) => `
    <tr>
      <td style="padding:14px 0;border-bottom:1px solid #26262a;">
        <p style="margin:0 0 4px;font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:#a1a1aa;">${label}</p>
        <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:15px;color:#ffffff;">${value}</p>
      </td>
    </tr>`;

  return `
<!doctype html>
<html>
  <body style="margin:0;padding:0;background-color:#0b0b0d;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#0b0b0d;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background-color:#17171a;border:1px solid #26262a;border-radius:16px;overflow:hidden;">
            <tr>
              <td style="padding:24px 28px;border-bottom:1px solid #26262a;">
                <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:12px;font-weight:700;letter-spacing:3px;color:#ff8a1e;">RYN</p>
                <p style="margin:6px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:20px;font-weight:700;color:#ffffff;">New Project Inquiry</p>
              </td>
            </tr>
            <tr>
              <td style="padding:8px 28px 4px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  ${row("Name", escapeHtml(values.name))}
                  ${row("Email", `<a href="mailto:${escapeHtml(values.email)}" style="color:#ff8a1e;text-decoration:none;">${escapeHtml(values.email)}</a>`)}
                  ${row("Company", escapeHtml(values.company || "-"))}
                  ${row("Need", escapeHtml(values.need))}
                  ${row("Volume", escapeHtml(values.volume))}
                  ${row("Budget", escapeHtml(values.budget || "-"))}
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:20px 28px 28px;">
                <p style="margin:0 0 8px;font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:#a1a1aa;">Description</p>
                <p style="margin:0;padding:16px;background-color:#0b0b0d;border:1px solid #26262a;border-radius:10px;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.6;color:#e4e4e7;white-space:pre-wrap;">${escapeHtml(values.description)}</p>
              </td>
            </tr>
            <tr>
              <td style="padding:16px 28px;background-color:#111113;">
                <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#71717a;">Sent from the portfolio contact form.</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

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

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: `Portfolio Contact <${process.env.GMAIL_USER}>`,
      to: process.env.CONTACT_TO_EMAIL!,
      replyTo: values.email,
      subject: `New project inquiry from ${values.name}`,
      html: buildInquiryEmailHtml(values),
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
  } catch (error) {
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
