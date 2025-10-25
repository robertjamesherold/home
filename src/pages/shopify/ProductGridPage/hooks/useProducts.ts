// useProducts.ts
import useProductsData from './useProductsData';
import useFilterSort from './useFilterSort';
import useCart from './useCart';
import useUI from './useUI';

const useProducts = () => {
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

  const { cart, addToCart, removeFromCart, getTotalPrice } = useCart();
  const { showCart, setShowCart } = useUI(false);

  return [
    products,
    filteredProducts,
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    cart,
    addToCart,
    removeFromCart,
    getTotalPrice,
    loading,
    showCart,
    setShowCart,
    sortBy,
    setSortBy,
    categories,
  ] as const;
};

export default useProducts;
