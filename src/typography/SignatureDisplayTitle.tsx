type SignatureDisplayTitleProps = {
    text: string
    }

const SignatureDisplayTitle:React.FC<SignatureDisplayTitleProps> = ({text}:SignatureDisplayTitleProps) => {
    return(
        <h3 className="text-3xl font-semibold text-slate-900 md:text-4xl">
            {text}
        </h3>
    )
}

export default SignatureDisplayTitle