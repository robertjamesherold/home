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
    <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
      <QuantitySelector
        quantity={quantity}
        onIncrement={onQuantityIncrement}
        onDecrement={onQuantityDecrement}
      />
      <span className="text-sm text-muted-foreground sm:ml-2">{category}</span>
      <Button
        type="button"
        onClick={onAddToCart}
        className="min-w-[200px] flex-1 whitespace-nowrap sm:w-auto"
        size="lg"
        disabled={!inStock}
      >
        {inStock ? 'In den Warenkorb' : 'Ausverkauft'}
      </Button>
    </div>
  );
};
