import React from 'react';
import { ArrowRight, X } from 'lucide-react';
import { Button } from '@/ui/Buttons';
import { TextParagraph, Title } from '@/typography';
import type { Product } from '../../../pages/shopify/ProductGridPage/types';

type Props = {
  open: boolean;
  onClose: () => void;
  cart: Array<Product & { id: string }>;
  removeFromCart: (id: string) => void;
  getTotalPrice: () => string;
};

const formatPrice = (price: string): string => {
  const numeric = Number.parseFloat(price);
  if (Number.isNaN(numeric)) {
    return price;
  }

  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 2,
  }).format(numeric);
};

const CartSidebar: React.FC<Props> = ({
  open,
  onClose,
  cart,
  removeFromCart,
  getTotalPrice,
}) => {
  if (!open) return null;

  const totalDisplay = (() => {
    const value = Number.parseFloat(getTotalPrice());
    if (Number.isNaN(value)) {
      return `${getTotalPrice()} €`;
    }
    return new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
    }).format(value);
  })();

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-black/30 backdrop-blur-sm"
      onClick={onClose}
    >
      <aside
        className="relative flex h-full w-full max-w-md flex-col gap-6 overflow-hidden rounded-l-3xl bg-gradient-to-b from-white via-white to-purple-50 shadow-2xl sm:w-96"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-purple-100/60 px-6 pb-4 pt-6">
          <Title h3 bold className="text-gray-900" text="Dein Warenkorb" />
          <button
            type="button"
            onClick={onClose}
            className="rounded-full bg-purple-50 p-2 text-purple-500 transition hover:bg-purple-100 hover:text-purple-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-200"
            aria-label="Warenkorb schließen"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 space-y-4 overflow-y-auto px-6">
          {cart.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-3 rounded-3xl bg-purple-50/60 p-8 text-center">
              <Title
                h5
                semibold
                className="text-purple-600"
                text="Dein Warenkorb ist noch leer"
              />
              <TextParagraph
                sm
                className="text-gray-500"
                text="Füge Produkte hinzu, um sie hier zu sehen."
              />
            </div>
          ) : (
            cart.map((item) => (
              <article
                key={item.id}
                className="flex items-center gap-4 rounded-3xl bg-white p-4 shadow-lg shadow-purple-100/60"
              >
                <div className="h-16 w-16 overflow-hidden rounded-2xl bg-purple-50">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex-1 space-y-1">
                  <h3 className="line-clamp-2 text-sm font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-sm font-medium text-purple-600">
                    {formatPrice(item.price)}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => removeFromCart(item.id)}
                  className="rounded-full bg-purple-50 p-2 text-purple-400 transition hover:bg-purple-100 hover:text-purple-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-200"
                  aria-label="Artikel aus dem Warenkorb entfernen"
                >
                  <X className="h-4 w-4" />
                </button>
              </article>
            ))
          )}
        </div>

        <div className="space-y-4 border-t border-purple-100/60 px-6 pb-6 pt-4">
          <div className="flex items-center justify-between text-base font-semibold text-gray-900">
            <span>Gesamtsumme</span>
            <span className="text-xl text-purple-600">{totalDisplay}</span>
          </div>

          <Button
            variant="primary"
            size="large"
            iconPosition="right"
            icon={<ArrowRight />}
            label="Zur Kasse"
            className="w-full"
            onClick={onClose}
          />
        </div>
      </aside>
    </div>
  );
};

export default CartSidebar;
