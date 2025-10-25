import React from 'react'
import { ShoppingCart } from 'lucide-react'

type Props = {
    cartCount: number
    onToggleCart: () => void
}

const Header: React.FC<Props> = ( { cartCount, onToggleCart } ) =>
{
    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <ShoppingCart className="w-8 h-8 text-purple-600" />
                        <h1 className="text-2xl font-bold bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                            ShopifyStore
                        </h1>
                    </div>

                    <button
                        onClick={ onToggleCart }
                        className="relative bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition flex items-center space-x-2"
                    >
                        <ShoppingCart className="w-5 h-5" />
                        <span>Cart ({ cartCount })</span>
                        { cartCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">
                                { cartCount }
                            </span>
                        ) }
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header