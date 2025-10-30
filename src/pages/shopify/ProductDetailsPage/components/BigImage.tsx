import { useGallery } from '../hooks/useGallery'

type Product = {
    title: string;
    images: string[];
};

export const BigImage: React.FC<Product> = ( { images, title } ) =>
{
    const gallery = useGallery( images[ 0 ] )

    return (
        <img
            src={ gallery[0] }
            alt={ title }
            className="w-full h-full object-cover"
        />
    )
} 

export default BigImage