import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './css/index.css';

import App from '@/App';
import { ProductProvider } from '@/hooks';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProductProvider>
      <App />
    </ProductProvider>
  </StrictMode>
);
