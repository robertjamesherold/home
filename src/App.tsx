import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import {
  LandingPage,
  ProductDetailsPage,
  ProductGridPage,
} from '@/pages';
import { ProductsProvider } from '@/hooks'
import { Footer } from '@/pages/doctor/LandingPage/components/Footer';

function AppContent() {
  return (
    <ProductsProvider>

      <Routes>
        <Route path="/" element={ <LandingPage /> } />
        <Route path="/movie" element={<LandingPage />} />
        <Route path="/products" element={<ProductGridPage />} />
        <Route path="/products/:productId" element={<ProductDetailsPage />} />
      </Routes>
      <Footer />
    </ProductsProvider>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
export default App;
