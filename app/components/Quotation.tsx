'use client'

import { useState, useCallback, memo, useRef, useMemo } from 'react'; // Import useRef and useMemo
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';
import { COMPANY_INFO } from '../lib/constants';

const amounts = ['5.000', '10.000', '15.000', '20.000', '25.000', '30.000'];
const professions = ['Dipendente', 'Pensionato', 'Autonomo'];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const slideUp = {
  initial: { opacity: 0, y: '100%' },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: '100%' },
};

const slideIn = {
  initial: { opacity: 0, scale: 0.95, y: 20 },
  animate: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.95, y: 20 },
};

const FormInputs = memo(({ formData, handleInputChange }: {
  formData: { name: string; email: string; phone: string; privacy: boolean };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const renderCount = useRef(0);
  console.log('FormInputs rendered', renderCount.current++);

  return (
    <form onSubmit={(e) => e.preventDefault()} className="space-y-3 md:space-y-4">
      <div className="relative">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Nome e Cognome"
          className="w-full p-3 md:p-4 rounded-full text-sm md:text-base border border-white/40 bg-white/80 backdrop-blur-sm focus:border-[#40BFEF] focus:ring-2 focus:ring-[#40BFEF]/20 outline-none transition-all "
          required
        />
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#40BFEF]/10 to-white/5 pointer-events-none" />
      </div>
      <div className="relative">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email"
          className="w-full p-3 md:p-4 rounded-full text-sm md:text-base border border-white/40 bg-white/80 backdrop-blur-sm focus:border-[#40BFEF] focus:ring-2 focus:ring-[#40BFEF]/20 outline-none transition-all shadow-[0_2px_8px_rgba(64,191,239,0.05)] focus:shadow-[0_2px_12px_rgba(64,191,239,0.15)]"
          required
        />
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#40BFEF]/10 to-white/5 pointer-events-none" />
      </div>
      <div className="relative">
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="Telefono"
          className="w-full p-3 md:p-4 rounded-full text-sm md:text-base border border-white/40 bg-white/80 backdrop-blur-sm focus:border-[#40BFEF] focus:ring-2 focus:ring-[#40BFEF]/20 outline-none transition-all shadow-[0_2px_8px_rgba(64,191,239,0.05)] focus:shadow-[0_2px_12px_rgba(64,191,239,0.15)]"
          required
        />
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#40BFEF]/10 to-white/5 pointer-events-none" />
      </div>

      <div className="pt-2 md:pt-4">
        <label className="flex items-start space-x-3 cursor-pointer group relative">
          <div className="relative">
            <input
              type="checkbox"
              name="privacy"
              checked={formData.privacy}
              onChange={handleInputChange}
              className="peer sr-only"
              required
            />
            <div className="h-5 w-5 rounded border-2 border-gray-300 bg-white/80 backdrop-blur-sm transition-all peer-checked:border-[#40BFEF] peer-checked:bg-[#40BFEF] peer-focus:ring-2 peer-focus:ring-[#40BFEF]/20">
              <svg 
                className="h-full w-full text-white opacity-0 transition-opacity peer-checked:opacity-100" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="absolute inset-0 rounded bg-gradient-to-r from-[#40BFEF]/10 to-white/5 pointer-events-none" />
          </div>
          <span className="text-gray-500 text-xs md:text-sm group-hover:text-gray-700 transition-colors">
            Accetto il trattamento dei dati personali secondo la{' '}
            <a href="#" className="text-[#40BFEF] hover:text-[#003B7E] transition-colors">
              Privacy Policy
            </a>
          </span>
        </label>
      </div>
    </form>
  );
}, (prevProps, nextProps) => {
  const shouldUpdate = !(
    prevProps.formData.name === nextProps.formData.name &&
    prevProps.formData.email === nextProps.formData.email &&
    prevProps.formData.phone === nextProps.formData.phone &&
    prevProps.formData.privacy === nextProps.formData.privacy
  );
  console.log('FormInputs memo check - shouldUpdate:', shouldUpdate);
  return !shouldUpdate; // Return true if props are equal (should not re-render)
});

const FormContent = memo(({ 
  step, 
  setStep, 
  amount, 
  setAmount, 
  profession, 
  setProfession, 
  formData, 
  handleInputChange, 
  handleSubmit, 
  isSubmitting,
  showSuccess 
}: {
  step: number;
  setStep: (step: number) => void;
  amount: string;
  setAmount: (amount: string) => void;
  profession: string;
  setProfession: (profession: string) => void;
  formData: {
    name: string;
    email: string;
    phone: string;
    privacy: boolean;
  };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.MouseEvent) => void;
  isSubmitting: boolean;
  showSuccess: boolean;
}) => {
  return (
    <>
      {/* Progress Steps */}
      <div className="relative mb-8 md:mb-12">
        <div className="absolute h-[2px] bg-gray-200 top-4 left-4 right-4 z-0" />
        <div
          className="absolute h-[2px] bg-[#40BFEF] top-4 left-4 transition-all duration-500 z-0"
          style={{ width: `${(Math.max(1, step - 1) / 2) * 100}%` }}
        />
        <div className="relative z-10 flex justify-between">
          {[1, 2, 3].map((num) => (
            <motion.div
              key={num}
              animate={{
                scale: num <= step ? 1.1 : 1,
              }}
              className={`w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                num <= step
                  ? 'bg-[#40BFEF] text-white shadow-lg'
                  : 'bg-white text-gray-400'
              }`}
            >
              {num}
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="step1"
            {...fadeIn}
            className="space-y-4 md:space-y-6"
          >
            <h3 className="text-xl md:text-2xl font-medium text-[#003B7E]">Di che importo hai bisogno?</h3>
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {amounts.map((amt) => (
                <motion.button
                  key={amt}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    setAmount(amt)
                    setStep(2)
                  }}
                  className={`p-3 md:p-4 rounded-full text-center text-sm md:text-base transition-all duration-300 ${
                    amount === amt
                      ? 'bg-[#40BFEF] text-white shadow-lg'
                      : 'bg-white/80 backdrop-blur-sm text-gray-600 hover:bg-white border border-white/40 shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.1)]'
                  }`}
                >
                  {amt}€
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="step2"
            {...fadeIn}
            className="space-y-4 md:space-y-6"
          >
            <h3 className="text-xl md:text-2xl font-medium text-[#003B7E]">Qual è la tua professione?</h3>
            <div className="grid grid-cols-1 gap-3 md:gap-4">
              {professions.map((prof) => (
                <motion.button
                  key={prof}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    setProfession(prof)
                    setStep(3)
                  }}
                  className={`p-3 md:p-4 rounded-full text-center text-sm md:text-base transition-all duration-300 ${
                    profession === prof
                      ? 'bg-[#40BFEF] text-white shadow-lg'
                      : 'bg-white/80 backdrop-blur-sm text-gray-600 hover:bg-white border border-white/40 shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.1)]'
                  }`}
                >
                  {prof}
                </motion.button>
              ))}
            </div>
            <div className="flex justify-center pt-4">
              <Button
                text="Precedente"
                onClick={() => setStep(1)}
                className="w-full sm:w-auto"
              />
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            key="step3"
            {...fadeIn}
            className="space-y-4 md:space-y-6"
          >
            <h3 className="text-xl md:text-2xl font-medium text-[#003B7E]">
              I tuoi dati
            </h3>
            <div className="space-y-3 md:space-y-4">
              <FormInputs formData={formData} handleInputChange={handleInputChange} />
              <div className="flex flex-col sm:flex-row justify-between gap-3 pt-4">
                <Button
                  text="Precedente"
                  onClick={() => setStep(2)}
                  className="w-full sm:w-auto"
                />
                <Button
                  text="Invia la richiesta"
                  onClick={handleSubmit}
                  className={`w-full sm:w-auto relative overflow-hidden text-base px-8 py-4 ${isSubmitting ? 'cursor-not-allowed' : ''}`}
                  disabled={!formData.name || !formData.email || !formData.phone || !formData.privacy || isSubmitting}
                >
                  <AnimatePresence mode="wait">
                    {isSubmitting ? (
                      <motion.div
                        key="loading"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 flex items-center justify-center bg-[#40BFEF]"
                      >
                        <div className="flex items-center space-x-2">
                          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          <span>Invio in corso...</span>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.span
                        key="text"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        Invia la richiesta
                      </motion.span>
                    )}
                  </AnimatePresence>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute inset-0 flex items-center justify-center bg-white/95 backdrop-blur-xl rounded-[2.5rem] z-10"
          >
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-[#40BFEF]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <motion.svg 
                  className="w-8 h-8 text-[#40BFEF]" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M5 13l4 4L19 7"
                  />
                </motion.svg>
              </div>
              <motion.h3 
                className="text-xl font-medium text-[#003B7E] mb-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Richiesta Inviata!
              </motion.h3>
              <motion.p 
                className="text-gray-600"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Grazie per averci contattato. Riceverai una email di conferma a breve.
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
});

export default function Quotation() {
  const [step, setStep] = useState(1);
  const [amount, setAmount] = useState('');
  const [profession, setProfession] = useState('');
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [internalFormData, setInternalFormData] = useState({
    name: '',
    email: '',
    phone: '',
    privacy: false
  });

  // Memoize the formData object
  const formData = useMemo(() => internalFormData, [internalFormData]);

  const quotationRenderCount = useRef(0);
  console.log('Quotation rendered', quotationRenderCount.current++);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('handleInputChange called');
    const { name, value, type, checked } = e.target;
    setInternalFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  }, []);

  const handleSubmit = useCallback(async (e: React.MouseEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: COMPANY_INFO.email,
          subject: 'Nuova richiesta di preventivo',
          formData: {
            ...formData,
            amount,
            profession
          }
        }),
      });

      if (response.ok) {
        setShowSuccess(true);
      } else {
        console.error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, amount, profession]);

  return (
    <section className="w-full min-h-[40vh] sm:min-h-screen relative pt-16 sm:pt-0 pb-16">
      <div className="absolute inset-0  h-full">
        <div className="absolute inset-0 bg-gradient-to-b from-[#40BFEF]/20 via-transparent to-[#40BFEF]/10 h-full" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 md:px-12 py-8 md:py-12 max-w-7xl min-h-[40vh] sm:min-h-screen flex items-start sm:items-center">
        <div className="grid md:grid-cols-2 gap-4 md:gap-12 lg:gap-16 w-full items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:sticky md:top-1/3 h-fit md:-translate-y-1/2 text-center md:text-left"
          >
            <h1 className="text-4xl xs:text-5xl sm:text-5xl md:text-6xl font-medium leading-tight max-w-2xl mx-auto md:mx-0">
              <span className="text-[#40BFEF] block mb-3 md:mb-0">Richiedi adesso</span>
              <span className="text-[#003B7E] block">il tuo preventivo.</span>
            </h1>
            <p className="text-gray-600 text-base md:text-lg mt-6 w-full md:w-3/4 text-center md:text-left">
              La richiesta è semplice, gratuita e senza impegno. Basta inserire
              i dati nel nostro breve modulo di richiesta: i dati saranno poi elaborati dal nostro
              staff e il tuo consulente personale ti ricontatterà in breve tempo.
            </p>
            <div className="md:hidden mt-6 flex justify-center">
              <Button
                text="Richiedi"
                onClick={() => setIsPopupOpen(true)}
                className="px-6 py-3 text-base max-w-sm"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="hidden md:block bg-white/30 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-10 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] border border-white/20 relative max-w-xl mx-auto w-full"
          >
            <FormContent 
              step={step}
              setStep={setStep}
              amount={amount}
              setAmount={setAmount}
              profession={profession}
              setProfession={setProfession}
              formData={formData}
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
              isSubmitting={isSubmitting}
              showSuccess={showSuccess}
            />
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {isPopupOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsPopupOpen(false)}
              className="fixed inset-0 top-16 bg-black/40 backdrop-blur-sm z-50 md:hidden"
            />

            <div className="fixed inset-0 top-16 flex flex-col items-center justify-center z-50 md:hidden px-4">
              <motion.div
                className="bg-white/95 backdrop-blur-xl rounded-[2rem] p-6 pb-8 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] border border-white/20 w-full max-w-md max-h-[70vh] overflow-y-auto hide-scrollbar"
              >
                <FormContent 
                  step={step}
                  setStep={setStep}
                  amount={amount}
                  setAmount={setAmount}
                  profession={profession}
                  setProfession={setProfession}
                  formData={formData}
                  handleInputChange={handleInputChange}
                  handleSubmit={handleSubmit}
                  isSubmitting={isSubmitting}
                  showSuccess={showSuccess}
                />
              </motion.div>

              <motion.div className="mt-6 mb-safe">
                <button
                  onClick={() => setIsPopupOpen(false)}
                  className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-xl shadow-lg hover:bg-white/90 transition-all"
                >
                  <svg className="w-7 h-7 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}