import { Menu } from 'lucide-react';
import { Button } from '@/ui'

type MenuButtonProps = {
    onClick: () => void;
};

const MenuButton: React.FC<MenuButtonProps> = ( { onClick } ) =>
{
    return (
        <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={ onClick }
            aria-label="Menü öffnen"
        >
            <Menu className="h-5 w-5" />
        </Button>
    )
};

export default MenuButton;