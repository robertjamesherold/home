import { useEffect, useMemo, useState, useCallback } from 'react';

import type { ProductType } from '@/types';
import { useProducts, useRandomImages } from '@/hooks';

const MIN_RELATED_COUNT = 12;
const MAX_RELATED_COUNT = 24;

interface RelatedProduct {
  product: ProductType;
  duplicateIndex: number;
}

interface UseRelatedProductsReturn {
  relatedProductInstances: RelatedProduct[];
  relatedImageUrls: string[];
  isLoading: boolean;
}

/**
 * Selects random products from a pool with bias towards same category
 */
const selectRandomProducts = (
  others: ProductType[],
  categoryFilter: string,
  count: number
): ProductType[] => {
  const sameCategory = others.filter((p) => p.category === categoryFilter);
  const differentCategory = others.filter((p) => p.category !== categoryFilter);

  const picks: ProductType[] = [];

  for (let i = 0; i < count; i++) {
    // Determine which pool to pick from (70% same category preference)
    let pool = others;

    if (sameCategory.length && differentCategory.length) {
      pool = Math.random() < 0.7 ? sameCategory : differentCategory;
    } else if (sameCategory.length) {
      pool = sameCategory;
    } else if (differentCategory.length) {
      pool = differentCategory;
    }

    if (!pool.length) break;

    const randomIndex = Math.floor(Math.random() * pool.length);
    picks.push(pool[randomIndex]);
  }

  return picks.length > 0
    ? picks
    : others.slice(0, Math.min(count, others.length));
};

/**
 * Hook to fetch and manage related products
 * Handles product selection, image loading, and memoization
 */
export const useRelatedProducts = (
  currentProductId?: string,
  currentCategory?: string
): UseRelatedProductsReturn => {
  const { products } = useProducts();
  const [relatedProductsBase, setRelatedProductsBase] = useState<ProductType[]>(
    []
  );
  const [relatedImageUrls, setRelatedImageUrls] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { getRandomImageUrls } = useRandomImages();

  // Memoize the target count to prevent recalculation on every render
  const targetCount = useMemo(
    () =>
      Math.floor(Math.random() * (MAX_RELATED_COUNT - MIN_RELATED_COUNT + 1)) +
      MIN_RELATED_COUNT,
    []
  );

  // Memoize product selection logic
  const selectProducts = useCallback(
    (productId: string, category: string): ProductType[] => {
      const others = products.filter((p) => p.id !== productId);

      if (!others.length) return [];

      return selectRandomProducts(others, category, targetCount);
    },
    [products, targetCount]
  );

  useEffect(() => {
    if (!currentProductId || !currentCategory) {
      setRelatedProductsBase([]);
      setRelatedImageUrls([]);
      return;
    }

    setIsLoading(true);

    try {
      // Select related products
      const selected = selectProducts(currentProductId, currentCategory);

      if (!selected.length) {
        setRelatedProductsBase([]);
        setRelatedImageUrls([]);
        return;
      }

      setRelatedProductsBase(selected);

      // Fetch images for selected products
      const images = getRandomImageUrls(selected.length, {
        cacheKey: `${currentProductId}-related`,
      });
      setRelatedImageUrls(images);
    } finally {
      setIsLoading(false);
    }
  }, [currentProductId, currentCategory, selectProducts, getRandomImageUrls]);

  // Memoize the final product instances
  const relatedProductInstances = useMemo<RelatedProduct[]>(
    () =>
      relatedProductsBase.map((product, index) => ({
        product,
        duplicateIndex: index,
      })),
    [relatedProductsBase]
  );

  return {
    relatedProductInstances,
    relatedImageUrls,
    isLoading,
  };
};
