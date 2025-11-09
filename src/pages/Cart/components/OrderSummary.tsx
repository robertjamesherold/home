import { Link } from 'react-router-dom';

import { Column } from '@/layout';
import { Title, TextParagraph } from '@/typography';
import { Button, Card, CardContent, Separator } from '@/ui';

interface OrderSummaryProps {
  subtotal: number;
  shippingCost: number;
  tax: number;
  total: number;
  onCheckout: () => void;
  continueShoppingPath: string;
  freeShippingThreshold: number;
}

const currency = (value: number) => `${value.toFixed(2)}€`;

const OrderSummary: React.FC<OrderSummaryProps> = ({
  subtotal,
  shippingCost,
  tax,
  total,
  onCheckout,
  continueShoppingPath,
  freeShippingThreshold,
}) => {
  const remainingToFreeShipping = Math.max(freeShippingThreshold - subtotal, 0);

  return (
    <Card className="sticky top-24">
      <CardContent className="space-y-6 p-6">
        <Title level={4} weight="semibold">
          Zusammenfassung
        </Title>

        <Column className="space-y-3 text-sm">
          <RowBetween label="Zwischensumme" value={currency(subtotal)} />
          <RowBetween
            label="Versand"
            value={shippingCost === 0 ? 'Kostenlos' : currency(shippingCost)}
          />
          <RowBetween label="MwSt. (19%)" value={currency(tax)} className="text-gray-600" />
        </Column>

        <Separator />

        <RowBetween label="Gesamt" value={currency(total)} labelClassName="text-lg" valueClassName="text-xl" />

        {remainingToFreeShipping > 0 ? (
          <TextParagraph className="text-sm text-muted-foreground">
            Noch {currency(remainingToFreeShipping)} bis zum kostenlosen Versand.
          </TextParagraph>
        ) : (
          <TextParagraph className="text-sm text-green-600">
            Sie genießen kostenlosen Versand!
          </TextParagraph>
        )}

        <Column className="gap-3">
          <Button onClick={onCheckout} size="lg" className="w-full">
            Zur Kasse
          </Button>
          <Link to={continueShoppingPath} className="w-full">
            <Button variant="outline" className="w-full">
              Weiter einkaufen
            </Button>
          </Link>
        </Column>
      </CardContent>
    </Card>
  );
};

interface RowBetweenProps {
  label: string;
  value: string;
  className?: string;
  labelClassName?: string;
  valueClassName?: string;
}

const RowBetween: React.FC<RowBetweenProps> = ({
  label,
  value,
  className = '',
  labelClassName = '',
  valueClassName = '',
}) => {
  return (
    <div className={`flex justify-between ${className}`}>
      <span className={labelClassName}>{label}</span>
      <span className={valueClassName}>{value}</span>
    </div>
  );
};

export default OrderSummary;
