import type { FC } from 'react';

interface GalleryImagesProps {
  images: string[];
  selectedImage: number;
  onSelect: (index: number) => void;
}

const GalleryImages: FC<GalleryImagesProps> = ({
  images,
  selectedImage,
  onSelect,
}) => (
  <div className="grid grid-cols-4 gap-4">
    {images.map((image, index) => (
      <button
        type="button"
        key={`${image}-${index}`}
        onClick={() => onSelect(index)}
        className={`relative bg-white rounded-lg overflow-hidden aspect-square border-2 transition ${
          selectedImage === index
            ? 'border-purple-600 shadow-lg'
            : 'border-gray-200 hover:border-purple-300'
        }`}
      >
        <img
          src={image}
          alt={`Ansicht ${index + 1}`}
          className="w-full h-full object-cover"
        />
      </button>
    ))}
  </div>
);

export default GalleryImages;
