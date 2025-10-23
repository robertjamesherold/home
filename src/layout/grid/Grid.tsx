type GridProps = { 
    children: React.ReactNode
    className?: string
    }

const Grid:React.FC<GridProps> = ({children, className}: GridProps) => {
    return (
        <div className={`grid auto-cols ${className}`}>
            {children}
        </div>
    )
}

export default Grid