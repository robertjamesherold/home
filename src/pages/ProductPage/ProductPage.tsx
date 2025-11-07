import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Star, Truck, RefreshCw, Shield, Plus, Minus } from 'lucide-react'
import { Badge, Button, Card, CardContent, Separator } from '@ui/.'
import { productsData } from '@data/.'
import { useCart } from '@hooks/useProductContext'
import { toast } from 'sonner'

import useRandomImages from '@/hooks/useRandomImages'
const ProductPage: React.FC = () =>
{
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { addToCart } = useCart()
  const [ quantity, setQuantity ] = useState( 1 )
  const [ selectedImage, setSelectedImage ] = useState( 0 )

  const product = productsData.find( ( p ) => p.id === id )
  const { getRandomImageUrls } = useRandomImages();

  if ( !product )
  {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="mb-4">Produkt nicht gefunden</h2>
        <Button onClick={ () => navigate( '/products' ) }>
          Zurück zu Produkten
        </Button>
      </div>
    )
  }

  const handleAddToCart = () =>
  {
    addToCart( product, quantity )
    toast.success( `${ product.name } wurde zum Warenkorb hinzugefügt` )
  }

  const relatedProducts = productsData
    .filter( ( p ) => p.category === product.category && p.id !== product.id )
    .slice( 0, 4 )


  return (
    <div className="container mx-auto px-4 py-8">
      {/* Product Details */ }
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {/* Images */ }
        <div className="space-y-4">
          <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">

            { getRandomImageUrls( 2, { cacheKey: product.id } ).map( ( img ) => (
              <img
                src={ img }
                alt={ product.name }
                className="w-full h-full object-cover"
              />
            ) ) } 
          </div>
          <div className="grid grid-cols-4 gap-4">
          { getRandomImageUrls( 2, { cacheKey: product.id } ).map( ( image, index ) => (

              <button
                key={ index }
                onClick={ () => setSelectedImage( index ) }
                className={ `aspect-square overflow-hidden rounded-lg border-2 ${ selectedImage === index ? 'border-black' : 'border-transparent'
                  }` }
            >
                <img
                  src={ image }
                  alt={ `${ product.name } ${ index + 1 }` }
                  className="w-full h-full object-cover"
                />
          
              </button>
            ) ) }
          </div>
        </div>

        {/* Info */ }
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              { product.tags.includes( 'new' ) && <Badge>Neu</Badge> }
              { product.tags.includes( 'sale' ) && (
                <Badge variant="destructive">Sale</Badge>
              ) }
            </div>
            <h1 className="mb-2">{ product.name }</h1>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-1">
                { [ ...Array( 5 ) ].map( ( _, i ) => (
                  <Star
                    key={ i }
                    className={ `h-4 w-4 ${ i < Math.floor( product.rating )
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300'
                      }` }
                  />
                ) ) }
              </div>
              <span className="text-sm text-gray-600">
                { product.rating } ({ product.reviews } Bewertungen)
              </span>
            </div>
          </div>

          <div className="flex items-baseline gap-3">
            <span className="text-3xl">{ product.price.toFixed( 2 ) }€</span>
            { product.originalPrice && (
              <span className="text-xl text-gray-500 line-through">
                { product.originalPrice.toFixed( 2 ) }€
              </span>
            ) }
          </div>

          <Separator />

          <p className="text-gray-700">{ product.description }</p>

          <div className="flex items-center gap-4">
            <div className="flex items-center border rounded-md">
              <Button
                variant="ghost"
                size="icon"
                onClick={ () => setQuantity( Math.max( 1, quantity - 1 ) ) }
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="px-4">{ quantity }</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={ () => setQuantity( quantity + 1 ) }
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>

            <Button
              onClick={ handleAddToCart }
              className="flex-1"
              size="lg"
              disabled={ !product.inStock }
            >
              { product.inStock ? 'In den Warenkorb' : 'Ausverkauft' }
            </Button>
          </div>

          <div className="space-y-3 pt-4">
            <div className="flex items-center gap-3">
              <Truck className="h-5 w-5 text-gray-600" />
              <span className="text-sm">Kostenloser Versand ab 50€</span>
            </div>
            <div className="flex items-center gap-3">
              <RefreshCw className="h-5 w-5 text-gray-600" />
              <span className="text-sm">30 Tage Rückgaberecht</span>
            </div>
            <div className="flex items-center gap-3">
              <Shield className="h-5 w-5 text-gray-600" />
              <span className="text-sm">2 Jahre Garantie</span>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */ }
      { relatedProducts.length > 0 && (
        <div>
          <h2 className="mb-6">Ähnliche Produkte</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            { relatedProducts.map( ( relatedProduct ) => {
              const imageUrls = getRandomImageUrls( 2, { cacheKey: product.id } )
                return (
              <Card
                key={ relatedProduct.id }
                className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                onClick={ () =>
                {
                  navigate( `/product/${ relatedProduct.id }` )
                  window.scrollTo( 0, 0 )
                } }
              >
                <div className="aspect-square overflow-hidden">
                      { imageUrls.map( ( img ) => (
                        <img
                          src={ img}
                          alt={ relatedProduct.name }
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        /> ) ) }
                </div>
                <CardContent className="p-4">
                  <h3 className="mb-2">{ relatedProduct.name }</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{ relatedProduct.price.toFixed( 2 ) }€</span>
                    { relatedProduct.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">
                        { relatedProduct.originalPrice.toFixed( 2 ) }€
                      </span>
                    ) }
                  </div>
                </CardContent>
              </Card>
            ) } ) }
          </div>
        </div>
      ) }
    </div>
  )
}

export default ProductPage