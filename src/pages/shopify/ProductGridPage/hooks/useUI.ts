// useUI.ts
import { useCallback, useState } from 'react';

const useUI = (initialShowCart = false) => {
  const [showCart, setShowCart] = useState<boolean>(initialShowCart);

  const toggleCart = useCallback(() => setShowCart((s) => !s), []);
  return { showCart, setShowCart, toggleCart };
};

export default useUI;
