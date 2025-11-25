import type { ProductType } from '@/types';
import { TextParagraph } from '@/typography'
import { Skeleton } from '@/ui'
import { Container } from '@layout/.'

const SkeletonNoFilteredProducts: React.FC<{ filteredProducts: ProductType[] }> = ({
  filteredProducts,
}) => {
  return (
    <>
      {filteredProducts.length === 0 && (
        <Container className="py-12 flex flex-col items-center justify-center">
          <Skeleton className='w-fit h-fit rounded'>
            <TextParagraph className="text-gray-500 opacity-0" text="Keine Produkte gefunden. Bitte passen Sie die Filter an." />
          </Skeleton>
        </Container>
      )}
    </>
  );
};

export default SkeletonNoFilteredProducts;
