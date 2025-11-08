import { useParams, useNavigate } from 'react-router-dom'
import { productsData } from '@data/.';
import { useCart } from '@hooks/useProductContext';
import { useProductQuantity } from './hooks/useProductQuantity'
import { useProductImages } from './hooks/useProductImages'
import { ProductGallery } from './components/ProductGallery/ProductGallery'
import { ProductBadges } from './components/ProductGallery/ProductBadges'
import { ProductRating } from './components/ProductInfo/ProductRating'
import { ProductPrice } from './components/ProductInfo/ProductPrice'
import { AddToCartSection } from './components/ProductInfo/AddToCartSection'
import { ProductDetailsCard } from './components/ProductDetails/ProductDetailsCard'
import { ShippingInfo } from './components/ProductDetails/ShippingInfo'
import { Button } from '@ui/.'
import type { Product } from './types/product';

const ProductPage = () =>
{
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = productsData.find( ( p ) => p.id === id ) as Product | undefined;

  const { quantity, increment, decrement } = useProductQuantity( 1 )
  const { productImages, selectedImage, setSelectedImage } = useProductImages( {
    productId: id,
  } )


  // Early return for not found
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="mb-4 text-2xl font-semibold">Produkt nicht gefunden</h2>
        <Button onClick={() => navigate('/products')}>
          Zurück zu Produkten
        </Button>
      </div>
    );
  }


  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div className="relative w-full container mx-auto grid gap-8 px-4 py-8 md:grid-cols-2">
      {/* Gallery Section */ }
      <div>
        <ProductGallery
          images={ productImages }
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

        <ProductPrice price={ product.price } originalPrice={ product.originalPrice } />

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
