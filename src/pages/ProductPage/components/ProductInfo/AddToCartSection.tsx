import React from 'react';
import { Button } from '@/ui';
import { QuantitySelector } from './QuantitySelector';

type AddToCartSectionProps = {
  quantity: number;
  onQuantityIncrement: () => void;
  onQuantityDecrement: () => void;
  category: string;
  onAddToCart: () => void;
  inStock: boolean;
} & React.HTMLAttributes<HTMLDivElement>;


export const AddToCartSection: React.FC<AddToCartSectionProps> = ({
  quantity,
  onQuantityIncrement,
  onQuantityDecrement,
  category,
  onAddToCart,
  inStock,
}) => {
  return (
    <div className="my<-6 flex flex-col gap-4 sm:flex-row sm:items-center">
      <QuantitySelector
        quantity={quantity}
        onIncrement={onQuantityIncrement}
        onDecrement={onQuantityDecrement}
      />
      <Button
        type="button"
        onClick={onAddToCart}
        className="min-w-[200px] flex-1 whitespace-nowrap sm:w-auto min-h-10"
        size="lg"
        disabled={!inStock}
      >
        {inStock ? 'In den Warenkorb' : 'Ausverkauft'}
      </Button>
    </div>
  );
};
