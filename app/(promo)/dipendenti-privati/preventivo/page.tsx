'use client'

import { useState, useCallback, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Euro, User } from 'lucide-react';
import Link from 'next/link';
import { OptimizedImage } from '@/app/components/ui/optimized-image';
import { useRouter } from 'next/navigation';
import { useContactForm } from '@/app/hooks/useContactForm';
import { COMPANY_INFO } from '@/app/lib/constants';

//! Specific amounts for dipendenti-privati
const amounts = ['10.000', '20.000', '30.000', '40.000', '50.000', '60.000'];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: "easeIn" } },
};

const steps = [
  { number: 1, title: "Importo", description: "Seleziona l'importo", icon: Euro },
  { number: 2, title: "Dati", description: "Inserisci i tuoi dati", icon: User },
];

//! Memoized form inputs component for better performance
const FormInputs = memo(({ formData, handleChange }: {
  formData: { name: string; email: string; phone: string; message: string; privacy?: boolean };
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="space-y-3 md:space-y-4">
      <div className="relative group">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Nome e Cognome"
          className="w-full p-3 md:p-4 rounded-full text-sm md:text-base border border-white/40 bg-white/80 backdrop-blur-sm focus:border-[#40BFEF] focus:ring-2 focus:ring-[#40BFEF]/20 outline-none transition-all group-hover:border-white/60"
          required
        />
      </div>
      <div className="relative group">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full p-3 md:p-4 rounded-full text-sm md:text-base border border-white/40 bg-white/80 backdrop-blur-sm focus:border-[#40BFEF] focus:ring-2 focus:ring-[#40BFEF]/20 outline-none transition-all group-hover:border-white/60"
          required
        />
      </div>
      <div className="relative group">
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Telefono"
          className="w-full p-3 md:p-4 rounded-full text-sm md:text-base border border-white/40 bg-white/80 backdrop-blur-sm focus:border-[#40BFEF] focus:ring-2 focus:ring-[#40BFEF]/20 outline-none transition-all group-hover:border-white/60"
          required
        />
      </div>

      <div className="relative">
        <input
          type="hidden"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
      </div>

      <div className="pt-2 md:pt-4">
        <label className="flex items-start space-x-3 cursor-pointer group">
          <div className="relative flex h-6 items-center">
            <input
              type="checkbox"
              name="privacy"
              checked={formData.privacy}
              onChange={handleChange}
              className="peer sr-only"
              required
            />
            <div className="h-5 w-5 rounded border-2 border-white/40 bg-white/80 backdrop-blur-sm transition-all 
                          peer-checked:border-[#40BFEF] peer-checked:bg-[#40BFEF] peer-focus:ring-2 
                          peer-focus:ring-[#40BFEF]/20 group-hover:border-white/60">
              <svg 
                className="h-full w-full text-white opacity-0 transition-opacity peer-checked:opacity-100" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          <span className="text-sm text-white/80 group-hover:text-white transition-colors">
            Accetto il trattamento dei dati personali secondo la{' '}
            <Link href="/privacy-policy" className="text-[#40BFEF] hover:text-white underline decoration-[#40BFEF]/30 hover:decoration-white/60 transition-colors">
              Privacy Policy
            </Link>
          </span>
        </label>
      </div>
    </form>
  );
});

FormInputs.displayName = 'FormInputs';

export default function QuotationPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [amount, setAmount] = useState('');
  const { formData, handleChange, handleSubmit, isLoading, isSuccess } = useContactForm();

  const handleQuotationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // First send the email
      const emailResponse = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: COMPANY_INFO.email,
          subject: 'Nuova richiesta di preventivo - Dipendenti Privati',
          formData: {
            ...formData,
            amount: `${amount}`,
            profession: 'Dipendente Privato',
          }
        }),
      });

      if (!emailResponse.ok) {
        throw new Error('Errore durante l\'invio del messaggio');
      }

      // Then handle the form submission through the hook
      await handleSubmit(e);

    } catch (error) {
      console.error('Error:', error);
      // You might want to show an error message to the user here
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#003B7E] via-[#002f66] to-[#002755] overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] bg-[size:60px_60px] mix-blend-overlay" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-transparent backdrop-blur-[1px]" />
      
      {/* Back button */}
      <div className="fixed top-4 left-4 z-50">
        <Button
          variant="ghost"
          onClick={() => router.back()}
          className="text-white hover:bg-white/10 flex items-center gap-2"
        >
          <ArrowLeft className="h-6 w-6" />
          <span>Torna indietro</span>
        </Button>
      </div>
     
      <main className="relative pt-20 pb-16 px-4 sm:px-6 max-w-2xl mx-auto">
        <Card className="p-6 md:p-8 bg-white/5 backdrop-blur-sm rounded-3xl border-white/10">

          {/* Progress Steps - Updated layout and styling */}
          <div className="relative mb-12">
            <div className="relative z-10 flex justify-between">
              {steps.map(({ number, title, description, icon: Icon }) => (
                <div key={number} className="flex-1 flex flex-col items-center">
                  <motion.div
                    animate={{
                      scale: number <= step ? 1.1 : 1,
                      backgroundColor: number <= step ? '#40BFEF' : 'rgba(255, 255, 255, 0.1)',
                    }}
                    className="w-14 h-14 rounded-full flex items-center justify-center mb-2 transition-colors"
                  >
                    <Icon className={`h-6 w-6 ${number <= step ? 'text-white' : 'text-white/60'}`} />
                  </motion.div>
                  <div className="text-center">
                    <span className="text-sm font-medium text-white block">{title}</span>
                    <span className="text-xs text-white/80 mt-1">{description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                {...fadeIn}
                className="space-y-6"
              >
                <h3 className="text-xl md:text-2xl font-medium text-white text-center">Di che importo hai bisogno?</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
                  {amounts.map((amt) => (
                    <motion.button
                      key={amt}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        setAmount(amt);
                        setStep(2);
                      }}
                      className={`p-3 md:p-4 rounded-full text-center text-sm md:text-base transition-all duration-300 ${
                        amount === amt
                          ? 'bg-[#40BFEF] text-white shadow-lg shadow-[#40BFEF]/20'
                          : 'bg-white/10 text-white/60 hover:bg-white/20 hover:text-white'
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
                className="space-y-6 h-full flex flex-col"
              >
                <h3 className="text-xl md:text-2xl font-medium text-white text-center">Inserisci i tuoi dati</h3>
                <div className="flex-grow">
                  <FormInputs formData={formData} handleChange={handleChange} />
                </div>

                <div className="mt-auto pt-8 flex flex-col gap-4 w-full">
                  <Button
                    variant="secondary"
                    size="lg"
                    onClick={handleQuotationSubmit}
                    disabled={isLoading || !formData.name || !formData.email || !formData.phone || !formData.privacy}
                    className="w-full max-w-2xl mx-auto rounded-3xl text-lg hover:bg-secondary/90"
                  >
                    {isLoading ? 'Invio in corso...' : 'Richiedi Preventivo'}
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setStep(1)}
                    className="text-white hover:bg-white/10 mx-auto"
                  >
                    Precedente
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {isSuccess && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute inset-0 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-lg"
            >
              <div className="text-center p-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="w-16 h-16 bg-[#40BFEF] rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </motion.div>
                <h3 className="text-2xl font-medium text-white mb-4">Richiesta Inviata!</h3>
                <p className="text-white/80 mb-6">Ti contatteremo presto per discutere la tua richiesta.</p>
                <Button asChild>
                  <Link href="/" className="bg-[#40BFEF] hover:bg-[#35a5d3] text-white shadow-lg shadow-[#40BFEF]/20">
                    Torna alla Home
                  </Link>
                </Button>
              </div>
            </motion.div>
          )}
        </Card>

        {/* Logo Section */}
        <Card className="mt-8 p-6 bg-white/60 backdrop-blur-sm border-white/10">
          <div className="flex justify-center">
            <OptimizedImage
              src="/full-logo.png"
              alt="CessioneSubito Logo"
              width={200}
              height={60}
              className="h-auto w-auto"
              priority
            />
          </div>
        </Card>
      </main>
    </div>
  );
}