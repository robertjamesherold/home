import type { FC } from 'react';
import { DiscountBadge, FavoritenButton, BigImage, GalleryImages } from '.';

type ImageSectionProps = {
  bigImage: string;
  bigImageTitle: string;
  discount: number;
  isFavorite: boolean;
  onToggle: () => void;
  galleryImages: string[];
  selectedImage: number;
  onSelectImage: (index: number) => void;
};

const ImageSection: FC<ImageSectionProps> = ({
  bigImage,
  bigImageTitle,
  discount,
  isFavorite,
  onToggle,
  galleryImages,
  selectedImage,
  onSelectImage,
}) => (
  <div className="flex flex-col gap-4 sm:gap-6">
    <div className="relative overflow-hidden rounded-3xl bg-white shadow-2xl shadow-violet-100/50">
      <div className="aspect-[4/5] w-full sm:aspect-[4/3]">
        <BigImage image={bigImage} title={bigImageTitle} />
      </div>
      <DiscountBadge discount={discount} />
      <FavoritenButton isFavorite={isFavorite} onToggle={onToggle} />
    </div>

    {galleryImages.length > 0 && (
      <GalleryImages
        images={galleryImages}
        selectedImage={selectedImage}
        onSelect={onSelectImage}
      />
    )}
  </div>
);

export default ImageSection;
