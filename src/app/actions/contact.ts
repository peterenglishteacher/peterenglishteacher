"use server";

import type { ContactFormState } from "@/types";
import { contactSchema } from "@/lib/validations";
import { sendContactEmail } from "@/lib/email";

export async function submitContact(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const raw = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    message: formData.get("message"),
  };

  const result = contactSchema.safeParse(raw);

  if (!result.success) {
    return {
      success: false,
      message: "Validation failed",
      errors: result.error.flatten().fieldErrors,
    };
  }

  try {
    await sendContactEmail(result.data);
    return {
      success: true,
      message: "Message sent successfully",
    };
  } catch (error) {
    console.error("Failed to send email:", error);
    return {
      success: false,
      message: "Failed to send message. Please try again.",
    };
  }
}
