import  Navigation  from './Navigation'
import {CartSidebar} from './components'

import { useProducts } from '@/hooks'

const Nav = () =>
{
    const [
        ,
        ,
        searchTerm,
        setSearchTerm,
        selectedCategory,
        setSelectedCategory,
        cart,
        ,
        removeFromCart,
        getTotalPrice,
        ,
        showCart,
        setShowCart,
        ,
        ,
        categories,
    ] = useProducts()
    return (
        <nav>

            <Navigation
                cartCount={ cart.length }
                onToggleCart={ () => setShowCart( !showCart ) }
                searchTerm={ searchTerm }
                onSearchChange={ setSearchTerm }
                categories={ categories }
                selectedCategory={ selectedCategory }
                onSelectCategory={ setSelectedCategory }
            />
            <CartSidebar open={ showCart } onClose={ () => setShowCart( false ) } getTotalPrice={ getTotalPrice } removeFromCart={ () => removeFromCart } cart={ cart } />
        </nav>
    )
}

export default Nav