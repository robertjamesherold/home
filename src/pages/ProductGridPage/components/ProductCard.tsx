import type { ProductType } from '@/types';
import { Link } from 'react-router-dom';
import { Card, CardAction, CardContent, Button } from '@ui/.'
import { Badge } from '@ui/badge';
import { Star } from 'lucide-react'
import { Image, Container, Column, Row, Header, Footer } from '@/layout'
import useRandomImages from '@/hooks/useRandomImages'
import { TextParagraph, Title } from '@/typography'

const ProductCard: React.FC<{ filteredProducts: ProductType[] }> = ( { filteredProducts } ) =>
{
    const { getRandomImageUrls } = useRandomImages();

    return (

        <>
            {
                filteredProducts.map( ( product ) =>
                {
                    const imageUrls = getRandomImageUrls( 2, { cacheKey: product.id } );

                    return (
                        <Link key={ product.id } to={ `/product/${ product.id }` }>
                            <Card className="@container group  overflow-hidden hover:shadow-lg transition-shadow h-full">
                                <Container className="relative aspect-4/3 max-h-[30cqh] overflow-hidden">

                                    { product.tags.includes( 'new' ) && (
                                        <Badge className="absolute top-2 left-2 z-10">Neu</Badge>
                                    ) }
                                    { product.tags.includes( 'sale' ) && (
                                        <Badge className="absolute top-2 right-2 z-10" variant="destructive">
                                            Sale
                                        </Badge>
                                    ) }
                                    { imageUrls.map( ( img ) => (
                                        <Image
                                            isAbsolute={ true }
                                            key={ img }
                                            src={ img }
                                            alt={ product.name }
                                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                    ) ) }
                                </Container>
                                <CardContent className="p-4 space-y-1 h-fit">
                                    <Header className="flex flex-col gap-0" >
                                        <Row className="h-6 align-center place-items-center"><TextParagraph sm className='text-gray-500' text={ product.category } /></Row>
                                        <Row className="h-6 align-center place-items-center"><Title level={ 5 } weight='bold' className="flex align-center" text={ product.name } /></Row>
                                    </Header>
                                    <Row className="h-6 align-center place-items-center gap-1">
                                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 leading-4" />
                                        <TextParagraph sm className='text-slate-900 leading-4' text={ product.rating } />
                                        <TextParagraph sm className='text-gray-500 leading-4' text={ `(${ product.reviews })` } />
                                    </Row>

                                    <Footer className="flex h-6 align-center place-items-center gap-2">
                                        <Title level={ 5 } className="" text={ `${ product.price.toFixed( 2 ) }€` } />
                                        { product.originalPrice && ( <Title level={ 6 } className="text-gray-500 line-through" text={ `${ product.originalPrice.toFixed( 2 ) }€` } /> ) }
                                    </Footer>
                                    <CardAction>
                                        <Button variant="destructive" className="w-full ">
                                            In den Warenkorb
                                        </Button>

                                    </CardAction>
                                </CardContent>


                            </Card>
                        </Link>
                    );
                } )
            }
        </> )
}

export default ProductCard;
