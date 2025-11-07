import type { ProductType } from '@/types';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@ui/card';
import { Badge } from '@ui/badge';
import { Star } from 'lucide-react';
import useRandomImages from '@/hooks/useRandomImages'

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
                            <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full">
                                <div className="relative aspect-square overflow-hidden">

                                    { product.tags.includes( 'new' ) && (
                                        <Badge className="absolute top-2 left-2">Neu</Badge>
                                    ) }
                                    { product.tags.includes( 'sale' ) && (
                                        <Badge className="absolute top-2 right-2" variant="destructive">
                                            Sale
                                        </Badge>
                                    ) }
                                    { imageUrls.map( ( img ) => (
                                        <img
                                            key={ img }
                                            src={ img }
                                            alt={ product.name }
                                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                        />
                                    ) ) }
                                </div>
                                <CardContent className="p-4">
                                    <p className="text-sm text-gray-500 mb-1">{ product.category }</p>
                                    <h3 className="mb-2">{ product.name }</h3>

                                    <div className="flex items-center gap-1 mb-2">
                                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                        <span className="text-sm">{ product.rating }</span>
                                        <span className="text-sm text-gray-500">
                                            ({ product.reviews })
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <span className="text-lg">{ product.price.toFixed( 2 ) }€</span>
                                        { product.originalPrice && (
                                            <span className="text-sm text-gray-500 line-through">
                                                { product.originalPrice.toFixed( 2 ) }€
                                            </span>
                                        ) }
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    );
                } )
            }
        </> )
}

export default ProductCard;
