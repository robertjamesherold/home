// src/components/SearchBar.tsx
import React from 'react'
import { Search, X } from 'lucide-react'

type Props = {
    value: string
    onChange: ( v: string ) => void
}

const SearchBar: React.FC<Props> = ( { value, onChange } ) =>
{
    return (
        <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
            <input
                type="text"
                placeholder="Search products..."
                value={ value }
                onChange={ ( e ) => onChange( e.target.value ) }
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none"
            />
            { value && (
                <button
                    onClick={ () => onChange( '' ) }
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700"
                >
                    <X className="w-4 h-4" />
                </button>
            ) }
        </div>
    )
}

export default SearchBar