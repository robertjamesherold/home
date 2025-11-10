import type { CartItemType } from '@/types';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

import { Column, Row } from '@/layout';
import { TextParagraph, Title } from '@/typography'
import { Button, Card, CardContent } from '@/ui';


const CartItems: React.FC<CartItemType> = ( { product, quantity, onRemove, handleIncrease, handleDecrease }: CartItemType ) =>
{
  return (
    <Column className="space-y-4 lg:col-span-2">

      (
          <Card key={product.id}>
            <CardContent className="flex flex-col gap-4 p-4 sm:flex-row sm:items-start">
              <div className="h-28 w-full overflow-hidden rounded-md bg-muted sm:h-24 sm:w-24">
                <img
              src={ product.image }
              alt={ product.title }
                  className="h-full w-full object-cover"
                />
              </div>

              <Row className="flex-1 flex-col justify-between gap-4 sm:flex-row sm:items-start">
                <Column className="flex-1 space-y-1">
                  <Link to={`/product/${product.link ?? product.id}`} className="hover:underline">
                    <Title level={4} weight="semibold">
                  { product.title }
                    </Title>
                  </Link>
                  <TextParagraph className="text-sm text-gray-600">
                    {product.category}
                  </TextParagraph>
                  <Title level={5} className="text-lg">
                    {product.price.toFixed(2)}€
                  </Title>
                </Column>

                <Row className="items-center gap-4">
                  <div className="flex items-center rounded-md border">
                    <Button
                      variant="ghost"
                      size="icon"
                      aria-label="Menge verringern"
                      onClick={handleDecrease}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="px-4 text-sm font-medium">{quantity}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      aria-label="Menge erhöhen"
                      onClick={handleIncrease}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>

                  <Button
                    variant="ghost"
                    size="icon"
                    aria-label="Artikel entfernen"
                    onClick={() => onRemove(product.id)}
                  >
                    <Trash2 className="h-5 w-5 text-destructive" />
                  </Button>
                </Row>
              </Row>
            </CardContent>
          </Card>
        );

    </Column>
  );
};

export default CartItems;
