import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ImageCard from './Card';
import '@testing-library/jest-dom';

const mockProduct = {
  featuredProducts: [
    {
      id: '1',
      name: 'Test Product',
      category: 'Test Category',
      rating: '4.5',
      reviews: '100',
      price: 99.99,
      originalPrice: 149.9,
      title: 'Titel des Featured-Blocks',
      subtitle: 'Untertitel',
      buttonlink: '/shop/produkt-a',
      buttontext: 'Zum Produkt',
    },
  ],
};

// Mock the useRandomImages hook
jest.mock('@/hooks/useRandomImages', () => ({
  __esModule: true,
  default: () => ({
    getRandomImageUrls: () => ['test-image-url'],
  }),
}));

describe('ImageCard', () => {
  const renderCard = () => {
    return render(
      <BrowserRouter>
        <ImageCard product={mockProduct} />
      </BrowserRouter>
    );
  };

  it('renders product information correctly', () => {
    renderCard();

    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('Test Category')).toBeInTheDocument();
    expect(screen.getByText('4.5')).toBeInTheDocument();
    expect(screen.getByText('(100)')).toBeInTheDocument();
    expect(screen.getByText('99.99€')).toBeInTheDocument();
    expect(screen.getByText('149.99€')).toBeInTheDocument();
    expect(screen.getByText('In den Warenkorb')).toBeInTheDocument();
  });

  it('renders product image with correct attributes', () => {
    renderCard();

    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', 'test-image-url');
    expect(image).toHaveAttribute('alt', 'Test Product');
  });

  it('renders link with correct product URL', () => {
    renderCard();

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/product/1');
  });
});
