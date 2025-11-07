import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LandingPage } from '@/pages'
import { MainFooter } from '@/pages/doctor/LandingPage/components/Footer'

const Pages = () =>
{
  return (

      <Routes>
        <Route path="/" element={ <LandingPage /> } />
      </Routes>

  );
}

const App = () =>
{
  return (
    <Router>
      <Pages />
      <MainFooter />
    </Router>
  );
}

export default App;
