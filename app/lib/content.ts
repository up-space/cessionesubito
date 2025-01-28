// Chi Siamo Page Content
export const chiSiamoContent = {
  hero: {
    title: {
      main: "Il tuo prestito con",
      highlight: "CessioneSubito"
    },
    subtitle: "Soluzioni di finanziamento su misura per te",
    imageSrc: "/about-hero.jpg",
    imageAlt: "Chi Siamo"
  },
  mission: {
    title: "La nostra missione",
    description: "Accedere al credito in tempi brevi, avere un tasso di interesse sostenibile, e avere un piano di rimborso chiaro e senza sorprese sono gli aspetti principali su cui abbiamo lavorato per ognuno dei prestiti che vi proponiamo. Con CessioneSubito puoi ottenere un prestito a tasso fisso, con una rata fissa, e senza intoppi.",
    ctaText: "Richiedi un preventivo"
  },
  fidiline: {
    title: "Un servizio di Fidiline",
    description: "Fidiline srl, è una nuova realtà regolarmente iscritta all'elenco Oam al n.A10847, costituita da figure professionali che vantano una esperienza ultradecennale nel settore del credito rivolto alle famiglie con particolare attenzione alla cessione del quinto dello stipendio e si avvale solo di personale autorizzato ad operare nel settore dei finanziamenti a norma della legge.",
    agentInfo: "Agente in attività finanziaria senza rappresentanza di Banca Sistema S.p.A.",
    logoSrc: "/fidiline-logo.png",
    logoAlt: "Fidiline",
    logoLink: "https://www.fidiline.it/"
  },
  quotation: {
    title: "Richiedi il tuo preventivo",
    subtitle: "Compila il form e verrai ricontattato da un nostro professionista per una consulenza gratuita"
  }
};

// Cessione del Quinto Page Content
export const cessioneQuintoContent = {
  hero: {
    title: "Richiedi la cessione di",
  },
  tabs: [
    {
      id: 'stipendio',
      title: 'Stipendio',
      imageSrc: '/stipendio-hero.jpg',
      accordionItems: [
        {
          title: 'RICHIESTA',
          content: 'Compilate la richiesta di preventivo e verrete ricontattati da un nostro professionista. Sarà necessaria solamente la copia di una busta paga.'
        },
        {
          title: 'REQUISITI',
          content: 'Possono richiedere la cessione del quinto dello stipendio tutti i dipendenti pubblici e i dipendenti privati di aziende con almeno 8 dipendenti. Nei dipendenti pubblici sono inclusi tutti i dipendenti statali impiegati presso Comuni, ASL, Regioni, Provincie, i dipendenti ospedalieri, i dipendenti ministeriali, delle forze armate e delle forze dell\'ordine, così come i dipendenti delle scuole pubbliche.'
        },
        {
          title: 'VANTAGGI',
          content: [
            'Non serve un garante',
            'L\'assicurazione valida sia in caso di perdita del lavoro che di decesso, senza conseguenze per gli eredi.',
            'Puoi utilizzare l\'importo ottenuto per qualsiasi esigenza, anche per consolidare altri debiti.',
            'Puoi chiedere la cessione del quinto anche se hai altri prestiti attivi.',
            'La rata è fissa, sempre.',
            'Il tasso è fisso, sempre.',
            'Puoi richiedere l\'estinzione anticipata in qualsiasi momento.',
            'Possibilità di chiudere finanziamenti fuori busta, con una sola rata.'
          ]
        }
      ]
    },
    {
      id: 'pensione',
      title: 'Pensione',
      imageSrc: '/pensione-hero.jpg',
      accordionItems: [
        {
          title: 'RICHIESTA',
          content: 'Compilate la richiesta di preventivo e verrete ricontattati da un nostro professionista. Il preventivo e il servizio assistenza sono completamente gratuiti.'
        },
        {
          title: 'REQUISITI',
          content: {
            intro: 'Possono richiedere la cessione del quinto della pensione quasi tutti i pensionati. I requisiti basilari sono:',
            items: [
              'Essere titolare di una pensione: non importa il tipo di ente pensionistico (INPS, INPDAP, ecc)',
              'Età: L\'età massima alla scadenza del finanziamento è fissata a 88 anni non compiuti.'
            ]
          }
        },
        {
          title: 'VANTAGGI',
          content: [
            'Non serve un garante',
            'L\'assicurazione valida in caso di decesso, senza conseguenze sugli eredi.',
            'Puoi utilizzare l\'importo ottenuto per qualsiasi esigenza, anche per consolidare altri debiti.',
            'Puoi chiedere la cessione del quinto anche se hai altri prestiti attivi.',
            'È ammessa anche la residenza estera, ma la pensione deve essere sempre italiana.',
            'La rata è fissa, sempre.',
            'Il tasso è fisso, sempre.',
            'Puoi richiedere l\'estinzione anticipata in qualsiasi momento.'
          ]
        }
      ]
    }
  ],
  quotation: {
    stipendio: {
      title: "Richiedi la tua cessione del quinto dello stipendio",
      subtitle: "Compila il form e verrai ricontattato da un nostro professionista per una consulenza gratuita"
    },
    pensione: {
      title: "Richiedi la tua cessione del quinto della pensione",
      subtitle: "Compila il form e verrai ricontattato da un nostro professionista per una consulenza gratuita"
    }
  }
};

