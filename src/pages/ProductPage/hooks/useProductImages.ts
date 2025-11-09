import { useEffect, useState } from 'react';

import { useRandomImages } from '@/hooks';

interface UseProductImagesProps {
  productId?: string;
  initialImages?: string[];
  fallbackCount?: number;
}

export const useProductImages = ({
  productId,
  initialImages,
  fallbackCount = 4,
}: UseProductImagesProps) => {
  const [productImages, setProductImages] = useState<string[]>(
    initialImages ?? []
  );
  const [selectedImage, setSelectedImage] = useState(0);
  const { getRandomImageUrls } = useRandomImages();

  useEffect(() => {
    if (initialImages && initialImages.length > 0) {
      setProductImages(initialImages);
      return;
    }

    if (!productId) {
      setProductImages([]);
      return;
    }

    const images = getRandomImageUrls(fallbackCount, {
      cacheKey: `${productId}-gallery`,
    });

    setProductImages(images);
  }, [productId, initialImages, fallbackCount, getRandomImageUrls]);

  const handleSelectImage = (index: number) => {
    setSelectedImage(index);
  };

  return {
    productImages,
    selectedImage,
    setSelectedImage: handleSelectImage,
  };
};
