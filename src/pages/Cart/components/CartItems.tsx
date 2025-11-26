import { Trash2 } from 'lucide-react'
import { Column, Row, Image, Link } from '@/layout'
import type { CartItemType } from '@/types'
import { TextParagraph, Title } from '@/typography'
import { Button, Card } from '@/ui'
import { QuantityButton } from '../ui'

type CartItemsProps = {
    items: CartItemType[]
    onUpdateQuantity: ( productId: string, quantity: number ) => void
    onRemove: ( productId: string ) => void
}

const CartItems = ( {
    items,
    onUpdateQuantity,
    onRemove,
}: CartItemsProps ) =>
{
    return (
        <>
            <Column className="space-y-4 lg:col-span-2">
                { items.map( ( { product, quantity } ) =>
                {
                    const safeQuantity = Math.max( 1, quantity ?? 1 )

                    return (

                        <Card key={ product.id } className='pb-0 overflow-hidden'>
                            <Row className="relative flex flex-col sm:flex-row sm:items-start overflow-hidden px-0">
                                    { product.image ? (
                                    <Image
                                        isAbsolute={ false }
                                            src={ product.image }
                                            alt={ product.title }
                                        className="aspect-square w-full object-cover max-h-48 max-w-48"
                                        />
                                ) : null }

                                <Column className="flex-1 inline-flex justify-between gap-4 sm:flex-row sm:items-start p-4 sm:p-6">
                                    <Column className="flex-1 space-y-1">
                                        <Link to={ `/product/${ product.link ?? product.id }` } className="text-xl font-semibold hover:underline" text={ product.title } />
                                        <TextParagraph sm className=" text-gray-600" text={ product.category } />
                                        <Title level={ 5 } className="text-lg" text={ `${ product.price.toFixed( 2 ) } €` } />                          
                                    </Column>
                                    <Row className="items-center gap-4">
                                        <QuantityButton onMinus={ () => onUpdateQuantity( product.id, Math.max( 1, safeQuantity - 1 ) ) } onPlus={ () => onUpdateQuantity( product.id, safeQuantity + 1 ) } Value={ safeQuantity.toString() } />
                                        <Button variant="ghost" size="icon" aria-label="Artikel entfernen" onClick={ () => onRemove( product.id ) } Icon={ Trash2 } iconSize={ 5 } className='text-destructive-500 hover:bg-destructive-100' />
                                    </Row>
                                </Column>
                            </Row>
                        </Card>
                    )
                } ) }
            </Column>
        </>
    )
}

export default CartItems

