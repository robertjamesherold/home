import { Link } from 'react-router-dom'
import { ShoppingCart } from 'lucide-react'
import { Icon } from '@/layout'  
import { Badge }    from '@/ui'

type CartButtonProps = {
    totalItems: number;
    closeMenu: () => void;
    };  

const CartButton: React.FC<CartButtonProps> = ({ totalItems, closeMenu }) =>
{
  return (
      <Link
          to="/cart"
          className="relative flex items-center gap-2 py-4 text-2xl transition-opacity hover:opacity-70  w-fit"
          onClick={ closeMenu }
      >
          <Icon Icon={ShoppingCart} size={6} />
          Warenkorb
          { totalItems > 0 && (
              <Badge className="relative">{ totalItems }</Badge>
          ) }
      </Link>
  )
}

export default CartButton;