import React from 'react'
import { Share2, ShoppingCart } from 'lucide-react'
import { Button } from '@/ui/Buttons'
import { Column } from '@/layout'
import type { ColorOption } from '../../types'
import { MengeButton, ColorButton, GrößeButton } from './'

type Props = {
    quantity: number
    onIncrease: () => void
    onDecrease: () => void
    availableColors: ColorOption[]
    selectedColor: string
    onSelectColor: ( color: string ) => void
    availableSizes: string[]
    selectedSize: string
    onSelectSize: ( size: string ) => void
    onAddToCart: () => void
    onBuyNow: () => void
}

const ProductActions: React.FC<Props> = ( {
    quantity,
    onIncrease,
    onDecrease,
    availableColors,
    selectedColor,
    onSelectColor,
    availableSizes,
    selectedSize,
    onSelectSize,
    onAddToCart,
    onBuyNow,
} ) =>
{
    return (
        <Column className="gap-6 mt-8">
            <div className="space-y-6">
                <ColorButton
                    availableColors={ availableColors }
                    selectedColor={ selectedColor }
                    onSelect={ onSelectColor }
                />

                <GrößeButton
                    availableSizes={ availableSizes }
                    selectedSize={ selectedSize }
                    onSelect={ onSelectSize }
                />

                <MengeButton
                    quantity={ quantity }
                    onIncrease={ onIncrease }
                    onDecrease={ onDecrease }
                />
            </div>

            <Column className="gap-3">
                <Button
                    variant="primary"
                    label="Jetzt kaufen"
                    icon={ <ShoppingCart /> }
                    onClick={ onBuyNow }
                />
                <Button
                    variant="secondary"
                    label="In den Warenkorb"
                    icon={ <ShoppingCart /> }
                    onClick={ onAddToCart }
                />
                <Button variant="outline" label="Produkt teilen" icon={ <Share2 /> } />
            </Column>
        </Column>
    )
}

export default ProductActions
