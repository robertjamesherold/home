import { Link } from 'react-router-dom';
import { Button, Badge } from '@/ui';
import { ShoppingCart } from 'lucide-react';

type CartButtonProps = {
    totalItems: number;
};

const CartButton: React.FC<CartButtonProps> = ({ totalItems }) =>
{
    return (
        <Link to="/cart">
            <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                { totalItems > 0 && (
                    <Badge variant="secondary" className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full p-0">
                        { totalItems }
                    </Badge>
                ) }
            </Button>
        </Link>
    );
};

export default CartButton;