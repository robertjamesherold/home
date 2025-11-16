import { Column, Grid, Row } from '@/layout';
import { Button } from '@ui/.';
import { SlidersHorizontal } from 'lucide-react';
import {SelectButton, NoFilteredProducts, ImageCard } from '../ui' 
import type { ProductType as Product } from '@/types';

type ProductGridProps = {
    filteredProducts: Array<Product>
    sortBy: string;
    setSortBy: (value: string) => void;
    toggleFilterMenu: () => void;
}


const ProductGrid: React.FC<ProductGridProps> = ({
    filteredProducts,
    sortBy,
    setSortBy,
    toggleFilterMenu
}) =>
{
    return (
        <Column className="flex-1">
            <Row className="mb-6 items-center justify-between gap-12">
                <Button
                    variant="default"
                    className="gap-2 lg:hidden"
                    onClick={ toggleFilterMenu }
                    Icon={ SlidersHorizontal }
                    text='Filter'
                />
                <SelectButton
                    value={ sortBy }
                    onChange={ ( value: string ) => setSortBy( value ) }
                />
            </Row>

            <Grid className="grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                { filteredProducts.map( product => (
                    <ImageCard key={ product.id } { ...product } />
                ) ) }
            </Grid>

            <NoFilteredProducts { ...{ filteredProducts } } />
        </Column>
    )
}


export default ProductGrid;