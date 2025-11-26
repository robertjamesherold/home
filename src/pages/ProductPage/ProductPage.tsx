import { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useCart, useProducts } from '@/hooks';
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
import { TextParagraph, Title } from '@typography/.'

const ProductPage: React.FC = () =>
{
  const { id } = useParams<{ id: string }>()
  const { findProductByIdentifier, isReady } = useProducts()
  const product = useMemo(
    () => ( id ? findProductByIdentifier( id ) : undefined ),
    [ id, findProductByIdentifier ]
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
    if ( !isReady )
    {
      return <Section>Produkt wird geladen ...</Section>
    }

    return <Section>Produkt nicht gefunden.</Section>
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

        <Title level={ 1 } className="text-6xl tracking-tight" text={ product.title } />


        <Column className="flex flex-col sm:justify-between">
            <ProductRating
              score={product.rating.score}
              reviews={product.rating.reviews}
            />

            <ProductPrice
              price={product.price}
              originalPrice={product.originalPrice}
            />
        </Column>


        { product.description ? ( <TextParagraph className="max-w-xl text-base leading-relaxed text-muted-foreground" text={ product.description } /> ) : null }

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
