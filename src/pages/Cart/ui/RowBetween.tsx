import { Row } from '@/layout'
import { TextParagraph } from '@/typography'

type RowBetweenProps =
{
    label: string
    value: string
    className?: string
    labelClassName?: string
    valueClassName?: string
}

const RowBetween: React.FC<RowBetweenProps> = ( {
    label,
    value,
    className = '',
    labelClassName = '',
    valueClassName = '',
} ) =>
{
    return (
        <Row className={ `flex justify-between ${ className }` }>
            <TextParagraph className={ labelClassName } text={ label } />
            <TextParagraph className={ valueClassName } text={ value }/>
        </Row>
    )
}

export default RowBetween;