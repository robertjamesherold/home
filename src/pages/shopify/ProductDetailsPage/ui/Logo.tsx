import type { FC } from 'react';
import { ShoppingCart } from 'lucide-react';

const Logo: FC = () => (
  <div className="flex items-center space-x-2">
    <ShoppingCart className="w-8 h-8 text-violet-600" />
    <h1 className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent">
      ShopifyStore
    </h1>
  </div>
);

export default Logo;
