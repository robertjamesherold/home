import React from 'react'

type Props = {
    features: string[]
    specifications: Record<string, string>
}

const SpecsAndFeatures: React.FC<Props> = ( { features, specifications } ) => (
    <div className="space-y-8">
        <div>
            <h3 className="text-2xl font-bold mb-4">Highlights</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                { features.map( ( feature, index ) => (
                    <li key={ `${ feature }-${ index }` } className="flex items-start space-x-2">
                        <svg className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" aria-hidden />
                        <span className="text-gray-700">{ feature }</span>
                    </li>
                ) ) }
            </ul>
        </div>

        <div>
            <h3 className="text-2xl font-bold mb-4">Technische Daten</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                { Object.entries( specifications ).map( ( [ key, value ] ) => (
                    <div key={ key } className="flex justify-between py-2 border-b">
                        <span className="font-semibold text-gray-700">{ key }:</span>
                        <span className="text-gray-600 text-right">{ value }</span>
                    </div>
                ) ) }
            </div>
        </div>
    </div>
)

export default SpecsAndFeatures