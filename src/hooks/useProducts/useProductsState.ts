import useProductsData from './useProductsData';
import useFilterSort from './useFilterSort';
import useCart from './useCart';
import useUI from './useUI';

const useProductsState = () => {
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

  const {
    cart,
    addToCart,
    removeFromCart,
    removeAllFromCart,
    getTotalPrice,
    totalItems,
  } = useCart();
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
export default useProductsState;
