import type { SortBy } from '../types'

type Props = {
    value: SortBy
    onChange: (v: SortBy) => void
    label?: string
}

const Sort: React.FC<Props> = ( { value, onChange, label = 'Sort by' } ) =>
{
    return (
        <label className="flex items-center gap-2 text-sm text-[#0F1111]">
            <span className="whitespace-nowrap font-medium">{ label }</span>
            <select
                value={ value }
                onChange={ ( e ) => onChange( e.target.value as SortBy ) }
                className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-[#0F1111] shadow-sm focus:border-[#febd69] focus:outline-none focus:ring-1 focus:ring-[#febd69]"
            >
                <option value="default">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Avg. Customer Review</option>
            </select>
        </label>
    )
}

export default Sort
