import { Link } from 'react-router-dom';

const ProductDetailsPageError: React.FC = () => {
  return (
    <div className="bg-linear-to-br flex min-h-screen items-center justify-center from-violet-50 via-pink-50 to-blue-50">
      <div className="max-w-md space-y-4 rounded-2xl bg-white p-10 text-center shadow-xl">
        <h1 className="text-2xl font-bold text-gray-900">
          Produkt nicht gefunden
        </h1>
        <p className="text-gray-600">
          Bitte wähle einen Artikel aus der Übersicht.
        </p>
        <Link
          to="/products"
          className="inline-flex items-center justify-center rounded-lg bg-violet-600 px-6 py-3 font-semibold text-white transition hover:bg-violet-700"
        >
          Zurück zur Produktübersicht
        </Link>
      </div>
    </div>
  );
};
export default ProductDetailsPageError;
