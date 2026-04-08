import { Resend } from "resend";
import type { ContactSchema } from "./validations";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(data: ContactSchema) {
  const { name, email, phone, message } = data;

  await resend.emails.send({
    from: process.env.EMAIL_FROM ?? "onboarding@resend.dev",
    to: process.env.EMAIL_TO ?? "peterbrown1978.pb@gmail.com",
    subject: `New contact from ${name} — peterenglishteacher.com`,
    replyTo: email,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
      `\nMessage:\n${message}`,
    ]
      .filter(Boolean)
      .join("\n"),
  });
}
