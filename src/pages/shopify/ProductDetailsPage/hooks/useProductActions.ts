import { useCallback } from 'react'
import type { Product } from '@/types/Product.types'

export const useProductActions = (product: Product | undefined, quantity: number, { addToCart, setShowCart }: any) => {
  const handleAddToCart = useCallback(() => {
    if (!product) return
    for (let i = 0; i < quantity; i += 1) addToCart(product)
    setShowCart(true)
  }, [product, quantity, addToCart, setShowCart])

  return { handleAddToCart }
}
