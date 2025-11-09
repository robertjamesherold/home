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
    <div className="@container flex h-full flex-col gap-6">
      {heroImage && (
        <Image
          src={heroImage}
          alt={productName}
          className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-border/70 bg-muted/40 shadow-sm"
          imageClassName="scale-100 transition-transform duration-500 ease-out hover:scale-105"
        />
      )}

      {galleryImages.length > 1 && (
        <div className="grid grid-cols-4 gap-3 sm:grid-cols-5 lg:grid-cols-4">
          {galleryImages.map((image, index) => {
            const isSelected = selectedIndex === index;

            return (
              <button
                key={`${image}-${index}`}
                type="button"
                onClick={() => onSelectImage(index)}
                className={`group relative aspect-square w-full overflow-hidden rounded-2xl border transition ${
                  isSelected
                    ? 'border-primary shadow-sm'
                    : 'border-border/40 hover:border-primary/60'
                }`}
              >
                <Image
                  src={image}
                  alt={`${productName} ${index + 1}`}
                  className="h-full w-full"
                  imageClassName="scale-100 transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
