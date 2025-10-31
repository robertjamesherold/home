type TextParagraphProps = {
    text: string
    className?: string
    lg?: boolean
    md?: boolean
    sm?: boolean
    }

const TextParagraph: React.FC<TextParagraphProps> = ( { text, lg, md, sm, className }: TextParagraphProps ) =>
{
    return (
        lg ? <p className={`text-lg leading-relaxed ${className}`}>{text}</p> :
        md ? <p className={`text-base leading-relaxed ${className}`}>{text}</p> :
        sm ? <p className={`text-sm leading-relaxed ${className}`}>{text}</p> :
        <p className={`text-base leading-relaxed ${className}`}>{text}</p>
    )
}

export default TextParagraph