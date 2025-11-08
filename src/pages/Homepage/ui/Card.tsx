import { Link } from 'react-router-dom';
import { Card, CardContent } from '@ui/.';
import { useRandomImages } from '@/hooks/useRandomImages'
import type { FeaturedProductsType } from '../types';
import { Row, Image, Header, Footer } from '@/layout';
import { Title, TextParagraph } from '@typography/.';
import { Star } from 'lucide-react';
import { CardAction, Button } from '@ui/.';

const ImageCard: React.FC<{ product: FeaturedProductsType }> = ({
  product,
}) => {
  const { getRandomImageUrls } = useRandomImages();

  return (
    <>
      {product.featuredProducts.map((product) => (
        <Link key={product.id} to={`/product/${product.id}`}>
          <Card className="overflow-hidden transition-shadow hover:shadow-lg">
            {getRandomImageUrls(1, { cacheKey: product.id }).map((img) => (
              <Image
                isAbsolute={false}
                key={img}
                src={img}
                alt={product.name}
                className="aspect-5/3 h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            ))}
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
                  text={product.rating}
                />
                <TextParagraph
                  sm
                  className="leading-4 text-gray-500"
                  text={`(${product.reviews})`}
                />
              </Row>

              <Footer className="align-center flex h-6 place-items-center gap-2">
                <Title
                  level={5}
                  className=""
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
                <Button variant="destructive" className="w-full">
                  In den Warenkorb
                </Button>
              </CardAction>
            </CardContent>
          </Card>
        </Link>
      ))}
    </>
  );
};

export default ImageCard;
