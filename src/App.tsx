import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {  LandingPage } from '@/pages';
import { MainFooter as Footer } from '@/pages/doctor/LandingPage/components/Footer';

function Pages() {
  return (
      <Routes>
        <Route path="/" element={ <LandingPage /> } />
      </Routes>
  );
}

function App() {
  return (
    <Router>
      <Pages />
      <Footer />
    </Router>
  );
}

export default App;
