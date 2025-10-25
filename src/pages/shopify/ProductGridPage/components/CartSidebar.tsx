import React from 'react'
import { X } from 'lucide-react'
import type { Product } from '../types'

type Props = {
    open: boolean
    onClose: () => void
    cart: Product[]
    removeFromCart: ( id: string ) => void
    getTotalPrice: () => string
}

const CartSidebar: React.FC<Props> = ( { open, onClose, cart, removeFromCart, getTotalPrice } ) =>
{
    if ( !open ) return null

    return (
        <div className="fixed inset-0 bg-opacity-50 z-50" onClick={ onClose }>
            <div
                className="absolute right-0 top-0 h-full w-96 bg-white shadow-2xl p-6 overflow-y-auto"
                onClick={ ( e ) => e.stopPropagation() }
            >
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">Shopping Cart</h2>
                    <button onClick={ onClose }>
                        <X className="w-6 h-6" />
                    </button>
                </div>

                { cart.length === 0 ? (
                    <p className="text-gray-500 text-center py-8">Your cart is empty</p>
                ) : (
                    <>
                        <div className="space-y-4 mb-6">
                            { cart.map( ( item, index ) => (
                                <div key={ `${ item.id }-${ index }` } className="flex items-center space-x-4 border-b pb-4">
                                    <img src={ item.image } alt={ item.title } className="w-16 h-16 object-cover rounded" />
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-sm">{ item.title }</h3>
                                        <p className="text-purple-600 font-bold">${ item.price }</p>
                                    </div>
                                    <button onClick={ () => removeFromCart( item.id ) } className="text-red-500 hover:text-red-700">
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>
                            ) ) }
                        </div>

                        <div className="border-t pt-4">
                            <div className="flex justify-between text-xl font-bold mb-4">
                                <span>Total:</span>
                                <span className="text-purple-600">${ getTotalPrice() }</span>
                            </div>
                            <button className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition font-semibold">
                                Checkout
                            </button>
                        </div>
                    </>
                ) }
            </div>
        </div>
    )
}

export default CartSidebar