import { Select, SelectTrigger, SelectContent, SelectValue, SelectItem }
from '@ui/.';

type SelectType = {
    value: string;
    onChange: ( value: string ) => void;
}

const SelectButton: React.FC<SelectType> = ( { value, onChange } ) =>
{

    return (
        <div className="w-full flex justify-end">
        <Select value={value} onValueChange={onChange}>
            <SelectTrigger className="px-4 py-2 border rounded-md max-w-50 bg-white">
                <SelectValue />
            </SelectTrigger>
            <SelectContent className='bg-white w-fit'>    
                <SelectItem value="featured">Empfohlen</SelectItem>
                <SelectItem value="price-asc">Preis aufsteigend</SelectItem>
                <SelectItem value="price-desc">Preis absteigend</SelectItem>
                <SelectItem value="rating">Bewertung</SelectItem>
            </SelectContent>
            </Select>
        </div> 
    )
}

export default SelectButton;