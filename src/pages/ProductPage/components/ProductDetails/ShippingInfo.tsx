import React from 'react';
import { Truck, RefreshCw, Shield } from 'lucide-react';

export const ShippingInfo: React.FC = () => {
  return (
    <div className="space-y-3 pt-4 text-sm text-muted-foreground">
      <div className="flex items-center gap-3">
        <Truck className="h-5 w-5 text-muted-foreground" />
        <span>Kostenloser Versand ab 50€</span>
      </div>
      <div className="flex items-center gap-3">
        <RefreshCw className="h-5 w-5 text-muted-foreground" />
        <span>30 Tage Rückgaberecht</span>
      </div>
      <div className="flex items-center gap-3">
        <Shield className="h-5 w-5 text-muted-foreground" />
        <span>2 Jahre Garantie</span>
      </div>
    </div>
  );
};
