import { useMemo } from 'react';
import { useParams } from 'react-router-dom';

import { useCart, useProducts } from '@/hooks';
import { Column } from '@/layout';
import type { ProductType } from '@/types';
import { default as detailData } from './data/detailData';

import { useProductImages } from './hooks/useProductImages';
import { ProductGallery } from './components/ProductGallery/ProductGallery';
import { ProductBadges } from './components/ProductGallery/ProductBadges';
import { ProductRating } from './components/ProductInfo/ProductRating';
import { ProductPrice } from './components/ProductInfo/ProductPrice';
import { AddToCartSection } from './components/ProductInfo/AddToCartSection';
import { default as DetailCard } from './components/ProductDetails/Detail'
import { useProductQuantity } from './hooks/useProductQuantity';
import { Section } from '@/layout'

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { products } = useProducts();
  const product = useMemo<ProductType | undefined>(
    () =>
      products.find((item) => {
        if (!id) return false;
        return item.id === id || item.link === id;
      }),
    [products, id]
  );

  const { addToCart } = useCart();
  const { quantity, increment, decrement, reset } = useProductQuantity(1);

  const { productImages, selectedImage, setSelectedImage } = useProductImages({
    productId: product?.id,
    initialImages: product?.images,
  });

  if (!product) {
    return null;
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    reset();
  };

  return (
    <Section className="mx-auto grid w-full gap-10 lg:grid-cols-2 grid-rows-[auto_auto] safe-area-padding section ">
      <ProductGallery
        productName={product.name}
        images={productImages}
        selectedIndex={selectedImage}
        onSelectImage={setSelectedImage}
      />

      <Column className="h-full space-y-2 ">

          <ProductBadges tags={product.tags} />

          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {product.name}
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
