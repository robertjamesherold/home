import { Link } from 'react-router-dom'
import { Star } from 'lucide-react'

import { useCart } from '@/hooks'
import type { ProductType } from '@/types'
import { Image, Row, Header, Footer } from '@/layout'
import { TextParagraph, Title } from '@/typography'
import { Button, Card, CardAction, CardContent } from '@/ui'

const ImageCard: React.FC<ProductType> = ( product ) =>
{
  const { addToCart } = useCart()
  const handleAddToCart = () => addToCart( product, 1 )

  return (
    <Card className="overflow-hidden transition-shadow hover:shadow-lg">
      <Link to={ `/product/${ product.id }` }>

        <Image
          isAbsolute={ false }
          src={ product.image }
          alt={ product.title }
          className="relative aspect-5/3 h-full w-full"
          imageClassName="transition-transform duration-300 hover:scale-105"
        />
      </Link>
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
            <Link to={ `/product/${ product.id }` }>

              <Title
                level={ 5 }
                weight="bold"
                className="align-center flex hover:underline"
                text={ product.title }
              />
            </Link>
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
          <Footer className="align-center mb-4 flex h-6 place-items-center gap-2">
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
              onClick={ handleAddToCart }
            >
              In den Warenkorb
            </Button>
          </CardAction>
        </CardContent>
    </Card>
  )
}

export default ImageCard