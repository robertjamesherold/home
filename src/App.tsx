import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


import
{

  SeasonSelection,
  ProductDetailsPage,
  ProductGridPage
} from '@/pages'
import '@/App.css'

function App() {

  return (

    <Router>
      <Routes>
        <Route path='/products' element={ <ProductGridPage /> } />
        <Route path='/products/:productId' element={ <ProductDetailsPage /> } />
        <Route path='/season-selection' element={ <SeasonSelection /> } />
      </Routes>
    </Router>
  )
}

export default App
