import React from 'react'

import Navigation from './Navigation'
import { CartSidebar, Filter } from './components'

import { useProductsState, useWindowSize } from '@/hooks'
import useScrollDirection from '@/hooks/useScrollDirection'

type Props = {
    isInitial?: boolean
}

const Nav: React.FC<Props> = ( { isInitial }: Props ) =>
{
    const {
        searchTerm,
        setSearchTerm,
        selectedCategory,
        setSelectedCategory,
        removeFromCart,
        getTotalPrice,
        showCart,
        setShowCart,
        categories,
        cart,
        totalItems,
    } = useProductsState()

    const scrollDirection = useScrollDirection()
    const windowSize = useWindowSize()
    const { width } = windowSize

    return (

        <nav className={ `sticky left-0 right-0 z-50 w-screen overflow-x-hidden ${ scrollDirection === 'down' ? ( width > 640 ? '-top-16' : '-top-30' ) : scrollDirection === 'up' ? 'top-0' : 'top-0' } transition-all duration-300` }>
            <Navigation
                cartCount={ totalItems }
                onToggleCart={ () => setShowCart( !showCart ) }
                searchTerm={ searchTerm }
                onSearchChange={ setSearchTerm }
                categories={ categories }
                selectedCategory={ selectedCategory }
                onSelectCategory={ setSelectedCategory }
            />
            { isInitial && <Filter /> }
            <CartSidebar
                open={ showCart }
                onClose={ () => setShowCart( false ) }
                cart={ cart }
                removeFromCart={ removeFromCart }
                getTotalPrice={ getTotalPrice }
            />
        </nav>
    )
}

export default Nav
