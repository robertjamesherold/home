import React from 'react';
import Navigation from './Navigation';
import { CartSidebar} from './components';
import { useProductsState, useWindowSize } from '@/hooks';

type Props = {
  isInitial?: boolean;
};

const Nav: React.FC<Props> = () => {
  const {
    removeFromCart,
    getTotalPrice,
    showCart,
    setShowCart,
    cart,
    totalItems,
  } = useProductsState();


  return (
    <>
      <Navigation
        cartCount={totalItems}
        onToggleCart={() => setShowCart(!showCart)}
        isMobile={useWindowSize().width < 768}
      />

      <CartSidebar
        open={showCart}
        onClose={() => setShowCart(false)}
        cart={cart}
        removeFromCart={removeFromCart}
        getTotalPrice={getTotalPrice}
      />
    </>
  );
};

export default Nav;
