import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { 
  adminTemplate, 
  userTemplate,
  contactAdminTemplate,
  contactUserTemplate 
} from '@/app/lib/emailTemplates';
import { COMPANY_INFO } from '@/app/lib/constants';

const transporter = nodemailer.createTransport({
  host: "smtps.aruba.it",
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

    const isContactForm = !formData.amount; // Differentiate form types

    // Send email to admin
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: isContactForm ? COMPANY_INFO.email : to,
      subject: isContactForm ? 'Nuovo messaggio dal sito' : subject,
      html: isContactForm ? 
        contactAdminTemplate(formData) : 
        adminTemplate(formData)
    });

    if (isContactForm) {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: formData.email,
        subject: 'Conferma ricezione messaggio - CessioneSubito',
        html: contactUserTemplate()
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
} 