import { useState } from 'react';
import { apiClient } from '@/hooks/apiClient';
import type { CheckoutPayload, CheckoutResponse } from '@/types';

export const useCheckoutSubmission = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitCheckout = async (payload: CheckoutPayload) => {
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await apiClient.post<CheckoutResponse>('/api/orders/checkout', payload);
      return response;
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Unbekannter Fehler';
      setError(message);
      throw err;
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    submitCheckout,
    isSubmitting,
    error,
  };
};
