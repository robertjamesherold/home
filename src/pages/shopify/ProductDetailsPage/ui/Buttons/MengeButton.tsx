import { Plus, Minus } from 'lucide-react'
import { useProductDetail } from '@/pages/shopify/ProductDetailsPage/hooks/useProductDetail';

const MengeButton = () =>
{
  const { quantity, increase, decrease } = useProductDetail()
  return (
    <div>
      <label className="mb-3 block text-sm font-semibold text-gray-700">
        Menge
      </label>
      <div className="flex items-center space-x-4">
        <div className="flex items-center rounded-lg border-2 border-gray-300">
          <div className="flex items-center">
            <button onClick={ () => decrease() } className="p-3 ...">
              <Minus className="h-5 w-5" />
            </button>
            <span className="px-6 text-lg font-semibold">{ quantity }</span>
            <button onClick={ () => increase() } className="p-3 ...">
              <Plus className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default MengeButton
