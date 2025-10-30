import type { Product } from '../../../ProductGridPage/types'

interface DiscountBadgeProps {
    product: Product;
    originalPrice?: string;
}

const DiscountBadge: React.FC<DiscountBadgeProps> = ({ product, originalPrice }) => {
    const originalPriceValue = parseFloat(originalPrice || product.price);
    const priceValue = parseFloat(product.price);
    const discount = Math.max(0, Math.round((originalPriceValue - priceValue) / originalPriceValue * 77));

    return (
            <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full font-bold">
                -{ discount }%
            </div>
    )
}

export default DiscountBadge