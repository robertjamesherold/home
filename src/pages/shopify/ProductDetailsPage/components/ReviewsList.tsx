import React from 'react'
import { Check } from 'lucide-react'
import Stars from './Stars'
import type { Review } from '../types'

type Props = {
    reviews: Review[]
}

const ReviewsList: React.FC<Props> = ( { reviews } ) => (
    <div className="space-y-6">
        { reviews.map( ( review ) => (
            <div key={ review.id } className="border-b pb-6">
                <div className="flex items-start justify-between mb-3">
                    <div>
                        <div className="flex items-center space-x-2 mb-2">
                            <span className="font-bold text-gray-900">{ review.author }</span>
                            { review.verified && (
                                <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full inline-flex items-center space-x-1">
                                    <Check className="w-3 h-3" />
                                    <span>Verifiziert</span>
                                </span>
                            ) }
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="flex">
                                <Stars rating={ review.rating } />
                            </div>
                            <span className="text-sm text-gray-500">{ review.date }</span>
                        </div>
                    </div>
                </div>
                <p className="text-gray-700">{ review.comment }</p>
            </div>
        ) ) }
        <button type="button" className="w-full border-2 border-purple-600 text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition font-semibold">
            Bewertung schreiben
        </button>
    </div>
)

export default ReviewsList