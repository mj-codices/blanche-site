// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'mjwhite.dev@gmail.com',
      subject: `New message from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}

// pages/api/contact.ts

import type { NextApiRequest, NextApiResponse } from "next";

export async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const { name, email, message, token } = req.body;

  if (!token) {
    return res.status(400).json({ error: "Missing reCAPTCHA token" });
  }

  const secret = process.env.RECAPTCHA_SECRET_KEY; // ✅ Add this to your .env
  const verifyURL = `https://www.google.com/recaptcha/api/siteverify`;

  const params = new URLSearchParams();
  params.append("secret", secret!);
  params.append("response", token);

  const verifyRes = await fetch(verifyURL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params,
  });

  const verifyData = await verifyRes.json();

  if (!verifyData.success || verifyData.score < 0.5) {
    return res.status(400).json({ error: "reCAPTCHA verification failed" });
  }

  // ✅ Continue with email sending, DB saving, etc.
  return res.status(200).json({ success: true });
}
