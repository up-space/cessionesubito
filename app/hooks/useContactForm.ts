import { useState } from 'react';
import { FormData } from '../types/contact';
import { COMPANY_INFO } from '../lib/constants';

const initialFormData: FormData = {
  name: '',
  email: '',
  phone: '',
  message: ''
};

export const useContactForm = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setIsSuccess(false);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: COMPANY_INFO.email,
          subject: 'Nuovo messaggio dal sito web',
          formData: formData
        }),
      });

      if (!response.ok) {
        throw new Error('Errore durante l\'invio del messaggio');
      }

      setIsSuccess(true);
      setFormData(initialFormData);
    } catch (err) {
      setError('Si è verificato un errore. Per favore riprova più tardi.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return {
    formData,
    isLoading,
    isSuccess,
    error,
    handleSubmit,
    handleChange
  };
}; 