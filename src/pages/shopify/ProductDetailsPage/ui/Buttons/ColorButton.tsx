import { useProductDetailState } from '@/pages/shopify/ProductDetailsPage/hooks/useProductDetailState'
import { Check } from 'lucide-react'

type availableColorsProps = 
    {
        name: string,
        hex: string
    }

type ButtonProps = {
        availableColors: availableColorsProps | availableColorsProps[]
    }


const GrößeButton: React.FC<ButtonProps> = ( { availableColors } ) =>
{


  
    const { selectedColor, setSelectedColor } = useProductDetailState()


    return (
        <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
                Farbe: <span className="text-purple-600">{ selectedColor }</span>
            </label>
            <div className="flex flex-wrap gap-3">
                { Array.isArray( availableColors ) ? availableColors.map( ( color ) => (
                    <button
                        key={ color.hex }
                        onClick={ () => setSelectedColor( color.name ) }
                        className={ `relative w-12 h-12 rounded-full border-2 transition ${ selectedColor === color.name ? 'border-purple-600 shadow-lg scale-110' : 'border-gray-300 hover:border-purple-300' }` }
                        style={ { backgroundColor: color.hex } }
                    >
                        { selectedColor === color.name && (
                            <Check className="absolute inset-0 m-auto w-6 h-6 text-white" />
                        ) }
                    </button>
                ) ) : (
                    <button
                            className={ `relative w-12 h-12 rounded-full border-2 transition ${ selectedColor === availableColors.name ? 'border-purple-600 shadow-lg scale-110' : 'border-gray-300 hover:border-purple-300' }` }
                        style={ { backgroundColor: availableColors.name } }
                    >
                      
                            <Check className="absolute inset-0 m-auto w-6 h-6 text-white" />
                      
                    </button>
                 ) }
            </div>
        </div>

    )
}

export default GrößeButton