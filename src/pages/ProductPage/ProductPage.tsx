import { useMemo, useState } from 'react';

import { useCart, useProducts } from '@/hooks';
import type { ProductType as Product } from '@/types/Product.types'
import { Column } from '@/layout'
import { default as detailData } from './data/detailData';

import { ProductGallery } from './components/ProductGallery/ProductGallery';
import { ProductBadges } from './components/ProductGallery/ProductBadges';
import { ProductRating } from './components/ProductInfo/ProductRating';
import { ProductPrice } from './components/ProductInfo/ProductPrice';
import { AddToCartSection } from './components/ProductInfo/AddToCartSection';
import { default as DetailCard } from './components/ProductDetails/Detail'
import { useProductQuantity } from './hooks/useProductQuantity';
import { Section } from '@/layout'

const ProductPage: React.FC = () =>
{
  const { products } = useProducts()
  const product = useMemo( () =>
    products.find( ( p: Product ) => p.id === p.id ),
    [ products ]
  )

  const { addToCart } = useCart();
  const { quantity, increment, decrement, reset } = useProductQuantity(1);
  const [ selectedImage, setSelectedImage ] = useState( 0 );

  const handleAddToCart = () => {
    if ( product )
    {
      addToCart( product, quantity )
      reset();
    }
  };

  if ( !product )
  {
    return <Section>Product not found.</Section>
  }

  return (
    <Section className="mx-auto grid w-full gap-10 lg:grid-cols-2 grid-rows-[auto_auto] safe-area-padding section ">
      <ProductGallery
        productName={product.title}
        images={ product.images ?? ( product.image ? [ product.image ] : undefined ) }
        selectedIndex={selectedImage}
        onSelectImage={setSelectedImage}
      />

      <Column className="h-full space-y-2 ">

          <ProductBadges tags={product.tags} />

          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          { product.title }
          </h1>

        <div className="flex flex-col sm:justify-between">
            <ProductRating
              score={product.rating.score}
              reviews={product.rating.reviews}
            />

            <ProductPrice
              price={product.price}
              originalPrice={product.originalPrice}
            />
          </div>


        {product.description ? (
          <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
            {product.description}
          </p>
        ) : null}

        <AddToCartSection
          quantity={quantity}
          onQuantityIncrement={increment}
          onQuantityDecrement={decrement}
          category={product.category}
          onAddToCart={handleAddToCart}
          inStock={product.inStock}
        />

        <div className="space-y-6">
          <DetailCard { ...{ detailData } } />
        </div>
      </Column>
    </Section>
  );
};

export default ProductPage;
