import { useMemo } from 'react';

import { Main } from '@/layout';
import { useProducts } from '@/hooks';
import { Banner, FeaturedProducts, Features, Hero } from './components';
import {
  featuresData,
  heroData,
  featuredProductsContent,
  buildFeaturedProductsData,
  bannerData,
} from './data';

const Homepage: React.FC = () => {
  const { products } = useProducts();

  const featuredProductsData = useMemo(
    () => buildFeaturedProductsData(products, featuredProductsContent),
    [products]
  );

  return (
    <Main className="flex flex-col">
      {/* Hero Section */}
      <Hero {...heroData} />
      {/* Features */}
      <Features {...featuresData} />
      {/* Featured Products */}
      <FeaturedProducts {...featuredProductsData} />
      {/* Banner */}
      <Banner {...bannerData} />
    </Main>
  );
};

export default Homepage;
