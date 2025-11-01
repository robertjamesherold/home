// src/components/LoadingGrid.tsx
import React from 'react';

const LoadingGrid: React.FC<{ count?: number }> = ({ count = 8 }) => {
  return (
    <div className="grid grid-cols-1 gap-4">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="flex animate-pulse flex-row gap-8 overflow-hidden rounded-lg bg-white shadow-lg"
        >
          <div className="aspect-square h-64 w-64 bg-gray-300"></div>
          <div className="items-left flex h-64 w-full flex-col justify-center gap-2">
            <div className="h-8 w-4/12 rounded bg-gray-300"></div>
            <div className="h-3 w-2/12 rounded bg-gray-300"></div>
            <div className="h-3 w-8/12 rounded bg-gray-300"></div>
            <div className="mt-3 h-6 w-1/4 rounded bg-gray-300"></div>
            <div className="h-3 w-1/2 rounded bg-gray-300"></div>
            <div className="mt-1 h-10 w-1/2 rounded bg-gray-300"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LoadingGrid;
