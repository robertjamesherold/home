import { useParams } from 'react-router-dom'
import { useMemo, useState } from 'react'
import { productsData } from '@data/.';
import { useCart } from '@hooks/useProductContext';
import { useProductQuantity } from './hooks/useProductQuantity'
import { ProductGallery } from './components/ProductGallery/ProductGallery'
import { ProductBadges } from './components/ProductGallery/ProductBadges'
import { ProductRating } from './components/ProductInfo/ProductRating'
import { ProductPrice } from './components/ProductInfo/ProductPrice'
import { AddToCartSection } from './components/ProductInfo/AddToCartSection'
import { ProductDetailsCard } from './components/ProductDetails'
import { ShippingInfo } from './components/ProductDetails/ShippingInfo'
import type { ProductType } from '@/types'

const ProductPage = () =>
{
  const [ selectedImage, setSelectedImage ] = useState( 0 )
  const { id } = useParams<{ id: string }>();
  const product = productsData.find( ( p ) => p.id === id ) as ProductType
  const addToCart = useCart()
  useMemo( () => addToCart, [ addToCart ] )


  const { quantity, increment, decrement } = useProductQuantity( 1 )
  const handleAddToCart = () => setIsQuantity( isQuantity + 1 )
  const [ isQuantity, setIsQuantity ] = useState( quantity )


  return (
    <div className="container relative mx-auto grid w-full gap-8 px-4 py-8 md:grid-cols-2">
      {/* Gallery Section */ }
      <div>
        <ProductGallery
          productName={ String( product.name ) }
          selectedIndex={ selectedImage }
          onSelectImage={ setSelectedImage }
        />
      </div>

      {/* Info Section */ }
      <div>
        <ProductBadges tags={ product.tags } />

        <h1 className="text-3xl font-semibold">{String(product.name)}</h1>

        <ProductRating score={ product.rating?.score } reviews={ product.rating?.reviews } />

        <ProductPrice
          price={ product.price }
          originalPrice={ product.originalPrice }
        />

        <p className="mt-4 text-base text-muted-foreground">
          { String( product.description ) }
        </p>

        <AddToCartSection
          quantity={ quantity }
          onQuantityIncrement={ increment }
          onQuantityDecrement={ decrement }
          category={ String( product.category ) }
          onAddToCart={ handleAddToCart }
          inStock={ product.inStock }
        />

        <div className="mt-6">
          <ProductDetailsCard
            { ...product.details }
          />
          <ShippingInfo />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
