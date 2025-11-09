import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';

import { useCart, useRandomImages } from '@/hooks';
import { Image, Row, Header, Footer } from '@/layout';
import { TextParagraph, Title } from '@/typography';
import { Button, Card, CardAction, CardContent } from '@/ui';
import type { ProductType } from '@/types'

interface ProductCardProps
{
  filteredProducts: ProductType[]
}

const ImageCard: React.FC<ProductCardProps> = ({ filteredProducts }) =>
{
  const { addToCart } = useCart()

  const { getRandomImageUrls } = useRandomImages()

  return (
    <>
      { filteredProducts.map( ( product: ProductType ) =>
      {
        const galleryImages =
          product.images?.length && product.images.length > 0
            ? product.images
            : getRandomImageUrls( 1, { cacheKey: `grid-${ product.id }` } )

        const handleAddToCart = () => addToCart( product, 1 )

        return (
          <Link key={ product.id } to={ `/product/${ product.id }` }>
            <Card className="overflow-hidden transition-shadow hover:shadow-lg">
              { galleryImages.map( ( img: string ) => (
                <Image
                  key={ img }
                  isAbsolute={ false }
                  src={ img }
                  alt={ img }
                  className="aspect-5/3 h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              ) ) }
              <CardContent className="h-fit space-y-1 p-4">
                <Header className="flex flex-col gap-0">
                  <Row className="align-center h-6 place-items-center">
                    <TextParagraph
                      sm
                      className="text-gray-500"
                      text={ product.category }
                    />
                  </Row>
                  <Row className="align-center h-6 place-items-center">
                    <Title
                      level={ 5 }
                      weight="bold"
                      className="align-center flex"
                      text={ product.name }
                    />
                  </Row>
                </Header>
                <Row className="align-center h-6 place-items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 leading-4 text-yellow-400" />
                  <TextParagraph
                    sm
                    className="leading-4 text-slate-900"
                    text={ product.rating.score.toFixed( 1 ) }
                  />
                  <TextParagraph
                    sm
                    className="leading-4 text-gray-500"
                    text={ `(${ product.rating.reviews })` }
                  />
                </Row>
                <Footer className="align-center flex h-6 place-items-center gap-2 mb-4">
                  <Title level={ 5 } text={ `${ product.price.toFixed( 2 ) }€` } />
                  { product.originalPrice && (
                    <Title
                      level={ 6 }
                      className="text-gray-500 line-through"
                      text={ `${ product.originalPrice.toFixed( 2 ) }€` }
                    />
                  ) }
                </Footer>
                <CardAction>
                  <Button
                    variant="destructive"
                    className="w-full"
                    onClick={ () => handleAddToCart() }
                  >
                    In den Warenkorb
                  </Button>
                </CardAction>
              </CardContent>
            </Card>
          </Link>
        )
      } ) }
    </>
  );
};

export default ImageCard;
