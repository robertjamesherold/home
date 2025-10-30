import type { FC } from 'react';

interface DiscountBadgeProps {
  discount: number;
}

const DiscountBadge: FC<DiscountBadgeProps> = ({ discount }) => (
  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full font-bold">
    -{discount}%
  </div>
);

export default DiscountBadge;
