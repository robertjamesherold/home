import { Button } from '@/ui'
import { X } from 'lucide-react';

type CloseButtonProps = {
    closeMenu: () => void;
};

const CloseButton: React.FC<CloseButtonProps> = ( { closeMenu } ) =>
{
    return (
        <Button type="button" variant="ghost" size="icon" onClick={ closeMenu } aria-label="Menü schließen" Icon={ X } iconSize={4} />
    )
}

export default CloseButton;