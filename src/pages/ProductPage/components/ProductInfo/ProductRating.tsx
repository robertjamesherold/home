import React from 'react';
import { Star } from 'lucide-react';
import type { RatingProps } from '@/types';

export const ProductRating: React.FC<RatingProps> = ( {
  score,
  reviews
}: RatingProps ) =>
{
  return (
    <div className="mt-3 flex items-center gap-2">
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, starIndex) => (
          <Star
            key={starIndex}
            className={`h-4 w-4 ${
              starIndex < Math.floor( Number( score ) )
                ? 'fill-yellow-400 text-yellow-400'
                : 'text-muted-foreground/40'
            }`}
          />
        ))}
      </div>
      <span className="text-sm text-muted-foreground">
        { String( reviews ) } ({ String( reviews ) } Bewertungen)
      </span>
    </div>
  );
};
