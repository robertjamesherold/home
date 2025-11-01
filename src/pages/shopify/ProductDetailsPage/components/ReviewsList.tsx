import React from 'react';
import { Check } from 'lucide-react';
import Stars from './Stars';
import type { Review } from '../types';
import { TextParagraph, Title } from '@/typography';
import { Button } from '@/ui/Buttons';

type Props = {
  reviews: Review[];
};

const ReviewsList: React.FC<Props> = ({ reviews }) => (
  <div className="space-y-6">
    {reviews.map((review) => (
      <article
        key={review.id}
        className="space-y-3 p-2 shadow-sm shadow-violet-100/40"
      >
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Title
                h5
                bold
                className="text-base font-bold text-gray-900"
                text={review.author}
              />
              {review.verified && (
                <span className="inline-flex items-center gap-1 rounded-full bg-green-100 px-2.5 py-1 text-xs font-semibold text-green-700">
                  <Check className="h-3 w-3" />
                  Verifiziert
                </span>
              )}
            </div>
            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
              <Stars rating={review.rating} />
              <Title h6 text={review.date} />
            </div>
          </div>
        </div>
        <TextParagraph
          sm
          className="leading-relaxed text-gray-700"
          text={review.comment}
        />
      </article>
    ))}
    <Button
      variant="outline"
      label="Bewertung schreiben"
      className="mx-auto mt-4 w-full"
      size="medium"
      aria-label="Bewertung schreiben"
    />
  </div>
);

export default ReviewsList;
