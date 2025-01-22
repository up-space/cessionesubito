import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Prestiti e Finanziamenti',
  description: 'Informativa sulla privacy e il trattamento dei dati personali',
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-100 pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-[#003B7E] mb-8">
          Informativa sulla Privacy
        </h1>
        
        <div className="space-y-8 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold text-[#003B7E] mb-4">Introduzione</h2>
            <p className="mb-4">
              La presente Informativa sulla Privacy descrive come raccogliamo, utilizziamo e proteggiamo i tuoi dati personali 
              quando utilizzi il nostro sito web e i nostri servizi. Ci impegniamo a proteggere la tua privacy e a trattare 
              i tuoi dati personali in conformità con il Regolamento Generale sulla Protezione dei Dati (GDPR) e altre 
              leggi applicabili sulla protezione dei dati.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#003B7E] mb-4">Titolare del Trattamento</h2>
            <p className="mb-4">
              Il titolare del trattamento dei dati personali è:<br />
              [Nome Azienda]<br />
              Indirizzo: [Indirizzo Completo]<br />
              Email: privacy@example.com<br />
              P.IVA: [Numero P.IVA]
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#003B7E] mb-4">Dati che Raccogliamo</h2>
            <p className="mb-4">Raccogliamo i seguenti tipi di dati personali:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <span className="font-medium">Dati di contatto:</span> nome, cognome, indirizzo email, numero di telefono
              </li>
              <li>
                <span className="font-medium">Dati finanziari:</span> informazioni sul reddito, situazione lavorativa
              </li>
              <li>
                <span className="font-medium">Dati tecnici:</span> indirizzo IP, tipo di browser, dispositivo utilizzato
              </li>
              <li>
                <span className="font-medium">Dati di utilizzo:</span> informazioni su come utilizzi il nostro sito
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#003B7E] mb-4">Finalità del Trattamento</h2>
            <p className="mb-4">Utilizziamo i tuoi dati personali per:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Fornirti i servizi richiesti</li>
              <li>Processare le tue richieste di finanziamento</li>
              <li>Comunicare con te riguardo ai nostri servizi</li>
              <li>Migliorare e personalizzare i nostri servizi</li>
              <li>Rispettare gli obblighi legali</li>
              <li>Prevenire frodi e garantire la sicurezza</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#003B7E] mb-4">Base Giuridica del Trattamento</h2>
            <p className="mb-4">Il trattamento dei tuoi dati personali si basa su:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Il tuo consenso esplicito</li>
              <li>L'esecuzione di un contratto con te</li>
              <li>I nostri legittimi interessi commerciali</li>
              <li>L'adempimento di obblighi legali</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#003B7E] mb-4">Conservazione dei Dati</h2>
            <p className="mb-4">
              Conserviamo i tuoi dati personali solo per il tempo necessario a raggiungere le finalità per cui sono stati 
              raccolti, o per rispettare obblighi legali. Al termine di questo periodo, i tuoi dati verranno cancellati 
              o resi anonimi.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#003B7E] mb-4">I Tuoi Diritti</h2>
            <p className="mb-4">Hai il diritto di:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Accedere ai tuoi dati personali</li>
              <li>Rettificare i tuoi dati personali</li>
              <li>Cancellare i tuoi dati personali</li>
              <li>Limitare il trattamento dei tuoi dati</li>
              <li>Opporti al trattamento dei tuoi dati</li>
              <li>Ricevere i tuoi dati in un formato strutturato (portabilità)</li>
              <li>Revocare il consenso in qualsiasi momento</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#003B7E] mb-4">Sicurezza dei Dati</h2>
            <p className="mb-4">
              Adottiamo misure di sicurezza tecniche e organizzative appropriate per proteggere i tuoi dati personali 
              da accessi non autorizzati, perdite o alterazioni. Tutto il personale che ha accesso ai tuoi dati è 
              vincolato da obblighi di riservatezza.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#003B7E] mb-4">Trasferimento dei Dati</h2>
            <p className="mb-4">
              I tuoi dati personali potrebbero essere trasferiti e conservati in paesi al di fuori dell'Unione Europea. 
              In tal caso, ci assicuriamo che il trasferimento avvenga nel rispetto delle leggi applicabili sulla 
              protezione dei dati e che siano in atto adeguate misure di sicurezza.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#003B7E] mb-4">Modifiche alla Privacy Policy</h2>
            <p className="mb-4">
              Ci riserviamo il diritto di modificare questa Privacy Policy in qualsiasi momento. Le modifiche saranno 
              pubblicate su questa pagina e, se significative, ti informeremo tramite email o attraverso un avviso sul 
              nostro sito web.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#003B7E] mb-4">Contattaci</h2>
            <p className="mb-4">
              Per qualsiasi domanda sulla nostra Privacy Policy o sul trattamento dei tuoi dati personali, puoi 
              contattarci a:<br />
              Email: privacy@example.com<br />
              Telefono: [Numero di Telefono]<br />
              Indirizzo: [Indirizzo Completo]
            </p>
          </section>

          <section className="pt-8">
            <p className="text-sm text-gray-600">
              Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}
            </p>
          </section>
        </div>
      </div>
    </main>
  );
} 