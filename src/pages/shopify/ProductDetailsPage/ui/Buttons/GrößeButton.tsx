import { useProductDetail } from '@/pages/shopify/ProductDetailsPage/hooks/useProductDetail';

const GrößeButton = ( {
  availableSizes,
}: {
  availableSizes: string | string[]
} ) =>
{
  const { selectedSize, setSelectedSize } = useProductDetail();

  return (
    <div>
      <label className="mb-3 block text-sm font-semibold text-gray-700">
        Größe: <span className="text-purple-600">{ selectedSize }</span>
      </label>
      <div className="flex flex-wrap gap-3">
        { Array.isArray( availableSizes ) ? (
          availableSizes.map( ( size: string ) => (
            <button
              key={ size }
              onClick={ () => setSelectedSize( size ) }
              className={ `rounded-lg border-2 px-6 py-3 font-semibold transition ${ selectedSize === size ? 'border-purple-600 bg-purple-600 text-white' : 'border-gray-300 hover:border-purple-300' }` }
            >
              { size }
            </button>
          ) )
        ) : (
          <button
              className={ `rounded-lg border-2 px-6 py-3 font-semibold transition ${ selectedSize === availableSizes ? 'border-purple-600 bg-purple-600 text-white' : 'border-gray-300 hover:border-purple-300' }` }
            >
            { availableSizes }
          </button>
        ) }
      </div>
    </div>
  )
};

export default GrößeButton
