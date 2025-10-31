import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

import
{
  SeasonSelection,
  ProductDetailsPage,
  ProductGridPage
} from '@/pages'
import '@/App.css'
import { Nav } from '@/layout'
import { ProductsProvider} from '@/hooks'
import { useCallback } from 'react';



function AppContent ()
{
  const locationObj = useLocation()
  const routeChangeHandler = useCallback( () =>
  {
  }, [] )
  const location = { path: locationObj.pathname, onChange: routeChangeHandler }

  const isInitial = location.path === '/products' || location.path.startsWith( '/products/' )


  return (
    <ProductsProvider>
      <Nav isInitial={ isInitial } />
      <Routes >
        <Route path='/' element={ <SeasonSelection /> } />
        <Route path='/products' element={ <ProductGridPage /> } />
        <Route path='/products/:productId' element={ <ProductDetailsPage /> } />
      </Routes>
    </ProductsProvider>

  )
}

function App ()
{
  return (
    <Router>
      <AppContent />
    </Router>
  )
}
export default App