import { useEffect, useState, useCallback } from 'react';
import type { ActiveTab } from '../types';
import { useDefaultSelection } from './useDefaultSelection'
import { useProductDetailData } from './useProductDetailData'


export const useProductDetailState = (
  productId?: string,
  availableColors: { name: string }[] = [],
  availableSizes: string[] = [],
) => {
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedColor, setSelectedColor, selectedSize, setSelectedSize ] = useProductDetailData(productId);
  const [selectedSize, setSelectedSize] = useDefaultSelection(availableSizes[0] ?? '', setSelectedSize, availableColors[0]?.name ?? '', setSelectedColor);
  const [activeTab, setActiveTab] = useState<ActiveTab>('description');

  // Wenn availableColors / availableSizes sich ändern (z. B. Produktwechsel), Default resyncen.
  useEffect(() => {
    if (availableColors && availableColors.length > 0) {
      setSelectedColor((prev) => (prev ? prev : availableColors[0].name));
    }
  }, [availableColors]);

  useEffect(() => {
    if (availableSizes && availableSizes.length > 0) {
      setSelectedSize((prev) => (prev ? prev : availableSizes[0]));
    }
  }, [availableSizes]);

  const increase = useCallback(() => setQuantity((q) => q + 1), []);
  const decrease = useCallback(() => setQuantity((q) => (q > 1 ? q - 1 : 1)), []);

  const toggleFavorite = useCallback(() => setIsFavorite((f) => !f), []);

  useEffect(() => {
    setSelectedImage(0);
    setIsFavorite(false);
    setQuantity(1);
    setSelectedColor(availableColors[0]?.name ?? '');
    setSelectedSize(availableSizes[0] ?? '');
    setActiveTab('description');
  }, [productId]);

  return {
    selectedImage,
    isFavorite,
    quantity,
    selectedColor,
    selectedSize,
    activeTab,

    setSelectedImage,
    setIsFavorite,
    setQuantity,
    setSelectedColor,
    setSelectedSize,
    setActiveTab,
    increase,
    decrease,
    toggleFavorite,
  } as const;
};