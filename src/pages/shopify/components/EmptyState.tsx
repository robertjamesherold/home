// src/components/EmptyState.tsx
import React from 'react'

const EmptyState: React.FC<{ message?: string }> = ( { message = 'No products found matching your criteria' } ) =>
{
    return (
        <div className="text-center py-16">
            <p className="text-gray-500 text-xl">{ message }</p>
        </div>
    )
}

export default EmptyState