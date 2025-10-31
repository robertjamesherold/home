import React from 'react'
import { useParams } from 'react-router-dom'

import { ProductDetailsPageError, ProductDetailsPageLoading, ProductDetailsPageReady } from './states'
import { useProductDetail } from './hooks'

const ProductDetailsPage: React.FC = () =>
{
    const { productId } = useParams<{ productId: string }>()
    const {
        loading,
        product,
        ...detail
    } = useProductDetail( productId )

    if ( loading )
    {
        return <ProductDetailsPageLoading />
    }

    if ( !product )
    {
        return <ProductDetailsPageError />
    }

    return (
        <ProductDetailsPageReady
            product={ product }
            galleryImages={ detail.galleryImages }
            pricing={ detail.pricing }
            reviewCount={ detail.reviewCount }
            features={ detail.features }
            specifications={ detail.specifications }
            reviews={ detail.reviews }
            availableColors={ detail.availableColors }
            availableSizes={ detail.availableSizes }
            selectedImage={ detail.selectedImage }
            isFavorite={ detail.isFavorite }
            selectedColor={ detail.selectedColor }
            selectedSize={ detail.selectedSize }
            quantity={ detail.quantity }
            activeTab={ detail.activeTab }
            onSelectImage={ detail.setSelectedImage }
            onToggleFavorite={ detail.toggleFavorite }
            onSelectColor={ detail.setSelectedColor }
            onSelectSize={ detail.setSelectedSize }
            onIncreaseQuantity={ detail.increase }
            onDecreaseQuantity={ detail.decrease }
            onChangeTab={ detail.setActiveTab }
            onAddToCart={ detail.handleAddToCart }
            onBuyNow={ detail.handleBuyNow }
        />
    )
}

export default ProductDetailsPage
