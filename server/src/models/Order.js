import mongoose from 'mongoose';

const OrderItemSchema = new mongoose.Schema(
  {
    productId: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
  },
  { _id: false }
);

const OrderSchema = new mongoose.Schema(
  {
    customer: {
      firstName: String,
      lastName: String,
      email: String,
      phone: String,
      address: String,
      city: String,
      zip: String,
    },
    items: [OrderItemSchema],
    totals: {
      subtotal: Number,
      shipping: Number,
      tax: Number,
      total: Number,
      currency: {
        type: String,
        default: 'eur',
      },
    },
    payment: {
      method: String,
      provider: String,
      status: String,
      externalReference: String,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Order || mongoose.model('Order', OrderSchema);
