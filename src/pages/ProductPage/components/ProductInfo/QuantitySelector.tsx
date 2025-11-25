import React from 'react';
import { Minus, Plus } from 'lucide-react';
import { Button } from '@/ui';

interface QuantitySelectorProps {
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

export const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  quantity,
  onIncrement,
  onDecrement,
}) => {
  return (
    <div className="flex items-center grow-0 w-32  rounded-md border">
      <Button type="button" variant="ghost" size="icon" onClick={onDecrement}>
        <Minus className="h-4 w-4" />
      </Button>
      <span className="px-4 text-sm font-medium w-full text-center">{ quantity }</span>
      <Button type="button" variant="ghost" size="icon" onClick={onIncrement}>
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  );
};
