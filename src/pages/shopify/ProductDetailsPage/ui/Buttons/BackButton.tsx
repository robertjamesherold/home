import type { FC } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const BackButton: FC = () => (
  <Link
    to="/products"
    className="flex items-center space-x-2 text-gray-700 transition hover:text-violet-600"
  >
    <ArrowLeft className="h-5 w-5" />
    <span className="font-semibold">Zurück zur Übersicht</span>
  </Link>
);

export default BackButton;
