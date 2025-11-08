import React from 'react';
import { Card, CardContent } from '@ui/.';

interface ProductDetailsCardProps {
  category: string;
  inStock: boolean;
  productId: string;
}

export const ProductDetailsCard: React.FC<ProductDetailsCardProps> = ({
  category,
  inStock,
  productId,
}) => {
  return (
    <Card className="border-border/80 bg-muted/50">
      <CardContent className="p-4">
        <h3 className="mb-2 text-lg font-semibold">Produktdetails</h3>
        <div className="space-y-1 text-sm text-muted-foreground">
          <div className="flex justify-between">
            <span>Kategorie:</span>
            <span>{category}</span>
          </div>
          <div className="flex justify-between">
            <span>Verfügbarkeit:</span>
            <span>{inStock ? 'Auf Lager' : 'Ausverkauft'}</span>
          </div>
          <div className="flex justify-between">
            <span>Artikelnummer:</span>
            <span>{productId}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
