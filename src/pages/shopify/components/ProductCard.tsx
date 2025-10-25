// src/components/ProductCard.tsx
import React from 'react'
import { Star } from 'lucide-react'
import type { Product } from '../types'

type Props = {
    product: Product
    onAdd: ( p: Product ) => void
}

const ProductCard: React.FC<Props> = ( { product, onAdd } ) =>
{
    return (
        <article className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
            <img src={ product.image } alt={ product.title } className="h-56 w-full object-cover" />
            <div className="p-4 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">{ product.title }</h3>
                    <div className="flex items-center text-sm text-gray-500 space-x-1">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span>{ product.rating }</span>
                    </div>
                </div>

                <p className="text-sm text-gray-600 mb-4 line-clamp-2">{ product.description }</p>

                <div className="mt-auto flex items-center justify-between">
                    <div className="text-lg font-bold text-purple-600">${ product.price }</div>
                    <button
                        onClick={ () => onAdd( product ) }
                        className="bg-purple-600 text-white px-3 py-2 rounded-lg hover:bg-purple-700 transition"
                    >
                        Add
                    </button>
                </div>
            </div>
        </article>
    )
}

export default ProductCard