// src/components/EmptyState.tsx
import React from 'react';

const EmptyState: React.FC<{ message?: string }> = ({
  message = 'No products found matching your criteria',
}) => {
  return (
    <div className="py-16 text-center">
      <p className="text-xl text-gray-500">{message}</p>
    </div>
  );
};

export default EmptyState;
