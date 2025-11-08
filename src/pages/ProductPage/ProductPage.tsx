import { useEffect, useMemo, useState } from 'react';
import { ProductDetails } from './components/TabSpecsRow';
import { useNavigate, useParams } from 'react-router-dom';
import { Minus, Plus, RefreshCw, Shield, Star, Truck } from 'lucide-react';
import {
  Badge,
  Button,
  Card,
  CardContent,
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@ui/.';
import { productsData } from '@data/.';
import { useCart } from '@hooks/useProductContext';

import useRandomImages from '@/hooks/useRandomImages';
import { Image } from '@/layout';

const MIN_RELATED_COUNT = 12;
const MAX_RELATED_COUNT = 24;

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const { getRandomImageUrls } = useRandomImages();

  // Find product and assert type
  const product = productsData.find((p) => p.id === id) as
    | (typeof productsData)[number]
    | undefined;

  // State for random related products (to avoid impure Math.random in render)
  const [relatedProductsBase, setRelatedProductsBase] = useState<typeof productsData>([]);

  // State for product images (to avoid hook in conditional)
  const [productImages, setProductImages] = useState<string[]>([]);

  // Precomputed related images
  const [relatedImageUrls, setRelatedImageUrls] = useState<string[]>([]);

  // Generate random related products and images only when product changes
  useEffect(() => {
    setQuantity(1);
    setSelectedImage(0);

    if (product) {
      // Product images
      const images = getRandomImageUrls(4, { cacheKey: `${product.id}-gallery` });
      setProductImages(
        images.length
          ? images
          : getRandomImageUrls(1, { cacheKey: `${product.id}-gallery-fallback` })
      );

      // Related products
      const others = productsData.filter((p) => p.id !== product.id);
      if (!others.length) {
        setRelatedProductsBase([]);
        setRelatedImageUrls([]);
        return;
      }

      const sameCategory = others.filter((p) => p.category === product.category);
      const differentCategory = others.filter((p) => p.category !== product.category);
      const targetCount =
        Math.floor(Math.random() * (MAX_RELATED_COUNT - MIN_RELATED_COUNT + 1)) +
        MIN_RELATED_COUNT;

      const picks = [] as typeof others;
      for (let index = 0; index < targetCount; index += 1) {
        let pool = sameCategory.length ? sameCategory : others;
        if (sameCategory.length && differentCategory.length) {
          pool = Math.random() < 0.7 ? sameCategory : differentCategory;
        } else if (!sameCategory.length && differentCategory.length) {
          pool = differentCategory;
        }

        if (!pool.length) {
          break;
        }

        const randomIndex = Math.floor(Math.random() * pool.length);
        picks.push(pool[randomIndex]);
      }

      const finalRelated =
        picks.length
          ? picks
          : others.slice(0, Math.min(targetCount, others.length));

      setRelatedProductsBase(finalRelated);

      // Related product images
      const relImages = getRandomImageUrls(finalRelated.length, { cacheKey: `${product.id}-related` });
      setRelatedImageUrls(relImages);
    } else {
      setProductImages([]);
      setRelatedProductsBase([]);
      setRelatedImageUrls([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, product, getRandomImageUrls]);

  // Always define hooks at top level, not conditionally
  const relatedProductInstances = useMemo(
    () =>
      relatedProductsBase.map((relatedProduct, index) => ({
        product: relatedProduct,
        duplicateIndex: index,
      })),
    [relatedProductsBase]
  );

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

  const heroImage = productImages[selectedImage] ?? productImages[0] ?? '';

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div className="container mx-auto grid gap-8 px-4 py-8 md:grid-cols-2">
      <div className="space-y-3">
        {heroImage && (
          <Image
            src={heroImage}
            alt={String(product.name)}
            className="rounded-lg border border-border bg-muted/40"
          />
        )}
        {productImages.length > 1 && (
          <div className="grid grid-cols-4 gap-3">
            {productImages.map((image, index) => (
              <button
                key={image + index}
                type="button"
                onClick={() => setSelectedImage(index)}
                className={`overflow-hidden rounded-md border ${selectedImage === index ? 'border-foreground' : 'border-transparent'}`}
              >
                <Image
                  src={image}
                  alt={`${String(product.name)} ${index + 1}`}
                  className="h-full w-full overflow-hidden rounded-md"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      <div>
        <div className="mb-2 flex items-center gap-2">
          {Array.isArray(product.tags) && product.tags.includes('new') && <Badge>Neu</Badge>}
          {Array.isArray(product.tags) && product.tags.includes('sale') && (
            <Badge variant="destructive">Sale</Badge>
          )}
        </div>

        <h1 className="text-3xl font-semibold">{String(product.name)}</h1>

        <div className="mt-3 flex items-center gap-2">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, starIndex) => (
              <Star
                key={starIndex}
                className={`h-4 w-4 ${starIndex < Math.floor(Number(product.rating)) ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground/40'}`}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">
            {String(product.rating)} ({String(product.reviews)} Bewertungen)
          </span>
        </div>

        <div className="mt-4 flex items-baseline gap-3">
          <span className="text-3xl font-semibold">
            {Number(product.price).toFixed(2)}€
          </span>
          {product.originalPrice ? (
            <span className="text-lg text-muted-foreground line-through">
              {Number(product.originalPrice).toFixed(2)}€
            </span>
          ) : null}
        </div>

        <p className="mt-4 text-base text-muted-foreground">{String(product.description)}</p>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <div className="flex items-center rounded-md border">
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
            >
              <Minus className="h-4 w-4" />
            </Button>
            <span className="px-4 text-sm font-medium">{quantity}</span>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={() => setQuantity(quantity + 1)}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>

          <span className="text-sm text-muted-foreground">{String(product.category)}</span>

          <Button
            type="button"
            onClick={handleAddToCart}
            className="min-w-[200px] flex-1"
            size="lg"
            disabled={!product.inStock}
          >
            {product.inStock ? 'In den Warenkorb' : 'Ausverkauft'}
          </Button>
        </div>

        <div className="mt-6">
          <Card className="border-border/80 bg-muted/50">
            <CardContent className="p-4">
              <h3 className="mb-2 text-lg font-semibold">Produktdetails</h3>
              <div className="space-y-1 text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <span>Kategorie:</span>
                  <span>{String(product.category)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Verfügbarkeit:</span>
                  <span>{product.inStock ? 'Auf Lager' : 'Ausverkauft'}</span>
                </div>
                <div className="flex justify-between">
                  <span>Artikelnummer:</span>
                  <span>{String(product.id)}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-4">
            <ProductDetails />
          </div>

          <div className="space-y-3 pt-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-3">
              <Truck className="h-5 w-5 text-muted-foreground" />
              <span>Kostenloser Versand ab 50€</span>
            </div>
            <div className="flex items-center gap-3">
              <RefreshCw className="h-5 w-5 text-muted-foreground" />
              <span>30 Tage Rückgaberecht</span>
            </div>
            <div className="flex items-center gap-3">
              <Shield className="h-5 w-5 text-muted-foreground" />
              <span>2 Jahre Garantie</span>
            </div>
          </div>
        </div>
      </div>

      {relatedProductInstances.length > 0 && (
        <section className="md:col-span-2">
          <h2 className="mb-4 text-xl font-semibold">Ähnliche Produkte</h2>
          <Carousel>
            <CarouselContent>
              {relatedProductInstances.map(({ product: relatedProduct }, index) => {
                const imageUrl = relatedImageUrls[index] ?? heroImage;
                return (
                  <CarouselItem
                    key={`${relatedProduct.id}-${index}`}
                    className="basis-auto sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                  >
                    <Card className="overflow-hidden">
                      <Image
                        src={imageUrl}
                        alt={String(relatedProduct.name)}
                        className="h-40 w-full bg-muted"
                      />
                      <CardContent className="space-y-2 p-3">
                        <h3 className="text-sm font-medium leading-snug">
                          {String(relatedProduct.name)}
                        </h3>
                        <div className="flex items-center gap-2 text-sm">
                          <span className="font-semibold">
                            {Number(relatedProduct.price).toFixed(2)}€
                          </span>
                          {relatedProduct.originalPrice ? (
                            <span className="text-xs text-muted-foreground line-through">
                              {Number(relatedProduct.originalPrice).toFixed(2)}€
                            </span>
                          ) : null}
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>
        </section>
      )}
    </div>
  );
};

export default ProductPage;
