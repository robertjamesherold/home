import { Minus, Plus, Trash2 } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Column, Row } from '@/layout'
import type { CartItemType } from '@/types'
import { TextParagraph, Title } from '@/typography'
import { Button, Card, CardContent } from '@/ui'

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
                        <Card key={ product.id }>
                            {/* remove horizontal padding so the image can reach the card edge */ }
                            <CardContent className="relative flex flex-col sm:flex-row sm:items-start px-0">
                                <div className="relative inline-flex w-full sm:w-42 h-48 sm:h-auto overflow-hidden bg-muted sm:rounded-l-xl rounded-t-xl">
                                    { product.image ? (
                                        <img
                                            src={ product.image }
                                            alt={ product.title }
                                            className="h-full w-full object-cover"
                                            loading="lazy"
                                        />
                                    ) : null }
                                </div>

                                {/* keep consistent padding for the content area */ }
                                <Row className="flex-1 inline-flex flex-col justify-between gap-4 sm:flex-row sm:items-start p-4 sm:p-6">
                                    <Column className="flex-1 space-y-1">
                                        <Link
                                            to={ `/product/${ product.link ?? product.id }` }
                                            className="hover:underline"
                                        >
                                            <Title level={ 4 } weight="semibold">
                                                { product.title }
                                            </Title>
                                        </Link>
                                        <TextParagraph className="text-sm text-gray-600">
                                            { product.category }
                                        </TextParagraph>
                                        <Title level={ 5 } className="text-lg">
                                            { product.price.toFixed( 2 ) }€
                                        </Title>
                                    </Column>

                                    <Row className="items-center gap-4">
                                        <div className="flex items-center rounded-md border">
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                aria-label="Menge verringern"
                                                onClick={ () =>
                                                    onUpdateQuantity( product.id, Math.max( 1, safeQuantity - 1 ) )
                                                }
                                            >
                                                <Minus className="h-4 w-4" />
                                            </Button>
                                            <span className="px-4 text-sm font-medium">
                                                { safeQuantity }
                                            </span>
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                aria-label="Menge erhöhen"
                                                onClick={ () =>
                                                    onUpdateQuantity( product.id, safeQuantity + 1 )
                                                }
                                            >
                                                <Plus className="h-4 w-4" />
                                            </Button>
                                        </div>

                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            aria-label="Artikel entfernen"
                                            onClick={ () => onRemove( product.id ) }
                                        >
                                            <Trash2 className="h-5 w-5 text-destructive" />
                                        </Button>
                                    </Row>
                                </Row>
                            </CardContent>
                        </Card>
                    )
                } ) }
            </Column>
        </>
    )
}

export default CartItems

