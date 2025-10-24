type DividerProps = {
    fullWidth? : boolean,
    } 

const Divider:React.FC<DividerProps> = ({fullWidth=false}:DividerProps) => {
    return (
        <section className={ `w-full mx-auto px-4 md:px-6 xl:px-8 py-2 ${ fullWidth ? 'max-w-full' : 'max-w-7xl' }` }>
            <hr/>
        </section>
    )
}

export { Divider as Hr }