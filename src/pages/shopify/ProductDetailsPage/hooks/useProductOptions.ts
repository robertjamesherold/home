import { useMemo } from 'react'
import type { Product } from '@/types/Product.types'
import type { ColorOption } from '../types'
import { CATEGORY_COLORS, CATEGORY_SIZES } from '../data/categoryData'
import { DEFAULT_COLORS, DEFAULT_SIZES } from '../data/defaultData'

const getDefaultSizes = (): string[] =>
  DEFAULT_SIZES.filter((o) => o.availability).map((o) => o.name)

const getAvailableSizes = (product?: Product): string[] => {
  if (!product) return getDefaultSizes()
  const sizes = CATEGORY_SIZES[product.category]
  if (!sizes) return getDefaultSizes()
  if (Array.isArray(sizes)) return sizes
  return sizes.availability === false ? [] : sizes.sizes
}

export const useProductOptions = (product?: Product) => {
  const availableColors = useMemo<ColorOption[]>(
    () => CATEGORY_COLORS[product?.category ?? ''] ?? DEFAULT_COLORS,
    [product?.category]
  )

  const availableSizes = useMemo(() => getAvailableSizes(product), [product])

  return { availableColors, availableSizes }
}
