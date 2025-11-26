import React, { useCallback, useMemo, useState } from 'react'
import ProductContext, { type CreateProductInput, type ProductContextValue } from './ProductContext'
import { slugify } from '@/hooks/slugify'
import { productsData } from '@/data'
import type { ProductType } from '@/types'

interface ProductProviderProps {
    children: React.ReactNode
}

/**
 * Hilfsfunktion: Generiert eine eindeutige Produkt-ID
 */
const generateProductId = (): string => {
    return `product_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`
}

/**
 * ProductProvider verwaltet alle Produktdaten der Anwendung.
 *
 * Hauptaufgaben:
 * 1. Lädt initiale Produkte aus productsData.ts (mit Pokémon-Bildern)
 * 2. Bietet CRUD-Operationen (Create, Read, Update, Delete)
 * 3. Stellt Suchfunktionen bereit (nach ID, Link, Slug)
 *
 * Aktuell: Alle Daten werden lokal im State verwaltet
 * Später: Backend-Integration für Persistenz
 */
const ProductProvider: React.FC<ProductProviderProps> = ({ children }) => {
    // Initialisiere mit statischen Produktdaten (inkl. Pokémon-Bilder)
    const [products, setProducts] = useState<ProductType[]>(productsData)

    // isReady = true wenn Produkte verfügbar sind
    const isReady = products.length > 0

    const findProductByIdentifier = useCallback(
        (identifier: string): ProductType | undefined => {
            const trimmed = identifier.trim()
            if (!trimmed) {
                return undefined
            }

            const normalized = slugify(trimmed)

            return products.find((product) => {
                const link = product.link ?? product.id
                return (
                    product.id === trimmed ||
                    link === trimmed ||
                    slugify(product.id) === normalized ||
                    slugify(link) === normalized
                )
            })
        },
        [products]
    )

    /**
     * Fügt ein neues Produkt hinzu
     * Generiert automatisch eine ID und fügt Standardwerte hinzu
     */
    const addProduct = useCallback(
        (input: CreateProductInput): ProductType => {
            const newProduct: ProductType = {
                id: generateProductId(),
                title: input.title,
                price: input.price,
                description: input.description ?? '',
                category: input.category,
                image: input.image,
                images: input.images,
                tags: input.tags ?? [],
                inStock: input.inStock ?? true,
                link: slugify(input.title),
                rating: { score: 0, reviews: 0 }, // Standardwerte für neue Produkte
            }

            setProducts((prev) => [...prev, newProduct])
            return newProduct
        },
        []
    )

    /**
     * Aktualisiert ein bestehendes Produkt
     * Gibt das aktualisierte Produkt zurück oder null wenn nicht gefunden
     */
    const updateProduct = useCallback(
        (id: string, updates: Partial<ProductType>): ProductType | null => {
            let updatedProduct: ProductType | null = null

            setProducts((prev) =>
                prev.map((product) => {
                    if (product.id === id) {
                        updatedProduct = { ...product, ...updates }
                        return updatedProduct
                    }
                    return product
                })
            )

            return updatedProduct
        },
        []
    )

    /**
     * Löscht ein Produkt anhand der ID
     * Gibt true zurück wenn erfolgreich gelöscht, false wenn nicht gefunden
     */
    const deleteProduct = useCallback((id: string): boolean => {
        let wasDeleted = false

        setProducts((prev) => {
            const filtered = prev.filter((product) => product.id !== id)
            wasDeleted = filtered.length < prev.length
            return filtered
        })

        return wasDeleted
    }, [])

    // Context-Wert mit allen Zuständen und Funktionen
    const value = useMemo<ProductContextValue>(
        () => ({
            products,
            isReady,
            findProductByIdentifier,
            addProduct,
            updateProduct,
            deleteProduct,
        }),
        [products, isReady, findProductByIdentifier, addProduct, updateProduct, deleteProduct]
    )

    return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
}

export { ProductProvider }

export default ProductProvider
