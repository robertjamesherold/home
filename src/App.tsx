import { useMemo, useRef } from 'react';
import ScrollToTop from '@/components/ScrollToTop'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  Homepage,
  ProductGridPage,
  ProductPage,
  NavigationsBar,
  Cart,
  Checkout,
  PageFooter,
  SalePage,
  AccountPage,
  CheckoutSuccess,
  SupportPage,
  ProductEditorPage,
} from '@/pages';
import { CartProvider } from '@/hooks';
import useElementSize from '@hooks/useElementSize';

const Pages = () =>
{
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/products" element={<ProductGridPage />} />
      <Route path="/products/new" element={<ProductEditorPage />} />
      <Route path="/sale" element={<SalePage />} />
      <Route path="/product/:id" element={ <ProductPage /> } />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/checkout/success" element={<CheckoutSuccess />} />
      <Route path="/account" element={<AccountPage />} />
      <Route path="/support" element={<SupportPage />} />
    </Routes>
  );
};

const App = () => {
  const navigationRef = useRef<HTMLElement | null>(null);
  const footerRef = useRef<HTMLElement | null>(null);
  const navigationSize = useElementSize(navigationRef);
  const footerSize = useElementSize(footerRef);

  const contentMinHeight = useMemo(() => {
    return `calc(100vh - ${navigationSize.height}px - ${footerSize.height}px)`;
  }, [navigationSize.height, footerSize.height]);

  return (
    <CartProvider>
      <Router>
        <ScrollToTop />

        <NavigationsBar ref={navigationRef} />
        <main
          className="flex place-content-center items-center justify-center"
          style={{ minHeight: contentMinHeight }}
        >
          <Pages />
        </main>
        <PageFooter ref={footerRef} />
      </Router>
    </CartProvider>
  );
};

export default App;
