// src/components/SearchBar.tsx
import React from 'react'
import { ChevronDown, Search, X } from 'lucide-react'

type Props = {
    value: string
    onChange: (v: string) => void
    className?: string
}

const SearchBar: React.FC<Props> = ( { value, onChange, className = '' } ) => (
    <div className={ `flex w-full items-stretch overflow-hidden rounded-full border border-purple-200/60 bg-white/90 shadow-lg shadow-purple-100/50 backdrop-blur focus-within:border-purple-400 focus-within:ring-4 focus-within:ring-purple-200/70 ${ className }` }>
        <button
            type="button"
            className="hidden items-center gap-1 border-r border-purple-100/70 bg-purple-50/60 px-4 text-sm font-semibold text-purple-600 transition hover:bg-purple-100 sm:flex"
        >
            <span>Kategorie</span>
            <ChevronDown className="h-4 w-4" />
        </button>
        <div className="relative flex-1">
            <input
                type="text"
                placeholder="Produkte, Marken oder Kategorien suchen"
                value={ value }
                onChange={ ( e ) => onChange( e.target.value ) }
                className="h-full w-full border-none bg-transparent px-4 py-3 pr-12 text-sm text-gray-900 placeholder:text-gray-400 outline-none"
            />
            { value && (
                <button
                    onClick={ () => onChange( '' ) }
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-gray-400 transition hover:text-gray-600"
                    type="button"
                >
                    <X className="h-4 w-4" />
                </button>
            ) }
        </div>
        <button
            type="button"
            className="flex items-center justify-center rounded-r-full bg-purple-600 px-5 text-sm font-semibold text-white transition hover:bg-purple-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-purple-200"
        >
            <Search className="h-5 w-5" />
        </button>
    </div>
)

export default SearchBar
