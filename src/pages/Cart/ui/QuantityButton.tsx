import { Container } from '@/layout';
import { TextParagraph } from '@/typography'
import { Button } from '@/ui';
import { Minus, Plus } from 'lucide-react';

type QuantityButtonProps = {
    onMinus: () => void;
    onPlus: () => void;
    Value: string;
}


const QuantityButton: React.FC<QuantityButtonProps> = ({onMinus, onPlus, Value}) => {
    return (
        <Container className="flex items-center rounded-md border">
            <Button variant="ghost" size="icon" aria-label="Menge verringern" onClick={ onMinus } Icon={ Minus } iconSize={4} />
            <TextParagraph className="px-4 text-sm font-medium w-[5ch] text-center" text={ Value }/>
            <Button variant="ghost" size="icon" aria-label="Menge erhöhen" onClick={ onPlus } Icon={ Plus } iconSize={ 4 } />
        </Container>
    )
}

export default QuantityButton;