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
    <div className="container relative mx-auto grid w-full gap-8 px-4 py-8 md:grid-cols-2">
      <div>
        <ProductGallery
          productName={product.name}
          images={productImages}
          selectedIndex={selectedImage}
          onSelectImage={setSelectedImage}
        />
      </div>

      <Column className="gap-6">
        <ProductBadges tags={product.tags} />

        <h1 className="text-3xl font-semibold">{product.name}</h1>

        <ProductRating
          score={product.rating.score}
          reviews={product.rating.reviews}
        />

        <ProductPrice price={product.price} originalPrice={product.originalPrice} />

        <p className="text-base text-muted-foreground">{product.description}</p>

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
