type SectionProps = {
    fullWidth? : boolean,
    padding?: boolean,
    children: React.ReactNode
    className?: string
    id?: string
} & React.HTMLAttributes<HTMLElement>

const Section:React.FC<SectionProps> = ({fullWidth=false, padding=false, children, className, id, ...rest}:SectionProps) => {
    const widthClass = fullWidth ? 'w-screen' : 'w-full max-w-480';
    const marginClass = fullWidth ? '' : 'mx-auto';
    const paddingClass = padding ? 'p-0' : 'px-4 md:px-6 xl:px-8 py-2';

    return (
        <section
            id={id}
            className={`relative ${widthClass} ${marginClass} ${paddingClass} ${className ?? ''}`.trim()}
            {...rest}
        >
            {children}
        </section>
    )
}

export default Section
