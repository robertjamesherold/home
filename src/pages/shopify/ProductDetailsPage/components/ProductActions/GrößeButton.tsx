import type { FC } from 'react';

interface SizeButtonProps {
  availableSizes: string[];
  selectedSize: string;
  onSelect: (size: string) => void;
}

const GrößeButton: FC<SizeButtonProps> = ({
  availableSizes,
  selectedSize,
  onSelect,
}) => (
  <div>
    <label className="block text-sm font-semibold text-gray-700 mb-3">
      Größe: <span className="text-purple-600">{selectedSize}</span>
    </label>
    <div className="flex flex-wrap gap-3">
      {availableSizes.map((size) => (
        <button
          type="button"
          key={size}
          onClick={() => onSelect(size)}
          className={`px-6 py-3 rounded-lg border-2 font-semibold transition ${
            selectedSize === size
              ? 'border-purple-600 bg-purple-600 text-white'
              : 'border-gray-300 hover:border-purple-300'
          }`}
          aria-label={`Größe ${size}`}
        >
          {size}
        </button>
      ))}
    </div>
  </div>
);

export default GrößeButton;
