"use server";

import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

if (
  !process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
  !process.env.NEXT_PUBLIC_SUPABASE_URL
) {
  throw new Error(`Please set the required environmental variables.`);
}

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
);

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const subject = formData.get("subject") as string; // Fixed trailing space
  const message = formData.get("message") as string;

  if (!name || !email || !subject || !message) {
    return {
      success: false,
      error: "Please fill in all required fields.",
    };
  }

  const { data, error: supabaseError } = await supabase
    .from("contact_messages")
    .insert({
      name,
      email,
      subject,
      message,
    })
    .select()
    .single();

  if (supabaseError) {
    console.error("Error inserting contact message:", supabaseError);
    return { success: false, error: supabaseError.message };
  }

  await Promise.allSettled([
    fetch(process.env.DISCORD_WEBHOOK_URL!, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        embeds: [
          {
            title: "📬 Portfolio Contact Message",
            color: 0x6366f1,
            fields: [
              { name: "Name", value: name, inline: true },
              { name: "Email", value: email, inline: true },
              { name: "Subject", value: subject },
              { name: "Message", value: message },
            ],
            timestamp: new Date().toISOString(),
          },
        ],
      }),
    }),

    resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: process.env.NOTIFICATION_EMAIL_ADDRESS!,
      subject: `[Portfolio] ${subject}`,
      html: `
        <h2>New Message from ${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p style="color: #01023b;"><strong>Message:</strong></p>
        <blockquote style="background: #f4f4f5; padding: 12px; border-left: 4px solid #6366f1;">
          ${message}
        </blockquote>
      `,
    }),
  ]);

  return { success: true };
}
