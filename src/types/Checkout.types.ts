export interface CheckoutItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export interface CheckoutCustomer {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  address: string;
  city: string;
  zip: string;
}

export interface CheckoutTotals {
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
  currency?: string;
}

export interface CheckoutPayload {
  customer: CheckoutCustomer;
  items: CheckoutItem[];
  totals: CheckoutTotals;
  paymentMethod: string;
}

export interface CheckoutPaymentResponse {
  provider: string;
  status: string;
  clientSecret?: string | null;
  intentId?: string;
  approvalUrl?: string;
  redirectUrl?: string;
  message?: string;
}

export interface CheckoutOrderResponse {
  _id: string;
  customer: CheckoutCustomer;
  items: CheckoutItem[];
  totals: CheckoutTotals & { currency: string };
  payment: {
    method: string;
    provider: string;
    status: string;
    externalReference?: string | null;
  };
  createdAt?: string;
  updatedAt?: string;
  persisted?: boolean;
}

export interface CheckoutResponse {
  order: CheckoutOrderResponse;
  payment: CheckoutPaymentResponse;
}
