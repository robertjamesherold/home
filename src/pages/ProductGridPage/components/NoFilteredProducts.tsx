import type { ProductType } from '@/types';

const NoFilteredProducts: React.FC<{ filteredProducts: ProductType[] }> = ({
  filteredProducts,
}) => {
  return (
    <>
      {filteredProducts.length === 0 && (
        <div className="py-12 text-center">
          <p className="text-gray-500">
            Keine Produkte gefunden. Bitte passen Sie die Filter an.
          </p>
        </div>
      )}
    </>
  );
};

export default NoFilteredProducts;
