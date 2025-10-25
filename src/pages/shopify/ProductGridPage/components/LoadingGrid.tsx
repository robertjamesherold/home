// src/components/LoadingGrid.tsx
import React from 'react'

const LoadingGrid: React.FC<{ count?: number }> = ( { count = 8 } ) =>
{
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            { Array.from( { length: count } ).map( ( _, i ) => (
                <div key={ i } className="bg-white rounded-xl shadow-lg overflow-hidden animate-pulse">
                    <div className="bg-gray-300 h-64"></div>
                    <div className="p-4 space-y-3">
                        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                    </div>
                </div>
            ) ) }
        </div>
    )
}

export default LoadingGrid