import { useEffect, useState } from 'react';
import { useRandomImages } from '@/hooks/useRandomImages';

interface UseProductImagesProps {
  productId?: string;
}

export const useProductImages = ({ productId }: UseProductImagesProps) => {
  const [productImages, setProductImages] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState(0);
  const { getRandomImageUrls } = useRandomImages();

  useEffect(() => {
    if (!productId) return;

    const images = getRandomImageUrls(4, {
      cacheKey: `${productId}-gallery`,
    });

    const finalImages = images.length
      ? images
      : getRandomImageUrls(1, {
          cacheKey: `${productId}-gallery-fallback`,
        });

    setProductImages(finalImages);
    setSelectedImage(0);
  }, [productId, getRandomImageUrls]);

  return {
    productImages,
    selectedImage,
    setSelectedImage,
  };
};
