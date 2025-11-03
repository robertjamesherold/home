import { useProductDetail } from '@/pages/shopify/ProductDetailsPage/hooks/useProductDetail'
import { Check } from 'lucide-react';

type availableColorsProps = {
  name: string
  hex: string
};

type ButtonProps = {
  availableColors: availableColorsProps | availableColorsProps[]
};

const GrößeButton: React.FC<ButtonProps> = ( { availableColors } ) =>
{
  const { selectedColor, setSelectedColor } = useProductDetail();

  return (
    <div>
      <label className="mb-3 block text-sm font-semibold text-gray-700">
        Farbe: <span className="text-purple-600">{ selectedColor }</span>
      </label>
      <div className="flex flex-wrap gap-3">
        { Array.isArray( availableColors ) ? (
          availableColors.map( ( color ) => (
            <button
              key={ color.hex }
              onClick={ () => setSelectedColor( color.name ) }
              className={ `relative h-12 w-12 rounded-full border-2 transition ${ selectedColor === color.name ? 'scale-110 border-purple-600 shadow-lg' : 'border-gray-300 hover:border-purple-300' }` }
              style={ { backgroundColor: color.hex } }
            >
              { selectedColor === color.name && (
                <Check className="absolute inset-0 m-auto h-6 w-6 text-white" />
              ) }
            </button>
          ) )
        ) : (
          <button
              className={ `relative h-12 w-12 rounded-full border-2 transition ${ selectedColor === availableColors.name ? 'scale-110 border-purple-600 shadow-lg' : 'border-gray-300 hover:border-purple-300' }` }
              style={ { backgroundColor: availableColors.name } }
            >
              <Check className="absolute inset-0 m-auto h-6 w-6 text-white" />
            </button>
        ) }
      </div>
    </div>
  )
};

export default GrößeButton
