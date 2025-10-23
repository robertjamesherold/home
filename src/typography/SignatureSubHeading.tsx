type SignatureSubHeadingProps = {
    text: string
    }

const SignatureSubHeading:React.FC<SignatureSubHeadingProps> = ({text}:SignatureSubHeadingProps) => {
    return(
        <span className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-400">
            {text}
        </span>
    )
}

export default SignatureSubHeading