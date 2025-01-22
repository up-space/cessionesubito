import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy | Prestiti e Finanziamenti',
  description: 'Informativa sui cookie e sulla privacy del nostro sito web',
};

export default function CookiePolicy() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-100 pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-[#003B7E] mb-8">
          Informativa sui Cookie
        </h1>
        
        <div className="space-y-8 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold text-[#003B7E] mb-4">Cosa sono i cookie?</h2>
            <p className="mb-4">
              I cookie sono piccoli file di testo che i siti visitati inviano al terminale dell'utente, dove vengono 
              memorizzati, per poi essere ritrasmessi agli stessi siti alla visita successiva.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#003B7E] mb-4">Tipologie di Cookie utilizzati</h2>
            
            <h3 className="text-xl font-medium text-[#003B7E] mt-6 mb-3">Cookie tecnici necessari</h3>
            <p className="mb-4">
              Questi cookie sono necessari per il funzionamento del sito e non possono essere disattivati. 
              Solitamente vengono impostati in risposta a tue azioni che costituiscono una richiesta di servizi, 
              come l'impostazione delle preferenze di privacy, l'accesso o la compilazione di moduli.
            </p>

            <h3 className="text-xl font-medium text-[#003B7E] mt-6 mb-3">Cookie analitici</h3>
            <p className="mb-4">
              Questi cookie ci permettono di contare le visite e le fonti di traffico per poter misurare e 
              migliorare le prestazioni del nostro sito. Ci aiutano a sapere quali sono le pagine più e meno 
              popolari e vedere come i visitatori si muovono nel sito.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#003B7E] mb-4">I tuoi diritti sulla protezione dei dati</h2>
            <p className="mb-4">
              Hai il diritto di:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Accedere ai tuoi dati personali</li>
              <li>Correggere i tuoi dati personali se imprecisi</li>
              <li>Richiedere la cancellazione dei tuoi dati personali</li>
              <li>Opporti al trattamento dei tuoi dati personali</li>
              <li>Richiedere la limitazione del trattamento dei tuoi dati personali</li>
              <li>Richiedere il trasferimento dei tuoi dati personali</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#003B7E] mb-4">Come gestire i cookie</h2>
            <p className="mb-4">
              Puoi modificare le tue preferenze sui cookie in qualsiasi momento utilizzando il nostro pannello 
              di gestione dei cookie. Inoltre, la maggior parte dei browser web ti permette di controllare la 
              maggior parte dei cookie attraverso le loro impostazioni.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#003B7E] mb-4">Contattaci</h2>
            <p className="mb-4">
              Per qualsiasi domanda sulla nostra politica sui cookie o sul trattamento dei tuoi dati personali, 
              non esitare a contattarci all'indirizzo email: privacy@example.com
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