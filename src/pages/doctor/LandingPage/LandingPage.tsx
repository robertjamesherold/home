import { Hero, FAQ, ServiceCategories, Testimonials, Benefits, CTASection, Statistics, TreatmentGrid, FeatureSection, TrustSignals } from './components';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <Hero />
        <Benefits />
        <Testimonials />
        <CTASection />
        <ServiceCategories />
        <FeatureSection />
        <TreatmentGrid />
        <Statistics />
        <TrustSignals />
        <FAQ />
      </main>
    </div>
  );
};

export default LandingPage;
