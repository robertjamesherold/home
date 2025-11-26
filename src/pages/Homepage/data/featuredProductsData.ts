import type { ProductType } from '@/types';
import type { FeaturedProductsType } from '../types/';

const featuredProductsContent = {
  title: 'Neu eingetroffen',
  subtitle: 'Entdecken Sie die neuesten Ergänzungen zu unserer Kollektion',
  buttonlink: '/products',
  buttontext: 'Alle Produkte ansehen',
} satisfies Omit<FeaturedProductsType, 'featuredProducts'>;

export const buildFeaturedProductsData = (
  products: ProductType[],
  content: typeof featuredProductsContent = featuredProductsContent
): FeaturedProductsType => ({
  ...content,
  featuredProducts: products.slice(0, 3),
});

export default featuredProductsContent;