// Prestiti in Convenzione Page Content
export const prestitiConvenzioneContent = {
  hero: {
    title: "Prestiti in convenzione"
  },
  loanTypes: [
    { 
      id: 'inps', 
      title: 'PRESTITI INPS',
      image: '/inps.jpg',
      accordionItems: [
        {
          title: 'Di cosa si tratta?',
          content: 'La modalità di finanziamento nel caso di un prestito in convenzione INPS è la cessione del quinto della pensione, che permette di avere un accesso veloce al credito e un piano di rientro del prestito trasparente e senza sorprese.'
        },
        {
          title: 'Come funziona?',
          content: 'Il prestito viene erogato direttamente sulla pensione e la rata viene trattenuta mensilmente dall\'assegno pensionistico, garantendo così un piano di rimborso comodo e sicuro.'
        },
        {
          title: 'Quali sono i vantaggi?',
          content: [
            'Accesso veloce al credito',
            'Piano di rientro trasparente',
            'Rate fisse e sostenibili',
            'Nessuna sorpresa nei costi',
            'Gestione semplificata del rimborso'
          ]
        }
      ]
    },
    { 
      id: 'inpdap', 
      title: 'PRESTITI INPDAP',
      image: '/inpdap.jpg',
      accordionItems: [
        {
          title: 'Di cosa si tratta?',
          content: 'Il prestito INPDAP è un vecchio modo di definire gli attuali prestiti in convenzione INPS, un tipo di finanziamento accessibile ai pensionati pubblici e statali iscritti alla gestione ex INPDAP.'
        },
        {
          title: 'Come richiederlo?',
          content: 'Bastano pochi clic e pochi dati per compilare la richiesta online, o se preferite potete inviarci un messaggio tramite il modulo contatti, venirci a trovare in filiale o fare una chiamata al numero che trovate di seguito. Un nostro professionista sarà a vostra completa disposizione per fornirvi tutte le informazioni e un preventivo personalizzato.'
        },
        {
          title: 'Quali sono i vantaggi?',
          content: [
            'Processo di richiesta semplificato',
            'Assistenza professionale dedicata',
            'Preventivo personalizzato gratuito',
            'Multiple modalità di contatto',
            'Consulenza completa sul servizio'
          ]
        }
      ]
    },
    { 
      id: 'noipa', 
      title: 'PRESTITI NOIPA',
      image: '/noipa.jpg',
      accordionItems: [
        {
          title: 'Di cosa si tratta?',
          content: 'NoiPA è il sistema di gestione degli stipendi della Pubblica Amministrazione. Attraverso la convenzione NoiPA, è possibile accedere a prestiti con condizioni agevolate e gestione semplificata.'
        },
        {
          title: 'Perchè conviene?',
          content: 'Il prestito NoiPA offre condizioni particolarmente vantaggiose grazie alla convenzione diretta con il sistema di gestione degli stipendi pubblici.'
        },
        {
          title: 'Quali sono i vantaggi?',
          content: 'Una rata di importo fisso e contenuto che non può superare il 20% dello stipendio. Il rimborso comodo fino a 120 mesi. Non occorrono garanti che firmino oltre a voi, la garanzia del rimborso è data dal vostro stipendio.'
        }
      ]
    },
    { 
      id: 'miur', 
      title: 'PRESTITI MIUR',
      image: '/miur.jpg',
      accordionItems: [
        {
          title: 'Di cosa si tratta?',
          content: 'Un prestito dedicato ai dipendenti del Ministero dell\'Istruzione, dell\'Università e della Ricerca, con condizioni agevolate e gestione semplificata grazie alla convenzione attiva.'
        },
        {
          title: 'Ho bisogno di un garante?',
          content: 'No, non è necessario alcun garante. La garanzia è fornita direttamente dal tuo stipendio MIUR, semplificando notevolmente il processo di richiesta.'
        },
        {
          title: 'Quali sono i vantaggi?',
          content: 'Cessionesubito.it ti assicura un servizio chiaro, trasparente e veloce. È il servizio ideale che vi assicura il miglior risultato sempre.'
        }
      ]
    }
  ]
};

