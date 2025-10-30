// src/components/ProductCard.tsx
import React from 'react'
import { Star } from 'lucide-react'
import type { Product } from '../types'
import { Link } from 'react-router-dom'
import Button from '@/ui/Buttons/Button'

type Props = {
    product: Product
    onAdd: (p: Product) => void
}

const ProductCard: React.FC<Props> = ( { product, onAdd } ) =>
{
    const euro = product.price.split( '.' )[ 0 ]
    const cent = product.price.split( '.' )[ 1 ]

    const tomorrow = new Date()
    tomorrow.setDate( tomorrow.getDate() + 1 )

    if ( tomorrow.getDay() === 0 )
    {
        tomorrow.setDate( tomorrow.getDate() + 1 )
    }

    const weekdays = [ 'So.', 'Mo.', 'Di.', 'Mi.', 'Do.', 'Fr.', 'Sa.' ]
    const months = [ 'Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez' ]

    const weekday = weekdays[ tomorrow.getDay() ]
    const day = tomorrow.getDate()
    const month = months[ tomorrow.getMonth() ]
    const deliveryDate = day.toLocaleString()



    return (
        <article className="flex h-full flex-row rounded-lg shadow-sm bg-white transition gap-8 overflow-hidden">
            <Link to={ `/products/${ product.id }` } className="flex h-64 items-center justify-center">
                <img src={ product.image } alt={ product.title } className="max-h-full w-full object-contain" />
            </Link>
            <div className="flex h-64 items-left flex-col justify-center">
                <h1 className="text-2xl text-gray-800 transition hover:text-[#C7511F] hover:underline line-clamp-2">
                    <Link to={ `/products/${ product.id }` }>{ product.title }
                    </Link>
                </h1>
            <div className="mt-2 flex items-center gap-1 text-xs text-[#F08804]">
                <Star className="h-4 w-4 fill-[#F08804] text-[#F08804]" />
                <span className="text-[#0F1111]">{ product.rating } out of 5</span>
            </div>
            <p className="mt-3 text-xs text-[#565959] line-clamp-3">{ product.description }</p>
            <div className="mt-4 space-y-1">
                    <div className="text-xl font-semibold text-[#0F1111] align-text-top"><Link to={ `/products/${ product.id }` } className='flex align-text-top '>{ euro } <span className='ml-0.5 text-xs font-normal mt-1 place-self-baseline'>{ cent }</span><span className='ml-px text-xs font-normal mt-1 place-self-baseline'>€</span></Link></div>
                    <p className="text-sm text-[#565959] "><span className='uppercase'>Gratis</span> Lieferung <strong>{ weekday }, { deliveryDate }. { month }.</strong></p>
            </div>
                <Button
                    onClick={ () => onAdd( product ) }
                    label="In den Warenkorb"
                    variant="secondary"
                    className='w-64 mt-4'
                />




            </div>
        </article>
    )
}

export default ProductCard
