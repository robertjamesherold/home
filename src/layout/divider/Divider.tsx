type DividerProps = {
    fullWidth? : boolean,
    } 

const Divider:React.FC<DividerProps> = ({fullWidth=false}:DividerProps) => {
    return (
        <section className={`w-full mx-auto px-8 py-2 ${fullWidth ? 'max-w-full' : 'max-w-320'}`}>
            <hr/>
        </section>
    )
}

export { Divider as Hr }