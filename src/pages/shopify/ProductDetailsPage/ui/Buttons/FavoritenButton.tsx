import type { FC } from 'react';
import { Heart } from 'lucide-react';

interface FavoritenButtonProps {
  isFavorite: boolean;
  onToggle: () => void;
}

const FavoritenButton: FC<FavoritenButtonProps> = ({
  isFavorite,
  onToggle,
}) => (
  <button
    type="button"
    onClick={onToggle}
    className="absolute top-4 right-4 p-3 rounded-full bg-white/80 backdrop-blur shadow-md hover:bg-white transition"
    aria-label={isFavorite ? 'Aus Favoriten entfernen' : 'Zu Favoriten hinzufügen'}
  >
    <Heart
      className={`w-6 h-6 ${
        isFavorite ? 'text-red-500 fill-current' : 'text-gray-400'
      }`}
    />
  </button>
);

export default FavoritenButton;
