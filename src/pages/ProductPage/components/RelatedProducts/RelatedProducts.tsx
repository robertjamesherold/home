import React from 'react';
import {
  Card,
  CardContent,
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@ui/.';
import { Image } from '@/layout';
import type { ProductType as Product } from '@/types';

interface RelatedProductsProps {
  products: Array<{ product: Product; duplicateIndex: number }>;
  imageUrls: string[];
  heroImage: string;
}

export const RelatedProducts: React.FC<RelatedProductsProps> = ({
  products,
  imageUrls,
  heroImage,
}) => {
  if (!products.length) return null;

  return (
    <section className="relative w-full">
      <h2 className="mb-4 text-xl font-semibold">Ähnliche Produkte</h2>
      <Carousel>
        <CarouselContent>
          {products.map(({ product: relatedProduct }, index) => {
            const imageUrl = imageUrls[index] ?? heroImage;
            return (
              <CarouselItem
                key={`${relatedProduct.id}-${index}`}
                className="basis-auto sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <Card className="overflow-hidden">
                  <Image
                    src={imageUrl}
                    alt={String(relatedProduct.name)}
                    className="h-40 w-full bg-muted"
                  />
                  <CardContent className="space-y-2 p-3">
                    <h3 className="text-sm font-medium leading-snug">
                      {String(relatedProduct.name)}
                    </h3>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="font-semibold">
                        {Number(relatedProduct.price).toFixed(2)}€
                      </span>
                      {relatedProduct.originalPrice && (
                        <span className="text-xs text-muted-foreground line-through">
                          {Number(relatedProduct.originalPrice).toFixed(2)}€
                        </span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </section>
  );
};
