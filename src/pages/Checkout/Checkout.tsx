import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, Lock } from 'lucide-react';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Input,
  Label,
  Separator,
  RadioGroup,
  RadioGroupItem,
} from '@ui/.';
import { useCart } from '@hooks/useProductContext';
import { toast } from 'sonner';

const Checkout: React.FC = () => {
  {
    const { items, totalPrice, clearCart } = useCart();
    const navigate = useNavigate();
    const [paymentMethod, setPaymentMethod] = useState('card');

    const shippingCost = totalPrice >= 50 ? 0 : 4.99;
    const tax = totalPrice * 0.19;
    const total = totalPrice + shippingCost;

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();

      const summaryItems = items.map((item) => ({
        id: item.product.id,
        name: item.product.name,
        quantity: item.quantity,
        price: item.product.price,
      }));

      toast.success('Bestellung erfolgreich aufgegeben!');

      setTimeout(() => {
        clearCart();
        navigate('/checkout/success', {
          state: {
            total,
            shippingCost,
            tax,
            items: summaryItems,
            orderNumber: `LX-${Date.now().toString().slice(-6)}`,
          },
        });
      }, 1200);
    };

    if (items.length === 0) {
      navigate('/cart');
      return null;
    }

    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="mb-8">Kasse</h1>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Checkout Form */}
            <div className="space-y-6 lg:col-span-2">
              {/* Shipping Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Lieferadresse</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="firstName">Vorname</Label>
                      <Input id="firstName" required />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Nachname</Label>
                      <Input id="lastName" required />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">E-Mail</Label>
                    <Input id="email" type="email" required />
                  </div>

                  <div>
                    <Label htmlFor="address">Straße und Hausnummer</Label>
                    <Input id="address" required />
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <div>
                      <Label htmlFor="zip">PLZ</Label>
                      <Input id="zip" required />
                    </div>
                    <div className="sm:col-span-2">
                      <Label htmlFor="city">Stadt</Label>
                      <Input id="city" required />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone">Telefon</Label>
                    <Input id="phone" type="tel" />
                  </div>
                </CardContent>
              </Card>

              {/* Payment Method */}
              <Card>
                <CardHeader>
                  <CardTitle>Zahlungsmethode</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <RadioGroup
                    value={paymentMethod}
                    onValueChange={setPaymentMethod}
                  >
                    <div className="flex items-center space-x-2 rounded-lg border p-4">
                      <RadioGroupItem value="card" id="card" />
                      <Label
                        htmlFor="card"
                        className="flex flex-1 cursor-pointer items-center gap-2"
                      >
                        <CreditCard className="h-5 w-5" />
                        Kreditkarte
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 rounded-lg border p-4">
                      <RadioGroupItem value="paypal" id="paypal" />
                      <Label htmlFor="paypal" className="flex-1 cursor-pointer">
                        PayPal
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 rounded-lg border p-4">
                      <RadioGroupItem value="sofort" id="sofort" />
                      <Label htmlFor="sofort" className="flex-1 cursor-pointer">
                        Sofortüberweisung
                      </Label>
                    </div>
                  </RadioGroup>

                  {paymentMethod === 'card' && (
                    <div className="space-y-4 pt-4">
                      <div>
                        <Label htmlFor="cardNumber">Kartennummer</Label>
                        <Input
                          id="cardNumber"
                          placeholder="1234 5678 9012 3456"
                          required
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="expiry">Gültig bis</Label>
                          <Input id="expiry" placeholder="MM/YY" required />
                        </div>
                        <div>
                          <Label htmlFor="cvv">CVV</Label>
                          <Input id="cvv" placeholder="123" required />
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div>
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>Bestellübersicht</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {items.map((item) => (
                      <div
                        key={item.product.id}
                        className="flex justify-between text-sm"
                      >
                        <span className="text-gray-600">
                          {item.product.name} × {item.quantity}
                        </span>
                        <span>
                          {(item.product.price * item.quantity).toFixed(2)}€
                        </span>
                      </div>
                    ))}
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Zwischensumme</span>
                      <span>{totalPrice.toFixed(2)}€</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Versand</span>
                      <span>
                        {shippingCost === 0 ? (
                          <span className="text-green-600">Kostenlos</span>
                        ) : (
                          `${shippingCost.toFixed(2)}€`
                        )}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">MwSt. (19%)</span>
                      <span className="text-gray-600">{tax.toFixed(2)}€</span>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex justify-between text-lg">
                    <span>Gesamt</span>
                    <span>{total.toFixed(2)}€</span>
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    <Lock className="mr-2 h-4 w-4" />
                    Jetzt kaufen
                  </Button>

                  <p className="text-center text-xs text-gray-500">
                    Ihre Zahlung wird sicher verschlüsselt übertragen
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </form>
      </div>
    );
  }
};

export default Checkout;
