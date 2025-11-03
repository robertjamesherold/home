import React from 'react';
import { Star } from 'lucide-react';
import type { TestimonialsProps } from '../types/Testimonials.types';

const TestimonialsCard: React.FC<TestimonialsProps> = ({ name, role, content, rating }) => (
  <div className="px-4 sm:px-8 md:px-12 lg:px-16 py-8 sm:py-12 md:py-16">
    <div className="max-w-4xl mx-auto text-center">
      {/* Rating Stars */}
      <div className="flex justify-center gap-1 mb-4 sm:mb-6">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 sm:w-6 sm:h-6 ${
              i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-slate-300'
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <blockquote className="text-slate-700 text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8 italic">
        "{content}"
      </blockquote>

      {/* Author */}
      <div>
        <p className="font-semibold text-slate-900 text-base sm:text-lg">{name}</p>
        <p className="text-slate-600 text-sm sm:text-base">{role}</p>
      </div>
    </div>
  </div>
);

export default TestimonialsCard;
