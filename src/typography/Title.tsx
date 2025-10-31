type TitleProps = {
    text: string
    h1?: boolean
    h2?: boolean
    h3?: boolean
    h4?: boolean
    h5?: boolean
    h6?: boolean
    className?: string
    bold?: boolean
    semibold?: boolean
    medium?: boolean
}
const Title: React.FC<TitleProps> = ( { text, h1, h2, h3, h4, h5, h6, className, bold, semibold, medium }: TitleProps ) =>
{
    return ( 
        h1 ?
            <h1 className={ `text-5xl ${ bold ? 'font-bold' : semibold ? 'font-semibold' : medium ? 'font-medium' : 'font-normal' } ${ className ?? '' }` }>
                { text }
            </h1> :
        h2 ?
            <h2 className={ `text-4xl ${ bold ? 'font-bold' : semibold ? 'font-semibold' : medium ? 'font-medium' : 'font-normal' } ${ className ?? '' }` }>
                { text }
            </h2> :
        h3 ?
            <h3 className={ `text-3xl ${ bold ? 'font-bold' : semibold ? 'font-semibold' : medium ? 'font-medium' : 'font-normal' } ${ className ?? '' }` }>
                { text }
            </h3> :
        h4 ?
            <h4 className={ `text-2xl ${ bold ? 'font-bold' : semibold ? 'font-semibold' : medium ? 'font-medium' : 'font-normal' } ${ className ?? '' }` }>
                { text }
            </h4> :
        h5 ?
            <h5 className={ `text-base ${ bold ? 'font-bold' : semibold ? 'font-semibold' : medium ? 'font-medium' : 'font-normal' } ${ className ?? '' }` }>
                { text }
            </h5> :
        h6 ?
            <h6 className={ `text-sm ${ bold ? 'font-bold' : semibold ? 'font-semibold' : medium ? 'font-medium' : 'font-normal' } ${ className ?? '' }` }>
                { text }
            </h6> :
            <span>{ text }</span>
    )
}

export default Title
