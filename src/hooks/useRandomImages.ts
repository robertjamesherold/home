import { useCallback, useRef } from 'react';

type ImageSize = {
  width?: number;
  height?: number;
};

type RandomImageOptions = {
  size?: ImageSize;
  cacheKey?: string;
};

const DEFAULT_WIDTH = 600;
const DEFAULT_HEIGHT = 600;

const useRandomImages = () => {
  const cacheRef = useRef<Map<string, string[]>>(new Map());

  const createSeed = () => Math.random().toString(36).slice(2, 9);

  const buildUrl = (seed: string, size: ImageSize = {}) => {
    const width = size.width ?? DEFAULT_WIDTH;
    const height = size.height ?? DEFAULT_HEIGHT;
    return `https://picsum.photos/seed/${seed}/${width}/${height}`;
  };

  const createUrls = (count: number, size?: ImageSize) => {
    const normalizedCount = Math.max(0, Math.floor(count));
    if (normalizedCount === 0) {
      return [];
    }

    const seeds = new Set<string>();
    while (seeds.size < normalizedCount) {
      seeds.add(createSeed());
    }

    return Array.from(seeds, (seed) => buildUrl(seed, size));
  };

  const getRandomImageUrls = useCallback(
    (count: number, options: RandomImageOptions = {}) => {
      const { size, cacheKey } = options;
      const normalizedCount = Math.max(0, Math.floor(count));

      if (cacheKey) {
        const cached = cacheRef.current.get(cacheKey);
        if (cached && cached.length === normalizedCount) {
          return cached;
        }
      }

      const urls = createUrls(normalizedCount, size);

      if (cacheKey) {
        cacheRef.current.set(cacheKey, urls);
      }

      return urls;
    },
    []
  );

  const getRandomImageUrl = useCallback(
    (options: RandomImageOptions = {}) => {
      const urls = getRandomImageUrls(1, options);
      return urls[0];
    },
    [getRandomImageUrls]
  );

  return { getRandomImageUrl, getRandomImageUrls };
};

export default useRandomImages;
