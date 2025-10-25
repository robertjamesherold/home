// src/components/CategoryFilter.tsx
import React from 'react'

type Props = {
    categories: string[]
    selected: string
    onSelect: ( c: string ) => void
}

const CategoryFilter: React.FC<Props> = ( { categories, selected, onSelect } ) =>
{
    return (
        <div className="flex gap-2 items-center">
            <select
                value={ selected }
                onChange={ ( e ) => onSelect( e.target.value ) }
                className="w-full py-3 px-3 border border-gray-300 rounded-lg outline-none"
            >
                { categories.map( ( c ) => (
                    <option key={ c } value={ c }>
                        { c }
                    </option>
                ) ) }
            </select>
        </div>
    )
}

export default CategoryFilter