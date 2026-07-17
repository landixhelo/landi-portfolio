import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(200),
  subject: z.string().trim().max(200).optional().or(z.literal("")),
  service: z.string().trim().min(1).max(100),
  message: z.string().trim().min(10).max(5000),
  terms: z.literal(true),
});

function smtpConfigured(): boolean {
  return Boolean(
    process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS
  );
}

async function sendViaSmtp(payload: {
  name: string;
  email: string;
  subject?: string;
  service: string;
  message: string;
}): Promise<void> {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: (process.env.SMTP_SECURE ?? "false") === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const to = process.env.CONTACT_TO ?? "devbyland@gmail.com";
  const from =
    process.env.CONTACT_FROM ?? "DevByLand <noreply@devbyland.com>";
  const subjectLine =
    payload.subject?.trim() ||
    `Kontakt i ri: ${payload.service} — ${payload.name}`;

  await transporter.sendMail({
    from,
    to,
    replyTo: payload.email,
    subject: subjectLine,
    text: [
      `Emri: ${payload.name}`,
      `Email: ${payload.email}`,
      `Shërbimi: ${payload.service}`,
      `Subjekti: ${payload.subject || "-"}`,
      "",
      "Mesazhi:",
      payload.message,
    ].join("\n"),
  });
}

/** Fallback using existing EmailJS account when SMTP is not configured on Vercel. */
async function sendViaEmailJs(payload: {
  name: string;
  email: string;
  subject?: string;
  service: string;
  message: string;
}): Promise<void> {
  const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      service_id: process.env.EMAILJS_SERVICE_ID ?? "service_gx2u7rr",
      template_id: process.env.EMAILJS_TEMPLATE_ID ?? "template_wul0p0k",
      user_id: process.env.EMAILJS_PUBLIC_KEY ?? "kookDvy7kGgKMqao4",
      template_params: {
        name: payload.name,
        email: payload.email,
        subject: payload.subject || "",
        service: payload.service,
        message: payload.message,
      },
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`EmailJS failed: ${res.status} ${text}`);
  }
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  const parsed = contactSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({
      ok: false,
      error: "Të dhënat e formularit nuk janë valide.",
    });
  }

  const { terms: _terms, ...payload } = parsed.data;

  try {
    if (smtpConfigured()) {
      await sendViaSmtp({
        ...payload,
        subject: payload.subject || undefined,
      });
    } else {
      await sendViaEmailJs({
        ...payload,
        subject: payload.subject || undefined,
      });
    }

    return res.status(200).json({
      ok: true,
      message: "Mesazhi u dërgua me sukses.",
    });
  } catch (err) {
    console.error("Contact API failed:", err);
    return res.status(500).json({
      ok: false,
      error: "Dërgimi dështoi. Provo WhatsApp ose email: devbyland@gmail.com",
    });
  }
}
