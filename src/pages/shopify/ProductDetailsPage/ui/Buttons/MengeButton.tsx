import { Plus, Minus } from "lucide-react"
import { useProductDetailState } from '@/pages/shopify/ProductDetailsPage/hooks/useProductDetailState'

const MengeButton = () =>
{
    const { quantity, increase, decrease } = useProductDetailState()
    return (
        <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">Menge</label>
            <div className="flex items-center space-x-4">
                <div className="flex items-center border-2 border-gray-300 rounded-lg">
                    <div className="flex items-center">
                        <button onClick={ () => decrease() } className="p-3 ...">
                            <Minus className="w-5 h-5" />
                        </button>
                        <span className="px-6 font-semibold text-lg">{ quantity }</span>
                        <button onClick={ () => increase() } className="p-3 ...">
                            <Plus className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default MengeButton