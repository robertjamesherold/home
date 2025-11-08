import React from 'react';
import { Image } from '@/layout';
import { useRandomImages } from '@/hooks';

interface ProductGalleryProps
{
  productName: string;
  images?: string[];
  selectedIndex: number;
  onSelectImage: (index: number) => void;
}

export const ProductGallery: React.FC<ProductGalleryProps> = ( {
  productName,
  images,
  selectedIndex,
  onSelectImage,
}) => {
  const { getRandomImageUrl, getRandomImageUrls } = useRandomImages()
  const fallbackHero = getRandomImageUrl( { cacheKey: productName + '-hero' } )
  const fallbackImages = getRandomImageUrls( 4, {
    cacheKey: productName + '-thumbs',
  } )
  const galleryImages = images ? images : fallbackImages
  const heroImage = fallbackHero;

  return (
    <div className="space-y-3">
      {heroImage && (
        <Image
          src={heroImage}
          alt={productName}
          className="rounded-lg border border-border bg-muted/40"
        />
      )}
      { galleryImages.length > 1 && (
        <div className="grid grid-cols-4 gap-3">
          { galleryImages.map( ( image, index ) => (
            <button
              key={ `${ image }-${ index }` }
              type="button"
              onClick={() => onSelectImage(index)}
              className={`overflow-hidden rounded-md border ${
                selectedIndex === index
                  ? 'border-foreground'
                  : 'border-transparent'
              }`}
            >
              <Image
                src={image}
                alt={`${productName} ${index + 1}`}
                className="h-full w-full overflow-hidden rounded-md"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
