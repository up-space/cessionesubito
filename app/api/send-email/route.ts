import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { adminTemplate, userTemplate } from '@/app/lib/emailTemplates';

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD,
  },
});

export async function POST(req: Request) {
  try {
    const { to, subject, formData } = await req.json();

    // Send email to admin
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to,
      subject,
      html: adminTemplate(formData),
    });

    // Send confirmation email to user
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: formData.email,
      subject: 'Conferma richiesta preventivo - CessioneSubito',
      html: userTemplate(formData),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
} 