import type { Product } from '../../../ProductGridPage/types';

interface DiscountBadgeProps {
  product: Product;
  originalPrice?: string;
}

const DiscountBadge: React.FC<DiscountBadgeProps> = ({
  product,
  originalPrice,
}) => {
  const originalPriceValue = parseFloat(originalPrice || product.price);
  const priceValue = parseFloat(product.price);
  const discount = Math.max(
    0,
    Math.round(((originalPriceValue - priceValue) / originalPriceValue) * 77)
  );

  return (
    <div className="absolute left-4 top-4 rounded-full bg-red-500 px-3 py-1 font-bold text-white">
      -{discount}%
    </div>
  );
};

export default DiscountBadge;