// Prestiti Delega Page Content
export const prestitiDelegaContent = {
  hero: {
    title: "Prestito Delega",
    subtitle: "Un prestito aggiuntivo alla cessione del quinto, per ottenere un importo maggiore mantenendo le stesse garanzie e gli stessi vantaggi.",
    imageSrc: "/delega-hero.jpg"
  },
  accordionItems: [
    {
      title: 'CARATTERISTICHE',
      content: [
        'Rata fissa per tutta la durata del prestito',
        'Tasso fisso per tutta la durata del prestito',
        'Durata fino a 10 anni',
        'Importo fino a un ulteriore quinto dello stipendio',
        'Trattenuta diretta in busta paga'
      ]
    },
    {
      title: 'REQUISITI',
      content: {
        intro: 'Per richiedere il prestito delega è necessario:',
        items: [
          'Essere dipendenti pubblici o di aziende private con almeno 16 dipendenti',
          'Avere un contratto a tempo indeterminato',
          'Avere un\'anzianità di servizio di almeno 6 mesi',
          'Ottenere il consenso del datore di lavoro'
        ]
      }
    },
    {
      title: 'VANTAGGI',
      content: [
        'Possibilità di ottenere un importo maggiore rispetto alla sola cessione del quinto',
        'Assicurazione inclusa contro i rischi di perdita dell\'impiego e premorienza',
        'Nessuna motivazione da fornire per la richiesta del prestito',
        'Possibilità di estinzione anticipata',
        'Rate costanti trattenute direttamente in busta paga'
      ]
    },
    {
      title: 'COME RICHIEDERLO',
      content: {
        steps: [
          {
            title: '1. Richiesta preventivo',
            description: 'Compila il form di richiesta preventivo o contattaci direttamente. Ti basterà fornire alcuni dati base e una copia della busta paga.'
          },
          {
            title: '2. Valutazione',
            description: 'Un nostro consulente valuterà la tua situazione e ti proporrà la soluzione più adatta alle tue esigenze, con le migliori condizioni disponibili.'
          },
          {
            title: '3. Approvazione',
            description: 'Una volta ottenuto il consenso del datore di lavoro e verificati tutti i requisiti, il prestito viene approvato e l\'importo erogato sul tuo conto.'
          }
        ]
      }
    }
  ],
  quotation: {
    title: "Richiedi il tuo prestito delega",
    subtitle: "Compila il form e verrai ricontattato da un nostro professionista per una consulenza gratuita"
  }
};

// Contact Page Content
export const contattiContent = {
  hero: {
    title: {
      main: "Parliamo del tuo",
      highlight: "futuro finanziario"
    },
    subtitle: "Il nostro team di esperti è pronto ad ascoltare le tue esigenze e trovare la soluzione migliore per te"
  },
  contact: {
    address: {
      title: "Sede operativa",
      content: [
        "Via Vittorio Emanuele II, 15",
        "20900 Monza (MB)",
        "Italia"
      ]
    },
    email: {
      title: "Email",
      value: "info@cessionesubito.it"
    },
    phone: {
      title: "Telefono",
      value: "+39 039 946 6757"
    }
  },
  form: {
    labels: {
      name: "Nome e Cognome",
      email: "Email",
      phone: "Telefono",
      message: "Come possiamo aiutarti?"
    },
    placeholders: {
      name: "Mario Rossi",
      email: "mario.rossi@email.com",
      phone: "+39 123 456 7890",
      message: "Descrivi la tua richiesta..."
    },
    submitButton: {
      idle: "Invia messaggio",
      loading: "Invio in corso..."
    },
    messages: {
      success: "Messaggio inviato con successo! Ti contatteremo presto.",
      error: "Si è verificato un errore. Per favore riprova più tardi."
    }
  },
  map: {
    imageSrc: "/map.jpg",
    imageAlt: "Mappa della sede"
  }
};

// Shared Components Content
export const sharedContent = {
  notFound: {
    title: "Non hai trovato ciò che cercavi?",
    description: "Il nostro team è a tua disposizione per rispondere a tutte le tue domande",
    ctaText: "Contattaci"
  }
}; 