import React from 'react'
import { ChevronDown, MapPin, Menu, ShoppingCart } from 'lucide-react'
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
    categories,
    selectedCategory,
    onSelectCategory,


} ) =>
{
    

    return (
        <>
        <header className="sticky top-0 z-50 shadow-md" >
            <div className="bg-[#131921] text-white">
                <div className="max-w-[1400px] mx-auto flex flex-wrap items-center gap-4 px-4 py-3">
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

                <div className="bg-[#232F3E] text-white">
                    <div className="max-w-[1400px] mx-auto flex items-center gap-4 overflow-x-auto px-4 py-2 text-sm">
                        <button className="flex items-center gap-2 font-semibold hover:text-[#f3a847]" type="button">
                            <Menu className="h-5 w-5" />
                            <span>All</span>
                        </button>
                        { categories.map( ( category ) => (
                            <button
                            key={ category }
                            onClick={ () => onSelectCategory( category ) }
                            className={ `whitespace-nowrap rounded-full px-3 py-1 transition ${ selectedCategory === category ? 'bg-white text-[#232F3E] font-semibold' : 'hover:text-[#f3a847]' }` }
                            type="button"
                        >
                            { category }
                        </button>
                    ) ) }
                        <button className="ml-auto hidden items-center gap-1 whitespace-nowrap font-semibold hover:text-[#f3a847] lg:flex" type="button">
                            <span>Deals &amp; Promotions</span>
                            <ChevronDown className="h-4 w-4" />
                        </button>
                    </div>
                </div>
            </div>
            </header></>
    )
}

export default Navigation
