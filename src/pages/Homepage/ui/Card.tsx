import { Link } from 'react-router-dom'
import { Star } from 'lucide-react'
import { Image, Row, Header, Footer } from '@/layout';
import { TextParagraph, Title } from '@/typography';
import { Card, CardContent } from '@/ui'
import type { ProductType } from '@/types'

const ImageCard: React.FC<ProductType> = ( { id, link, title, image, category, rating, price, originalPrice } ) =>
{   
        return (
          <Link
            to={ `/product/${ link ?? id }` }
          >
            <Card className="overflow-hidden transition-shadow hover:shadow-lg">

                <Image
                key={ id }
                  isAbsolute={false}
                src={ image }
                alt={ id }
                  className="aspect-5/3 h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />

              <CardContent className="h-fit space-y-1 p-4">
                <Header className="flex flex-col gap-0">
                  <Row className="align-center h-6 place-items-center">
                    <TextParagraph
                      sm
                      className="text-gray-500"
                      text={ category }
                    />
                  </Row>
                  <Row className="align-center h-6 place-items-center">
                    <Title
                      level={5}
                      weight="bold"
                      className="align-center flex"
                      text={ title }
                    />
                  </Row>
                </Header>
                <Row className="align-center h-6 place-items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 leading-4 text-yellow-400" />
                  <TextParagraph
                    sm
                    className="leading-4 text-slate-900"
                    text={ rating.score.toFixed( 1 ) }
                  />
                  <TextParagraph
                    sm
                    className="leading-4 text-gray-500"
                    text={ `(${ rating.reviews })` }
                  />
                </Row>

                <Footer className="align-center flex h-6 place-items-center gap-2 mb-4">
                  <Title
                    level={5}
                    text={ `${ price.toFixed( 2 ) }€` }
                  />
                  { originalPrice && (
                    <Title
                      level={6}
                      className="text-gray-500 line-through"
                      text={ `${ originalPrice.toFixed( 2 ) }€` }
                    />
                  )}
                </Footer>
              </CardContent>
            </Card>
          </Link>

  );
};

export default ImageCard;
