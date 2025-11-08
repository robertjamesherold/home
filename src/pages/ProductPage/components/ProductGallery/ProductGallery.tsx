import React from 'react';
import { Image } from '@/layout';

interface ProductGalleryProps {
  images: string[];
  productName: string;
  selectedIndex: number;
  onSelectImage: (index: number) => void;
}

export const ProductGallery: React.FC<ProductGalleryProps> = ({
  images,
  productName,
  selectedIndex,
  onSelectImage,
}) => {
  if (!images.length) return null;

  const heroImage = images[selectedIndex] ?? images[0];

  return (
    <div className="space-y-3">
      {heroImage && (
        <Image
          src={heroImage}
          alt={productName}
          className="rounded-lg border border-border bg-muted/40"
        />
      )}
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-3">
          {images.map((image, index) => (
            <button
              key={image + index}
              type="button"
              onClick={() => onSelectImage(index)}
              className={`overflow-hidden rounded-md border ${
                selectedIndex === index ? 'border-foreground' : 'border-transparent'
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
