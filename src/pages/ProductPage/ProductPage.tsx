import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { productsData } from '@data/.';
import { useCart } from '@hooks/useProductContext';
import { useProductQuantity } from './hooks/useProductQuantity'
import { ProductGallery } from './components/ProductGallery/ProductGallery'
import { ProductBadges } from './components/ProductGallery/ProductBadges'
import { ProductRating } from './components/ProductInfo/ProductRating'
import { ProductPrice } from './components/ProductInfo/ProductPrice'
import { AddToCartSection } from './components/ProductInfo/AddToCartSection'
import { ProductDetailsCard } from './components/ProductDetails/ProductDetailsCard'
import { ShippingInfo } from './components/ProductDetails/ShippingInfo'
import type { Product } from './types/product';

const ProductPage = () =>
{
  const [ selectedImage, setSelectedImage ] = useState( 0 )
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();

  const product = productsData.find( ( p ) => p.id === id ) as Product
  const { quantity, increment, decrement } = useProductQuantity( 1 )



  const handleAddToCart = () => {
    addToCart( product, quantity );
  };

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

        <ProductRating rating={ product.rating } reviews={ product.reviews } />

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
            category={ String( product.category ) }
            inStock={ product.inStock }
            productId={ String( product.id ) }
          />
          <ShippingInfo />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
