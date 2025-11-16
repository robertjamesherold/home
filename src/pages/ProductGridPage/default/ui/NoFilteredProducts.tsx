import type { ProductType } from '@/types';
import { TextParagraph } from '@/typography'
import { Container } from '@layout/.'

const NoFilteredProducts: React.FC<{ filteredProducts: ProductType[] }> = ({
  filteredProducts,
}) => {
  return (
    <>
      {filteredProducts.length === 0 && (
        <Container className="py-12 flex flex-col items-center justify-center">
          <TextParagraph className="text-gray-500" text="Keine Produkte gefunden. Bitte passen Sie die Filter an." />
        </Container>
      )}
    </>
  );
};

export default NoFilteredProducts;
