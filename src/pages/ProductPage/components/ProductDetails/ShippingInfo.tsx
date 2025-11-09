import React from 'react';
import { Truck, RefreshCw, Shield } from 'lucide-react';

export const ShippingInfo: React.FC = () => {
  return (
    <div className="space-y-4 rounded-3xl border border-dashed border-border/70 bg-muted/30 p-6 text-sm text-muted-foreground">
      <div className="flex items-center gap-3">
        <Truck className="h-5 w-5 text-primary" />
        <span>Kostenloser Versand ab 50€</span>
      </div>
      <div className="flex items-center gap-3">
        <RefreshCw className="h-5 w-5 text-primary" />
        <span>30 Tage Rückgaberecht</span>
      </div>
      <div className="flex items-center gap-3">
        <Shield className="h-5 w-5 text-primary" />
        <span>2 Jahre Garantie</span>
      </div>
    </div>
  );
};
