// src/components/LoadingGrid.tsx
import React from 'react'

const LoadingGrid: React.FC<{ count?: number }> = ( { count = 8 } ) =>
{
    return (
        <div className="grid grid-cols-1 gap-4 ">

            { Array.from( { length: count } ).map( ( _, i ) => (
                <div key={ i } className="bg-white flex flex-row rounded-lg shadow-lg overflow-hidden animate-pulse gap-8">
                    <div className="bg-gray-300 h-64 w-64 aspect-square"></div>
                    <div className="flex w-full h-64 items-left flex-col justify-center gap-2">
                        <div className="h-8  bg-gray-300 rounded w-4/12"></div>
                        <div className="h-3 bg-gray-300 rounded w-2/12"></div>
                        <div className="h-3 bg-gray-300 rounded w-8/12"></div>
                        <div className="mt-3 h-6 bg-gray-300 rounded w-1/4"></div>
                        <div className="h-3 bg-gray-300 rounded w-1/2"></div>
                        <div className="mt-1 h-10 bg-gray-300 rounded w-1/2"></div>
                    </div>
                </div>
            ) ) }
        </div>
    )
}

export default LoadingGrid