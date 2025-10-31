import React from 'react'
import { MapPin, ShoppingCart } from 'lucide-react'
import {  SearchBar } from './components'
import Button from '@/ui/Buttons/Button'
type Props = {
    cartCount: number
    onToggleCart: () => void
    searchTerm: string
    onSearchChange: ( value: string ) => void
    categories: string[]
    selectedCategory: string
  
    onSelectCategory: ( category: string ) => void
}

const Navigation: React.FC<Props> = ( {
    cartCount,
    onToggleCart,
    searchTerm,
    onSearchChange,



} ) =>
{
    

    return (

        <div className="relative h-16 bg-[#131921] text-white">
            <div className="main flex-row mx-auto flex items-center gap-4 py-4">
                    <div className="flex items-center gap-2 text-2xl font-semibold tracking-tight">
                        <span className="text-[#f3a847]">Shopify</span>
                        <span>Market</span>
                    </div>

                    <div className="hidden xl:flex items-center gap-2 text-xs uppercase text-gray-200">
                        <MapPin className="h-4 w-4" />
                        <div className="leading-tight">
                            <span className="block text-[11px] text-gray-300">Deliver to</span>
                            <span className="block text-sm font-semibold">Germany</span>
                        </div>
                    </div>

                    <div className="flex-1 min-w-[200px] order-last w-full sm:order-0 sm:w-auto">
                        <SearchBar value={ searchTerm } onChange={ onSearchChange } />
                    </div>

                    <div className="hidden lg:flex flex-col text-xs font-semibold text-white">
                        <span className="text-gray-200">Returns</span>
                        <span>&amp; Orders</span>
                    </div>

                    <Button
                        onClick={ onToggleCart }
                        label="Warenkorb"
                        variant='primary'
                        iconPosition='left'
                        icon={ <ShoppingCart /> }
                        iconClassName='h-[1.25em] w-[1.25em]'
                    >

                        { cartCount > 0 ? (
                            <span className="absolute -top-2 -right-4 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                                { cartCount }
                            </span>
                        ) : <span className="absolute -top-2 -right-4 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full opacity-0">
                            { cartCount }
                        </span> }


                    </Button>
                </div>

            </div>

    )
}

export default Navigation
