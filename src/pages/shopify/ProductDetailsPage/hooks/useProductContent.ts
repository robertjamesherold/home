import { useMemo } from 'react'
import type { Product } from '@/types/Product.types'
import { CATEGORY_FEATURES, CATEGORY_SPECIFICATIONS } from '../data/categoryData'
import { DEFAULT_FEATURES, DEFAULT_SPECIFICATIONS } from '../data/defaultData'
import { calculatePricing } from '../lib/price'
import { buildReviews } from '../lib/buildReviews'

const buildGalleryImages = (src?: string): string[] => {
  if (!src) return []
  const sep = src.includes('?') ? '&' : '?'
  return [src, `${src}${sep}variant=1`, `${src}${sep}variant=2`, `${src}${sep}variant=3`]
}

export const useProductContent = (product?: Product) => {
  const galleryImages = useMemo(() => buildGalleryImages(product?.image), [product?.image])

  const pricing = useMemo(() => calculatePricing(Number(product?.price ?? 0)), [product?.price])

  const reviewCount = useMemo(
    () => Math.max(42, Math.round((product?.rating ?? 0) * 48)),
    [product?.rating]
  )

  const features = useMemo(
    () => CATEGORY_FEATURES[product?.category ?? ''] ?? DEFAULT_FEATURES,
    [product?.category]
  )

  const specifications = useMemo(
    () => CATEGORY_SPECIFICATIONS[product?.category ?? ''] ?? DEFAULT_SPECIFICATIONS,
    [product?.category]
  )

  const reviews = useMemo(
    () => product ? buildReviews(product, reviewCount) : [],
    [product, reviewCount]
  )

  return { galleryImages, pricing, reviewCount, features, specifications, reviews }
}
