import React from 'react'
import { Check, Shield, Truck } from 'lucide-react'
import type { Product } from '@/types/Product.types'
import type { ActiveTab, ColorOption, Review } from '../types'
import type { Pricing } from '../lib/price'
import { ImageSection, ProductActions, Stars } from '../components'
import Tabs from '../components/Tabs'
import ReviewsList from '../components/ReviewsList'
import SpecsAndFeatures from '../components/SpecsAndFeatures'

type ProductDetailsPageReadyProps = {
    product: Product
    galleryImages: string[]
    pricing: Pricing
    reviewCount: number
    features: string[]
    specifications: Record<string, string>
    reviews: Review[]
    availableColors: ColorOption[]
    availableSizes: string[]
    selectedImage: number
    isFavorite: boolean
    selectedColor: string
    selectedSize: string
    quantity: number
    activeTab: ActiveTab
    onSelectImage: ( index: number ) => void
    onToggleFavorite: () => void
    onSelectColor: ( color: string ) => void
    onSelectSize: ( size: string ) => void
    onIncreaseQuantity: () => void
    onDecreaseQuantity: () => void
    onChangeTab: ( tab: ActiveTab ) => void
    onAddToCart: () => void
    onBuyNow: () => void
}

const ProductDetailsPageReady: React.FC<ProductDetailsPageReadyProps> = ({
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
    selectedColor,
    selectedSize,
    quantity,
    activeTab,
    onSelectImage,
    onToggleFavorite,
    onSelectColor,
    onSelectSize,
    onIncreaseQuantity,
    onDecreaseQuantity,
    onChangeTab,
    onAddToCart,
    onBuyNow,
}) =>
{
    const primaryImage = galleryImages[ selectedImage ] ?? product.image

    return (
        <div className="min-h-screen bg-linear-to-br from-purple-50 via-pink-50 to-blue-50">
            <main className="main max-w-7xl mx-auto px-4 py-8">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                    <ImageSection
                        bigImage={ primaryImage }
                        bigImageTitle={ product.title }
                        discount={ pricing.discount }
                        isFavorite={ isFavorite }
                        onToggle={ onToggleFavorite }
                        galleryImages={ galleryImages.length > 0 ? galleryImages : [ primaryImage ] }
                        selectedImage={ selectedImage }
                        onSelectImage={ onSelectImage }
                    />

                    <div className="space-y-6">
                        <div>
                            <h1 className="mb-3 text-4xl font-bold text-gray-900">
                                { product.title }
                            </h1>
                            <div className="flex items-center space-x-4">
                                <div className="flex items-center space-x-1">
                                    <Stars rating={ product.rating } />
                                </div>
                                <span className="font-semibold text-gray-600">
                                    { product.rating.toFixed( 1 ) }
                                </span>
                                <span className="text-gray-400">
                                    ({ reviewCount } Bewertungen)
                                </span>
                            </div>
                        </div>

                        <div className="flex items-baseline space-x-3">
                            <span className="text-4xl font-bold text-purple-600">
                                { pricing.priceDisplay }
                            </span>
                            { pricing.discount > 0 && (
                                <span className="text-2xl text-gray-400 line-through">
                                    { pricing.originalPrice }
                                </span>
                            ) }
                        </div>

                        <div className="flex items-center space-x-2">
                            <Check className="h-5 w-5 text-green-500" />
                            <span className="font-semibold text-green-600">
                                Sofort verfügbar
                            </span>
                        </div>

                        <p className="leading-relaxed text-gray-600">
                            { product.description }
                        </p>

                        <ProductActions
                            quantity={ quantity }
                            onIncrease={ onIncreaseQuantity }
                            onDecrease={ onDecreaseQuantity }
                            availableColors={ availableColors }
                            selectedColor={ selectedColor }
                            onSelectColor={ onSelectColor }
                            availableSizes={ availableSizes }
                            selectedSize={ selectedSize }
                            onSelectSize={ onSelectSize }
                            onAddToCart={ onAddToCart }
                            onBuyNow={ onBuyNow }
                        />

                        <div className="grid grid-cols-1 gap-4 border-t pt-6 sm:grid-cols-3">
                            <div className="flex flex-col items-center space-y-2 text-center">
                                <div className="rounded-full bg-purple-100 p-3">
                                    <Truck className="h-6 w-6 text-purple-600" />
                                </div>
                                <span className="text-sm font-semibold">
                                    Versand am selben Tag
                                </span>
                            </div>
                            <div className="flex flex-col items-center space-y-2 text-center">
                                <div className="rounded-full bg-purple-100 p-3">
                                    <Shield className="h-6 w-6 text-purple-600" />
                                </div>
                                <span className="text-sm font-semibold">
                                    2 Jahre Garantie
                                </span>
                            </div>
                            <div className="flex flex-col items-center space-y-2 text-center">
                                <div className="rounded-full bg-purple-100 p-3">
                                    <Check className="h-6 w-6 text-purple-600" />
                                </div>
                                <span className="text-sm font-semibold">
                                    Geprüfte Qualität
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-16 rounded-2xl bg-white p-8 shadow-xl">
                    <Tabs activeTab={ activeTab } onChange={ onChangeTab } reviewCount={ reviewCount } />

                    <div className="mt-8">
                        { activeTab === 'description' && (
                            <SpecsAndFeatures features={ features } specifications={ specifications } />
                        ) }

                        { activeTab === 'reviews' && <ReviewsList reviews={ reviews } /> }

                        { activeTab === 'shipping' && (
                            <div className="space-y-4 text-gray-700">
                                <h3 className="text-2xl font-bold">
                                    Versand & Retouren
                                </h3>
                                <p>
                                    Wir liefern <strong>{ product.title }</strong> innerhalb von 2-3 Werktagen klimaneutral zu
                                    dir nach Hause. Du erhältst nach dem Versand eine Sendungsverfolgung per E-Mail.
                                </p>
                                <ul className="list-inside list-disc space-y-2">
                                    <li>Kostenloser Standardversand innerhalb Deutschlands</li>
                                    <li>Expressversand optional bei Bestellungen vor 12 Uhr</li>
                                    <li>30 Tage Rückgaberecht ohne Angabe von Gründen</li>
                                    <li>Retourenlabel liegt jeder Bestellung bei</li>
                                </ul>
                            </div>
                        ) }
                    </div>
                </div>
            </main>
        </div>
    )
}

export default ProductDetailsPageReady
