import { ShoppingBag } from 'lucide-react' 
import { Link } from 'react-router-dom'
import { Button } from '@ui/.'


const EmptyCart: React.FC = () =>
{
    return (
 
                <div className="relative mx-auto flex h-full items-center justify-center px-4 py-16">
                    <div className="mx-auto max-w-md text-center">
                        <div className="mb-6 flex justify-center">
                            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gray-100">
                                <ShoppingBag className="h-12 w-12 text-gray-400" />
                            </div>
                        </div>
                        <h2 className="mb-4">Ihr Warenkorb ist leer</h2>
                        <p className="mb-8 text-gray-600">
                            Fügen Sie Produkte hinzu, um mit dem Einkaufen zu beginnen
                        </p>
                        <Link to="/products">
                            <Button size="lg">Produkte entdecken</Button>
                        </Link>
                    </div>
                </div>

    )
}

export default EmptyCart