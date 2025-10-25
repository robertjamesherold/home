import { useCallback, useMemo, useState } from 'react';
import type { Product } from '../types';


const useCart = (initial: Product[] = []) => {
  const [cart, setCart] = useState<Product[]>(initial);

  const addToCart = useCallback((product: Product) => {
    setCart((prev) => [...prev, product]);
  }, []);

  const removeFromCart = useCallback((productId: string) => {
    setCart((prev) => {
      const idx = prev.findIndex((p) => p.id === productId);
      if (idx === -1) return prev;
      return [...prev.slice(0, idx), ...prev.slice(idx + 1)];
    });
  }, []);

  const removeAllFromCart = useCallback((productId: string) => {
    setCart((prev) => prev.filter((p) => p.id !== productId));
  }, []);

  const getTotalPrice = useMemo(
    () => () => cart.reduce((sum, p) => sum + parseFloat(p.price), 0).toFixed(2),
    [cart],
  );

  const totalItems = cart.length;

  return {
    cart,
    addToCart,
    removeFromCart,
    removeAllFromCart,
    getTotalPrice,
    totalItems,
  };
};

export default useCart;
