import React from 'react';
import Navigation from './Navigation';
import { CartSidebar, Filter } from './components';
import { useProductsState, useWindowSize } from '@/hooks';
import useHorizontalPadding from '../../pages/shopify/LandingPage/hooks/useHorizontalPadding';

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

const horizontalPadding = useHorizontalPadding();

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
