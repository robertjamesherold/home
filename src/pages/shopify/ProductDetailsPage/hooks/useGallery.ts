import { useMemo } from 'react';

export const createGalleryImages = (src?: string): string[] => {
  if (!src) {
    return [];
  }

  const separator = src.includes('?')
    ? '&'
    : '?';

  return [
    src,
    `${src}${separator}variant=1`,
    `${src}${separator}variant=2`,
    `${src}${separator}variant=3`,
  ];
  };

export const useGallery = (src?: string) => useMemo(() => createGalleryImages(src), [src]);
