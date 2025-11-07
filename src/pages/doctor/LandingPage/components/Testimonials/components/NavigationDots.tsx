import React from 'react';

interface NavigationDotsProps {
  count: number;
  activeIndex: number;
  onDotClick: (index: number) => void;
  disabled: boolean;
}

const NavigationDots: React.FC<NavigationDotsProps> = ({
  count,
  activeIndex,
  onDotClick,
  disabled,
}) => (
  <div className="flex items-center gap-2">
    {[...Array(count)].map((_, idx) => {
      const isActive = activeIndex === idx;
      return (
        <button
          key={idx}
          onClick={() => onDotClick(idx)}
          disabled={disabled}
          className={`h-2 rounded-full transition-all duration-300 ${
            isActive
              ? 'w-8 bg-[#2f6d8b] hover:bg-[#285b74]'
              : 'w-2 bg-[#dceaea] hover:bg-[#b1c8cf]'
          } disabled:cursor-not-allowed`}
          aria-label={`Gehe zu Testimonial ${idx + 1}`}
          aria-current={isActive ? 'true' : 'false'}
        />
      );
    })}
  </div>
);

export default NavigationDots;
