import { Title } from '@/typography'
import { Checkbox } from '@/ui/checkbox';
import { Label } from '@/ui/label';
import { Slider } from '@/ui/slider';
import { Column, Container, Row } from '@layout/.'

type FilterContentType = {
  categoriesData: string[];
  selectedCategories: string[];
  handleCategoryToggle: (category: string) => void;
  priceRange: number[];
  setPriceRange: (value: number[]) => void;
};

const FilterContent: React.FC<FilterContentType> = ({
  categoriesData,
  selectedCategories,
  handleCategoryToggle,
  priceRange,
  setPriceRange,
}: FilterContentType) => {
  return (
    <Column className="space-y-6">
      <Container>
        <Title h3 className="mb-4" text="Kategorien" />
        <Column className="space-y-3">
          { categoriesData.map( ( category ) => (
            <Row key={ category } className="flex items-center gap-2">
              <Checkbox className='w-4 h-4 ' id={ category } checked={ selectedCategories.includes( category ) } onCheckedChange={ () => handleCategoryToggle( category ) } />
              <Label htmlFor={ category } className="cursor-pointer">{ category }</Label>
            </Row>
          ) ) }
        </Column>
      </Container>
      <Container>
        <Title h3 className="mb-4" text="Preis" />
        <Slider
          min={ 0 }
          max={ 500 }
          step={ 10 }
          value={ priceRange }
          onValueChange={ setPriceRange }
          className="mb-4"
        />
        <Row className="flex items-center justify-between">
          <span>{ priceRange[ 0 ] }€</span>
          <span>{ priceRange[ 1 ] }€</span>
        </Row>
      </Container>
    </Column >
  )
}

export default FilterContent

