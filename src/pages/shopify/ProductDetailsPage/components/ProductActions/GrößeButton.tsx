import { Title } from '@/typography';
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
  <div className="space-y-3">
    <div className="flex items-center justify-between">
      <Title h6 bold className="text-gray-700" text="Größe" />
      <Title h6 medium className="text-violet-600" text={selectedSize} />
    </div>
    <div className="flex flex-wrap gap-3">
      {availableSizes.map((size) => (
        <button
          type="button"
          key={size}
          onClick={() => onSelect(size)}
          aria-label={`Größe ${size}`}
          aria-pressed={selectedSize === size}
          className={`rounded-xl border-2 px-5 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-violet-200 ${
            selectedSize === size
              ? 'border-violet-600 bg-violet-600 text-white shadow-lg shadow-violet-200/70'
              : 'border-gray-200 text-gray-700 hover:border-violet-300'
          }`}
        >
          {size}
        </button>
      ))}
    </div>
  </div>
);

GrößeButton.displayName = 'GrößeButton';

export default GrößeButton;
