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
    className="absolute right-4 top-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/80 text-violet-600 shadow-lg shadow-violet-200/70 backdrop-blur transition hover:scale-[1.03] hover:bg-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-violet-200"
    aria-label={
      isFavorite ? 'Aus Favoriten entfernen' : 'Zu Favoriten hinzufügen'
    }
  >
    <Heart
      className={`h-6 w-6 transition ${
        isFavorite ? 'fill-current text-red-500' : 'text-gray-400'
      }`}
    />
  </button>
);

export default FavoritenButton;
