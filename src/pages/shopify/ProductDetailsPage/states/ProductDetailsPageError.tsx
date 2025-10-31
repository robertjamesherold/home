import { Link } from 'react-router-dom'

const ProductDetailsPageError: React.FC = () =>
{
    return ( <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-purple-50 via-pink-50 to-blue-50">
        <div className="bg-white shadow-xl rounded-2xl p-10 text-center space-y-4 max-w-md">
            <h1 className="text-2xl font-bold text-gray-900">Produkt nicht gefunden</h1>
            <p className="text-gray-600">Bitte wähle einen Artikel aus der Übersicht.</p>
            <Link
                to="/products"
                className="inline-flex items-center justify-center rounded-lg bg-purple-600 px-6 py-3 font-semibold text-white transition hover:bg-purple-700"
            >
                Zurück zur Produktübersicht
            </Link>
        </div>
    </div> )
}
export default ProductDetailsPageError