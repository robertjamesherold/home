import { Heart } from "lucide-react"
import { useProductDetailState } from '@/pages/shopify/ProductDetailsPage/hooks/useProductDetailState'

const FavoritenButton = () =>
{
    const { isFavorite, toggleFavorite } = useProductDetailState()
    return (
            <button onClick={ () => toggleFavorite() } className="p-3 ...">
                <Heart className={ `w-6 h-6 ${ isFavorite ? 'text-red-500 fill-current' : 'text-gray-400' }` } />
            </button>

    )
}

export default FavoritenButton