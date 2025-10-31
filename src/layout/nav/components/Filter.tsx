
import React from 'react';
import { ChevronDown } from 'lucide-react';
import { useProductsState } from '@/hooks'



const Filter: React.FC = (  ) =>
{
  
    const { categories, selectedCategory,
        setSelectedCategory } = useProductsState()
    return (

        <div className="sticky top-0 bg-[#232F3E] text-white">
            <div className="main flex flex-row gap-2 py-2 text-sm">

                { categories.map( ( category ) => (
                    <button
                        key={ category }
                        onClick={() => setSelectedCategory(category)}   
                        className={ `whitespace-nowrap rounded-full px-3 py-1 transition ${ selectedCategory === category ? 'bg-white text-[#232F3E] font-semibold' : 'hover:text-[#f3a847]' }` }
                        type="button"
                    >
                        { category }
                    </button>
                ) ) }
                <button className="ml-auto hidden items-center gap-1 whitespace-nowrap font-semibold hover:text-[#f3a847] lg:flex" type="button">
                    <span>Deals &amp; Promotions</span>
                    <ChevronDown className="h-4 w-4" />
                </button>
            </div>
        </div>
    );
}

export default Filter;