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
    const { width } = useWindowSize()
    const hideOnScroll = scrollDirection === 'down' && width > 640

    return (
        <>
            <nav className={ `sticky left-0 right-0 top-0 z-50 w-full transition-transform duration-300 ${ hideOnScroll ? '-translate-y-full' : 'translate-y-0' }` }>
                <Navigation
                    cartCount={ totalItems }
                    onToggleCart={ () => setShowCart( !showCart ) }
                    searchTerm={ searchTerm }
                    onSearchChange={ setSearchTerm }
                    categories={ categories }
                    selectedCategory={ selectedCategory }
                    onSelectCategory={ setSelectedCategory }
                />
            </nav>

            { isInitial && <Filter /> }

            <CartSidebar
                open={ showCart }
                onClose={ () => setShowCart( false ) }
                cart={ cart }
                removeFromCart={ removeFromCart }
                getTotalPrice={ getTotalPrice }
            />
        </>
    )
}

export default Nav
