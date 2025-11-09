import { availablePaymentMethods, createPaymentSession } from '../services/paymentService.js';
import { asyncHandler } from '../utils/asyncHandler.js';

export const getPaymentMethods = asyncHandler(async (_req, res) => {
  return res.json({ methods: availablePaymentMethods });
});

export const createPaymentSessionHandler = asyncHandler(async (req, res) => {
  const { method, amount, currency, metadata } = req.body;

  if (!method || typeof method !== 'string') {
    return res.status(400).json({ message: 'Payment method is required.' });
  }

  if (!amount || typeof amount !== 'number') {
    return res.status(400).json({ message: 'Payment amount is required.' });
  }

  const session = await createPaymentSession({
    method,
    amount,
    currency: currency || 'eur',
    metadata,
  });

  return res.status(201).json({ payment: session });
});
