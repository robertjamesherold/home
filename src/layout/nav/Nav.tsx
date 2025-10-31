import React from 'react';

import Navigation from './Navigation';
import { CartSidebar } from './components';

import { useProducts } from '@/hooks';

const Nav: React.FC = () => {
    const {
        searchTerm,
        setSearchTerm,
        selectedCategory,
        setSelectedCategory,
        cart,
        removeFromCart,
        getTotalPrice,
        showCart,
        setShowCart,
        categories,
        totalItems,
    } = useProducts();

    return (
        <nav >
            <Navigation
                cartCount={ totalItems }
                onToggleCart={ () => setShowCart( (prev) => !prev ) }
                searchTerm={ searchTerm }
                onSearchChange={ setSearchTerm }
                categories={ categories }
                selectedCategory={ selectedCategory }
                onSelectCategory={ setSelectedCategory }
            />
            <CartSidebar
                open={ showCart }
                onClose={ () => setShowCart( false ) }
                cart={ cart }
                removeFromCart={ removeFromCart }
                getTotalPrice={ getTotalPrice }
            />
        </nav>
    );
};

export default Nav;
