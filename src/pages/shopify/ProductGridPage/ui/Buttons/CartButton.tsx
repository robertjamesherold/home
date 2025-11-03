import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

const CartButton = () => {
  return (
    <Link
      to="/cart"
      className="flex items-center space-x-2 rounded-lg bg-purple-600 px-4 py-2 text-white transition hover:bg-purple-700"
    >
      <ShoppingCart className="h-5 w-5" />
      <span>Warenkorb</span>
    </Link>
  );
};

export default CartButton;
