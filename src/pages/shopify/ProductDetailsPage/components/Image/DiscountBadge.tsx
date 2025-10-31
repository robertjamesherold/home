import type { FC } from 'react'

interface DiscountBadgeProps {
  discount: number;
}

const DiscountBadge: FC<DiscountBadgeProps> = ( { discount } ) =>
{
  if ( discount <= 0 )
  {
    return null
  }

  return (
    <div className="absolute left-4 top-4 inline-flex items-center rounded-full bg-violet-600 px-4 py-1.5 text-sm font-semibold text-white shadow-lg shadow-violet-300/60">
      -{ discount }%
    </div>
  )
};

export default DiscountBadge;
