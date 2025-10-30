import { Link } from "react-router-dom"
import { ShoppingCart } from "lucide-react"

const CartButton = () =>
{
    return (
        < Link
            to="/cart"
            className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition flex items-center space-x-2"
        >
              <ShoppingCart className="w-5 h-5" />
              <span>Warenkorb</span>
            </Link >
    )
}

export default CartButton