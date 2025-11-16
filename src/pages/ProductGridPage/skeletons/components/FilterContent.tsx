import { Title } from '@/typography'
import { Skeleton } from '@/ui'
import { Checkbox } from '@/ui/checkbox';
import { Label } from '@/ui/label';
import { Column, Container, Row } from '@layout/.'

type FilterContentType = {
  categoriesData: string[];
  selectedCategories: string[];
  handleCategoryToggle: (category: string) => void;
  priceRange: number[];
  setPriceRange: (value: number[]) => void;
};

const SkeletonFilterContent: React.FC<FilterContentType> = ({
  categoriesData,
  selectedCategories,
  handleCategoryToggle,
  priceRange,
}: FilterContentType) => {
  return (
    <Column className="space-y-6">
      <Container>
        <Skeleton className='w-fit h-fit rounded'><Title h3 className="mb-4 opacity-0" text="Kategorien" /></Skeleton>
        <Column className="space-y-3">
          {categoriesData.map((category) => (
            <Row key={ category } className="flex items-center gap-2">
              <Skeleton className='w-fit h-fit flex rounded'>
              <Checkbox
                  className='w-4 h-4 opacity-0'  
                id={category}
                checked={selectedCategories.includes(category)}
                onCheckedChange={() => handleCategoryToggle(category)}
                />
              </Skeleton>
              <Skeleton className='w-fit h-fit flex rounded'>

                <Label htmlFor={ category } className="cursor-pointer opacity-0">
                {category}
                </Label>
              </Skeleton>

            </Row>
          ))}
        </Column>
      </Container>

      <Container>
        <Skeleton className='w-fit h-fit rounded'><Title h3 className="mb-4 opacity-0" text="Preis" /></Skeleton>
        <Skeleton className='w-full h-fit min-h-3.5 rounded-full  mb-4 ' />



        <Row className="flex items-center justify-between">
          <Skeleton className='w-fit h-fit rounded '>
            <span className='opacity-0'>{ priceRange[ 0 ] }€</span></Skeleton>
          <Skeleton className='w-fit h-fit rounded'>
            <span className='opacity-0'>{ priceRange[ 1 ] }€</span></Skeleton>
        </Row>
      </Container>
    </Column >
  )
}

export default SkeletonFilterContent

