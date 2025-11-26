
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import { useCart } from '@/hooks';



const useCartPage = () =>
{
  const FREE_SHIPPING_THRESHOLD = 100
  const SHIPPING_COST = 6.99
  const TAX_RATE = 0.19;
  const { items, totalPrice, updateQuantity, removeFromCart } = useCart();
  const navigate = useNavigate();

  const { subtotal, shippingCost, tax, total } = useMemo(() => {
    const subtotalValue = totalPrice ?? 0;
    const shippingValue = subtotalValue >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_COST;
    const taxValue = subtotalValue * TAX_RATE;
    const totalValue = subtotalValue + shippingValue + taxValue;

    return {
      subtotal: subtotalValue,
      shippingCost: shippingValue,
      tax: taxValue,
      total: totalValue,
    };
  }, [totalPrice]);
    
    return { items, subtotal, shippingCost, tax, total, updateQuantity, removeFromCart, navigate, FREE_SHIPPING_THRESHOLD, SHIPPING_COST, TAX_RATE }
};

export default useCartPage;
