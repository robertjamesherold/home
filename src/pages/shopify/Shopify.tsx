import React, { useState, useEffect } from 'react'
import { Search, ShoppingCart, Star, TrendingUp, Filter, X } from 'lucide-react'
import Footer from './components/Footer'



const Shopify: React.FC = () =>
{
    const [ products, setProducts ] = useState<Product[]>( [] )
    const [ filteredProducts, setFilteredProducts ] = useState<Product[]>( [] )
    const [ searchTerm, setSearchTerm ] = useState( '' )
    const [ selectedCategory, setSelectedCategory ] = useState( 'all' )
    const [ cart, setCart ] = useState<Product[]>( [] )
    const [ loading, setLoading ] = useState( true )
    const [ showCart, setShowCart ] = useState( false )
    const [ sortBy, setSortBy ] = useState( 'default' )

    // Simulierte Shopify API Daten (in Produktion würdest du hier die echte Shopify Storefront API nutzen)
    useEffect( () =>
    {
        const fetchProducts = async () =>
        {
            setLoading( true )

            // Simuliere API Call Delay
            await new Promise( resolve => setTimeout( resolve, 1000 ) )

            const mockProducts: Product[] = [
                {
                    id: 1,
                    title: "Premium Wireless Headphones",
                    price: "299.99",
                    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
                    category: "Electronics",
                    rating: 4.8,
                    description: "High-quality wireless headphones with noise cancellation"
                },
                {
                    id: 2,
                    title: "Classic Leather Jacket",
                    price: "189.99",
                    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop",
                    category: "Fashion",
                    rating: 4.6,
                    description: "Genuine leather jacket, perfect for any season"
                },
                {
                    id: 3,
                    title: "Smart Watch Pro",
                    price: "399.99",
                    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
                    category: "Electronics",
                    rating: 4.9,
                    description: "Advanced smartwatch with health tracking"
                },
                {
                    id: 4,
                    title: "Designer Sunglasses",
                    price: "159.99",
                    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
                    category: "Accessories",
                    rating: 4.5,
                    description: "UV protection with style"
                },
                {
                    id: 5,
                    title: "Running Shoes Elite",
                    price: "129.99",
                    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
                    category: "Sports",
                    rating: 4.7,
                    description: "Professional running shoes for athletes"
                },
                {
                    id: 6,
                    title: "Minimalist Backpack",
                    price: "79.99",
                    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
                    category: "Accessories",
                    rating: 4.4,
                    description: "Sleek and functional everyday backpack"
                },
                {
                    id: 7,
                    title: "Wireless Keyboard",
                    price: "89.99",
                    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=400&fit=crop",
                    category: "Electronics",
                    rating: 4.6,
                    description: "Mechanical wireless keyboard for productivity"
                },
                {
                    id: 8,
                    title: "Yoga Mat Premium",
                    price: "49.99",
                    image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&h=400&fit=crop",
                    category: "Sports",
                    rating: 4.8,
                    description: "Eco-friendly non-slip yoga mat"
                }
            ]

            setProducts( mockProducts )
            setFilteredProducts( mockProducts )
            setLoading( false )
        }

        fetchProducts()
    }, [] )

    // Filter und Search Logic
    useEffect( () =>
    {
        let result = [ ...products ]

        // Filter by category
        if ( selectedCategory !== 'all' )
        {
            result = result.filter( p => p.category === selectedCategory )
        }

        // Filter by search term
        if ( searchTerm )
        {
            result = result.filter( p =>
                p.title.toLowerCase().includes( searchTerm.toLowerCase() ) ||
                p.description.toLowerCase().includes( searchTerm.toLowerCase() )
            )
        }

        // Sort
        if ( sortBy === 'price-low' )
        {
            result.sort( ( a, b ) => parseFloat( a.price ) - parseFloat( b.price ) )
        } else if ( sortBy === 'price-high' )
        {
            result.sort( ( a, b ) => parseFloat( b.price ) - parseFloat( a.price ) )
        } else if ( sortBy === 'rating' )
        {
            result.sort( ( a, b ) => b.rating - a.rating )
        }

        setFilteredProducts( result )
    }, [ searchTerm, selectedCategory, sortBy, products ] )

    const addToCart = ( product: Product ) =>
    {
        setCart( prev => [ ...prev, product ] )
    }

    const removeFromCart = ( productId: number ) =>
    {
        setCart( prev => prev.filter( p => p.id !== productId ) )
    }

    const getTotalPrice = () =>
    {
        return cart.reduce( ( sum, p ) => sum + parseFloat( p.price ), 0 ).toFixed( 2 )
    }

    const categories = [ 'all', ...Array.from( new Set( products.map( p => p.category ) ) ) ]

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
            {/* Header */ }
            <header className="bg-white shadow-md sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <ShoppingCart className="w-8 h-8 text-purple-600" />
                            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                                ShopifyStore
                            </h1>
                        </div>

                        <button
                            onClick={ () => setShowCart( !showCart ) }
                            className="relative bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition flex items-center space-x-2"
                        >
                            <ShoppingCart className="w-5 h-5" />
                            <span>Cart ({ cart.length })</span>
                            { cart.length > 0 && (
                                <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">
                                    { cart.length }
                                </span>
                            ) }
                        </button>
                    </div>
                </div>
            </header>

            {/* Cart Sidebar */ }
            { showCart && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={ () => setShowCart( false ) }>
                    <div
                        className="absolute right-0 top-0 h-full w-96 bg-white shadow-2xl p-6 overflow-y-auto"
                        onClick={ ( e ) => e.stopPropagation() }
                    >
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold">Shopping Cart</h2>
                            <button onClick={ () => setShowCart( false ) }>
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        { cart.length === 0 ? (
                            <p className="text-gray-500 text-center py-8">Your cart is empty</p>
                        ) : (
                            <>
                                <div className="space-y-4 mb-6">
                                    { cart.map( ( item, index ) => (
                                        <div key={ `${ item.id }-${ index }` } className="flex items-center space-x-4 border-b pb-4">
                                            <img src={ item.image } alt={ item.title } className="w-16 h-16 object-cover rounded" />
                                            <div className="flex-1">
                                                <h3 className="font-semibold text-sm">{ item.title }</h3>
                                                <p className="text-purple-600 font-bold">${ item.price }</p>
                                            </div>
                                            <button
                                                onClick={ () => removeFromCart( item.id ) }
                                                className="text-red-500 hover:text-red-700"
                                            >
                                                <X className="w-5 h-5" />
                                            </button>
                                        </div>
                                    ) ) }
                                </div>

                                <div className="border-t pt-4">
                                    <div className="flex justify-between text-xl font-bold mb-4">
                                        <span>Total:</span>
                                        <span className="text-purple-600">${ getTotalPrice() }</span>
                                    </div>
                                    <button className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition font-semibold">
                                        Checkout
                                    </button>
                                </div>
                            </>
                        ) }
                    </div>
                </div>
            ) }

            {/* Main Content */ }
            <main className="max-w-7xl mx-auto px-4 py-8">
                {/* Hero Section */ }
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">Discover Amazing Products</h2>
                    <p className="text-gray-600 text-lg">Shop the latest trends with our curated collection</p>
                </div>

                {/* Search and Filters */ }
                <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* Search */ }
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                            <input
                                type="text"
                                placeholder="Search products..."
                                value={ searchTerm }
                                onChange={ ( e ) => setSearchTerm( e.target.value ) }
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none"
                            />
                        </div>

                        {/* Category Filter */ }
                        <div className="relative">
                            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                            <select
                                value={ selectedCategory }
                                onChange={ ( e ) => setSelectedCategory( e.target.value ) }
                                className="w-full pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none appearance-none bg-white cursor-pointer text-gray-900"
                                style={ {
                                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%239CA3AF' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'right 0.75rem center',
                                    backgroundSize: '12px',
                                    colorScheme: 'light'
                                } }
                            >
                                { categories.map( cat => (
                                    <option key={ cat } value={ cat } className="bg-white text-gray-900 py-2">
                                        { cat === 'all' ? 'All Categories' : cat }
                                    </option>
                                ) ) }
                            </select>
                        </div>

                        {/* Sort */ }
                        <div className="relative">
                            <TrendingUp className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                            <select
                                value={ sortBy }
                                onChange={ ( e ) => setSortBy( e.target.value ) }
                                className="w-full pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none appearance-none bg-white cursor-pointer text-gray-900"
                                style={ {
                                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%239CA3AF' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'right 0.75rem center',
                                    backgroundSize: '12px',
                                    colorScheme: 'light'
                                } }
                            >
                                <option value="default" className="bg-white text-gray-900 py-2">Sort by Default</option>
                                <option value="price-low" className="bg-white text-gray-900 py-2">Price: Low to High</option>
                                <option value="price-high" className="bg-white text-gray-900 py-2">Price: High to Low</option>
                                <option value="rating" className="bg-white text-gray-900 py-2">Highest Rated</option>
                            </select>
                        </div>
                    </div>

                    <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
                        <span>{ filteredProducts.length } products found</span>
                        { searchTerm && (
                            <button
                                onClick={ () => setSearchTerm( '' ) }
                                className="text-purple-600 hover:text-purple-700 flex items-center space-x-1"
                            >
                                <X className="w-4 h-4" />
                                <span>Clear search</span>
                            </button>
                        ) }
                    </div>
                </div>

                {/* Products Grid */ }
                { loading ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        { [ ...Array( 8 ) ].map( ( _, i ) => (
                            <div key={ i } className="bg-white rounded-xl shadow-lg overflow-hidden animate-pulse">
                                <div className="bg-gray-300 h-64"></div>
                                <div className="p-4 space-y-3">
                                    <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                                    <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                                </div>
                            </div>
                        ) ) }
                    </div>
                ) : filteredProducts.length === 0 ? (
                    <div className="text-center py-16">
                        <p className="text-gray-500 text-xl">No products found matching your criteria</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        { filteredProducts.map( product => (
                            <div
                                key={ product.id }
                                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                            >
                                <div className="relative group">
                                    <img
                                        src={ product.image }
                                        alt={ product.title }
                                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                    <div className="absolute top-2 right-2 bg-white rounded-full px-3 py-1 flex items-center space-x-1">
                                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                        <span className="text-sm font-semibold">{ product.rating }</span>
                                    </div>
                                    <span className="absolute top-2 left-2 bg-purple-600 text-white text-xs px-2 py-1 rounded">
                                        { product.category }
                                    </span>
                                </div>

                                <div className="p-4">
                                    <h3 className="font-bold text-lg mb-2 line-clamp-2">{ product.title }</h3>
                                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">{ product.description }</p>

                                    <div className="flex items-center justify-between">
                                        <span className="text-2xl font-bold text-purple-600">${ product.price }</span>
                                        <button
                                            onClick={ () => addToCart( product ) }
                                            className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition flex items-center space-x-2"
                                        >
                                            <ShoppingCart className="w-4 h-4" />
                                            <span>Add</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ) ) }
                    </div>
                ) }
            </main>

            {/* Footer */ }
            <Footer />
        </div>
    )
}

export default Shopify