import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import
{
  SeasonSelection,
  ProductDetailsPage,
  ProductGridPage
} from '@/pages'
import '@/App.css'

function App ()
{
  return (
    <Router>
      <Routes>
        <Route path='/' element={ <SeasonSelection /> } />
        <Route path='/products' element={ <ProductGridPage /> } />
        <Route path='/products/:Id' element={ <ProductDetailsPage /> } />
      </Routes>
    </Router>
  )
}

export default App