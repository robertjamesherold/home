import React from 'react';
import { Star } from 'lucide-react';
import type { TestimonialsProps } from '../types/Testimonials.types';

const TestimonialsCard: React.FC<TestimonialsProps> = ({
  name,
  role,
  content,
  rating,
}) => (
  <div className="shrink-0 w-full px-4 py-8 sm:px-8 sm:py-12 md:px-12 md:py-16 lg:px-16">
    <div className="mx-auto max-w-4xl text-center">
      {/* Rating Stars */}
      <div className="mb-4 flex justify-center gap-1 sm:mb-6">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 sm:h-6 sm:w-6 ${
              i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-slate-300'
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <blockquote className="mb-6 text-base italic leading-relaxed text-slate-700 sm:mb-8 sm:text-lg md:text-xl">
        "{content}"
      </blockquote>

      {/* Author */}
      <div>
        <p className="text-base font-semibold text-slate-900 sm:text-lg">
          {name}
        </p>
        <p className="text-sm text-slate-600 sm:text-base">{role}</p>
      </div>
    </div>
  </div>
);

export default TestimonialsCard;
