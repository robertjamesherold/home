import type { ProductType } from '@/types';
import type { FeaturedProductsType } from '../types/';

const featuredProductsContent = {
  title: 'Neu eingetroffen',
  subtitle: 'Entdecken Sie die neuesten Ergänzungen zu unserer Kollektion',
  buttonlink: '/products',
  buttontext: 'Alle Produkte ansehen'
  } satisfies Omit<FeaturedProductsType, 'featuredProducts'>;

export const buildFeaturedProductsData = (products: ProductType[], content: Omit<FeaturedProductsType, 'featuredProducts'>): FeaturedProductsType => ({
    ...content,
  featuredProducts: products.slice(2, 5),
});

export default featuredProductsContent;
