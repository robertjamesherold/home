import React from 'react'
import { Check, Shield, Truck, type LucideIcon } from 'lucide-react'
import type { Product } from '@/types/Product.types'
import type { ActiveTab, ColorOption, Review } from '../types'
import type { Pricing } from '../lib/price'
import { ImageSection, ProductActions, Stars } from '../components'
import Tabs from '../components/Tabs'
import ReviewsList from '../components/ReviewsList'
import SpecsAndFeatures from '../components/SpecsAndFeatures'
import { TextParagraph, Title } from '@/typography'

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

type ServiceHighlight = {
    icon: LucideIcon
    label: string
    description: string
}

const SERVICE_HIGHLIGHTS: ServiceHighlight[] = [
    {
        icon: Truck,
        label: 'Versand am selben Tag',
        description: 'Bestellungen bis 12 Uhr verlassen noch am gleichen Tag unser Lager.',
    },
    {
        icon: Shield,
        label: '2 Jahre Garantie',
        description: 'Kostenfreier Reparatur- oder Austauschservice bei Materialfehlern.',
    },
    {
        icon: Check,
        label: 'Geprüfte Qualität',
        description: 'Jedes Produkt wird vor dem Versand sorgfältig auf Funktion geprüft.',
    },
]

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
        <div className="min-h-screen bg-linear-to-br from-violet-50 via-pink-50 to-blue-50">
            <main className="main mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:items-start lg:gap-16">
                    <div className="flex flex-col gap-6 lg:sticky lg:top-8">
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
                    </div>

                    <div className="flex flex-col gap-6 lg:gap-8">
                        <section className="rounded-3xl bg-white/90 p-6 shadow-xl backdrop-blur-sm sm:p-8">
                            <div className="flex flex-col gap-5">
                                <div className="flex flex-col gap-3">
                                    <Title
                                        h1
                                        bold
                                        className="text-3xl leading-tight text-gray-900 sm:text-4xl lg:text-5xl"
                                        text={ product.title }
                                    />

                                    <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
                                        <Stars rating={ product.rating } />
                                        <Title h6 bold className="font-semibold text-gray-700" text={ product.rating.toFixed( 1 ) } />
                                        <Title h6 className="text-gray-500" text={ `(${ reviewCount } Bewertungen)` } />
                                    </div>
                                </div>

                                <div className="flex flex-wrap items-baseline gap-4 text-gray-900">
                                    <Title h2 bold className="text-3xl text-violet-600 sm:text-4xl" text={ pricing.priceDisplay } />
                                    <Title h4 className="text-lg text-gray-400 line-through" text={ pricing.originalPrice } />
                                </div>

                                <div className="inline-flex items-center gap-2 rounded-full bg-green-50 px-4 py-2 text-sm font-semibold text-green-600">
                                    <Check className="h-4 w-4" />
                                    Sofort verfügbar
                                </div>

                                <TextParagraph sm className="text-gray-600" text={ product.description } />
                            </div>
                        </section>

                        <section className="rounded-3xl bg-white p-6 shadow-xl sm:p-8">
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
                        </section>

                        <section className="grid grid-cols-1 gap-4 rounded-3xl bg-white p-6 shadow-xl sm:grid-cols-3 sm:p-8">
                            { SERVICE_HIGHLIGHTS.map( ( { icon: Icon, label, description } ) => (
                                <div key={ label } className="flex flex-col items-center gap-3 text-center">
                                    <span className="rounded-full bg-violet-50 p-4 text-violet-600">
                                        <Icon className="h-6 w-6" />
                                    </span>
                                    <span className="text-sm font-semibold text-gray-900">
                                        { label }
                                    </span>
                                    <span className="text-sm text-gray-500">
                                        { description }
                                    </span>
                                </div>
                            ) ) }
                        </section>
                    </div>
                </div>

                <section className="mt-14 rounded-3xl bg-white p-6 shadow-xl sm:p-8 lg:mt-20">
                    <Tabs activeTab={ activeTab } onChange={ onChangeTab } reviewCount={ reviewCount } />

                    <div className="mt-8">
                        { activeTab === 'description' && (
                            <SpecsAndFeatures features={ features } specifications={ specifications } />
                        ) }

                        { activeTab === 'reviews' && <ReviewsList reviews={ reviews } /> }

                        { activeTab === 'shipping' && (
                            <div className="space-y-4 text-gray-700">
                                <Title h3 bold className=" text-gray-900" text='Versand & Retouren' />


                                <TextParagraph className="text-gray-700" text={ `Wir liefern innerhalb von 2-3 Werktagen klimaneutral zu
                                    dir nach Hause. Du erhältst nach dem Versand eine Sendungsverfolgung per E-Mail.`} />


                                <ul className="list-inside list-disc space-y-2">
                                    <TextParagraph className='flex relative before:text-xl before:absolute before:-mt-0.5 before:-left-0.75 pl-3 before:content-["•"]' text='Kostenloser Standardversand' />
                                    <TextParagraph className='flex relative before:text-xl before:absolute before:-mt-0.5 before:-left-0.75 pl-3 before:content-["•"]' text='Expressversand bei Bestellungen vor 12 Uhr' />
                                    <TextParagraph className='flex relative before:text-xl before:absolute before:-mt-0.5 before:-left-0.75 pl-3 before:content-["•"]' text='Kostenloser Rückversand innerhalb Deutschlands' />
                                    <TextParagraph className='flex relative before:text-xl before:absolute before:-mt-0.5 before:-left-0.75 pl-3 before:content-["•"]' text='30 Tage Rückgaberecht' />
                                </ul>
                            </div>
                        ) }
                    </div>
                </section>
            </main>
        </div>
    )
}

export default ProductDetailsPageReady
