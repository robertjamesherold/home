// useProducts.ts
import { createContext, useContext, type FC, type ReactNode } from 'react';

import useProductsData from './useProductsData';
import useFilterSort from './useFilterSort';
import useCart from './useCart';
import useUI from './useUI';

const createProductsState = () => {
  const { products, loading } = useProductsData();
  const {
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    sortBy,
    setSortBy,
    filteredProducts,
    categories,
  } = useFilterSort({ products });

  const { cart, addToCart, removeFromCart, removeAllFromCart, getTotalPrice, totalItems } = useCart();
  const { showCart, setShowCart, toggleCart } = useUI(false);

  return {
    products,
    filteredProducts,
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    cart,
    addToCart,
    removeFromCart,
    removeAllFromCart,
    getTotalPrice,
    loading,
    showCart,
    setShowCart,
    toggleCart,
    sortBy,
    setSortBy,
    categories,
    totalItems,
  } as const;
};

type ProductsState = ReturnType<typeof createProductsState>;

const ProductsContext = createContext<ProductsState | null>(null);

type ProductsProviderProps = {
  children: ReactNode;
};

export const ProductsProvider: FC<ProductsProviderProps> = ({ children }) => {
  const value = createProductsState();
  return <ProductsContext.Provider value={ value }>{ children }</ProductsContext.Provider>;
};

const useProducts = () => {
  const context = useContext(ProductsContext);

  if (!context) {
    throw new Error('useProducts must be used within a ProductsProvider');
  }

  return context;
};

export type { ProductsState };

export default useProducts;
