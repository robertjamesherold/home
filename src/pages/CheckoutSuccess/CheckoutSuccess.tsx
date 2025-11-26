import { Link, useLocation } from 'react-router-dom';
// no local React hooks needed
import { CheckCircle2, ArrowRight } from 'lucide-react';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Separator,
} from '@ui/.';

type CheckoutState = {
  orderNumber?: string;
  total?: number;
  shippingCost?: number;
  tax?: number;
  items?: Array<{ id: string; name: string; quantity: number; price: number }>;
};

const CheckoutSuccess: React.FC = () => {
  const location = useLocation();
  const state = ( location.state as CheckoutState & { error?: string } ) ?? {};

  const errorMessage = state.error

  const orderNumber = state.orderNumber ?? 'LX-??????';
  const total = state.total ?? 0;
  const shippingCost = state.shippingCost ?? 0;
  const tax = state.tax ?? 0;
  const items = state.items ?? [];

  return (
    <section className="container mx-auto px-4 py-10">
      <div className="flex flex-col items-center text-center">
        { errorMessage ? (
          <CheckCircle2 className="mb-4 h-14 w-14 text-red-600" />
        ) : (
            <CheckCircle2 className="mb-4 h-14 w-14 text-gray-900" />
        ) }
        <p className="text-xs uppercase tracking-[0.4em] text-gray-400">
          Erfolg
        </p>
        <h1 className="text-3xl font-semibold text-gray-900">
          { errorMessage ? 'Problem bei der Bestellung' : 'Vielen Dank!' }
        </h1>
        <p className="mt-2 max-w-xl text-gray-500">
          { errorMessage
            ? 'Beim Verarbeiten Ihrer Bestellung ist ein Problem aufgetreten. Bitte prüfen Sie die Hinweise unten oder versuchen Sie es später erneut.'
            : 'Ihre Bestellung ist bestätigt. Wir benachrichtigen Sie, sobald das Paket unser minimalistisches Lager verlässt.' }
        </p>
      </div>

      <Card className="mx-auto mt-8 max-w-3xl border border-gray-100 bg-white shadow-sm">
        <CardHeader>
          <CardTitle className="flex flex-wrap items-center justify-between text-base text-gray-900 sm:text-lg">
            <span>Bestellung {orderNumber}</span>
            <span className="text-sm font-normal text-gray-500">
              Minimal Studio Fulfillment
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-gray-600">
          { errorMessage && (
            <div className="rounded-md border border-red-200 bg-red-50 p-4 text-sm text-red-700">
              <strong>Fehler:</strong> { errorMessage }
            </div>
          ) }
          <div className="space-y-3">
            {items.length === 0 && (
              <p className="text-gray-500">Keine Positionen verfügbar.</p>
            )}
            {items.map((item) => (
              <div key={item.id} className="flex items-center justify-between">
                <span>
                  {item.name} × {item.quantity}
                </span>
                <span className="text-gray-900">
                  {(item.price * item.quantity).toFixed(2)}€
                </span>
              </div>
            ))}
          </div>
          <Separator />
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span>Zwischensumme</span>
              <span className="text-gray-900">
                {(total - shippingCost).toFixed(2)}€
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span>Versand</span>
              <span className="text-gray-900">
                {shippingCost === 0
                  ? 'Kostenlos'
                  : `${shippingCost.toFixed(2)}€`}
              </span>
            </div>
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-gray-400">
              <span>MwSt.</span>
              <span className="text-gray-900">{tax.toFixed(2)}€</span>
            </div>
          </div>
          <Separator />
          <div className="flex items-center justify-between text-base font-semibold text-gray-900">
            <span>Gesamtsumme</span>
            <span>{total.toFixed(2)}€</span>
          </div>
        </CardContent>
      </Card>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Button size="lg">
          <Link to="/products" className="flex items-center gap-2">
            Weiter shoppen
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
        <Button variant="destructive" size="lg">
          <Link to="/account">Bestellung einsehen</Link>
        </Button>
      </div>
    </section>
  );
};

export default CheckoutSuccess;
