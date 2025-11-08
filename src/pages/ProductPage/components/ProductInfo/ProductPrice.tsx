import React from 'react';

interface ProductPriceProps {
  price: number;
  originalPrice?: number;
}

export const ProductPrice: React.FC<ProductPriceProps> = ({ price, originalPrice }) => {
  return (
    <div className="mt-4 flex items-baseline gap-3">
      <span className="text-3xl font-semibold">{Number(price).toFixed(2)}€</span>
      {originalPrice && (
        <span className="text-lg text-muted-foreground line-through">
          {Number(originalPrice).toFixed(2)}€
        </span>
      )}
    </div>
  );
};
