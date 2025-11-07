import { Link } from 'react-router-dom'
import { Card, CardContent } from '@ui/.'
import useRandomImages from '@/hooks/useRandomImages'
import type { FeaturedProductsType } from '../types' 
import { Row, Image } from '@/layout'
import { Title } from '@typography/.'

const ImageCard: React.FC<{ product: FeaturedProductsType }> = ( { product } ) =>
{
    const { getRandomImageUrls } = useRandomImages();

    return (
        <>
            {
                product.featuredProducts.map( ( product ) => (
                    <Link key={ product.id } to={ `/product/${ product.id }` }>
                        <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                            { getRandomImageUrls( 1, { cacheKey: product.id } ).map( ( img ) => (
                            <Image
                                isAbsolute={ false }
                                key={ img }
                                src={ img }
                                alt={ product.name }
                                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                            />
                        ) ) }
                        <CardContent className="p-4">
                            <Title level={ 4 } weight='bold' className="mb-2" text={ product.name } />
                            <Row className="gap-2 items-center">
                                <Title level={ 5 }>{ product.price.toFixed( 2 ) }€</Title>
                                { product.originalPrice && (
                                    <Title level={ 6 } className="text-sm text-gray-500 line-through">{ product.originalPrice.toFixed( 2 ) }€</Title>
                                ) }
                            </Row>
                        </CardContent>
                    </Card>
                </Link>
            ) )
        }
        </>
    )
}

export default ImageCard