import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  ChevronLeft,
  ChevronRight,
  Minus,
  Plus,
  RefreshCw,
  Shield,
  Star,
  Truck,
} from 'lucide-react';
import { Badge, Button, Card, CardContent, Separator } from '@ui/.';
import { productsData } from '@data/.';
import { useCart } from '@hooks/useProductContext';
import { toast } from 'sonner';

import useRandomImages from '@/hooks/useRandomImages';

const MIN_RELATED_COUNT = 12;
const MAX_RELATED_COUNT = 24;

const ProductPage: React.FC = () =>
{
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [ quantity, setQuantity ] = useState( 1 );
  const [ selectedImage, setSelectedImage ] = useState( 0 );
  const relatedListRef = useRef<HTMLDivElement | null>( null );
  const baseSequenceWidthRef = useRef( 0 );
  const { getRandomImageUrl, getRandomImageUrls } = useRandomImages();

  const product = productsData.find( ( p ) => p.id === id );

  useEffect( () =>
  {
    setQuantity( 1 );
    setSelectedImage( 0 );
  }, [ id ] );

  if ( !product )
  {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="mb-4 text-2xl font-semibold">Produkt nicht gefunden</h2>
        <Button onClick={ () => navigate( '/products' ) }>
          Zurück zu Produkten
        </Button>
      </div>
    );
  }

  const productImages = useMemo( () =>
  {
    const images = getRandomImageUrls( 4, { cacheKey: `${ product.id }-gallery` } );
    return images.length ? images : getRandomImageUrls( 1, { cacheKey: `${ product.id }-gallery-fallback` } );
  }, [ getRandomImageUrls, product.id ] );

  const heroImage = productImages[ selectedImage ] ?? productImages[ 0 ] ?? '';

  const handleAddToCart = () =>
  {
    addToCart( product, quantity );
    toast.success( `${ product.name } wurde zum Warenkorb hinzugefügt` );
  };

  const relatedProductsBase = useMemo( () =>
  {
    const others = productsData.filter( ( p ) => p.id !== product.id );
    if ( !others.length )
    {
      return [];
    }

    const sameCategory = others.filter( ( p ) => p.category === product.category );
    const differentCategory = others.filter( ( p ) => p.category !== product.category );
    const targetCount = Math.floor( Math.random() * ( MAX_RELATED_COUNT - MIN_RELATED_COUNT + 1 ) ) + MIN_RELATED_COUNT;

    const picks = [] as typeof others;
    for ( let index = 0; index < targetCount; index += 1 )
    {
      let pool = sameCategory.length ? sameCategory : others;
      if ( sameCategory.length && differentCategory.length )
      {
        pool = Math.random() < 0.7 ? sameCategory : differentCategory;
      }
      else if ( !sameCategory.length && differentCategory.length )
      {
        pool = differentCategory;
      }

      if ( !pool.length )
      {
        break;
      }

      const randomIndex = Math.floor( Math.random() * pool.length );
      picks.push( pool[ randomIndex ] );
    }

    if ( !picks.length )
    {
      return others.slice( 0, Math.min( targetCount, others.length ) );
    }

    return picks;
  }, [ product.category, product.id ] );

  const showCarouselControls = relatedProductsBase.length > 4;

  const displayedRelatedProducts = useMemo( () =>
  {
    if ( !relatedProductsBase.length )
    {
      return [] as { product: typeof productsData[ number ]; duplicateIndex: number }[];
    }

    if ( !showCarouselControls )
    {
      return relatedProductsBase.map( ( relatedProduct, index ) => ( {
        product: relatedProduct,
        duplicateIndex: index,
      } ) );
    }

    const tripled = [] as { product: typeof productsData[ number ]; duplicateIndex: number }[];
    for ( let copyIndex = 0; copyIndex < 3; copyIndex += 1 )
    {
      relatedProductsBase.forEach( ( relatedProduct, itemIndex ) =>
      {
        tripled.push( {
          product: relatedProduct,
          duplicateIndex: copyIndex * relatedProductsBase.length + itemIndex,
        } );
      } );
    }

    return tripled;
  }, [ relatedProductsBase, showCarouselControls ] );

  useEffect( () =>
  {
    const container = relatedListRef.current;
    if ( !showCarouselControls || !container )
    {
      baseSequenceWidthRef.current = 0;
      return;
    }

    let frame = 0;

    const measure = () =>
    {
      cancelAnimationFrame( frame );
      frame = requestAnimationFrame( () =>
      {
        const node = relatedListRef.current;
        if ( !node )
        {
          return;
        }
        const totalWidth = node.scrollWidth;
        const baseWidth = totalWidth / 3;
        baseSequenceWidthRef.current = baseWidth;
        node.scrollLeft = baseWidth;
      } );
    };

    measure();

    const handleScroll = () =>
    {
      const node = relatedListRef.current;
      const baseWidth = baseSequenceWidthRef.current;
      if ( !node || !baseWidth )
      {
        return;
      }

      if ( node.scrollLeft <= 0 )
      {
        node.scrollLeft += baseWidth;
      }
      else if ( node.scrollLeft >= baseWidth * 2 )
      {
        node.scrollLeft -= baseWidth;
      }
    };

    const handleResize = () => measure();

    container.addEventListener( 'scroll', handleScroll );
    if ( typeof window !== 'undefined' )
    {
      window.addEventListener( 'resize', handleResize );
    }

    return () =>
    {
      container.removeEventListener( 'scroll', handleScroll );
      if ( typeof window !== 'undefined' )
      {
        window.removeEventListener( 'resize', handleResize );
      }
      cancelAnimationFrame( frame );
    };
  }, [ showCarouselControls, relatedProductsBase.length ] );

  const scrollRelatedProducts = ( direction: 'prev' | 'next' ) =>
  {
    const container = relatedListRef.current;
    if ( !container )
    {
      return;
    }

    const baseWidth = baseSequenceWidthRef.current || container.clientWidth;
    const scrollAmount = baseWidth * 0.85;

    container.scrollBy( {
      left: direction === 'next' ? scrollAmount : -scrollAmount,
      behavior: 'smooth',
    } );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div className="space-y-4">
          <div className="overflow-hidden rounded-lg border border-border bg-muted/40">
            { heroImage && (
              <img
                src={ heroImage }
                alt={ product.name }
                className="h-full w-full object-cover"
              />
            ) }
          </div>
          { productImages.length > 1 && (
            <div className="grid grid-cols-4 gap-3">
              { productImages.map( ( image, index ) => (
                <button
                  key={ image }
                  type="button"
                  onClick={ () => setSelectedImage( index ) }
                  className={`overflow-hidden rounded-md border ${ selectedImage === index ? 'border-foreground' : 'border-transparent' }`}
                >
                  <img
                    src={ image }
                    alt={`${ product.name } ${ index + 1 }`}
                    className="h-full w-full object-cover"
                  />
                </button>
              ) ) }
            </div>
          ) }
        </div>

        <div className="space-y-6">
          <div>
            <div className="mb-2 flex items-center gap-2">
              { product.tags.includes( 'new' ) && <Badge>Neu</Badge> }
              { product.tags.includes( 'sale' ) && <Badge variant="destructive">Sale</Badge> }
            </div>
            <h1 className="text-3xl font-semibold">{ product.name }</h1>
            <div className="mt-3 flex items-center gap-2">
              <div className="flex items-center gap-1">
                { [ ...Array( 5 ) ].map( ( _, starIndex ) => (
                  <Star
                    key={ starIndex }
                    className={`h-4 w-4 ${ starIndex < Math.floor( product.rating ) ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground/40' }`}
                  />
                ) ) }
              </div>
              <span className="text-sm text-muted-foreground">
                { product.rating } ({ product.reviews } Bewertungen)
              </span>
            </div>
          </div>

          <div className="flex items-baseline gap-3">
            <span className="text-3xl font-semibold">{ product.price.toFixed( 2 ) }€</span>
            { product.originalPrice && (
              <span className="text-lg text-muted-foreground line-through">
                { product.originalPrice.toFixed( 2 ) }€
              </span>
            ) }
          </div>

          <Separator />

          <p className="text-base text-muted-foreground">{ product.description }</p>

          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center rounded-md border">
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={ () => setQuantity( Math.max( 1, quantity - 1 ) ) }
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="px-4 text-sm font-medium">{ quantity }</span>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={ () => setQuantity( quantity + 1 ) }
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>

            <Button
              type="button"
              onClick={ handleAddToCart }
              className="flex-1 min-w-[200px]"
              size="lg"
              disabled={ !product.inStock }
            >
              { product.inStock ? 'In den Warenkorb' : 'Ausverkauft' }
            </Button>
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

      { relatedProductsBase.length > 0 && (
        <section className="mt-16">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Ähnliche Produkte</h2>
            { showCarouselControls && (
              <div className="hidden gap-2 md:flex">
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 rounded-full border"
                  onClick={ () => scrollRelatedProducts( 'prev' ) }
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 rounded-full border"
                  onClick={ () => scrollRelatedProducts( 'next' ) }
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            ) }
          </div>

          <div className="relative">
            { showCarouselControls && (
              <>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute left-0 top-1/2 z-10 hidden h-9 w-9 -translate-y-1/2 rounded-full border bg-background/80 backdrop-blur md:flex"
                  onClick={ () => scrollRelatedProducts( 'prev' ) }
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-1/2 z-10 hidden h-9 w-9 -translate-y-1/2 rounded-full border bg-background/80 backdrop-blur md:flex"
                  onClick={ () => scrollRelatedProducts( 'next' ) }
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </>
            ) }

            <div
              ref={ relatedListRef }
              className={`overflow-x-auto ${ showCarouselControls ? 'scroll-smooth' : '' }`}
            >
              <div className={`flex gap-4 ${ showCarouselControls ? 'flex-nowrap' : 'flex-wrap' }`}>
                { displayedRelatedProducts.map( ( { product: relatedProduct, duplicateIndex } ) =>
                {
                  const imageUrl = getRandomImageUrl( { cacheKey: `${ relatedProduct.id }-related-${ duplicateIndex }` } );

                  return (
                    <Card
                      key={`${ relatedProduct.id }-${ duplicateIndex }`}
                      className="w-[180px] shrink-0 border border-border/80 transition-shadow duration-200 hover:shadow-md sm:w-[200px]"
                      onClick={ () =>
                      {
                        navigate( `/product/${ relatedProduct.id }` );
                        window.scrollTo( { top: 0, behavior: 'smooth' } );
                      } }
                    >
                      <div className="h-40 w-full overflow-hidden bg-muted">
                        { imageUrl && (
                          <img
                            src={ imageUrl }
                            alt={ relatedProduct.name }
                            className="h-full w-full object-cover"
                          />
                        ) }
                      </div>
                      <CardContent className="space-y-2 p-3">
                        <h3 className="text-sm font-medium leading-snug">{ relatedProduct.name }</h3>
                        <div className="flex items-center gap-2 text-sm">
                          <span className="font-semibold">{ relatedProduct.price.toFixed( 2 ) }€</span>
                          { relatedProduct.originalPrice && (
                            <span className="text-xs text-muted-foreground line-through">
                              { relatedProduct.originalPrice.toFixed( 2 ) }€
                            </span>
                          ) }
                        </div>
                      </CardContent>
                    </Card>
                  );
                } ) }
              </div>
            </div>
          </div>
        </section>
      ) }
    </div>
  );
};

export default ProductPage;
