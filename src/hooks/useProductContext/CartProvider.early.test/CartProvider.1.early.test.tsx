import type { CartItemType, ProductType } from '@/types';
import React from 'react';
import CartContext from '../CartContext';
import CartProvider from '../CartProvider';
import { act, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

// Helper: Test component to consume CartContext
const TestConsumer: React.FC = () => (
  <CartContext.Consumer>
    {(value) => (
      <div>
        <div data-testid="items">{JSON.stringify(value.items)}</div>
        <div data-testid="totalItems">{value.totalItems}</div>
        <div data-testid="totalPrice">{value.totalPrice}</div>
        <button
          data-testid="add"
          onClick={() =>
            value.addToCart({ id: 'p1', price: 10, title: 'Product 1' }, 2)
          }
        >
          Add
        </button>
        <button
          data-testid="add2"
          onClick={() =>
            value.addToCart({ id: 'p2', price: 5, title: 'Product 2' }, 1)
          }
        >
          Add2
        </button>
        <button data-testid="remove" onClick={() => value.removeFromCart('p1')}>
          Remove
        </button>
        <button
          data-testid="update"
          onClick={() => value.updateQuantity('p1', 5)}
        >
          Update
        </button>
        <button
          data-testid="updateZero"
          onClick={() => value.updateQuantity('p1', 0)}
        >
          UpdateZero
        </button>
        <button data-testid="clear" onClick={value.clearCart}>
          Clear
        </button>
      </div>
    )}
  </CartContext.Consumer>
);

describe('CartProvider() CartProvider method', () => {
  // Mocks for localStorage
  let localStorageMock: Storage;
  let store: Record<string, string>;
  beforeEach(() => {
    store = {};
    localStorageMock = {
      getItem: (key: string) => store[key] || null,
      setItem: (key: string, value: string) => {
        store[key] = value;
      },
      removeItem: (key: string) => {
        delete store[key];
      },
      clear: () => {
        store = {};
      },
      key: (index: number) => Object.keys(store)[index] || null,
      length: 0,
    };
    Object.defineProperty(window, 'localStorage', {
      value: localStorageMock,
      writable: true,
    });
    // Simulate browser environment
    (window as any).localStorage = localStorageMock;
  });

  // Happy paths
  describe('Happy paths', () => {
    test('Initializes with empty cart if localStorage is empty', () => {
      // This test checks that the cart is empty on first render if localStorage is empty
      render(
        <CartProvider>
          <TestConsumer />
        </CartProvider>
      );
      expect(screen.getByTestId('items')).toHaveTextContent('[]');
      expect(screen.getByTestId('totalItems')).toHaveTextContent('0');
      expect(screen.getByTestId('totalPrice')).toHaveTextContent('0');
    });

    test('Initializes with cart from localStorage if present', () => {
      // This test checks that the cart is initialized from localStorage if present
      const product: ProductType = { id: 'p1', price: 10, title: 'Product 1' };
      const cart: CartItemType[] = [{ product, quantity: 3 }];
      window.localStorage.setItem('cart', JSON.stringify(cart));
      render(
        <CartProvider>
          <TestConsumer />
        </CartProvider>
      );
      expect(screen.getByTestId('items')).toHaveTextContent(
        JSON.stringify(cart)
      );
      expect(screen.getByTestId('totalItems')).toHaveTextContent('3');
      expect(screen.getByTestId('totalPrice')).toHaveTextContent('30');
    });

    test('addToCart adds a new product and updates totals', () => {
      // This test checks that addToCart adds a product and updates totals
      render(
        <CartProvider>
          <TestConsumer />
        </CartProvider>
      );
      act(() => {
        screen.getByTestId('add').click();
      });
      expect(screen.getByTestId('items')).toHaveTextContent(
        /"id":"p1".*"quantity":2/
      );
      expect(screen.getByTestId('totalItems')).toHaveTextContent('2');
      expect(screen.getByTestId('totalPrice')).toHaveTextContent('20');
    });

    test('addToCart increases quantity if product already in cart', () => {
      // This test checks that addToCart increases quantity for existing product
      render(
        <CartProvider>
          <TestConsumer />
        </CartProvider>
      );
      act(() => {
        screen.getByTestId('add').click();
        screen.getByTestId('add').click();
      });
      expect(screen.getByTestId('items')).toHaveTextContent(
        /"id":"p1".*"quantity":4/
      );
      expect(screen.getByTestId('totalItems')).toHaveTextContent('4');
      expect(screen.getByTestId('totalPrice')).toHaveTextContent('40');
    });

    test('addToCart can add multiple different products', () => {
      // This test checks that multiple products can be added to the cart
      render(
        <CartProvider>
          <TestConsumer />
        </CartProvider>
      );
      act(() => {
        screen.getByTestId('add').click();
        screen.getByTestId('add2').click();
      });
      expect(screen.getByTestId('items')).toHaveTextContent(
        /"id":"p1".*"quantity":2/
      );
      expect(screen.getByTestId('items')).toHaveTextContent(
        /"id":"p2".*"quantity":1/
      );
      expect(screen.getByTestId('totalItems')).toHaveTextContent('3');
      expect(screen.getByTestId('totalPrice')).toHaveTextContent('25');
    });

    test('removeFromCart removes product from cart', () => {
      // This test checks that removeFromCart removes a product
      render(
        <CartProvider>
          <TestConsumer />
        </CartProvider>
      );
      act(() => {
        screen.getByTestId('add').click();
        screen.getByTestId('remove').click();
      });
      expect(screen.getByTestId('items')).toHaveTextContent('[]');
      expect(screen.getByTestId('totalItems')).toHaveTextContent('0');
      expect(screen.getByTestId('totalPrice')).toHaveTextContent('0');
    });

    test('updateQuantity changes quantity of a product', () => {
      // This test checks that updateQuantity updates the quantity
      render(
        <CartProvider>
          <TestConsumer />
        </CartProvider>
      );
      act(() => {
        screen.getByTestId('add').click();
        screen.getByTestId('update').click();
      });
      expect(screen.getByTestId('items')).toHaveTextContent(
        /"id":"p1".*"quantity":5/
      );
      expect(screen.getByTestId('totalItems')).toHaveTextContent('5');
      expect(screen.getByTestId('totalPrice')).toHaveTextContent('50');
    });

    test('clearCart empties the cart', () => {
      // This test checks that clearCart removes all items
      render(
        <CartProvider>
          <TestConsumer />
        </CartProvider>
      );
      act(() => {
        screen.getByTestId('add').click();
        screen.getByTestId('add2').click();
        screen.getByTestId('clear').click();
      });
      expect(screen.getByTestId('items')).toHaveTextContent('[]');
      expect(screen.getByTestId('totalItems')).toHaveTextContent('0');
      expect(screen.getByTestId('totalPrice')).toHaveTextContent('0');
    });

    test('Cart is persisted to localStorage on change', () => {
      // This test checks that cart changes are saved to localStorage
      render(
        <CartProvider>
          <TestConsumer />
        </CartProvider>
      );
      act(() => {
        screen.getByTestId('add').click();
      });
      const saved = window.localStorage.getItem('cart');
      expect(saved).toContain('"id":"p1"');
      expect(saved).toContain('"quantity":2');
    });
  });

  // Edge cases
  describe('Edge cases', () => {
    test('updateQuantity to zero removes the product', () => {
      // This test checks that updating quantity to zero removes the product
      render(
        <CartProvider>
          <TestConsumer />
        </CartProvider>
      );
      act(() => {
        screen.getByTestId('add').click();
        screen.getByTestId('updateZero').click();
      });
      expect(screen.getByTestId('items')).toHaveTextContent('[]');
      expect(screen.getByTestId('totalItems')).toHaveTextContent('0');
      expect(screen.getByTestId('totalPrice')).toHaveTextContent('0');
    });

    test('updateQuantity to negative removes the product', () => {
      // This test checks that updating quantity to negative removes the product
      render(
        <CartProvider>
          <CartContext.Consumer>
            {(value) => (
              <div>
                <button
                  data-testid="add"
                  onClick={() =>
                    value.addToCart(
                      { id: 'p1', price: 10, title: 'Product 1' },
                      2
                    )
                  }
                >
                  Add
                </button>
                <button
                  data-testid="updateNegative"
                  onClick={() => value.updateQuantity('p1', -3)}
                >
                  UpdateNegative
                </button>
                <div data-testid="items">{JSON.stringify(value.items)}</div>
                <div data-testid="totalItems">{value.totalItems}</div>
                <div data-testid="totalPrice">{value.totalPrice}</div>
              </div>
            )}
          </CartContext.Consumer>
        </CartProvider>
      );
      act(() => {
        screen.getByTestId('add').click();
        screen.getByTestId('updateNegative').click();
      });
      expect(screen.getByTestId('items')).toHaveTextContent('[]');
      expect(screen.getByTestId('totalItems')).toHaveTextContent('0');
      expect(screen.getByTestId('totalPrice')).toHaveTextContent('0');
    });

    test('addToCart with quantity 0 does not add product', () => {
      // This test checks that adding a product with quantity 0 does not add it
      render(
        <CartProvider>
          <CartContext.Consumer>
            {(value) => (
              <div>
                <button
                  data-testid="addZero"
                  onClick={() =>
                    value.addToCart(
                      { id: 'p3', price: 7, title: 'Product 3' },
                      0
                    )
                  }
                >
                  AddZero
                </button>
                <div data-testid="items">{JSON.stringify(value.items)}</div>
                <div data-testid="totalItems">{value.totalItems}</div>
                <div data-testid="totalPrice">{value.totalPrice}</div>
              </div>
            )}
          </CartContext.Consumer>
        </CartProvider>
      );
      act(() => {
        screen.getByTestId('addZero').click();
      });
      expect(screen.getByTestId('items')).toHaveTextContent(
        /(\[\]|\bquantity":0\b)/
      );
      expect(screen.getByTestId('totalItems')).toHaveTextContent('0');
      expect(screen.getByTestId('totalPrice')).toHaveTextContent('0');
    });

    test('removeFromCart with non-existent product does nothing', () => {
      // This test checks that removing a non-existent product does not throw or change state
      render(
        <CartProvider>
          <TestConsumer />
        </CartProvider>
      );
      act(() => {
        screen.getByTestId('remove').click();
      });
      expect(screen.getByTestId('items')).toHaveTextContent('[]');
      expect(screen.getByTestId('totalItems')).toHaveTextContent('0');
      expect(screen.getByTestId('totalPrice')).toHaveTextContent('0');
    });

    test('Handles invalid JSON in localStorage gracefully', () => {
      // This test checks that invalid JSON in localStorage does not break the cart
      window.localStorage.setItem('cart', '{invalid json');
      render(
        <CartProvider>
          <TestConsumer />
        </CartProvider>
      );
      expect(screen.getByTestId('items')).toHaveTextContent('[]');
      expect(screen.getByTestId('totalItems')).toHaveTextContent('0');
      expect(screen.getByTestId('totalPrice')).toHaveTextContent('0');
    });

    test('Handles localStorage.setItem throwing error gracefully', () => {
      // This test checks that errors in localStorage.setItem do not break the cart
      window.localStorage.setItem = () => {
        throw new Error('localStorage error');
      };
      render(
        <CartProvider>
          <TestConsumer />
        </CartProvider>
      );
      act(() => {
        screen.getByTestId('add').click();
      });
      // Cart state should still update in memory
      expect(screen.getByTestId('items')).toHaveTextContent(
        /"id":"p1".*"quantity":2/
      );
      expect(screen.getByTestId('totalItems')).toHaveTextContent('2');
      expect(screen.getByTestId('totalPrice')).toHaveTextContent('20');
    });

    test('Handles JSON.stringify throwing error gracefully', () => {
      // This test checks that errors in JSON.stringify do not break the cart
      const circular: any = {};
      circular.self = circular;
      render(
        <CartProvider>
          <CartContext.Consumer>
            {(value) => (
              <div>
                <button
                  data-testid="addCircular"
                  onClick={() =>
                    value.addToCart(
                      { id: 'p4', price: 1, title: 'Circular', self: circular },
                      1
                    )
                  }
                >
                  AddCircular
                </button>
                <div data-testid="items">{JSON.stringify(value.items)}</div>
                <div data-testid="totalItems">{value.totalItems}</div>
                <div data-testid="totalPrice">{value.totalPrice}</div>
              </div>
            )}
          </CartContext.Consumer>
        </CartProvider>
      );
      act(() => {
        screen.getByTestId('addCircular').click();
      });
      // Cart state should still update in memory
      expect(screen.getByTestId('items')).toContainHTML('"id":"p4"');
      expect(screen.getByTestId('totalItems')).toHaveTextContent('1');
      expect(screen.getByTestId('totalPrice')).toHaveTextContent('1');
    });
  });
});
