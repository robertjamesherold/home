import { Column } from '@/layout';
import { Title, TextParagraph } from '@/typography';
import { Button, Card, CardContent, Separator } from '@/ui';
import { RowBetween } from '../ui';

interface OrderSummaryProps {
  subtotal: number;
  shippingCost: number;
  tax: number;
  total: number;
  onCheckout: () => void;
  continueShoppingPath: string;
  freeShippingThreshold: number;
}


const OrderSummary: React.FC<OrderSummaryProps> = ({
  subtotal,
  shippingCost,
  tax,
  total,
  onCheckout,
  continueShoppingPath,
  freeShippingThreshold,
}) => {

  const remainingToFreeShipping = Math.max( freeShippingThreshold - subtotal, 0 )
  const currency = ( value: number ) => `${ value.toFixed( 2 ) } €`;

  return (
    <Card className="sticky top-24">
      <CardContent className="space-y-6 p-6">
        <Title level={ 4 } weight="semibold" text='Zusammenfassung' />
        <Column className="space-y-3 text-sm">
          <RowBetween label="Zwischensumme" value={currency(subtotal)} />
          <RowBetween label="Versand" value={ shippingCost === 0 ? 'Kostenlos' : currency( shippingCost ) } />
          <RowBetween label="MwSt. (19%)" value={ currency( tax ) } className="text-gray-600" />
        </Column>
        <Separator />
        <RowBetween label="Gesamt" value={ currency( total ) } labelClassName="text-lg" valueClassName="text-xl" />
        { remainingToFreeShipping > 0 ? (
          <TextParagraph className="text-sm text-destructive-600" text={ `Noch ${ currency( remainingToFreeShipping ) } bis zum kostenlosen Versand.` } />
        ) : (
            <TextParagraph className="text-sm text-green-600" text='Sie genießen kostenlosen Versand!' />
        )}

        <Column className="gap-3">
          <Button onClick={onCheckout} size="lg" className="w-full" text="Zur Kasse" />
          <Button isLink to={ continueShoppingPath } className="w-full" variant="outline" text=" Weiter einkaufen" />
        </Column>
      </CardContent>
    </Card>
  );
};



export default OrderSummary;
