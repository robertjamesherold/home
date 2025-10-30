import React from 'react'
import { ShoppingCart } from 'lucide-react'

const Logo: React.FC = () =>
{
    return (
        <div className="flex items-center space-x-2">
            <ShoppingCart className="w-8 h-8 text-purple-600" />
            <h1 className="text-2xl font-bold bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                ShopifyStore
            </h1>
        </div>
    )
}

export default Logo