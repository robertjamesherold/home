import React from 'react'
import { MapPin, ShoppingCart } from 'lucide-react'
import {  SearchBar } from './components'
import Button from '@/ui/Buttons/Button'
import { useWindowSize } from '../../hooks/useWindowSize'
import { Row } from '../row'
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
    
    const windowSize = useWindowSize()
    const { width } = windowSize;

    return (

        <div className={ `relative h-16 bg-[#131921] text-white ${ width > 640 ? 'h-16' : 'h-30' } px-4 sm:px-6 lg:px-8` }>
            <div className={ `${ width > 640 ? 'flex-row' : 'flex-col' } main mx-auto w-full flex items-center gap-4 py-4` }>
                <Row className="w-full gap-4 items-center">
                    <div className="flex items-center gap-2 text-2xl font-semibold tracking-tigh text-[#f3a847]">Shopify
                    </div>

                    <div className="hidden xl:flex items-center gap-2 text-xs uppercase text-gray-200">
                        <MapPin className="h-4 w-4" />
                        <div className="leading-tight">
                            <span className="block text-[11px] text-gray-300">Deliver to</span>
                            <span className="block text-sm font-semibold">Germany</span>
                        </div>
                    </div>

                    <Button
                        onClick={ onToggleCart }
                        variant='primary'
                        size='small'
                        className={ `${ width > 640 ? 'gap-1' : 'gap-1' }` } icon={ <ShoppingCart /> }
                        iconClassName='h-[1.25em] w-[1.25em]'>
                        Warenkorb

                        { cartCount > 0 ? (
                            <span className="absolute -top-2 -right-4 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                                { cartCount }
                            </span>
                        ) : <span className="absolute -top-2 -right-4 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full opacity-0">
                            { cartCount }
                        </span> }


                    </Button>
                </Row>
                <div className="flex-1 min-w-[200px] order-last w-full sm:order-0 sm:w-auto">
                    <SearchBar value={ searchTerm } onChange={ onSearchChange } />
                </div>

                <div className="hidden lg:flex flex-col text-xs font-semibold text-white">
                    <span className="text-gray-200">Returns</span>
                    <span>&amp; Orders</span>
                </div>


                </div>

            </div>

    )
}

export default Navigation
