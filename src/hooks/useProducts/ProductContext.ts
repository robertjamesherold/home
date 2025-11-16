import { createContext } from 'react'

import type { ProductDetailsCardType, ProductType } from '@/types'

export type CreateProductInput = {
    name: string
    category: string
    price: number
    originalPrice?: number
    description?: string
    ratingScore?: number
    ratingReviews?: number
    inStock?: boolean
    tags?: string[]
    image?: string
    images?: string[]
    link?: string
    details?: ProductDetailsCardType
}

export interface ProductContextValue
{
    products: ProductType[]
    customProducts: ProductType[]
    isReady: boolean
    addProduct: ( input: CreateProductInput ) => ProductType
    removeProduct: ( productId: string ) => void
    findProductByIdentifier: ( identifier: string ) => ProductType | undefined
}

const ProductContext = createContext<ProductContextValue | undefined>( undefined )

export default ProductContext
