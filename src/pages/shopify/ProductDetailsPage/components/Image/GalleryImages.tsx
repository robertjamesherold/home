import type { FC } from 'react'

interface GalleryImagesProps
{
    images: string[]
    selectedImage: number
    onSelect: ( index: number ) => void
}

const GalleryImages: FC<GalleryImagesProps> = ( {
    images,
    selectedImage,
    onSelect,
} ) => (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 xl:grid-cols-5">
        { images.map( ( image, index ) => (
            <button
                type="button"
                key={ `${ image }-${ index }` }
                onClick={ () => onSelect( index ) }
                className={ `relative aspect-square overflow-hidden rounded-2xl border-2 bg-white transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-violet-200/80 ${ selectedImage === index
                    ? 'border-violet-600 shadow-lg shadow-violet-200/70'
                    : 'border-gray-200 hover:border-violet-300'
                    }` }
            >
                <img
                    src={ image }
                    alt={ `Ansicht ${ index + 1 }` }
                    className="h-full w-full object-cover"
                />
            </button>
        ) ) }
    </div>
)

export default GalleryImages
