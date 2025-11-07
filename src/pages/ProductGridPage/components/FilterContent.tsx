import { Checkbox } from '@/ui/checkbox'
import { Label } from '@/ui/label'
import { Slider } from '@/ui/slider'

type FilterContentType = {
    categoriesData: string[];
    selectedCategories: string[];
    handleCategoryToggle: ( category: string ) => void;
    priceRange: number[];
    setPriceRange: ( value: number[] ) => void;
}

const FilterContent:React.FC<FilterContentType> = ( { categoriesData, selectedCategories, handleCategoryToggle, priceRange, setPriceRange  }: FilterContentType ) =>
{

    return (
        <div className="space-y-6">
            <div>
                <h3 className="mb-4">Kategorien</h3>
                <div className="space-y-3">
                    { categoriesData.map( ( category ) => (
                        <div key={ category } className="flex items-center gap-2">
                            <Checkbox
                                id={ category }
                                checked={ selectedCategories.includes( category ) }
                                onCheckedChange={ () => handleCategoryToggle( category ) }
                            />
                            <Label htmlFor={ category } className="cursor-pointer">
                                { category }
                            </Label>
                        </div>
                    ) ) }
                </div>
            </div>

            <div>
                <h3 className="mb-4">Preis</h3>
                <Slider
                    min={ 0 }
                    max={ 500 }
                    step={ 10 }
                    value={ priceRange }
                    onValueChange={ setPriceRange }
                    className="mb-4"
                />
                <div className="flex items-center justify-between">
                    <span>{ priceRange[ 0 ] }€</span>
                    <span>{ priceRange[ 1 ] }€</span>
                </div>
            </div>
        </div>
    )
}


export default FilterContent;