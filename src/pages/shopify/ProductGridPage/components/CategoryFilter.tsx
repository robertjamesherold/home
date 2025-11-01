// src/components/CategoryFilter.tsx
import React from 'react';

type Props = {
  categories: string[];
  selected: string;
  onSelect: (c: string) => void;
};

const CategoryFilter: React.FC<Props> = ({
  categories,
  selected,
  onSelect,
}) => {
  return (
    <div>
      <h3 className="text-lg font-semibold text-[#0F1111]">Departments</h3>
      <ul className="mt-3 space-y-2 text-sm">
        {categories.map((category) => (
          <li key={category}>
            <button
              onClick={() => onSelect(category)}
              className={`w-full text-left text-[#007185] transition hover:text-[#C7511F] ${selected === category ? 'font-semibold text-[#C7511F]' : ''}`}
              type="button"
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryFilter;
