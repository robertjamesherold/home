import type { ProductType } from '@/types';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';

import { useCart, useRandomImages } from '@/hooks';
import { Article, Image, Row, Header, Footer } from '@/layout';
import { TextParagraph, Title } from '@/typography';
import { Badge, Button, Card, CardAction, CardContent } from '@/ui';

interface ProductCardProps {
  filteredProducts: ProductType[];
}

const ProductCard: React.FC<ProductCardProps> = ({ filteredProducts }) => {
  const { addToCart } = useCart();
  const { getRandomImageUrls } = useRandomImages();

  if (!filteredProducts.length) {
    return null;
  }

  return (
    <>
      {filteredProducts.map((product) => {
        const galleryImages =
          product.images?.length && product.images.length > 0
            ? product.images
            : getRandomImageUrls(2, { cacheKey: `grid-${product.id}` });
        const tags = product.tags ?? [];

        const handleAddToCart = () => addToCart(product, 1);

        return (
          <Article key={product.id}>
            <Card className="@container group h-full overflow-hidden transition-shadow hover:shadow-lg">
              <Link
                to={`/product/${product.link ?? product.id}`}
                className="relative block aspect-4/3 max-h-[30cqh] overflow-hidden"
              >
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
                    key={img}
                    isAbsolute
                    src={img}
                    alt={product.name}
                    className="inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ))}
              </Link>

              <CardContent className="h-fit space-y-1 p-4">
                <Header className="flex flex-col gap-0">
                  <Row className="align-center h-6 place-items-center">
                    <TextParagraph
                      sm
                      className="text-gray-500"
                      text={product.category}
                    />
                  </Row>
                  <Link
                    to={`/product/${product.link ?? product.id}`}
                    className="align-left h-6 place-items-start"
                  >
                    <Title
                      level={5}
                      weight="bold"
                      className="align-center flex"
                      text={product.name}
                    />
                  </Link>
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
                  <Title level={5} text={`${product.price.toFixed(2)}€`} />
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
                    onClick={() => handleAddToCart()}
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
