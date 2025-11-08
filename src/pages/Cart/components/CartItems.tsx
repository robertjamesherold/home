import { Card, CardContent, Button }    from '@ui/.'
import {  Link }                          from 'react-router-dom'
import { Trash2, Plus, Minus }           from 'lucide-react'
import React                             from 'react'
import type { ProductType }             from '@/types'


type ItemProps = { 
    data: {
        product: ProductType
    } ,
    increament: () => void,
    decrement: () => void,
    quantity: number,
    removeFromCart: () => void,
}

const CartItem: React.FC<ItemProps> = ( { data, increament, decrement, quantity, removeFromCart } ) =>  
{


    return (
        <div className="space-y-4 lg:col-span-2">
            <Card key={ data.product.id }>
                <CardContent className="p-4">
                    <div className="flex gap-4">
                        <div className="h-24 w-24 shrink-0 overflow-hidden rounded-md bg-gray-100">
                            <img
                                key={ data.product.id }
                                src={ data.product.image }
                                alt={ data.product.name }
                                className="h-full w-full object-cover"
                            />

                        </div>

                        <div className="flex flex-1 flex-col justify-between gap-4 sm:flex-row sm:items-start">
                            <div className="flex-1">
                                <Link to={ `/product/${ data.product.link }` }>
                                    <h3 className="mb-1 hover:underline">
                                        { data.product.name }
                                    </h3>
                                </Link>
                                <p className="mb-2 text-sm text-gray-600">
                                    { data.product.category }
                                </p>
                                <p className="text-lg">
                                    { data.product.price.toFixed( 2 ) }€
                                </p>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="flex items-center rounded-md border">
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={ decrement }
                                    >
                                        <Minus className="h-4 w-4" />
                                    </Button>
                                    <span className="px-4">{ quantity }</span>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={
                                            increament
                                        }
                                    >
                                        <Plus className="h-4 w-4" />
                                    </Button>
                                </div>

                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={ removeFromCart }
                                >
                                    <Trash2 className="h-5 w-5 text-red-500" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        
        </div>
    )
}
  
    

export default CartItem;