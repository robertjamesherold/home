import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { useProducts, useSkeletonLoader } from '@/hooks';
import useFilter from './useFilter';

const useProductGridPage = () =>
{
    const [ searchParams ] = useSearchParams()
    const searchQuery = searchParams.get( 'search' ) ?? ''
    const { products, isReady } = useProducts()
    const { showSkeleton } = useSkeletonLoader( { isLoading: !isReady } )
    const categoriesData = useMemo( () =>
    {
        const categorySet = new Set<string>()
        for ( const product of products )
        {
            if ( product.category )
            {
                categorySet.add( product.category )
            }
        }

        return [ 'Alle', ...Array.from( categorySet ).sort( ( a, b ) => a.localeCompare( b ) ) ]
    }, [ products ] )
    const {
        sortBy,
        setSortBy,
        filteredProducts,
        selectedCategories,
        handleCategoryToggle,
        priceRange,
        setPriceRange,
        setSelectedCategories,
    } = useFilter( products, { searchTerm: searchQuery } )
    const [ filterMenuOpen, setFilterMenuOpen ] = useState( false )

    const pageTitle = searchQuery ? 'Suchergebnisse' : 'Alle Produkte'
    const subtitle = searchQuery
        ? `${ filteredProducts.length } Treffer für „${ searchQuery }“`
        : `${ filteredProducts.length } Produkte gefunden`

    const toggleFilterMenu = () =>
    {
        setFilterMenuOpen( !filterMenuOpen )
    }

    const closeFilterMenu = () =>
    {
        setFilterMenuOpen( false )
    }
    return {
        showSkeleton,
        categoriesData,
        sortBy,
        setSortBy,
        filteredProducts,
        selectedCategories,
        handleCategoryToggle,
        priceRange,
        setPriceRange,
        setSelectedCategories,
        filterMenuOpen,
        toggleFilterMenu,
        closeFilterMenu,
        pageTitle,
        subtitle,
    }
}

export default useProductGridPage;