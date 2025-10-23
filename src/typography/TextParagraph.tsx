type TextParagraphProps = {
    text: string
    }

const TextParagraph:React.FC<TextParagraphProps> = ({text}:TextParagraphProps) => {
    return(
        <p className="text-base leading-relaxed text-slate-600 md:text-lg">
            {text}
        </p>
    )
}

export default TextParagraph