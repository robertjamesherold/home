import type { FeaturedProductsType } from '../types/';
import { productsData } from '@/data';

const featuredProductsData: FeaturedProductsType = {
  title: 'Neu eingetroffen',
  subtitle: 'Entdecken Sie die neuesten Ergänzungen zu unserer Kollektion',
  buttonlink: '/products',
  buttontext: 'Alle Produkte ansehen',
  featuredProducts: productsData
    .filter((p) => p.tags.includes('new'))
    .slice(0, 4),
};

export default featuredProductsData;