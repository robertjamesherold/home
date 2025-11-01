// useProducts.ts
import { createContext } from 'react';
import useProductsState from './useProductsState';

type ProductsState = ReturnType<typeof useProductsState>;

const ProductsContext = createContext<ProductsState | null>(null);

export default ProductsContext;
