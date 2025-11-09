import mongoose from 'mongoose';
import Order from '../models/Order.js';
import { isDatabaseConnected } from '../config/database.js';
import { createPaymentSession } from '../services/paymentService.js';
import { asyncHandler } from '../utils/asyncHandler.js';

const inMemoryOrders = [];

export const checkoutOrder = asyncHandler(async (req, res) => {
  const { customer, items, totals, paymentMethod } = req.body;

  if (!Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ message: 'Order items are required.' });
  }

  if (!totals || typeof totals.total !== 'number') {
    return res.status(400).json({ message: 'Order totals are required.' });
  }

  if (!paymentMethod) {
    return res.status(400).json({ message: 'Payment method is required.' });
  }

  const amountInMinorUnits = Math.round(totals.total * 100);

  const paymentSession = await createPaymentSession({
    method: paymentMethod,
    amount: amountInMinorUnits,
    currency: totals.currency || 'eur',
    metadata: {
      email: customer?.email,
      fullName: `${customer?.firstName ?? ''} ${customer?.lastName ?? ''}`.trim(),
    },
  });

  const orderPayload = {
    customer,
    items: items.map((item) => ({
      productId: item.id,
      name: item.name,
      price: item.price,
      quantity: item.quantity,
    })),
    totals: {
      subtotal: totals.subtotal,
      shipping: totals.shipping,
      tax: totals.tax,
      total: totals.total,
      currency: totals.currency || 'eur',
    },
    payment: {
      method: paymentMethod,
      provider: paymentSession.provider,
      status: paymentSession.status,
      externalReference: paymentSession.intentId || paymentSession.approvalUrl || paymentSession.redirectUrl || null,
    },
  };

  let orderRecord;

  if (isDatabaseConnected()) {
    orderRecord = await Order.create(orderPayload);
  } else {
    orderRecord = {
      _id: new mongoose.Types.ObjectId().toString(),
      ...orderPayload,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      persisted: false,
    };
    inMemoryOrders.push(orderRecord);
  }

  return res.status(201).json({
    order: orderRecord,
    payment: paymentSession,
  });
});

export const listOrders = asyncHandler(async (_req, res) => {
  if (isDatabaseConnected()) {
    const orders = await Order.find().sort({ createdAt: -1 }).lean();
    return res.json({ orders });
  }

  return res.json({ orders: inMemoryOrders });
});
