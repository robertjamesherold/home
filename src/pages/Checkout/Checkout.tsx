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
} from '@/ui';
import { useCart, useCheckoutSubmission } from '@/hooks'
import type { CheckoutPayload } from '@/types';
import { toast } from 'sonner';

const Checkout: React.FC = () =>
{
  const { items, totalPrice, clearCart } = useCart()
  const navigate = useNavigate()
  const [ paymentMethod, setPaymentMethod ] = useState( 'card' )
  const { submitCheckout, isSubmitting } = useCheckoutSubmission()

  const subtotal = totalPrice ?? 0
  const shippingCost = subtotal >= 50 ? 0 : 4.99
  const tax = subtotal * 0.19
  const total = subtotal + shippingCost

  const handleSubmit = async ( e: React.FormEvent<HTMLFormElement> ) =>
  {

    e.preventDefault()



    const formData = new FormData( e.currentTarget )
    const payload: CheckoutPayload = {
      customer: {
        firstName: formData.get( 'firstName' ) as string,
        lastName: formData.get( 'lastName' ) as string,
        email: formData.get( 'email' ) as string,
        phone: formData.get( 'phone' ) as string,
        address: formData.get( 'address' ) as string,
        city: formData.get( 'city' ) as string,
        zip: formData.get( 'zip' ) as string,
      },
      items: items.map( ( item ) => ( {
        id: item.product.id,
        name: item.product.title,
        price: item.product.price,
        quantity: item.quantity ?? 1,
      } ) ),
      totals: {
        subtotal,
        shipping: shippingCost,
        tax,
        total,
      },
      paymentMethod,
    }

    const { order, payment } = await submitCheckout( payload )

    if ( payment.status === 'failed' )
    {
      toast.error( `Zahlung fehlgeschlagen: ${ payment.message }` )
    } else
    {
      const { message } = payment
      const summaryItems = order.items.map( ( { id, name, quantity, price } ) => ( {
        id,
        name,
        quantity,
        price,
      } ) )
      {
        clearCart()
        navigate( '/checkout/success', {
          state: {
            error: message,
            total,
            shippingCost,
            tax,
            items: summaryItems,
          },
        } )
      }
    };

    if ( items.length === 0 )
    {
      toast.error( 'Ihr Warenkorb ist leer.' )
      return
    }
  }

  {

    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="mb-8">Kasse</h1>

        <form onSubmit={ handleSubmit }>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Checkout Form */ }
            <div className="space-y-6 lg:col-span-2">
              {/* Shipping Information */ }
              <Card>
                <CardHeader>
                  <CardTitle className='mb-2'>Lieferadresse</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <Label className='mb-2' htmlFor="firstName">Vorname</Label>
                      <Input id="firstName" name="firstName" required />
                    </div>
                    <div>
                      <Label className='mb-2' htmlFor="lastName">Nachname</Label>
                      <Input id="lastName" name="lastName" required />
                    </div>
                  </div>

                  <div>
                    <Label className='mb-2' htmlFor="email">E-Mail</Label>
                    <Input id="email" name="email" type="email" required />
                  </div>

                  <div>
                    <Label className='mb-2' htmlFor="address">Straße und Hausnummer</Label>
                    <Input id="address" name="address" required />
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <div>
                      <Label className='mb-2' htmlFor="zip">PLZ</Label>
                      <Input id="zip" name="zip" required />
                    </div>
                    <div className="sm:col-span-2">
                      <Label className='mb-2' htmlFor="city">Stadt</Label>
                      <Input id="city" name="city" required />
                    </div>
                  </div>

                  <div>
                    <Label className='mb-2' htmlFor="phone">Telefon</Label>
                    <Input id="phone" name="phone" type="tel" />
                  </div>
                </CardContent>
              </Card>

              {/* Payment Method */ }
              <Card>
                <CardHeader>
                  <CardTitle className='mb-2'>Zahlungsmethode</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <RadioGroup
                    value={ paymentMethod }
                    onValueChange={ setPaymentMethod }
                  >
                    <div className="flex items-center space-x-2 rounded-lg border p-4">
                      <RadioGroupItem className='mr-2' value="card" id="card" />
                      <Label htmlFor="card" className=' flex flex-1 cursor-pointer items-center gap-2'>
                        <CreditCard className="h-5 w-5 ml-2 place-content-center" />
                        Kreditkarte
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 rounded-lg border p-4">
                      <RadioGroupItem value="paypal" id="paypal" />
                      <Label htmlFor="paypal" className="flex-1 cursor-pointer  ml-2">
                        PayPal
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 rounded-lg border p-4">
                      <RadioGroupItem value="sofort" id="sofort" />
                      <Label htmlFor="sofort" className="flex-1 cursor-pointer ml-2">
                        Sofortüberweisung
                      </Label>
                    </div>
                  </RadioGroup>

                  { paymentMethod === 'card' && (
                    <div className="space-y-4 pt-4">
                      <div>
                        <Label className='mb-2' htmlFor="cardNumber">Kartennummer</Label>
                        <Input
                          id="cardNumber"
                          name="cardNumber"
                          placeholder="1234 5678 9012 3456"
                          required
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label className='mb-2' htmlFor="expiry">Gültig bis</Label>
                          <Input id="expiry" name="expiry" placeholder="MM/YY" required />
                        </div>
                        <div>
                          <Label className='mb-2' htmlFor="cvv">CVV</Label>
                          <Input id="cvv" name="cvv" placeholder="123" required />
                        </div>
                      </div>
                    </div>
                  ) }
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */ }
            <div>
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>Bestellübersicht</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    { items.map( ( item ) =>
                    {
                      const qty = item.quantity ?? 1
                      return (
                        <div
                          key={ item.product.id }
                          className="flex justify-between text-sm"
                        >
                          <span className="text-gray-600">
                            { item.product.title } × { qty }
                          </span>
                          <span>
                            { ( item.product.price * qty ).toFixed( 2 ) }€
                          </span>
                        </div>
                      )
                    } ) }
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Zwischensumme</span>
                      <span>{ subtotal.toFixed( 2 ) }€</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Versand</span>
                      <span>
                        { shippingCost === 0 ? (
                          <span className="text-green-600">Kostenlos</span>
                        ) : (
                          `${ shippingCost.toFixed( 2 ) }€`
                        ) }
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">MwSt. (19%)</span>
                      <span className="text-gray-600">{ tax.toFixed( 2 ) }€</span>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex justify-between text-lg">
                    <span>Gesamt</span>
                    <span>{ total.toFixed( 2 ) }€</span>
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    size="lg"
                    disabled={ isSubmitting }
                  >
                    <Lock className="mr-2 h-4 w-4" />
                    { isSubmitting ? 'Wird verarbeitet …' : 'Jetzt kaufen' }
                  </Button>

                  <p className="text-center text-xs text-gray-500 mt-2">
                    Ihre Zahlung wird sicher verschlüsselt übertragen
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default Checkout;
