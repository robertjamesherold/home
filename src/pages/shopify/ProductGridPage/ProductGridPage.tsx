// src/pages/Shopify.tsx
import { CartSidebar, CategoryFilter, Sort, ProductGrid, LoadingGrid, EmptyState } from './components'
import { useProducts } from '@/hooks'

const ProductGridPage: React.FC = () =>
{
    const [
        products,
        filteredProducts,
        searchTerm,
        ,
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
        <div className="min-h-screen bg-[#EAEDED]">


            <CartSidebar open={ showCart } onClose={ () => setShowCart( false ) } cart={ cart } removeFromCart={ removeFromCart } getTotalPrice={ getTotalPrice } />

            <main className="main">
                <div className="flex flex-col gap-6 sm:flex-row md:flex lg:flex-row xl:flex 2xl:flex">
                    <aside className="hidden w-full space-y-6 lg:block lg:w-64">
                        <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
                            <h2 className="text-xl font-semibold text-[#0F1111]">Refine by</h2>
                            <div className="mt-4">
                                <CategoryFilter categories={ categories } selected={ selectedCategory } onSelect={ setSelectedCategory } />
                            </div>
                        </div>
                        <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
                            <h3 className="text-lg font-semibold text-[#0F1111]">Delivery</h3>
                            <p className="mt-2 text-sm text-[#565959]">Choose products eligible for fast, free delivery and enjoy a premium shopping experience.</p>
                        </div>
                    </aside>

                    <section className="flex-1 space-y-4">
                        <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                                <div>
                                    <h2 className="text-xl font-semibold text-[#0F1111]">Results</h2>
                                    <p className="text-sm text-[#565959]">
                                        Showing { filteredProducts.length } of { products.length } items{ searchTerm ? ` for "${ searchTerm }"` : '' }.
                                    </p>
                                </div>
                                <Sort value={ sortBy } onChange={ setSortBy } label="Sort by" />
                            </div>

                            <div className="mt-4 space-y-4 lg:hidden">
                                <div className="rounded-md border border-gray-200 bg-[#F8F9F9] p-3">
                                    <CategoryFilter categories={ categories } selected={ selectedCategory } onSelect={ setSelectedCategory } />
                                </div>
                            </div>
                        </div>

                        { loading ? (
                            <div className="rounded-lg overflow-hidden">
                                <LoadingGrid />
                            </div>
                        ) : filteredProducts.length === 0 ? (
                                <div className="rounded-lg overflow-hidden">
                                <EmptyState />
                            </div>
                        ) : (
                                    <div className="rounded-lg overflow-hidden">
                                <ProductGrid products={ filteredProducts } onAddToCart={ addToCart } />
                            </div>
                        ) }
                    </section>
                </div>
            </main>
        </div>
    )
}

export default ProductGridPage
