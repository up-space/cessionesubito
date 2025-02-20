import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { 
  adminTemplate, 
  userTemplate,
  contactAdminTemplate,
  contactUserTemplate 
} from '@/app/lib/emailTemplates';
import { COMPANY_INFO } from '@/app/lib/constants';

// Verifica iniziale delle variabili d'ambiente
if (!process.env.EMAIL_USER || !process.env.EMAIL_APP_PASSWORD) {
  console.error('Configurazione email mancante:', {
    EMAIL_USER: !!process.env.EMAIL_USER,
    EMAIL_APP_PASSWORD: !!process.env.EMAIL_APP_PASSWORD
  });
}

const transporter = nodemailer.createTransport({
  host: "smtps.aruba.it",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD,
  },
  debug: true, // Abilita il debug
  logger: true // Abilita il logging
});

// Verifica la connessione all'avvio
transporter.verify(function(error, success) {
  if (error) {
    console.error('Errore nella verifica del trasportatore:', error);
  } else {
    console.log('Server pronto all\'invio');
  }
});

export async function POST(req: Request) {
  try {
    const { to, subject, formData, skipUserEmail } = await req.json();
    const isContactForm = !formData.amount;

    // Send email to admin
    try {
      await transporter.sendMail({
        from: {
          name: "CessioneSubito",
          address: "postmaster@cessionesubito.it"
        },
        to: "landingleads@fidiline.it",
        subject: isContactForm ? 'Nuovo messaggio dal sito' : subject,
        html: isContactForm ? 
          contactAdminTemplate(formData) : 
          adminTemplate(formData)
      });
    } catch (error) {
      throw error;
    }

    // Invia l'email all'utente solo se ha fornito un'email e non è stato richiesto di saltare l'invio
    if (formData.email && !skipUserEmail) {
      try {
        await transporter.sendMail({
          from: {
            name: "CessioneSubito",
            address: "postmaster@cessionesubito.it"
          },
          to: formData.email,
          subject: 'Conferma ricezione richiesta - CessioneSubito',
          html: isContactForm ? contactUserTemplate() : userTemplate(formData)
        });
      } catch (error) {
        throw error;
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: String(error) },
      { status: 500 }
    );
  }
} 