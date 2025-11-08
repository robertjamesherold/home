import React, { useState } from 'react'
import type { ProductType } from '@/types'
import { Link } from 'react-router-dom';
import { Card, CardAction, CardContent, Button } from '@ui/.';
import { Badge } from '@ui/badge';
import { Star } from 'lucide-react';
import { Image, Row, Header, Footer, Article } from '@/layout'
import useRandomImages from '@/hooks/useRandomImages';
import { TextParagraph, Title } from '@/typography';
import { useCart } from '@hooks/useProductContext'

const ProductCard: React.FC<{ filteredProducts: ProductType[] }> = ( {
  filteredProducts,
} ) =>
{
  const [ quantity, setQuantity ] = useState( 1 )
  const product = filteredProducts
  const { getRandomImageUrls } = useRandomImages()
  const { addToCart } = useCart()


  const handleAddToCart =
    () =>
    {
      addToCart( product, quantity )
      setQuantity( 1 )
    };

  return (
    <>
      { filteredProducts.map( ( product ) =>
      {
        const imageUrls = getRandomImageUrls(2, { cacheKey: product.id });

        return (
          <Article>
            <Card className="@container group h-full overflow-hidden transition-shadow hover:shadow-lg">
              <Link
                key={ product.id }
                to={ `/product/${ product.id }` }
                className="aspect-4/3 relative max-h-[30cqh] overflow-hidden"
              >
                <Badge className="absolute left-2 top-2 z-10">Neu</Badge>
                <Badge
                  className="absolute right-2 top-2 z-10"
                  variant="destructive"
                >
                  Sale
                </Badge>

                {imageUrls.map((img) => (
                  <Image
                    isAbsolute={true}
                    key={img}
                    src={ img }
                    className="h-full w-full object-cover inset-0 transition-transform duration-300 group-hover:scale-105"
                  />
                ))}
              </Link>

              <CardContent className="h-fit space-y-1 p-4">
                <Header className="flex flex-col gap-0">
                  <Row className="align-center h-6 place-items-center">
                    <TextParagraph sm className="text-gray-500">
                      { product.category }
                    </TextParagraph>
                  </Row>
                  <Link
                    key={ product.id }
                    to={ `/product/${ product.id }` }
                    className="align-left h-6 place-items-start"
                  >
                    <Title
                      level={5}
                      weight="bold"
                      className="align-center flex"
                      text={ product.name }
                    />
                  </Link>
                </Header>
                <Row className="align-center h-6 place-items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 leading-4 text-yellow-400" />
                  <TextParagraph
                    sm
                    className="leading-4 text-slate-900">{ product.rating }</TextParagraph>
                  <TextParagraph
                    sm
                    className="leading-4 text-gray-500"
                    text={ `(${ product.reviews })` }
                  />
                </Row>

                <Footer className="align-center flex h-6 place-items-center gap-2">
                  <Title
                    level={5}
                    className=""
                    text={ `${ product.price.toFixed( 2 ) }€` }
                  />

                  { product.originalPrice && (
                    <Title
                      level={6}
                      className="text-gray-500 line-through"
                      text={ `${ product.originalPrice.toFixed( 2 ) }€` }
                    />
                  )}

                </Footer>
                <CardAction>
                  <Button
                    variant="destructive"
                    className="w-full"
                    onClick={ handleAddToCart }
                  >
                    In den Warenkorb
                  </Button>
                </CardAction>
              </CardContent>

            </Card>
          </Article>
        );
      })}
    </>
  );
};

export default ProductCard;
