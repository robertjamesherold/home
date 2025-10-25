// src/pages/Shopify.tsx
import { Header, CartSidebar, SearchBar, CategoryFilter, Sort, ProductGrid, LoadingGrid, EmptyState } from './components'
import { useProducts } from './hooks' 

const ProductGridPage: React.FC = () =>
{
    const [
        ,
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
    ] = useProducts()

    return (
        <div className="min-h-screen bg-linear-to-r from-purple-50 via-pink-50 to-blue-50">
            <Header cartCount={ cart.length } onToggleCart={ () => setShowCart( !showCart ) } />

            <CartSidebar open={ showCart } onClose={ () => setShowCart( false ) } cart={ cart } removeFromCart={ removeFromCart } getTotalPrice={ getTotalPrice } />

            <main className="max-w-7xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">Discover Amazing Products</h2>
                    <p className="text-gray-600 text-lg">Shop the latest trends with our curated collection</p>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <SearchBar value={ searchTerm } onChange={ setSearchTerm } />
                        <CategoryFilter categories={ categories } selected={ selectedCategory } onSelect={ setSelectedCategory } />
                        <Sort value={ sortBy } onChange={ setSortBy } />
                    </div>

                    <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
                        <span>{ filteredProducts.length } products found</span>
                        { searchTerm && (
                            <button onClick={ () => setSearchTerm( '' ) } className="text-purple-600 hover:text-purple-700 flex items-center space-x-1">
                                <span>Clear search</span>
                            </button>
                        ) }
                    </div>
                </div>

                { loading ? (
                    <LoadingGrid />
                ) : filteredProducts.length === 0 ? (
                        <EmptyState />
                ) : (
                            <ProductGrid products={ filteredProducts } onAddToCart={ addToCart } />
                ) }
            </main>

        </div>
    )
}

export default ProductGridPage