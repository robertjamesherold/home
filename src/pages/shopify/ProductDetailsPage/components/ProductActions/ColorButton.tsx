import type { FC } from 'react';
import { Check } from 'lucide-react';
import type { ColorOption } from '../../types';
import { Title } from '@/typography';

interface ColorButtonProps {
  availableColors: ColorOption[];
  selectedColor: string;
  onSelect: (color: string) => void;
}

const ColorButton: FC<ColorButtonProps> = ({
  availableColors,
  selectedColor,
  onSelect,
}) => (
  <div className="space-y-3">
    <div className="flex items-center justify-between">
      <Title h6 bold className="text-gray-700" text="Farbe" />
      <Title h6 medium className="text-violet-600" text={selectedColor} />
    </div>

    <div className="flex flex-wrap gap-3">
      {availableColors.map((color) => (
        <button
          type="button"
          key={color.hex}
          onClick={() => onSelect(color.name)}
          aria-label={`Farbe ${color.name}`}
          aria-pressed={selectedColor === color.name}
          className={`relative h-12 w-12 rounded-full border-2 transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-violet-200 ${
            selectedColor === color.name
              ? 'scale-110 border-violet-600 shadow-xl shadow-violet-200/70'
              : 'border-gray-200 hover:border-violet-300'
          }`}
          style={{ backgroundColor: color.hex }}
        >
          {selectedColor === color.name && (
            <Check className="absolute inset-0 m-auto h-6 w-6 text-white" />
          )}
        </button>
      ))}
    </div>
  </div>
);

export default ColorButton;
