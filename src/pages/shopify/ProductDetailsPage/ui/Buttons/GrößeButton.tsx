import { useProductDetailState } from '@/pages/shopify/ProductDetailsPage/hooks/useProductDetailState'

const GrößeButton = ( { availableSizes }: { availableSizes: string | string[] } ) =>
{

    const { selectedSize, setSelectedSize } = useProductDetailState()


    return (
        <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
                Größe: <span className="text-purple-600">{ selectedSize }</span>
            </label>
            <div className="flex flex-wrap gap-3">
                { Array.isArray( availableSizes ) ? availableSizes.map( ( size: string ) => (
                    <button
                        key={ size }
                        onClick={ () => setSelectedSize( size ) }
                        className={ `px-6 py-3 rounded-lg border-2 font-semibold transition ${ selectedSize === size ? 'border-purple-600 bg-purple-600 text-white' : 'border-gray-300 hover:border-purple-300' }` }
                    >
                        { size }
                    </button>
                ) ) : (
                    <button
                        className={ `px-6 py-3 rounded-lg border-2 font-semibold transition ${ selectedSize === availableSizes ? 'border-purple-600 bg-purple-600 text-white' : 'border-gray-300 hover:border-purple-300' }` }
                    >
                        { availableSizes }
                    </button> ) }
            </div>
        </div>

    )
}

export default GrößeButton