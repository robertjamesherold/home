import type { FC } from 'react';
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

const CartButton: FC = () => (
  <Link
    to="/cart"
    className="flex items-center space-x-2 rounded-lg bg-violet-600 px-4 py-2 text-white transition hover:bg-violet-700"
  >
    <ShoppingCart className="h-5 w-5" />
    <span>Warenkorb</span>
  </Link>
);

export default CartButton;
