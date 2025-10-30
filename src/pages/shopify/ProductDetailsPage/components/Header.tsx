import BackButton from '../ui/Buttons/BackButton'
import CartButton from '../ui/Buttons/CartButton'
import Logo from '../ui/Logo'

const Header: React.FC = () =>
{
    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <BackButton />
                    <Logo />
                    <CartButton />
                </div>
            </div>
        </header>
    )
}

export default Header