type MainProps = {
    children?: React.ReactNode
    } 

const Main:React.FC<MainProps> = ({children}:MainProps) => {
    return (
        <main className={`w-screen grid auto-rows-auto overflow-clip`}>
            {children}
        </main>
    )
}

export default Main