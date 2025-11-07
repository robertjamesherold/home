import { Main } from '@/layout'
import
  {
    Navigation,
    Hero,
    FAQ,
    Testimonials,
    Benefits,
    CTASection,
    Statistics,
    TreatmentGrid,
    FeatureSection,
    TrustSignals,
  } from './components';

const LandingPage = () => {
  return (
    <Main className="bg-slate-50 text-slate-800">
      <Navigation />
      <Hero />
      <Benefits />
      <TreatmentGrid />
      <FeatureSection />
      <TrustSignals />
      <Statistics />
      <Testimonials />
      <FAQ />
      <CTASection />
    </Main>
  );
};

export default LandingPage;
