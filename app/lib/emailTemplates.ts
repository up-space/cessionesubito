export const sharedStyles = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.6;
    color: #1a1a1a;
    margin: 0;
    padding: 0;
    background: #f0f4f8;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
  }
  .main-wrapper {
    background-color: #f0f4f8;
    padding: 40px 20px;
  }
  .container {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
  }
  .email-card {
    background: #ffffff;
    border-radius: 32px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    overflow: hidden;
  }
  .header {
    background: #2A3342;
    padding: 40px 20px;
    text-align: center;
  }
  .logo {
    margin-bottom: 24px;
    text-align: center;
    background: rgba(255, 255, 255, 0.9);
    display: inline-block;
    padding: 12px 24px;
    border-radius: 16px;
  }
  .logo img {
    width: 180px;
    height: auto;
  }
  .header-title {
    color: #ffffff;
    font-size: 24px;
    font-weight: 600;
    line-height: 1.3;
    margin: 0;
  }
  .content {
    padding: 32px;
  }
  .button {
    display: inline-block;
    padding: 12px 24px;
    background: #2A3342;
    color: #ffffff;
    text-decoration: none;
    border-radius: 9999px;
    font-weight: 500;
    font-size: 16px;
    border: 0;
  }
`;

export const adminTemplate = (formData: any) => `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Nuova Richiesta di Preventivo</title>
      <style>
        ${sharedStyles}
        .info-group {
          padding: 16px 0;
          border-bottom: 1px solid #edf2f7;
        }
        .info-group:last-child {
          border-bottom: none;
        }
        .label {
          font-size: 14px;
          color: #64748b;
          margin-bottom: 4px;
          display: block;
        }
        .value {
          font-size: 16px;
          color: #1a1a1a;
          font-weight: 500;
        }
        .amount {
          font-size: 20px;
          color: #003B7E;
          font-weight: 600;
        }
      </style>
    </head>
    <body>
      <div class="main-wrapper">
        <div class="container">
          <div class="email-card">
            <div class="header">
              <div class="logo">
                <img src="/full-logo.png" alt="CessioneSubito" />
              </div>
              <h1 class="header-title">Nuova Richiesta di Preventivo</h1>
            </div>
            <div class="content">
              <div class="info-group">
                <span class="label">Nome e Cognome</span>
                <div class="value">${formData.name}</div>
              </div>
              <div class="info-group">
                <span class="label">Email</span>
                <div class="value">${formData.email}</div>
              </div>
              <div class="info-group">
                <span class="label">Telefono</span>
                <div class="value">${formData.phone}</div>
              </div>
              <div class="info-group">
                <span class="label">Professione</span>
                <div class="value">${formData.profession}</div>
              </div>
              <div class="info-group">
                <span class="label">Importo Richiesto</span>
                <div class="amount">${formData.amount}€</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  </html>
`;

export const userTemplate = (formData: any) => `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Richiesta Ricevuta - CessioneSubito</title>
      <style>
        ${sharedStyles}
        .greeting {
          font-size: 24px;
          font-weight: 600;
          color: #1a1a1a;
          margin-bottom: 16px;
          line-height: 1.3;
        }
        .message {
          font-size: 16px;
          line-height: 1.7;
          color: #475569;
          margin-bottom: 32px;
        }
        .summary-card {
          background: #f8fafc;
          border-radius: 24px;
          padding: 24px;
          margin-bottom: 32px;
        }
        .summary-title {
          font-size: 18px;
          font-weight: 600;
          color: #1a1a1a;
          margin-bottom: 20px;
        }
        .summary-item {
          padding: 16px;
          margin-bottom: 16px;
          background: #ffffff;
          border-radius: 16px;
          border: 1px solid #edf2f7;
        }
        .summary-item:last-child {
          margin-bottom: 0;
        }
        .summary-label {
          font-size: 14px;
          color: #64748b;
          margin-bottom: 4px;
        }
        .summary-value {
          font-size: 18px;
          font-weight: 500;
          color: #1a1a1a;
        }
        .cta-section {
          background: #f8fafc;
          border-radius: 24px;
          padding: 32px;
          text-align: center;
          margin-bottom: 32px;
        }
        .cta-text {
          margin-bottom: 24px;
          font-size: 16px;
          color: #475569;
          line-height: 1.6;
        }
        .footer {
          text-align: center;
          padding: 24px;
          background: #f8fafc;
          border-top: 1px solid #edf2f7;
        }
        .footer-brand {
          font-weight: 600;
          color: #1a1a1a;
          margin-bottom: 12px;
          font-size: 16px;
        }
        .footer-note {
          font-size: 13px;
          color: #64748b;
        }
      </style>
    </head>
    <body>
      <div class="main-wrapper">
        <div class="container">
          <div class="email-card">
            <div class="header">
              <div class="logo">
                <img src="/full-logo.png" alt="CessioneSubito" />
              </div>
              <h1 class="header-title">Richiesta Ricevuta</h1>
            </div>
            <div class="content">
              <h2 class="greeting">Gentile ${formData.name},</h2>
              <p class="message">
                Grazie per aver richiesto un preventivo su CessioneSubito. Abbiamo ricevuto la tua richiesta e il nostro team la esaminerà al più presto.
              </p>
              
              <div class="summary-card">
                <h3 class="summary-title">Riepilogo della richiesta</h3>
                <div class="summary-item">
                  <div class="summary-label">Importo richiesto</div>
                  <div class="summary-value">${formData.amount}€</div>
                </div>
                <div class="summary-item">
                  <div class="summary-label">Professione</div>
                  <div class="summary-value">${formData.profession}</div>
                </div>
              </div>
              
              <div class="cta-section">
                <p class="cta-text">
                  Ti contatteremo presto per discutere i dettagli della tua richiesta. Nel frattempo, se hai domande o necessiti di assistenza immediata, siamo qui per aiutarti.
                </p>
                <a href="/contatti" class="button">Contattaci</a>
              </div>
            </div>
            
            <div class="footer">
              <p class="footer-brand">Il team di CessioneSubito</p>
              <p class="footer-note">
                Questa è un'email automatica. Per favore non rispondere a questo indirizzo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </body>
  </html>
`;

// Add new template for contact form submissions
export const contactAdminTemplate = (formData: any) => `
  <!DOCTYPE html>
  <html>
  <head>
    <style>
      /* Add contact-specific email styles */
      .message-content { padding: 20px; background: #f5f5f5; }
    </style>
  </head>
  <body>
    <div class="container">
      <h2>Nuovo messaggio da ${formData.name}</h2>
      <div class="message-content">
        <p>Email: ${formData.email}</p>
        <p>Telefono: ${formData.phone}</p>
        <p>Messaggio: ${formData.message}</p>
      </div>
    </div>
  </body>
  </html>
`;

export const contactUserTemplate = () => `
  <!DOCTYPE html>
  <html>
  <body>
    <div class="container">
      <h2>Grazie per averci contattato</h2>
      <p>Il nostro team ti risponderà entro 24 ore lavorative.</p>
    </div>
  </body>
  </html>
`; 