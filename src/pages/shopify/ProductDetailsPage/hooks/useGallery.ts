// src/pages/ProductDetail/hooks/useGallery.ts
import { useMemo } from 'react';

export function createGalleryImages(src?: string): string[] {
  if (!src) return [];
  const separator = src.includes('?') ? '&' : '?';
  return [
    src,
    `${src}${separator}variant=1`,
    `${src}${separator}variant=2`,
    `${src}${separator}variant=3`,
  ];
}

/** Hook-Wrapper falls du Memoisierung willst */
export function useGallery(src?: string) {
  return useMemo(() => createGalleryImages(src), [src]);
}
