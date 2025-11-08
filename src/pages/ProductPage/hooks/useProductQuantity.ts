import { useState } from 'react';

export const useProductQuantity = (initialQuantity: number = 1) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const increment = () => setQuantity((q) => q + 1);
  const decrement = () => setQuantity((q) => Math.max(1, q - 1));
  const reset = () => setQuantity(initialQuantity);

  return { quantity, setQuantity, increment, decrement, reset };
};
