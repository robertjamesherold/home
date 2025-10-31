import useProductsState from './useProductsState'
import type { FC } from 'react'
import ProductsContext  from './ProductsContext'

export const ProductsProvider: FC<{ children: React.ReactNode }> = ( { children } ) =>
{
    const productsState = useProductsState()
  return (
    <ProductsContext.Provider value={ productsState }>
      { children }
    </ProductsContext.Provider>
  )
} 