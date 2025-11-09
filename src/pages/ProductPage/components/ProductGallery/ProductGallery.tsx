import React from 'react';
import { Image } from '@/layout';
import { useRandomImages } from '@/hooks';

interface ProductGalleryProps {
  productName: string;
  images?: string[];
  selectedIndex: number;
  onSelectImage: (index: number) => void;
}

export const ProductGallery: React.FC<ProductGalleryProps> = ({
  productName,
  images,
  selectedIndex,
  onSelectImage,
}) => {
  const { getRandomImageUrl, getRandomImageUrls } = useRandomImages();
  const fallbackHero = getRandomImageUrl({ cacheKey: `${productName}-hero` });
  const fallbackImages = getRandomImageUrls(4, {
    cacheKey: `${productName}-thumbs`,
  });

  const galleryImages =
    images && images.length > 0 ? images : fallbackImages;
  const heroImage =
    galleryImages[selectedIndex] ?? galleryImages[0] ?? fallbackHero;

  return (
    <div className="@container flex flex-col gap-4 h-full">
      {heroImage && (
        <Image
          src={heroImage}
          alt={productName}
          className="rounded-lg border border-border bg-muted/40 h-[100cqh]"
        />
      )}
      {galleryImages.length > 1 && (
        <div className="grid grid-cols-4 gap-3 h-full ">
          {galleryImages.map((image, index) => (
            <button
              key={`${image}-${index}`}
              type="button"
              onClick={() => onSelectImage(index)}
              className={ `overflow-hidden rounded-md border aspect-square w-full max-h-[30cqh] object-cover ${
                selectedIndex === index
                  ? 'border-foreground'
                  : 'border-transparent'
              }`}
            >
              <Image
                src={image}
                alt={`${productName} ${index + 1}`}
                className="h-full w-full overflow-hidden max-h-[30cqh] rounded-md object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
