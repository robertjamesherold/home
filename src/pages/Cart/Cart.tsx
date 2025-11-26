import { Column, Section, Grid } from '@/layout'
import { Title } from '@/typography';

import { CartItems, EmptyCart, OrderSummary } from './components';
import { useCartPage } from './hooks';

const Cart: React.FC = () =>
{
  const { items, subtotal, shippingCost, tax, total, updateQuantity, removeFromCart, navigate, FREE_SHIPPING_THRESHOLD } = useCartPage()

  if ( !items.length )
  {
    return <EmptyCart />
  }

  return (
    <Section className="mx-auto safe-area-padding py-8">
      <Column className="gap-8">
        <Title level={ 1 } weight="bold" text='Warenkorb' />

        <Grid className="grid-cols-1 gap-8  lg:grid-cols-3">
          <CartItems
            items={ items }
            onUpdateQuantity={ updateQuantity }
            onRemove={ removeFromCart }
          />

          <OrderSummary
            subtotal={ subtotal }
            shippingCost={ shippingCost }
            tax={ tax }
            total={ total }
            onCheckout={ () => navigate( '/checkout' ) }
            continueShoppingPath="/products"
            freeShippingThreshold={ FREE_SHIPPING_THRESHOLD }
          />
        </Grid>
      </Column>
    </Section>
  )
};

export default Cart