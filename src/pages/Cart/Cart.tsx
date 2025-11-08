import { Link, useNavigate } from 'react-router-dom'
import { Trash2, Plus, Minus } from 'lucide-react'
import { Button, Card, CardContent, Separator } from '@ui/.'
import { useCart } from '@hooks/.'
import { useRandomImages } from '@/hooks/useRandomImages'
import { Title } from '@typography/.'
import { Column } from '@/layout'
import { EmptyCart } from './components'
import { productsData } from '@/data'

const Cart: React.FC = () =>
{
  {
    const { items, removeFromCart, updateQuantity } = useCart()
    const navigate = useNavigate()
    const { getRandomImageUrls } = useRandomImages()
    const shippingCost = items.reduce(
      ( total, item ) => total + item.product.price * item.quantity,
      0
    ) >= 50 ? 0 : 4.99
    const tax = items.reduce(
      ( total, item ) => total + item.product.price * item.quantity,
      0
    ) * 0.19
    const total = items.reduce(
      ( total, item ) => total + item.product.price * item.quantity,
      0
    ) + shippingCost

    return (
      <>
        { items.length === 0 ? ( <EmptyCart /> )
          : ( <div className="container mx-auto px-4 py-8">
            <h1 className="mb-8">Warenkorb</h1>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {/* Cart Items */ }
              <div className="space-y-4 lg:col-span-2">
                { items.map( ( item ) => (
                  <Card key={ item.product.id }>
                    <CardContent className="p-4">
                      <div className="flex gap-4">
                        <div className="h-24 w-24 shrink-0 overflow-hidden rounded-md bg-gray-100">
                          { getRandomImageUrls( 2, { cacheKey: item.product.id } ).map(
                            ( img ) => (
                              <img
                                src={ img }
                                alt={ item.product.name }
                                className="h-full w-full object-cover"
                              />
                            )
                          ) }
                        </div>

                        <div className="flex flex-1 flex-col justify-between gap-4 sm:flex-row sm:items-start">
                          <div className="flex-1">
                            <Link to={ `/product/${ item.product.id }` }>
                              <h3 className="mb-1 hover:underline">
                                { item.product.name }
                              </h3>
                            </Link>
                            <p className="mb-2 text-sm text-gray-600">
                              { item.product.category }
                            </p>
                            <p className="text-lg">
                              { item.product.price.toFixed( 2 ) }€
                            </p>
                          </div>

                          <div className="flex items-center gap-4">
                            <div className="flex items-center rounded-md border">
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={ () =>
                                  updateQuantity( item.product.id, item.quantity - 1 )
                                }
                              >
                                <Minus className="h-4 w-4" />
                              </Button>
                              <span className="px-4">{ item.quantity }</span>
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={ () =>
                                  updateQuantity( item.product.id, item.quantity + 1 )
                                }
                              >
                                <Plus className="h-4 w-4" />
                              </Button>
                            </div>

                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={ () => removeFromCart( item.product.id ) }
                            >
                              <Trash2 className="h-5 w-5 text-red-500" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ) ) }
              </div>

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
