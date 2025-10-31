type Props = {
    image: string
    title: string
}

const BigImage = ( { image, title }: Props ) => (
    <img
        src={ image }
        alt={ title }
        className="w-full h-full object-cover"
    />
)

export default BigImage

