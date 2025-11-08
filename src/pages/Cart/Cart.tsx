import { Link, useNavigate } from 'react-router-dom'
import { Trash2, Plus, Minus } from 'lucide-react'
import { Button, Card, CardContent, Separator } from '@ui/.'
import { useCart } from '@hooks/.'
import { useRandomImages } from '@/hooks/useRandomImages'
import { Title } from '@typography/.'
import { Column } from '@/layout'
import { EmptyCart, CartItem } from './components'

const Cart: React.FC = () =>
{
  {
    const { items, total, shippingCost, tax } = useCart()
    const navigate = useNavigate()  

    return (
      <>
        { items.length === 0 ? ( <EmptyCart /> )
          : ( <div className="container mx-auto px-4 py-8">
            <h1 className="mb-8">Warenkorb</h1>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {/* Cart Items */ }
              <CartItem { ...items } />

              {/* Order Summary */ }
              <div>
                <Card className="sticky top-24">
                  <CardContent className="p-6">
                    <Title
                      level={ 4 }
                      weight="semibold"
                      className="mb-6"
                      text="Zusammenfassung"
                    />

                    <div className="mb-6 space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Zwischensumme</span>
                        <span>{ total.toFixed( 2 ) }€</span>
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

                    <Separator className="mb-6" />

                    <div className="mb-6 flex justify-between">
                      <span className="text-lg">Gesamt</span>
                      <span className="text-xl">{ total.toFixed( 2 ) }€</span>
                    </div>

                    { total < 50 && (
                      <p className="mb-4 text-sm text-gray-600">
                        Noch { ( 50 - total ).toFixed( 2 ) }€ bis zum kostenlosen
                        Versand
                      </p>
                    ) }
                    <Column className="gap-4">
                      <Button
                        onClick={ () => navigate( '/checkout' ) }
                        className="w-full"
                        size="lg"
                      >
                        Zur Kasse
                      </Button>

                      <Link to="/products">
                        <Button variant="outline" className="mt-3 w-full">
                          Weiter einkaufen
                        </Button>
                      </Link>
                    </Column>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div> ) } </>
    )
  }
}

export default Cart
