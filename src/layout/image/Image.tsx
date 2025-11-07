type ImageProps = {
    src: string
    alt: string
    className?: string
}


const Image: React.FC<ImageProps> = ({ src, alt, className }) =>
{
    return (
        <div className={ `relative overflow-hidden ${ className }` }>
            <img src={ src } alt={ alt } className="h-full w-full object-cover" />
        </div>

    )
}

export default Image