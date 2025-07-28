// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

// Optional: set runtime to Node.js to avoid edge issues
export const runtime = "nodejs"; 

export async function POST(req: Request) {
const allowedOrigin = req.headers.get("origin") ?? "*";

const corsHeaders = {
  "Access-Control-Allow-Origin": allowedOrigin,
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};
   console.log("📩 Backend route hit");
  try {
    const { name, email, message, token } = await req.json();
    console.log("Token received on backend:", token);

    // 🛡 Check reCAPTCHA token
    if (!token) {
      return NextResponse.json(
        { error: "Missing reCAPTCHA token" },
        { status: 400,  headers: corsHeaders }
      );
    }

    // 🛡 Check environment variables
    const secret = process.env.RECAPTCHA_SECRET_KEY;
    const resendKey = process.env.VERCEL_PRODUCTION_KEY;

    if (!secret) {
      console.error("Missing RECAPTCHA_SECRET_KEY");
      return NextResponse.json(
        { error: "Missing reCAPTCHA secret" },
        { status: 500,  headers: corsHeaders }
      );
    }

    if (!resendKey) {
      console.error("Missing VERCEL_PRODUCTION_KEY");
      return NextResponse.json(
        { error: "Missing Resend API key" },
        { status: 500,  headers: corsHeaders }
      );
    }

    // ✅ Verify reCAPTCHA
    const verifyURL = "https://www.google.com/recaptcha/api/siteverify";
    const params = new URLSearchParams();
    params.append("secret", secret);
    params.append("response", token);

    const verifyRes = await fetch(verifyURL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params,
    });

    const verifyData = await verifyRes.json();
    console.log("reCAPTCHA result:", verifyData); // ✅ helpful for debugging

    if (!verifyData.success || verifyData.score < 0.5) {
      return NextResponse.json(
        { error: "reCAPTCHA verification failed" },
        { status: 400,  headers: corsHeaders }
      );
    }

    // ✅ Send email with Resend
    const resend = new Resend(resendKey);

    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "mjwhite.dev@gmail.com",
      subject: `New message from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    console.log("Email sent via Resend:", data);

    return NextResponse.json({ success: true, data }, { status: 200, headers: corsHeaders });
  } catch (error) {
    console.error("Error in /api/contact:", {
      message: (error as Error).message,
      stack: (error as Error).stack,
    });
    return NextResponse.json({ error: "Server error" }, { status: 500, headers: corsHeaders });
  }
}

export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*", // Or a specific domain
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}


// Original code - only POST was being referenced. Above code is theoretically combinding the two below

// export async function POST(req: Request) {
//   try {
//     const { name, email, message } = await req.json();

//     const data = await resend.emails.send({
//       from: 'onboarding@resend.dev',
//       to: 'mjwhite.dev@gmail.com',
//       subject: `New message from ${name}`,
//       html: `
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Message:</strong><br/>${message}</p>
//       `
//     });

//     return NextResponse.json({ success: true, data });
//   } catch (error) {
//     console.error('Email send error:', error);
//     return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
//   }
// }

// export async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method !== "POST") {
//     return res.status(405).end();
//   }

//   const { name, email, message, token } = req.body;

//   if (!token) {
//     return res.status(400).json({ error: "Missing reCAPTCHA token" });
//   }

//   const secret = process.env.RECAPTCHA_SECRET_KEY; // ✅ Add this to your .env
//   const verifyURL = `https://www.google.com/recaptcha/api/siteverify`;

//   const params = new URLSearchParams();
//   params.append("secret", secret!);
//   params.append("response", token);

//   const verifyRes = await fetch(verifyURL, {
//     method: "POST",
//     headers: { "Content-Type": "application/x-www-form-urlencoded" },
//     body: params,
//   });

//   const verifyData = await verifyRes.json();

//   if (!verifyData.success || verifyData.score < 0.5) {
//     return res.status(400).json({ error: "reCAPTCHA verification failed" });
//   }

//   // ✅ Continue with email sending, DB saving, etc.
//   return res.status(200).json({ success: true });
// }
