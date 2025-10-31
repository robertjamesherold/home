import React from 'react'
import type { ActiveTab } from '../types'

type Props = {
    activeTab: ActiveTab
    onChange: ( t: ActiveTab ) => void
    reviewCount: number
}

const Tabs: React.FC<Props> = ( { activeTab, onChange, reviewCount } ) => (
    <div className="flex space-x-8 border-b">
        <button
            type="button"
            onClick={ () => onChange( 'description' ) }
            className={ `pb-4 font-semibold transition ${ activeTab === 'description' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-500 hover:text-gray-700' }` }
        >
            Beschreibung
        </button>
        <button
            type="button"
            onClick={ () => onChange( 'reviews' ) }
            className={ `pb-4 font-semibold transition ${ activeTab === 'reviews' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-500 hover:text-gray-700' }` }
        >
            Bewertungen ({ reviewCount })
        </button>
        <button
            type="button"
            onClick={ () => onChange( 'shipping' ) }
            className={ `pb-4 font-semibold transition ${ activeTab === 'shipping' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-500 hover:text-gray-700' }` }
        >
            Versand & Retouren
        </button>
    </div>
)

export default Tabs