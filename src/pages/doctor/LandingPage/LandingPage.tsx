import { FAQ, Testimonials } from './components';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <Testimonials />
        <FAQ />
      </main>
    </div>
  );
};

export default LandingPage;
