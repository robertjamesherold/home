import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { LandingPage, ProductDetailsPage, ProductGridPage } from '@/pages';
import { default as Home } from '@/pages/doctor/LandingPage/LandingPage';
import { ProductsProvider } from '@/hooks';
import { Header } from './pages/doctor/LandingPage/components/Header'
import { Footer } from './pages/doctor/LandingPage/components/Footer'

function AppContent() {


  return (
    <ProductsProvider>
      <Header />
      
      <Routes>
      <Route path="/" element={<Home />} />
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
