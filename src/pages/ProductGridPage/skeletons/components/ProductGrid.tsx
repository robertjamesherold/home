import React, { useMemo } from 'react'
import { Column, Grid, Row } from '@/layout'
import { Button, Skeleton } from '@ui/.';
import { SlidersHorizontal } from 'lucide-react';
import { SkeletonSelectButton, SkeletonNoFilteredProducts, SkeletonImageCard } from '../ui'
import type { ProductType as Product } from '@/types';


type ProductGridProps = {
    filteredProducts: Array<Product>
    sortBy: string;
    setSortBy: (value: string) => void;
}


const SkeletonProductGrid: React.FC<ProductGridProps> = ({
    filteredProducts,
}) =>
{

    const length = filteredProducts.length
   
  const cards = useMemo(
    () =>
      Array.from( { length } ).map( ( _, index ) => (
          <SkeletonImageCard key={ `product-grid-skeleton-${ index }` } />
      ) ),
    [ length ]
  )

    return (
        <Column className="flex-1">
            <Row className="mb-6 items-center justify-between gap-12">
                <Skeleton className='h-fit w-fit rounded'>
                <Button
                    variant="default"
                    className="gap-2 lg:hidden opacity-0"
                    Icon={ SlidersHorizontal }
                    text='Filter'
                    />
                    </Skeleton>
                <SkeletonSelectButton />
            </Row>

            <Grid className="grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {cards}
            </Grid>

            <SkeletonNoFilteredProducts { ...{ filteredProducts } } />
        </Column>
    )
}


export default SkeletonProductGrid;