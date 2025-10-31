import { DiscountBadge, FavoritenButton, BigImage, GalleryImages } from '.'

type ImageSectionProps = {
    bigImage: string
    bigImageTitle: string
    discount: number
    isFavorite: boolean
    onToggle: () => void
    galleryImages: string[]
    selectedImage: number
    onSelectImage: (index: number) => void
}

const ImageSection: React.FC<ImageSectionProps> = ( { bigImage, bigImageTitle, discount, isFavorite, onToggle, galleryImages, selectedImage, onSelectImage }:ImageSectionProps ) =>
{
    return (
        <div className="sticky top-0 space-y-4">
        <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden aspect-square">
            <BigImage image={ bigImage } title={ bigImageTitle } />
            <DiscountBadge discount={ discount } />
                <FavoritenButton isFavorite={ isFavorite } onToggle={ onToggle } />
        </div>
          {
        galleryImages.length > 0 && (
                    <GalleryImages images={ galleryImages } selectedImage={ selectedImage } onSelect={ onSelectImage } />
        )
    }
          </div > )
}
export default ImageSection

