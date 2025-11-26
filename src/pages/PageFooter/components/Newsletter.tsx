import { Column } from '@/layout'
import { FormWithButton } from '@/components'
import { TextParagraph, Title } from '@/typography'
import type { NewsletterData } from '../data'

type NewsletterProps = {
    onSubmit: ( event: React.FormEvent<HTMLFormElement> ) => void;
    data: typeof NewsletterData
};


const Newsletter:React.FC<NewsletterProps> = ( { onSubmit, data }: NewsletterProps ) =>
{
    return (
        <Column className="space-y-3 sm:col-span-3 xl:col-span-2">
            <Title level={ 6 } className="uppercase tracking-[0.15em] text-slate-700" text={data.title} />
            <TextParagraph sm text={ data.text} />

            <FormWithButton
                onSubmit={ onSubmit }
                placeholder={data.placeholder}
                label={data.buttonLabel}
            />
            <TextParagraph xs text={data.disclaimer} />
        </Column>
    )
}

export default Newsletter