import type { FC } from 'react';
import { Minus, Plus } from 'lucide-react';

interface MengeButtonProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

const MengeButton: FC<MengeButtonProps> = ({
  quantity,
  onIncrease,
  onDecrease,
}) => (
  <div>
    <label className="block text-sm font-semibold text-gray-700 mb-3">
      Menge
    </label>
    <div className="flex items-center space-x-4">
      <div className="flex items-center border-2 border-gray-300 rounded-lg">
        <button
          type="button"
          onClick={onDecrease}
          className="p-3 text-gray-700 hover:text-purple-600 transition"
          aria-label="Menge verringern"
        >
          <Minus className="w-5 h-5" />
        </button>
        <span className="px-6 font-semibold text-lg">{quantity}</span>
        <button
          type="button"
          onClick={onIncrease}
          className="p-3 text-gray-700 hover:text-purple-600 transition"
          aria-label="Menge erhöhen"
        >
          <Plus className="w-5 h-5" />
        </button>
      </div>
    </div>
  </div>
);

export default MengeButton;
