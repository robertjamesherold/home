import Stripe from 'stripe';

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const stripeClient = stripeSecretKey
  ? new Stripe(stripeSecretKey, {
      apiVersion: '2023-10-16',
    })
  : null;

export const availablePaymentMethods = [
  {
    id: 'card',
    label: 'Kreditkarte',
    provider: 'stripe',
    currencies: ['eur', 'usd', 'gbp'],
    capabilities: stripeClient ? ['succeeded', 'requires_action'] : ['requires_configuration'],
  },
  {
    id: 'paypal',
    label: 'PayPal',
    provider: 'paypal',
    currencies: ['eur', 'usd', 'gbp'],
    capabilities: ['redirect'],
  },
  {
    id: 'sofort',
    label: 'Sofortüberweisung',
    provider: 'klarna',
    currencies: ['eur'],
    capabilities: ['redirect'],
  },
];

export const createPaymentSession = async ({
  method,
  amount,
  currency,
  metadata = {},
}) => {
  switch (method) {
    case 'card': {
      if (!stripeClient) {
        return {
          provider: 'stripe',
          status: 'requires_configuration',
          clientSecret: null,
          message: 'Stripe is not configured. Provide STRIPE_SECRET_KEY to enable live payments.',
        };
      }

      const paymentIntent = await stripeClient.paymentIntents.create({
        amount,
        currency,
        metadata,
        automatic_payment_methods: { enabled: true },
      });

      return {
        provider: 'stripe',
        status: paymentIntent.status,
        clientSecret: paymentIntent.client_secret,
        intentId: paymentIntent.id,
      };
    }
    case 'paypal':
      return {
        provider: 'paypal',
        status: 'redirect_required',
        approvalUrl: 'https://www.paypal.com/checkoutnow?token=mock-token',
        message: 'Replace mock integration with live PayPal REST API credentials.',
      };
    case 'sofort':
      return {
        provider: 'klarna',
        status: 'redirect_required',
        redirectUrl: 'https://sofort.com/pay/redirect/mock',
        message: 'Integrate Klarna Sofortüberweisung API for production usage.',
      };
    default:
      throw new Error(`Unsupported payment method: ${method}`);
  }
};
