import { BrowserRouter as Rooter, Routes, Route } from 'react-router-dom'


import
{
  CartPage,
  CheckoutPage,
  CongratulationsPage,
  LandingPage,
  ProductDetailsPage,
  ProductGridPage
} from '@/pages/shopify'
import '@/App.css'

function App() {

  return (

    <Rooter>
      <Routes>
        <Route path='/' element={ <LandingPage /> } />
        <Route path='/products' element={ <ProductGridPage /> } />
        <Route path='/products/:productId' element={ <ProductDetailsPage /> } />
        <Route path='/cart' element={ <CartPage /> } />
        <Route path='/checkout' element={ <CheckoutPage /> } />
        <Route path='/congratulations' element={ <CongratulationsPage /> } />
      </Routes>
    </Rooter>
  )
}

export default App
