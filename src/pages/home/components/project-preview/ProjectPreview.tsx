import { Column, Grid, Section } from '../../../../layout'
import VillaOlivetoImage from "../../../../assets/images/VillaOlivetoImage"
import SignatureSubHeading from '../../../../typography/SignatureSubHeading'
import SignatureDisplayTitle from '../../../../typography/SignatureDisplayTitle'
import TextParagraph from '../../../../typography/TextParagraph'
import LinkButton from '../../../../ui/Buttons/LinkButton'
import { useWindowSize } from '../../../../hooks/useWindowSize'
import { useEffect, useState } from 'react'

type PreviewDataProps = {
    isReversed: boolean
    subtitle: string
    title: string
    paragraph: string | string[]
    button: LinkButtonProps
    image: number
}

type PreviewMapping = {
    previewData: PreviewDataProps | PreviewDataProps[]
    }


type LinkButtonProps = {
    entry: string
    label: string
    icon?: string
}

const previewData:PreviewMapping = {
    previewData: [{
        isReversed: true,
        subtitle: 'Signature Stay',
        title: 'Villa Oliveto – Ihr Rückzugsort über dem Tal',
        paragraph: [
            'Eingebettet zwischen Olivenhainen empfängt Sie eine Architektur, die Ruhe und Weite atmet. Große Glasflächen öffnen das Innere zur Landschaft, während klare Linien und warme Materialien für zeitlose Eleganz sorgen.',
            'Ob für erholsame Wochen mit Familie oder inspirierende Aufenthalte mit Freunden – Villa Oliveto kombiniert Privatsphäre, Design und Naturerlebnis zu einem besonderen Gefühl von Zuhause.'
        ],
        button: {
            entry: '#anfrage',
            label: 'Hier ansehen',
            icon: '→'
        },
        image: 1
    },
    {
        isReversed: true,
        subtitle: 'Signature Stay',
        title: 'Villa Oliveto – Ihr Rückzugsort über dem Tal',
        paragraph: [
            'Eingebettet zwischen Olivenhainen empfängt Sie eine Architektur, die Ruhe und Weite atmet. Große Glasflächen öffnen das Innere zur Landschaft, während klare Linien und warme Materialien für zeitlose Eleganz sorgen.',
            'Ob für erholsame Wochen mit Familie oder inspirierende Aufenthalte mit Freunden – Villa Oliveto kombiniert Privatsphäre, Design und Naturerlebnis zu einem besonderen Gefühl von Zuhause.'
        ],
        button: {
            entry: '#anfrage',
            label: 'Hier ansehen',
            icon: '→'
        },
        image: 1
    }]
    }

const ProjectPreview: React.FC<PreviewDataProps> = () => {

const { width } = useWindowSize()
const [isPadding, setIsPadding] = useState('p-16')
const [isSpan, setIsSpan] = useState('col-span-12')
const [isImageSpan, setIsImageSpan] = useState('col-span-12')

useEffect(() => {
  setIsPadding(
    width >= 1024 ? 'p-8'
    : width >= 800 ? 'p-6'
    : width >= 678 ? 'p-4'
    : width >= 480 ? 'p-0'
    : 'p-0'
  )
  setIsSpan(
    width >= 1024 ? 'col-span-6'
    : width >= 800 ? 'col-span-7'
    : width >= 678 ? 'col-span-8'
    : width >= 480 ? 'col-span-12'
    : 'col-span-12'
  )
  setIsImageSpan(
    width >= 1024 ? 'col-span-6'
    : width >= 800 ? 'col-span-5'
    : width >= 678 ? 'col-span-4'
    : width >= 480 ? 'col-span-12'
    : 'col-span-12'
  )
}, [width])

    return (
        <>
            {Array.isArray(previewData.previewData) ? previewData.previewData.map((items, index)=> ( 
                
                <Section key={index} fullWidth className="bg-white" id="villa-oliveto">
                    <Grid className="mx-auto gap-4 grid-cols-12">
                        <Column className={`gap-4 justify-center ${isPadding} ${isSpan} ${items.isReversed ? 'order-2' : 'order-1'}`}>
                            <SignatureSubHeading text={ items.subtitle } />
                            <SignatureDisplayTitle text={ items.title } />
                            {Array.isArray(items.paragraph) ? items.paragraph.map( ( text, index ) => ( 
                                <TextParagraph key={ index } text={ text } /> ) ) 
                            :   <TextParagraph text={ items.paragraph } /> }
                            <LinkButton entry={items.button.entry} label={items.button.label} icon={items.button.icon}/>
                        </Column>
                        <Column className={`gap-4 justify-center ${isPadding} ${isSpan} ${previewData.previewData.isReversed ? 'order-1' : 'order-2'}`}>
                            <VillaOlivetoImage map={items.image} className={`rounded-3xl shadow-2xl h-full w-full overflow-hidden ${isImageSpan} ${items.isReversed ? 'order-1' : 'order-2'}`} />
                        </Column>
                    </Grid>
                </Section>))
            :
                <Section fullWidth className="bg-white" id="villa-oliveto">
                        <Grid className="mx-auto gap-4 md:grid-cols-2">
                            <Column className={`gap-4 justify-center ${isPadding} ${isSpan} ${previewData.previewData.isReversed ? 'order-2' : 'order-1'}`}>
                                <SignatureSubHeading text={previewData.previewData.subtitle } />
                                <SignatureDisplayTitle text={previewData.previewData.title } />
                                {Array.isArray(previewData.previewData.paragraph) ? previewData.previewData.paragraph.map( ( text, index ) => ( 
                                    <TextParagraph key={ index } text={ text } /> ) ) 
                                :   <TextParagraph text={ previewData.previewData.paragraph } /> }
                                <LinkButton entry={previewData.previewData.button.entry} label={previewData.previewData.button.label} icon={previewData.previewData.button.icon}/>
                            </Column>
                            <Column className={`gap-4 justify-center ${isPadding} ${isSpan} ${previewData.previewData.isReversed ? 'order-1' : 'order-2'}`}>
                                <VillaOlivetoImage map={previewData.previewData.image} className={`rounded-3xl shadow-2xl ${isImageSpan} h-full w-full overflow-hidden ${previewData.previewData.isReversed ? 'order-1' : 'order-2'}`} />
                            </Column>
                        </Grid>
                    </Section> 
                }  
            </>
        )
    }

export default ProjectPreview



