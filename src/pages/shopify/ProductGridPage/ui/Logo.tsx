import React from 'react';
import { ShoppingCart } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center space-x-2">
      <ShoppingCart className="h-8 w-8 text-violet-600" />
      <h1 className="bg-linear-to-r from-violet-600 to-pink-600 bg-clip-text text-2xl font-bold text-transparent">
        ShopifyStore
      </h1>
    </div>
  );
};

export default Logo;
