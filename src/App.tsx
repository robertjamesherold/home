import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import
{
  SeasonSelection,
  ProductDetailsPage,
  ProductGridPage
} from '@/pages'
import '@/App.css'
import { Nav } from '@/layout'
import { ProductsProvider } from '@/hooks'

function App ()
{



  return (
    <ProductsProvider>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={ <SeasonSelection /> } />
          <Route path='/products' element={ <ProductGridPage /> } />
          <Route path='/products/:productId' element={ <ProductDetailsPage /> } />
        </Routes>
      </Router>
    </ProductsProvider>
  )
}

export default App