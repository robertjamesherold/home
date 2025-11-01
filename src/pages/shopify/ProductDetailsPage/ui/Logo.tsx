import type { FC } from 'react';
import { ShoppingCart } from 'lucide-react';

const Logo: FC = () => (
  <div className="flex items-center space-x-2">
    <ShoppingCart className="h-8 w-8 text-violet-600" />
    <h1 className="bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-2xl font-bold text-transparent">
      ShopifyStore
    </h1>
  </div>
);

export default Logo;
