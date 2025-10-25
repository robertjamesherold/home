import type { SortBy } from '../types'

type Props = {
    value: SortBy
    onChange: ( v: SortBy ) => void
}

const Sort: React.FC<Props> = ( { value, onChange } ) =>
{
    return (
        <div>
            <select
                value={ value }
                onChange={ ( e ) => onChange( e.target.value as SortBy ) }
                className="w-full py-3 px-3 border border-gray-300 rounded-lg outline-none"
            >
                <option value="default">Sort: Default</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
            </select>
        </div>
    )
}

export default Sort