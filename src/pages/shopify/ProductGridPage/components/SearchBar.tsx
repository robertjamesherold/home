// src/components/SearchBar.tsx
import React from 'react';
import { ChevronDown, Search, X } from 'lucide-react';

type Props = {
  value: string;
  onChange: (v: string) => void;
  className?: string;
};

const SearchBar: React.FC<Props> = ({ value, onChange, className = '' }) => {
  return (
    <div
      className={`flex w-full items-stretch overflow-hidden rounded-md border border-gray-300 bg-white shadow-sm focus-within:ring-2 focus-within:ring-[#febd69] ${className}`}
    >
      <button
        type="button"
        className="hidden items-center gap-1 border-r border-gray-200 bg-gray-100 px-3 text-sm font-medium text-gray-700 sm:flex"
      >
        <span>All</span>
        <ChevronDown className="h-4 w-4" />
      </button>
      <div className="relative flex-1">
        <input
          type="text"
          placeholder="Search for products, brands, and more"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="h-full w-full border-none bg-transparent px-3 py-2 pr-9 text-sm text-gray-900 outline-none"
        />
        {value && (
          <button
            onClick={() => onChange('')}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-1 text-gray-400 transition hover:text-gray-700"
            type="button"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
      <button
        type="button"
        className="flex items-center justify-center bg-[#febd69] px-4 text-sm font-semibold text-[#111] transition hover:bg-[#f3a847]"
      >
        <Search className="h-5 w-5" />
      </button>
    </div>
  );
};

export default SearchBar;
