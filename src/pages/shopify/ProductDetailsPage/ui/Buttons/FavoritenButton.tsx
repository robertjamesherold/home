import { Heart } from 'lucide-react'
import { useProductDetail } from '@/pages/shopify/ProductDetailsPage/hooks/useProductDetail';

const FavoritenButton = () =>
{
  const { isFavorite, toggleFavorite } = useProductDetail()
  return (
    <button onClick={ () => toggleFavorite() } className="p-3 ...">
      <Heart
        className={ `h-6 w-6 ${ isFavorite ? 'fill-current text-red-500' : 'text-gray-400' }` }
      />
    </button>
  )
};

export default FavoritenButton
