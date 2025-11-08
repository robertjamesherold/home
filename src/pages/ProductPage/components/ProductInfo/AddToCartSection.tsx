import React from 'react';
import { Button } from '@ui/.';
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
    <div className="mt-6 flex flex-wrap items-center gap-4">
      <QuantitySelector
        quantity={quantity}
        onIncrement={onQuantityIncrement}
        onDecrement={onQuantityDecrement}
      />
      <span className="text-sm text-muted-foreground">{category}</span>
      <Button
        type="button"
        onClick={onAddToCart}
        className="min-w-[200px] flex-1"
        size="lg"
        disabled={!inStock}
      >
        {inStock ? 'In den Warenkorb' : 'Ausverkauft'}
      </Button>
    </div>
  );
};
