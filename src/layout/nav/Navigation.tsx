import React from 'react'
import { MapPin, ShoppingCart } from 'lucide-react'
import { SearchBar } from './components'
import Button from '@/ui/Buttons/Button'
import { useWindowSize } from '../../hooks/useWindowSize'
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
    const { width } = useWindowSize()
    const isMobile = width < 768

    return (
        <div className="relative overflow-hidden border-b border-white/10 bg-linear-to-r from-purple-600/90 via-pink-500/90 to-indigo-500/90 text-white shadow-lg">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.25),transparent_55%)]" aria-hidden />
            <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:px-8 lg:py-5">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex flex-wrap items-center gap-3">
                        <div className="text-2xl font-semibold tracking-tight sm:text-3xl">
                            <span className="bg-linear-to-r from-white via-purple-100 to-white bg-clip-text text-transparent">
                                Shopify
                            </span>
                        </div>

                        <div className="hidden items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-medium uppercase tracking-wide text-white/80 sm:flex">
                            <MapPin className="h-4 w-4" />
                            Germany
                        </div>
                    </div>

                    <div className="flex flex-1 flex-col gap-3 sm:flex-row sm:items-center sm:justify-end sm:gap-4">
                        <div className="w-full sm:max-w-md">
                            <SearchBar value={ searchTerm } onChange={ onSearchChange } className="shadow-purple-300/40" />
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="hidden flex-col text-xs font-medium text-white/80 lg:flex">
                                <span className="text-white/70">Bestellungen</span>
                                <span className="text-white">und Retouren</span>
                            </div>

                            <Button
                                onClick={ onToggleCart }
                                variant="primary"
                                size={ isMobile ? 'medium' : 'large' }
                                className="relative w-full sm:w-auto"
                                icon={ <ShoppingCart /> }
                                iconClassName="h-5 w-5"
                                label="Warenkorb"
                            >
                                <span
                                    className={ `absolute -top-2 -right-2 inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-white text-xs font-semibold text-purple-600 shadow ${ cartCount > 0 ? 'opacity-100' : 'opacity-0' }` }
                                >
                                    { cartCount }
                                </span>
                            </Button>
                        </div>
                    </div>
                </div>

                { categories.length > 0 && (
                    <div className="-mx-1 flex gap-2 overflow-x-auto pb-1 pt-1 sm:mx-0 sm:pt-0">
                        { categories.map( ( category ) =>
                        {
                            const isSelected = selectedCategory === category
                            return (
                                <button
                                    key={ category }
                                    type="button"
                                    onClick={ () => onSelectCategory( category ) }
                                    className={ `whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 ${ isSelected
                                        ? 'bg-white text-purple-600 shadow-lg shadow-purple-200/70'
                                        : 'bg-white/10 text-white/80 hover:bg-white/20 hover:text-white'
                                        }` }
                                >
                                    { category }
                                </button>
                            )
                        } ) }
                    </div>
                ) }
            </div>
        </div>
    )
}

export default Navigation
