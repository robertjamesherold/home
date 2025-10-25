// src/components/ProductsGrid.tsx
import React from 'react'
import type { Product } from '../types'
import ProductCard from './ProductCard'

type Props = {
    products: Product[]
    onAddToCart: ( p: Product ) => void
}

const ProductGrid: React.FC<Props> = ( { products, onAddToCart } ) =>
{
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            { products.map( ( p ) => (
                <ProductCard key={ p.id } product={ p } onAdd={ onAddToCart } />
            ) ) }
        </div>
    )
}

export default ProductGrid