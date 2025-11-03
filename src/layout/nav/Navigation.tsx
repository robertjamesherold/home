import { Logo } from './ui';
import { NavItemsData } from './data';
import { Link } from 'react-router-dom';
import { Button } from '@/ui/Buttons';
import { ShoppingCart } from 'lucide-react';
import { useHorizontalPadding } from '@/pages/shopify/LandingPage/hooks';

const Navigation: React.FC<{
  onToggleCart: () => void;
  cartCount: number;
  isMobile: boolean;
}> = ({ onToggleCart, cartCount, isMobile }) => {
  const navItems = NavItemsData;
  const horizontalPadding = useHorizontalPadding();

  return (
    <header
      className={`flex w-full flex-row justify-between bg-gray-900 py-2 ${horizontalPadding}`}
    >
      <div className="flex items-center gap-6">
        <Logo />
        <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.id}
              type="button"
              to={item.to}
              className={`navlink ${item.active ? 'text-white' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      <Button
        onClick={onToggleCart}
        variant="primary"
        size={isMobile ? 'medium' : 'large'}
        className="relative w-full sm:w-auto"
        icon={<ShoppingCart />}
        iconClassName="h-4 w-4 mr-2"
        label="Warenkorb"
      >
        <span
          className={`absolute -right-2 -top-2 inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-white text-xs font-semibold text-purple-600 shadow ${cartCount > 0 ? 'opacity-100' : 'opacity-0'}`}
        >
          {cartCount}
        </span>
      </Button>
    </header>
  );
};

export default Navigation;
