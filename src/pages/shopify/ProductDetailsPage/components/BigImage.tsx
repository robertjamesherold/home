import type { FC } from 'react'

interface BigImageProps
{
    image: string
    title: string
}

const BigImage: FC<BigImageProps> = ( { image, title } ) => (
    <img src={ image } alt={ title } className="w-full h-full object-cover" />
)

export default BigImage