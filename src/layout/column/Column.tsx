type ColumnProps = { 
    children: React.ReactNode
    className?: string
    }

const Column:React.FC<ColumnProps> = ({children, className}: ColumnProps) => {
    return (
        <div className={`flex flex-col ${className}`}>
            {children}
        </div>
    )
}

export default Column