import { useMemo } from 'react'
import { useProducts } from '@/hooks'

export const useProductData = (productId?: string) => {
  const productsState = useProducts()
  const [loading, products] = productsState

  const product = useMemo(
    () => products.find((p) => p.id === productId),
    [products, productId]
  )

  return { loading, product, productsState }
}
