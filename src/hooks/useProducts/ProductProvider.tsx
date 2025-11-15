import React, { useCallback, useEffect, useMemo, useState } from 'react'

import { staticProducts } from '@/hooks/data'
import type { ProductType } from '@/types'
import { ensureUniqueSlug, slugify } from '@/hooks/slugify'

import ProductContext, {
    type CreateProductInput,
    type ProductContextValue,
} from './ProductContext'

const CUSTOM_PRODUCTS_STORAGE_KEY = 'products:custom'

type StorageResult = {
    value: string | null
}

const safeParse = <T,> ( value: string | null, fallback: T ): T =>
{
    if ( !value ) return fallback
    try
    {
        return JSON.parse( value ) as T
    } catch ( error )
    {
        console.error( 'Failed to parse value from storage', error )
        return fallback
    }
}

const safeStringify = ( value: unknown ): string | null =>
{
    try
    {
        return JSON.stringify( value )
    } catch ( error )
    {
        console.error( 'Failed to serialize value for storage', error )
        return null
    }
}

const readFromStorage = async ( key: string ): Promise<StorageResult | null> =>
{
    if ( typeof window === 'undefined' )
    {
        return null
    }

    try
    {
        if ( window.storage )
        {
            const result = await window.storage.get( key )
            if ( !result )
            {
                return null
            }

            return {
                value:
                    typeof result.value === 'string'
                        ? result.value
                        : JSON.stringify( result.value ),
            }
        }

        const local = window.localStorage?.getItem( key ) ?? null
        return { value: local }
    } catch ( error )
    {
        console.error( 'Failed to read from storage', error )
        return null
    }
}

const writeToStorage = async ( key: string, value: string ): Promise<void> =>
{
    if ( typeof window === 'undefined' )
    {
        return
    }

    try
    {
        if ( window.storage )
        {
            await window.storage.set( key, value )
            return
        }

        window.localStorage?.setItem( key, value )
    } catch ( error )
    {
        console.error( 'Failed to write to storage', error )
    }
}

const baseProductIdSet = new Set( staticProducts.map( ( product ) => product.id ) )

const sanitizeCustomProducts = ( products: ProductType[] ): ProductType[] =>
{
    return products
        .filter( ( product ): product is ProductType =>
        {
            if ( !product || typeof product !== 'object' )
            {
                return false
            }

            if ( !product.id || baseProductIdSet.has( product.id ) )
            {
                return false
            }

            return true
        } )
        .map( ( product ) => ( {
            ...product,
            inStock: product.inStock ?? true,
            link: product.link ?? product.id,
            rating: {
                score: product.rating?.score ?? 0,
                reviews: product.rating?.reviews ?? 0,
            },
        } ) )
}

interface ProductProviderProps
{
    children: React.ReactNode
}

const ProductProvider: React.FC<ProductProviderProps> = ( { children } ) =>
{
    const [ customProducts, setCustomProducts ] = useState<ProductType[]>( [] )
    const [ isReady, setIsReady ] = useState( false )

    useEffect( () =>
    {
        let isMounted = true

        const loadProducts = async () =>
        {
            const result = await readFromStorage( CUSTOM_PRODUCTS_STORAGE_KEY )
            if ( !isMounted )
            {
                return
            }

            if ( !result?.value )
            {
                setIsReady( true )
                return
            }

            const parsed = safeParse<ProductType[]>( result.value, [] )
            const sanitized = sanitizeCustomProducts( parsed )

            setCustomProducts( ( prev ) => ( prev.length > 0 ? prev : sanitized ) )
            setIsReady( true )
        }

        void loadProducts()

        return () =>
        {
            isMounted = false
        }
    }, [] )

    useEffect( () =>
    {
        if ( !isReady )
        {
            return
        }

        const persist = async () =>
        {
            const payload = safeStringify( customProducts )
            if ( !payload )
            {
                return
            }

            await writeToStorage( CUSTOM_PRODUCTS_STORAGE_KEY, payload )
        }

        void persist()
    }, [ customProducts, isReady ] )

    const products = useMemo(
        () => [ ...customProducts, ...staticProducts ],
        [ customProducts ]
    )

    const addProduct = useCallback(
        ( input: CreateProductInput ): ProductType =>
        {
            const {
                name,
                category,
                price,
                originalPrice,
                description,
                ratingScore,
                ratingReviews,
                inStock = true,
                tags,
                image,
                images,
                link,
                details,
            } = input

            if ( !name.trim() )
            {
                throw new Error( 'Produktname darf nicht leer sein.' )
            }

            if ( !category.trim() )
            {
                throw new Error( 'Kategorie darf nicht leer sein.' )
            }

            const normalizedPrice = Number.parseFloat( String( price ) )
            if ( Number.isNaN( normalizedPrice ) || normalizedPrice <= 0 )
            {
                throw new Error( 'Preis muss größer als 0 sein.' )
            }

            const normalizedOriginalPrice =
                typeof originalPrice === 'number'
                    ? Number.parseFloat( String( originalPrice ) )
                    : undefined

            const baseSlug = slugify( link ?? name )
            const existingSlugs = new Set(
                products.map( ( product ) => product.link ?? product.id )
            )
            const uniqueSlug = ensureUniqueSlug( baseSlug, existingSlugs )

            const normalizedTags = Array.from(
                new Set( ( tags ?? [] ).map( ( tag ) => tag.trim() ).filter( Boolean ) )
            )

            const normalizedImages = ( images ?? [] )
                .map( ( imageUrl ) => imageUrl.trim() )
                .filter( Boolean )

            const normalizedScore = Math.max(
                0,
                Math.min(
                    5,
                    typeof ratingScore === 'number'
                        ? Number.parseFloat( String( ratingScore ) )
                        : 0
                )
            )

            const normalizedReviews = Math.max(
                0,
                Math.floor(
                    typeof ratingReviews === 'number'
                        ? Number.parseFloat( String( ratingReviews ) )
                        : 0
                )
            )

            const newProduct: ProductType = {
                id: uniqueSlug,
                link: uniqueSlug,
                title: name.trim(),
                category: category.trim(),
                price: normalizedPrice,
                originalPrice:
                    normalizedOriginalPrice && normalizedOriginalPrice > 0
                        ? normalizedOriginalPrice
                        : undefined,
                description: description?.trim() || undefined,
                rating: {
                    score: normalizedScore,
                    reviews: normalizedReviews,
                },
                inStock,
                tags: normalizedTags.length ? normalizedTags : undefined,
                image: image?.trim() || undefined,
                images: normalizedImages.length ? normalizedImages : undefined,
                details,
            }

            setCustomProducts( ( prev ) => [ ...prev, newProduct ] )

            return newProduct
        },
        [ products ]
    )

    const removeProduct = useCallback( ( productId: string ) =>
    {
        setCustomProducts( ( prev ) =>
            prev.filter( ( product ) => product.id !== productId )
        )
    }, [] )

    const value = useMemo<ProductContextValue>(
        () => ( {
            products,
            customProducts,
            isReady,
            addProduct,
            removeProduct,
        } ),
        [ products, customProducts, isReady, addProduct, removeProduct ]
    )

    return <ProductContext.Provider value={ value }>{ children }</ProductContext.Provider>
}

export { ProductProvider }

export default ProductProvider
