import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

function getResendClient() {
  return new Resend(process.env.RESEND_API_KEY);
}

const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW = 60 * 60 * 1000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_WINDOW });
    return false;
  }

  if (entry.count >= RATE_LIMIT) {
    return true;
  }

  entry.count++;
  return false;
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    if (isRateLimited(ip)) {
      return new Response(
        JSON.stringify({ error: 'Too many requests. Please try again later.' }),
        { status: 429, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const body = await request.json();
    const { from_name, from_email, subject, message } = body;

    if (!from_name || !from_email || !subject || !message) {
      return new Response(
        JSON.stringify({ error: 'All fields are required.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(from_email)) {
      return new Response(
        JSON.stringify({ error: 'Invalid email address.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    if (from_name.length > 100 || subject.length > 200 || message.length > 5000) {
      return new Response(
        JSON.stringify({ error: 'Input exceeds maximum length.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const { error } = await getResendClient().emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'Portfolio Contact <onboarding@resend.dev>',
      to: process.env.CONTACT_TO_EMAIL || 'mdtonmoykhan65@gmail.com',
      replyTo: from_email,
      subject: `[Portfolio] ${subject}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <hr style="border: 1px solid #eee;" />
          <p><strong>Name:</strong> ${from_name}</p>
          <p><strong>Email:</strong> ${from_email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <hr style="border: 1px solid #eee;" />
          <div style="background: #f9f9f9; padding: 16px; border-radius: 8px;">
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return new Response(
        JSON.stringify({ error: 'Failed to send message. Please try again later.' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to send message. Please try again later.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
