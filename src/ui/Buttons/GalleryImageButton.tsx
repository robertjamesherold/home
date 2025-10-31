import type { ButtonHTMLAttributes, FC } from 'react';

interface GalleryImageButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  image: string;
  alt: string;
  isSelected?: boolean;
}

const GalleryImageButton: FC<GalleryImageButtonProps> = ({
  image,
  alt,
  isSelected = false,
  className = '',
  ...props
}) => (
  <button
    type="button"
    className={
      [
        'relative bg-white rounded-lg overflow-hidden aspect-square border-2 transition',
        isSelected
          ? 'border-violet-600 shadow-lg'
          : 'border-gray-200 hover:border-violet-300',
        className,
      ]
        .filter(Boolean)
        .join(' ')
    }
    {...props}
  >
    <img src={image} alt={alt} className="w-full h-full object-cover" />
  </button>
);

export default GalleryImageButton;
