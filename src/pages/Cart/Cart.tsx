import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import { useCart } from '@/hooks';
import { Column, Section, Grid } from '@/layout'
import { Title } from '@/typography';

import { CartItems, EmptyCart, OrderSummary } from './components';

const FREE_SHIPPING_THRESHOLD = 100;
const SHIPPING_COST = 6.99;
const TAX_RATE = 0.19;

const Cart: React.FC = () => {
  const { items, totalPrice, updateQuantity, removeFromCart } = useCart();
  const navigate = useNavigate();

  const { subtotal, shippingCost, tax, total } = useMemo(() => {
    const subtotalValue = totalPrice ?? 0;
    const shippingValue = subtotalValue >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_COST;
    const taxValue = subtotalValue * TAX_RATE;
    const totalValue = subtotalValue + shippingValue;

    return {
      subtotal: subtotalValue,
      shippingCost: shippingValue,
      tax: taxValue,
      total: totalValue,
    };
  }, [totalPrice]);

  if (!items.length) {
    return <EmptyCart />;
  }

  return (
    <Section className="container mx-auto px-4 py-8">
      <Column className="gap-8">
        <Title level={ 1 } weight="bold" text='Warenkorb' />

        <Grid className="grid-cols-1 gap-8 lg:grid-cols-3">
          <CartItems
            items={items}
            onUpdateQuantity={updateQuantity}
            onRemove={removeFromCart}
          />

          <OrderSummary
            subtotal={subtotal}
            shippingCost={shippingCost}
            tax={tax}
            total={total}
            onCheckout={() => navigate('/checkout')}
            continueShoppingPath="/products"
            freeShippingThreshold={FREE_SHIPPING_THRESHOLD}
          />
        </Grid>
      </Column>
    </Section>
  );
};

export default Cart;
