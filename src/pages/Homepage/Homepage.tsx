import { Main } from '@/layout';
import { Banner, FeaturedProducts, Features, Hero } from './components';
import {
  featuresData,
  heroData,
  featuredProductsData,
  bannerData,
} from './data';

const Homepage: React.FC = () => {
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
