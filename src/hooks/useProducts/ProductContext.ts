import { createContext } from 'react'
import type { ProductType } from '@/types'

/**
 * Input-Typ für das Erstellen eines neuen Produkts
 * (ohne id, da diese automatisch generiert wird)
 */
export interface CreateProductInput {
    title: string
    price: number
    description?: string
    category: string
    image?: string
    images?: string[]
    tags?: string[]
    inStock?: boolean
}

/**
 * Context-Wert für den ProductProvider
 * Enthält alle Produkte und Funktionen zur Verwaltung
 */
export interface ProductContextValue {
    // Zustand
    products: ProductType[]
    isReady: boolean

    // Suche
    findProductByIdentifier: (identifier: string) => ProductType | undefined

    // CRUD-Operationen (aktuell lokal, später mit Backend)
    addProduct: (input: CreateProductInput) => ProductType
    updateProduct: (id: string, updates: Partial<ProductType>) => ProductType | null
    deleteProduct: (id: string) => boolean
}

const ProductContext = createContext<ProductContextValue | undefined>(undefined)

export default ProductContext
