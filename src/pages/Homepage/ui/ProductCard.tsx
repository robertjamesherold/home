import { Link } from 'react-router-dom';
import { useMemo } from 'react';
import { Star } from 'lucide-react';

import { useCart } from '@/hooks'
import { Image, Container, Row, Header, Footer } from '@/layout';
import { TextParagraph, Title } from '@/typography';
import { Badge, Button, Card, CardAction, CardContent } from '@/ui';
import type { ProductType as Product } from '@/types'

type ProductProps = {
  product: Product[]
}

const ProductCard = ( product: ProductProps ) =>
{

  const { addToCart } = useCart()
  const filteredProducts = useMemo( () => product.product ?? [], [ product ] )
  const handleAddToCart = ( product: Product ) => () => addToCart( product, 1 )
  {
    return ( <>
      { filteredProducts.map( ( filteredProduct ) =>


        <Link key={ filteredProduct.id } to={ `/product/${ filteredProduct.link ?? filteredProduct.id }` }>
          <Card className="@container group h-full overflow-hidden transition-shadow hover:shadow-lg">
            <Container className="aspect-4/3 relative max-h-[30cqh] overflow-hidden">
              { filteredProduct.tags?.includes( 'new' ) && (
                <Badge className="absolute left-2 top-2 z-10">Neu</Badge>
              ) }
              { filteredProduct.tags?.includes( 'sale' ) && (
                <Badge
                  className="absolute right-2 top-2 z-10"
                  variant="destructive"
                >
                  Sale
                </Badge>
              ) }
              <Image
                isAbsolute
                key={ filteredProduct.title }
                src={ filteredProduct.image }
                alt={ filteredProduct.title }
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />

            </Container>
            <CardContent className="h-fit space-y-1 p-4">
              <Header className="flex flex-col gap-0">
                <Row className="align-center h-6 place-items-center">
                  <TextParagraph
                    sm
                    className="text-gray-500"
                    text={ filteredProduct.category }
                  />
                </Row>
                <Row className="align-center h-6 place-items-center">
                  <Title
                    level={ 5 }
                    weight="bold"
                    className="align-center flex"
                    text={ filteredProduct.title }
                  />
                </Row>
              </Header>
              <Row className="align-center h-6 place-items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 leading-4 text-yellow-400" />
                <TextParagraph
                  sm
                  className="leading-4 text-slate-900"
                  text={ filteredProduct.rating.score.toFixed( 1 ) }
                />
                <TextParagraph
                  sm
                  className="leading-4 text-gray-500"
                  text={ `(${ filteredProduct.rating.reviews })` }
                />
              </Row>

              <Footer className="align-center flex h-6 place-items-center gap-2">
                <Title
                  level={ 5 }
                  text={ `${ filteredProduct.price.toFixed( 2 ) }€` }
                />
                { filteredProduct.originalPrice && (
                  <Title
                    level={ 6 }
                    className="text-gray-500 line-through"
                    text={ `${ filteredProduct.originalPrice.toFixed( 2 ) }€` }
                  />
                ) }
              </Footer>
              <CardAction>
                <Button
                  variant="destructive"
                  className="w-full"
                  onClick={ handleAddToCart( filteredProduct ) }

                >
                  In den Warenkorb
                </Button>
              </CardAction>
            </CardContent>
          </Card>
        </Link>
      )

      } </> )
  }
}


export default ProductCard