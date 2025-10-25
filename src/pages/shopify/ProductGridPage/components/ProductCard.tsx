// src/components/ProductCard.tsx
import React from 'react'
import { Star } from 'lucide-react'
import type { Product } from '../types'

type Props = {
    product: Product
    onAdd: (p: Product) => void
}

const ProductCard: React.FC<Props> = ( { product, onAdd } ) =>
{
    return (
        <article className="flex h-full flex-col rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-lg">
            <div className="mb-4 flex h-48 items-center justify-center">
                <img src={ product.image } alt={ product.title } className="max-h-full w-full object-contain" />
            </div>
            <h3 className="text-sm font-medium text-[#007185] transition hover:text-[#C7511F] hover:underline line-clamp-2">
                { product.title }
            </h3>
            <div className="mt-2 flex items-center gap-1 text-xs text-[#F08804]">
                <Star className="h-4 w-4 fill-[#F08804] text-[#F08804]" />
                <span className="text-[#0F1111]">{ product.rating } out of 5</span>
            </div>
            <p className="mt-3 text-xs text-[#565959] line-clamp-3">{ product.description }</p>
            <div className="mt-4 space-y-1">
                <p className="text-lg font-semibold text-[#0F1111]">${ product.price }</p>
                <p className="text-xs text-[#565959]">FREE delivery on eligible orders</p>
            </div>
            <button
                onClick={ () => onAdd( product ) }
                className="mt-4 rounded-full bg-[#FFD814] py-2 text-sm font-semibold text-[#0F1111] transition hover:bg-[#F7CA00]"
                type="button"
            >
                Add to Cart
            </button>
        </article>
    )
}

export default ProductCard
