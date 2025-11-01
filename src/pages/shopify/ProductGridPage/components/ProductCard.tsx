// src/components/ProductCard.tsx
import React from 'react';
import { Star } from 'lucide-react';
import type { Product } from '../types';
import { Link } from 'react-router-dom';
import Button from '@/ui/Buttons/Button';

type Props = {
  product: Product;
  onAdd: (p: Product) => void;
};

const ProductCard: React.FC<Props> = ({ product, onAdd }) => {
  const euro = product.price.split('.')[0];
  const cent = product.price.split('.')[1];

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  if (tomorrow.getDay() === 0) {
    tomorrow.setDate(tomorrow.getDate() + 1);
  }

  const weekdays = ['So.', 'Mo.', 'Di.', 'Mi.', 'Do.', 'Fr.', 'Sa.'];
  const months = [
    'Jan',
    'Feb',
    'Mär',
    'Apr',
    'Mai',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Okt',
    'Nov',
    'Dez',
  ];

  const weekday = weekdays[tomorrow.getDay()];
  const day = tomorrow.getDate();
  const month = months[tomorrow.getMonth()];
  const deliveryDate = day.toLocaleString();

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-sm transition sm:flex-row sm:gap-8">
      <Link
        to={`/products/${product.id}`}
        className="flex h-32 items-center justify-center overflow-hidden sm:aspect-square sm:h-full md:h-64"
      >
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-cover"
        />
      </Link>
      <div className="items-left flex min-h-fit flex-col justify-center p-4 sm:h-64">
        <h1 className="line-clamp-2 text-2xl text-gray-800 transition hover:text-[#C7511F] hover:underline">
          <Link to={`/products/${product.id}`}>{product.title}</Link>
        </h1>
        <div className="mt-2 flex items-center gap-1 text-xs text-[#F08804]">
          <Star className="h-4 w-4 fill-[#F08804] text-[#F08804]" />
          <span className="text-[#0F1111]">{product.rating} out of 5</span>
        </div>
        <p className="mt-3 line-clamp-3 text-xs text-[#565959]">
          {product.description}
        </p>
        <div className="mt-4 space-y-1">
          <div className="align-text-top text-xl font-semibold text-[#0F1111]">
            <Link
              to={`/products/${product.id}`}
              className="flex align-text-top"
            >
              {euro}{' '}
              <span className="place-self-baseline ml-0.5 mt-1 text-xs font-normal">
                {cent}
              </span>
              <span className="place-self-baseline ml-px mt-1 text-xs font-normal">
                €
              </span>
            </Link>
          </div>
          <p className="text-sm text-[#565959]">
            <span className="uppercase">Gratis</span> Lieferung{' '}
            <strong>
              {weekday}, {deliveryDate}. {month}.
            </strong>
          </p>
        </div>
        <Button
          onClick={() => onAdd(product)}
          label="In den Warenkorb"
          variant="secondary"
          className="mt-4 sm:w-64"
        />
      </div>
    </article>
  );
};

export default ProductCard;
