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
    console.log('Richiesta ricevuta:', { to, subject, hasFormData: !!formData, skipUserEmail });

    if (!process.env.EMAIL_USER) {
      throw new Error('EMAIL_USER environment variable is not set');
    }

    const isContactForm = !formData.amount;
    console.log('Tipo form:', isContactForm ? 'contatto' : 'preventivo');

    // Send email to admin
    try {
      const adminMailResult = await transporter.sendMail({
        from: {
          name: "CessioneSubito",
          address: "postmaster@cessionesubito.it"
        },
        to: "info@cessionesubito.it",
        subject: isContactForm ? 'Nuovo messaggio dal sito' : subject,
        html: isContactForm ? 
          contactAdminTemplate(formData) : 
          adminTemplate(formData)
      });
      console.log('Email admin inviata:', adminMailResult);
    } catch (adminError) {
      console.error('Errore invio email admin:', adminError);
      throw adminError;
    }

    // Invia l'email all'utente solo se ha fornito un'email e non è stato richiesto di saltare l'invio
    if (formData.email && !skipUserEmail) {
      try {
        const userMailResult = await transporter.sendMail({
          from: {
            name: "CessioneSubito",
            address: "postmaster@cessionesubito.it"
          },
          to: formData.email,
          subject: 'Conferma ricezione richiesta - CessioneSubito',
          html: isContactForm ? contactUserTemplate() : userTemplate(formData)
        });
        console.log('Email utente inviata:', userMailResult);
      } catch (userError) {
        console.error('Errore invio email utente:', userError);
        throw userError;
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Errore generale invio email:', error);
    return NextResponse.json(
      { error: String(error) },
      { status: 500 }
    );
  }
} 