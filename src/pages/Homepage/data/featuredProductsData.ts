import type { FeaturedProductsType } from '../types/';
import { productsData } from '@/data';

const featuredProductsData: FeaturedProductsType = {
  title: 'Neu eingetroffen',
  subtitle: 'Entdecken Sie die neuesten Ergänzungen zu unserer Kollektion',
  buttonlink: '/products',
  buttontext: 'Alle Produkte ansehen',
  featuredProducts: productsData.slice(0, 3),
};

export default featuredProductsData;
