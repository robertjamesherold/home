import React from 'react'
import { CheckCircle2 } from 'lucide-react'
import { TextParagraph, Title } from '@/typography'

type Props = {
    features: string[]
    specifications: Record<string, string>
}

const SpecsAndFeatures: React.FC<Props> = ( { features, specifications } ) => (
    <div className="space-y-10">
        <div className="space-y-4">
            <Title h3 bold className=" text-gray-900" text='Highlights' />
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                { features.map( ( feature, index ) => (
                    <li key={ `${ feature }-${ index }` } className="flex items-center gap-3 py-2 px-1">
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-violet-600" aria-hidden />
                        <TextParagraph className="text-gray-700" text={ feature } />
                    </li>
                ) ) }
            </ul>
        </div>

        <div className="space-y-4">
            <Title h3 bold className="text-gray-900" text='Technische Daten' />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                { Object.entries( specifications ).map( ( [ key, value ] ) => (
                    <div key={ key } className="p-2">
                        <Title h6 medium className="uppercase tracking-wider text-gray-500" text={ key } />
                        <TextParagraph className="mt-2 text-gray-800" text={ value } />
                    </div>
                ) ) }
            </div>
        </div>
    </div>
)

export default SpecsAndFeatures
