import React from 'react';
import { Star } from 'lucide-react';
import type { TestimonialsProps } from '../types/Testimonials.types';

const TestimonialsCard: React.FC<TestimonialsProps> = ({
  name,
  role,
  content,
  rating,
}) => (
  <div className="w-full shrink-0 px-4 py-10 sm:px-8 sm:py-14 md:px-12 md:py-16 lg:px-16">
    <div className="mx-auto max-w-3xl text-center">
      {/* Rating Stars */}
      <div className="mb-5 flex justify-center gap-1 sm:mb-6">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 sm:h-6 sm:w-6 ${
              i < rating
                ? 'fill-[#f28c64] text-[#f28c64]'
                : 'text-[#c7d6d8]'
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <blockquote className="mb-6 text-base italic leading-relaxed text-[#425761] sm:mb-8 sm:text-lg md:text-xl">
        "{content}"
      </blockquote>

      {/* Author */}
      <div>
        <p className="text-base font-semibold text-[#1f3e4d] sm:text-lg">
          {name}
        </p>
        <p className="text-sm text-[#6a7a83] sm:text-base">{role}</p>
      </div>
    </div>
  </div>
);

export default TestimonialsCard;
