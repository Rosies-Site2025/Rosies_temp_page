// app/api/contact/route.ts
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error('RESEND_API_KEY is missing');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const { name, email, phone, company, service, message, website } =
      await request.json();

    // Honeypot check
    if (website) {
      console.log('Spam bot detected via honeypot');
      return NextResponse.json({ success: true });
    }

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: 'contact@rosiesjanitorialoc.com',
      to: 'fatimaespinoza4@gmail.com',
      replyTo: email,
      subject: `New Quote Request from ${name}`,
      html: `<!DOCTYPE html>...${message}...`
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: error?.message || 'Failed to send email' },
      { status: 500 }
    );
  }
}
