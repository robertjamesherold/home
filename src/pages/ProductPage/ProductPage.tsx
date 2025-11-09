import { useMemo } from 'react';
import { useParams } from 'react-router-dom';

import { productsData } from '@/data';
import { useCart } from '@/hooks';
import { Column } from '@/layout';
import type { ProductType } from '@/types';

import { useProductImages } from './hooks/useProductImages';
import { ProductGallery } from './components/ProductGallery/ProductGallery';
import { ProductBadges } from './components/ProductGallery/ProductBadges';
import { ProductRating } from './components/ProductInfo/ProductRating';
import { ProductPrice } from './components/ProductInfo/ProductPrice';
import { AddToCartSection } from './components/ProductInfo/AddToCartSection';
import { ProductDetailsCard } from './components/ProductDetails';
import { ShippingInfo } from './components/ProductDetails/ShippingInfo';
import { useProductQuantity } from './hooks/useProductQuantity';

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = useMemo<ProductType | undefined>(
    () => productsData.find((item) => item.id === id),
    [id]
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
    <div className="@container relative mx-auto grid w-full max-w-6xl gap-10 px-4 py-10 md:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-16 lg:px-8 lg:py-14">
      <ProductGallery
        productName={product.name}
        images={productImages}
        selectedIndex={selectedImage}
        onSelectImage={setSelectedImage}
      />

      <Column className="h-full space-y-8">
        <div className="space-y-4">
          <ProductBadges tags={product.tags} />

          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {product.name}
          </h1>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <ProductRating
              score={product.rating.score}
              reviews={product.rating.reviews}
            />

            <ProductPrice
              price={product.price}
              originalPrice={product.originalPrice}
            />
          </div>
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
          <ProductDetailsCard {...product.details} />
          <ShippingInfo />
        </div>
      </Column>
    </div>
  );
};

export default ProductPage;
