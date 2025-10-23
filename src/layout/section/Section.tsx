type SectionProps = {
    fullWidth? : boolean,
    children: React.ReactNode
    } 

const Section:React.FC<SectionProps> = ({fullWidth=false, children}:SectionProps) => {
    return (
        <section className={`w-full mx-auto px-8 py-2 ${fullWidth ? 'max-w-full' : 'max-w-320'}`}>
            {children}
        </section>
    )
}

export default Section