import { useCallback, useEffect, useMemo, useState } from 'react'
import { useProducts } from '@/hooks'
import type { Product } from '@/types/Product.types'
import type { ActiveTab, ColorOption } from '../types'
import { CATEGORY_COLORS, CATEGORY_FEATURES, CATEGORY_SIZES, CATEGORY_SPECIFICATIONS } from '../data/categoryData'
import { DEFAULT_COLORS, DEFAULT_FEATURES, DEFAULT_SIZES, DEFAULT_SPECIFICATIONS } from '../data/defaultData'
import { calculatePricing } from '../lib/price'
import { buildReviews } from '../lib/buildReviews'

type ProductDetailState = {
    loading: boolean
    product?: Product
    galleryImages: string[]
    pricing: ReturnType<typeof calculatePricing>
    reviewCount: number
    features: string[]
    specifications: Record<string, string>
    reviews: ReturnType<typeof buildReviews>
    availableColors: ColorOption[]
    availableSizes: string[]
    selectedImage: number
    isFavorite: boolean
    quantity: number
    selectedColor: string
    selectedSize: string
    activeTab: ActiveTab
    setSelectedImage: ( index: number ) => void
    increase: () => void
    decrease: () => void
    setSelectedColor: ( color: string ) => void
    setSelectedSize: ( size: string ) => void
    setActiveTab: ( tab: ActiveTab ) => void
    toggleFavorite: () => void
    handleAddToCart: () => void
    handleBuyNow: () => void
}

const buildGalleryImages = ( src?: string ) =>
{
    if ( !src )
    {
        return []
    }

    const separator = src.includes( '?' ) ? '&' : '?'

    return [
        src,
        `${ src }${ separator }variant=1`,
        `${ src }${ separator }variant=2`,
        `${ src }${ separator }variant=3`,
    ]
}

export const useProductDetail = ( productId?: string ): ProductDetailState =>
{
    const {
        products,
        loading,
        addToCart,
        setShowCart,
    } = useProducts()

    const product = useMemo<Product | undefined>(
        () => products.find( ( item ) => item.id === productId ),
        [ products, productId ],
    )

    const availableColors = useMemo<ColorOption[]>(
        () =>
        {
            if ( !product )
            {
                return DEFAULT_COLORS
            }

            return CATEGORY_COLORS[ product.category ] ?? DEFAULT_COLORS
        },
        [ product ],
    )

    const availableSizes = useMemo<string[]>(
        () =>
        {
            if ( !product )
            {
                return DEFAULT_SIZES.map( ( size ) => size.name )
            }

            return CATEGORY_SIZES[ product.category ] ?? DEFAULT_SIZES.map( ( size ) => size.name )
        },
        [ product ],
    )

    const [ selectedImage, setSelectedImage ] = useState( 0 )
    const [ isFavorite, setIsFavorite ] = useState( false )
    const [ quantity, setQuantity ] = useState( 1 )
    const [ selectedColor, setSelectedColor ] = useState( availableColors[ 0 ]?.name ?? '' )
    const [ selectedSize, setSelectedSize ] = useState( availableSizes[ 0 ] ?? '' )
    const [ activeTab, setActiveTab ] = useState<ActiveTab>( 'description' )

    useEffect( () =>
    {
        setSelectedColor( ( previous ) =>
        {
            if ( availableColors.length === 0 )
            {
                return ''
            }

            const stillAvailable = availableColors.find( ( option ) => option.name === previous )
            return ( stillAvailable?.name ?? availableColors[ 0 ].name )
        } )
    }, [ availableColors ] )

    useEffect( () =>
    {
        setSelectedSize( ( previous ) =>
        {
            if ( availableSizes.length === 0 )
            {
                return ''
            }

            return availableSizes.includes( previous ) ? previous : availableSizes[ 0 ]
        } )
    }, [ availableSizes ] )

    useEffect( () =>
    {
        setSelectedImage( 0 )
        setIsFavorite( false )
        setQuantity( 1 )
        setActiveTab( 'description' )
    }, [ productId ] )

    const increase = useCallback( () => setQuantity( ( value ) => value + 1 ), [] )
    const decrease = useCallback( () => setQuantity( ( value ) => Math.max( 1, value - 1 ) ), [] )
    const toggleFavorite = useCallback( () => setIsFavorite( ( value ) => !value ), [] )

    const galleryImages = useMemo( () => buildGalleryImages( product?.image ), [ product?.image ] )
    const pricing = useMemo( () => calculatePricing( Number( product?.price ?? 0 ) ), [ product?.price ] )
    const reviewCount = useMemo( () => Math.max( 42, Math.round( ( product?.rating ?? 0 ) * 48 ) ), [ product?.rating ] )
    const features = useMemo( () => ( product ? CATEGORY_FEATURES[ product.category ] ?? DEFAULT_FEATURES : DEFAULT_FEATURES ), [ product ] )
    const specifications = useMemo( () => ( product ? CATEGORY_SPECIFICATIONS[ product.category ] ?? DEFAULT_SPECIFICATIONS : DEFAULT_SPECIFICATIONS ), [ product ] )
    const reviews = useMemo( () => ( product ? buildReviews( product, reviewCount ) : [] ), [ product, reviewCount ] )

    const handleAddToCart = useCallback( () =>
    {
        if ( !product )
        {
            return
        }

        const safeQuantity = Math.max( 1, quantity )

        for ( let index = 0; index < safeQuantity; index += 1 )
        {
            addToCart( product )
        }

        setShowCart( true )
    }, [ addToCart, product, quantity, setShowCart ] )

    const handleBuyNow = useCallback( () =>
    {
        handleAddToCart()
    }, [ handleAddToCart ] )

    return {
        loading,
        product,
        galleryImages,
        pricing,
        reviewCount,
        features,
        specifications,
        reviews,
        availableColors,
        availableSizes,
        selectedImage,
        isFavorite,
        quantity,
        selectedColor,
        selectedSize,
        activeTab,
        setSelectedImage,
        increase,
        decrease,
        setSelectedColor,
        setSelectedSize,
        setActiveTab,
        toggleFavorite,
        handleAddToCart,
        handleBuyNow,
    }
}

export default useProductDetail
