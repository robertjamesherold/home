import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServiceCategories } from './components/ServiceCategories';
import { TrustSignals } from './components/TrustSignals';
import { Statistics } from './components/Statistics';
import { FeatureSection } from './components/FeatureSection';
import { TreatmentGrid } from './components/TreatmentGrid';
import { Benefits } from './components/Benefits';
import  Testimonials from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { CTASection } from './components/CTASection';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <Hero />
        <ServiceCategories />
        <TrustSignals />
        <Statistics />
        <FeatureSection />
        <TreatmentGrid />
        <Benefits />
        <Testimonials />
        <FAQ />
        <CTASection />
      </main>
    </div>
  );
}