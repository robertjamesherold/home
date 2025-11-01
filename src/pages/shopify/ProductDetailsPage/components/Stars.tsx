import React from 'react';
import { Star } from 'lucide-react';

type StarsProps = {
  rating: number;
  className?: string;
};

const Stars: React.FC<StarsProps> = ({ rating, className = '' }) => {
  const rounded = Math.round(rating);
  return (
    <div className={`flex flex-row ${className}`}>
      {[...Array(5)].map((_, idx) => (
        <Star
          key={`star-${idx}`}
          className={`h-5 w-5 ${idx < rounded ? 'fill-current text-yellow-400' : 'text-gray-300'}`}
        />
      ))}
    </div>
  );
};

export default Stars;
