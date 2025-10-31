import type { FC } from 'react'
import { Minus, Plus } from 'lucide-react'
import { Title } from '@/typography'

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
  <div className="space-y-2">
    <Title h6 bold className=" text-gray-700" text='Menge' />
    <div className="flex items-center gap-4">
      <div className="flex items-center overflow-hidden rounded-xl border-2 border-gray-200 bg-white shadow-sm">
        <button
          type="button"
          onClick={onDecrease}
          className="grid h-11 w-11 place-items-center text-gray-700 transition hover:text-violet-600 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-violet-200"
          aria-label="Menge verringern"
        >
          <Minus className="h-5 w-5" />
        </button>
        <span className="px-6 min-w-[6ch] text-center text-lg font-semibold text-gray-900">{ quantity }</span>
        <button
          type="button"
          onClick={onIncrease}
          className="grid h-11 w-11 place-items-center text-gray-700 transition hover:text-violet-600 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-violet-200"
          aria-label="Menge erhöhen"
        >
          <Plus className="h-5 w-5" />
        </button>
      </div>
    </div>
  </div>
)

export default MengeButton
