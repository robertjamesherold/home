import type { ProductType } from '@/types';
import { Link } from 'react-router-dom';
import { useMemo } from 'react';
import { Star } from 'lucide-react';

import { useCart, useRandomImages } from '@/hooks';
import { Image, Container, Row, Header, Footer } from '@/layout';
import { TextParagraph, Title } from '@/typography';
import { Badge, Button, Card, CardAction, CardContent } from '@/ui';

type HomepageProductCardProps = {
  filteredProducts: ProductType[];
};

const ProductCard: React.FC<HomepageProductCardProps> = ({
  filteredProducts,
}) => {
  const { getRandomImageUrls } = useRandomImages();
  const { addToCart } = useCart();

  const products = useMemo(() => filteredProducts ?? [], [filteredProducts]);

  if (products.length === 0) {
    return null;
  }

  return (
    <>
      {products.map((product) => {
        const galleryImages =
          product.images?.length && product.images.length > 0
            ? product.images
            : getRandomImageUrls(2, { cacheKey: `home-${product.id}` });
        const tags = product.tags ?? [];

        const handleAddToCart = () => addToCart(product, 1);

        return (
          <Link key={product.id} to={`/product/${product.link ?? product.id}`}>
            <Card className="@container group h-full overflow-hidden transition-shadow hover:shadow-lg">
              <Container className="aspect-4/3 relative max-h-[30cqh] overflow-hidden">
                {tags.includes('new') && (
                  <Badge className="absolute left-2 top-2 z-10">Neu</Badge>
                )}
                {tags.includes('sale') && (
                  <Badge
                    className="absolute right-2 top-2 z-10"
                    variant="destructive"
                  >
                    Sale
                  </Badge>
                )}
                {galleryImages.map((img) => (
                  <Image
                    isAbsolute
                    key={img}
                    src={img}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ))}
              </Container>
              <CardContent className="h-fit space-y-1 p-4">
                <Header className="flex flex-col gap-0">
                  <Row className="align-center h-6 place-items-center">
                    <TextParagraph
                      sm
                      className="text-gray-500"
                      text={product.category}
                    />
                  </Row>
                  <Row className="align-center h-6 place-items-center">
                    <Title
                      level={5}
                      weight="bold"
                      className="align-center flex"
                      text={product.name}
                    />
                  </Row>
                </Header>
                <Row className="align-center h-6 place-items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 leading-4 text-yellow-400" />
                  <TextParagraph
                    sm
                    className="leading-4 text-slate-900"
                    text={product.rating.score.toFixed(1)}
                  />
                  <TextParagraph
                    sm
                    className="leading-4 text-gray-500"
                    text={`(${product.rating.reviews})`}
                  />
                </Row>

                <Footer className="align-center flex h-6 place-items-center gap-2">
                  <Title
                    level={5}
                    text={`${product.price.toFixed(2)}€`}
                  />
                  {product.originalPrice && (
                    <Title
                      level={6}
                      className="text-gray-500 line-through"
                      text={`${product.originalPrice.toFixed(2)}€`}
                    />
                  )}
                </Footer>
                <CardAction>
                  <Button
                    variant="destructive"
                    className="w-full"
                    onClick={(event) => {
                      event.preventDefault();
                      handleAddToCart();
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

export default ProductCard;
