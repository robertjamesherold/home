import { Link } from 'react-router-dom';
import { useMemo } from 'react';
import { Star } from 'lucide-react';

import { useCart, useRandomImages } from '@/hooks';
import { Image, Row, Header, Footer } from '@/layout';
import { TextParagraph, Title } from '@/typography';
import { Button, Card, CardAction, CardContent } from '@/ui';

import type { FeaturedProductsType } from '../types';

const ImageCard: React.FC<{ product: FeaturedProductsType }> = ({
  product,
}) => {
  const { getRandomImageUrls } = useRandomImages();
  const { addToCart } = useCart();

  const featuredProducts = useMemo(
    () => product.featuredProducts ?? [],
    [product.featuredProducts]
  );

  if (featuredProducts.length === 0) {
    return null;
  }

  return (
    <>
      {featuredProducts.map((featuredProduct) => {
        const galleryImages =
          featuredProduct.images?.length && featuredProduct.images.length > 0
            ? featuredProduct.images
            : getRandomImageUrls(1, { cacheKey: `featured-${featuredProduct.id}` });

        return (
          <Link
            key={featuredProduct.id}
            to={`/product/${featuredProduct.link ?? featuredProduct.id}`}
          >
            <Card className="overflow-hidden transition-shadow hover:shadow-lg">
              {galleryImages.map((img) => (
                <Image
                  key={img}
                  isAbsolute={false}
                  src={img}
                  alt={featuredProduct.name}
                  className="aspect-5/3 h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              ))}
              <CardContent className="h-fit space-y-1 p-4">
                <Header className="flex flex-col gap-0">
                  <Row className="align-center h-6 place-items-center">
                    <TextParagraph
                      sm
                      className="text-gray-500"
                      text={featuredProduct.category}
                    />
                  </Row>
                  <Row className="align-center h-6 place-items-center">
                    <Title
                      level={5}
                      weight="bold"
                      className="align-center flex"
                      text={featuredProduct.name}
                    />
                  </Row>
                </Header>
                <Row className="align-center h-6 place-items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 leading-4 text-yellow-400" />
                  <TextParagraph
                    sm
                    className="leading-4 text-slate-900"
                    text={featuredProduct.rating.score.toFixed(1)}
                  />
                  <TextParagraph
                    sm
                    className="leading-4 text-gray-500"
                    text={`(${featuredProduct.rating.reviews})`}
                  />
                </Row>

                <Footer className="align-center flex h-6 place-items-center gap-2 mb-4">
                  <Title
                    level={5}
                    text={`${featuredProduct.price.toFixed(2)}€`}
                  />
                  {featuredProduct.originalPrice && (
                    <Title
                      level={6}
                      className="text-gray-500 line-through"
                      text={`${featuredProduct.originalPrice.toFixed(2)}€`}
                    />
                  )}
                </Footer>
                <CardAction>
                  <Button
                    variant="destructive"
                    className="w-full"
                    onClick={(event) => {
                      event.preventDefault();
                      addToCart(featuredProduct, 1);
                    }}
                  >
                    In den Warenkorb
                  </Button>
                </CardAction>
              </CardContent>
            </Card>
          </Link>
        );
      })}
    </>
  );
};

export default ImageCard;
