type SelectType = {
    value: string;
    onChange: ( value: string ) => void;
}

const Select: React.FC<SelectType> = ( { value, onChange } ) =>
{
    return (
        
        <select
            value={ value }
            onChange={ ( e ) => onChange( e.target.value ) }
            className="px-4 py-2 border rounded-md bg-white"
        >
            <option value="featured">Empfohlen</option>
            <option value="price-asc">Preis aufsteigend</option>
            <option value="price-desc">Preis absteigend</option>
            <option value="rating">Bewertung</option>
        </select>
    )
}

export default Select;