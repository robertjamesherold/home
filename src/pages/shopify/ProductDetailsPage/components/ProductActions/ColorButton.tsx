import type { FC } from 'react';
import { Check } from 'lucide-react';
import type { ColorOption } from '../../types';

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
  <div>
    <label className="block text-sm font-semibold text-gray-700 mb-3">
      Farbe: <span className="text-purple-600">{selectedColor}</span>
    </label>
    <div className="flex flex-wrap gap-3">
      {availableColors.map((color) => (
        <button
          type="button"
          key={color.hex}
          onClick={() => onSelect(color.name)}
          className={`relative w-12 h-12 rounded-full border-2 transition ${
            selectedColor === color.name
              ? 'border-purple-600 shadow-lg scale-110'
              : 'border-gray-300 hover:border-purple-300'
          }`}
          style={{ backgroundColor: color.hex }}
          aria-label={`Farbe ${color.name}`}
        >
          {selectedColor === color.name && (
            <Check className="absolute inset-0 m-auto w-6 h-6 text-white" />
          )}
        </button>
      ))}
    </div>
  </div>
);

export default ColorButton;
