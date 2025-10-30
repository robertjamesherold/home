import { useState } from 'react'
import { useGallery } from '../hooks/useGallery'

const GalleryImages: React.FC = ( ) =>
{
    const [ selectedImage, setSelectedImage ] = useState( 0);
    const updateSelectedImage = () => setSelectedImage( 1 )
return (<>
        {
                <button
                    
                    role='img'
                     
                    onClick={ updateSelectedImage }
                    className={ `relative bg-white rounded-lg overflow-hidden aspect-square border-2 transition ${ selectedImage === index ? 'border-purple-600 shadow-lg' : 'border-gray-200 hover:border-purple-300' }` }
                >
                    <img src={ image } alt={ `Ansicht ${ index + 1 }` } className="w-full h-full object-cover" />
                </button>
            }
    </>
} 