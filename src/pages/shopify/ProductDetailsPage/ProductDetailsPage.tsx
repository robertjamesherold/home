import React, { useEffect, useMemo } from 'react';
import { Check, Share2, Shield, ShoppingCart, Star, Truck } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

import Button from '@/ui/Buttons/Button';
import { Column } from '@/layout';

import useProductsData from '../ProductGridPage/hooks/useProductsData';
import type { Product } from '../ProductGridPage/types';

import { CATEGORY_COLORS, CATEGORY_FEATURES, CATEGORY_SIZES, CATEGORY_SPECIFICATIONS } from './data/categoryData';
import { DEFAULT_COLORS, DEFAULT_FEATURES, DEFAULT_SIZES, DEFAULT_SPECIFICATIONS } from './data/defaultData';
import { useGallery, useProductDetailState } from './hooks';
import { BigImage, GalleryImages, Header } from './components';
import {
  ColorButton,
  DiscountBadge,
  FavoritenButton,
  GrößeButton,
  MengeButton,
} from './ui/Buttons';
import type { ActiveTab, ColorOption, Review } from './types';

const formatCurrency = (value: number) =>
  new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(
    value,
  );

const buildReviews = (product: Product, reviewCount: number): Review[] => [
  {
    id: 1,
    author: 'Sarah M.',
    rating: 5,
    date: 'vor 2 Wochen',
    comment: `"${product.title}" hat meine Erwartungen übertroffen – Qualität und Komfort sind absolut erstklassig!`,
    verified: true,
  },
  {
    id: 2,
    author: 'Michael R.',
    rating: Math.round(product.rating),
    date: 'vor 1 Monat',
    comment:
      'Top Verarbeitung und schneller Versand. Besonders die kleinen Details machen den Unterschied.',
    verified: true,
  },
  {
    id: 3,
    author: 'Emma L.',
    rating: 5,
    date: 'vor 3 Wochen',
    comment: `Ich nutze ${product.title} täglich – Design, Funktion und Komfort passen einfach perfekt zusammen.`,
    verified: reviewCount > 120,
  },
];

const normalizeSizes = (
  sizes: typeof CATEGORY_SIZES[keyof typeof CATEGORY_SIZES] | undefined,
) => {
  if (!sizes) {
    return DEFAULT_SIZES.map((size) => size.name);
  }

  return sizes.map((size) => size);
};

const ProductDetailPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const { products, loading } = useProductsData();

  const product = useMemo(
    () => products.find((item) => item.id === productId),
    [products, productId],
  );

  const {
    selectedImage,
    setSelectedImage,
    quantity,
    increase,
    decrease,
    selectedSize,
    setSelectedSize,
    selectedColor,
    setSelectedColor,
    activeTab,
    setActiveTab,
    isFavorite,
    toggleFavorite,
  } = useProductDetailState(productId);

  const availableColors = useMemo<ColorOption[]>(() => {
    if (!product) {
      return DEFAULT_COLORS;
    }

    return CATEGORY_COLORS[product.category] ?? DEFAULT_COLORS;
  }, [product]);

  const availableSizes = useMemo(
    () => normalizeSizes(product ? CATEGORY_SIZES[product.category] : undefined),
    [product],
  );

  const defaultColor = availableColors[0]?.name ?? '';
  const defaultSize = availableSizes[0] ?? '';

  useEffect(() => {
    if (defaultColor) {
      setSelectedColor(defaultColor);
    }
  }, [defaultColor, setSelectedColor]);

  useEffect(() => {
    if (defaultSize) {
      setSelectedSize(defaultSize);
    }
  }, [defaultSize, setSelectedSize]);

  const galleryImages = useGallery(product?.image);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-purple-50 via-pink-50 to-blue-50">
        <p className="text-gray-600 text-lg">Produktdetails werden geladen…</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
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
      </div>
    );
  }

  const priceValue = Number(product.price);
  const originalPriceValue = priceValue * 1.2;
  const priceDisplay = formatCurrency(priceValue);
  const originalPrice = formatCurrency(originalPriceValue);
  const discount = Math.max(
    0,
    Math.round(((originalPriceValue - priceValue) / originalPriceValue) * 100),
  );
  const reviewCount = Math.max(42, Math.round(product.rating * 48));

  const features = CATEGORY_FEATURES[product.category] ?? DEFAULT_FEATURES;
  const specifications =
    CATEGORY_SPECIFICATIONS[product.category] ?? DEFAULT_SPECIFICATIONS;
  const reviews = buildReviews(product, reviewCount);

  const renderStars = (rating: number) =>
    [...Array(5)].map((_, index) => (
      <Star
        key={`star-${index}`}
        className={`w-5 h-5 ${
          index < Math.round(rating)
            ? 'text-yellow-400 fill-current'
            : 'text-gray-300'
        }`}
      />
    ));

  const handleTabChange = (tab: ActiveTab) => {
    setActiveTab(tab);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50 via-pink-50 to-blue-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-4">
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden aspect-square">
              {galleryImages[selectedImage] && (
                <BigImage image={galleryImages[selectedImage]} title={product.title} />
              )}
              {discount > 0 && <DiscountBadge discount={discount} />}
              <FavoritenButton isFavorite={isFavorite} onToggle={toggleFavorite} />
            </div>

            {galleryImages.length > 0 && (
              <GalleryImages
                images={galleryImages}
                selectedImage={selectedImage}
                onSelect={setSelectedImage}
              />
            )}
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-3">
                {product.title}
              </h1>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  {renderStars(product.rating)}
                </div>
                <span className="text-gray-600 font-semibold">
                  {product.rating.toFixed(1)}
                </span>
                <span className="text-gray-400">({reviewCount} Bewertungen)</span>
              </div>
            </div>

            <div className="flex items-baseline space-x-3">
              <span className="text-4xl font-bold text-purple-600">
                {priceDisplay}
              </span>
              {discount > 0 && (
                <span className="text-2xl text-gray-400 line-through">
                  {originalPrice}
                </span>
              )}
            </div>

            <div className="flex items-center space-x-2">
              <Check className="w-5 h-5 text-green-500" />
              <span className="text-green-600 font-semibold">
                Sofort verfügbar
              </span>
            </div>

            <p className="text-gray-600 leading-relaxed">{product.description}</p>

            <ColorButton
              availableColors={availableColors}
              selectedColor={selectedColor}
              onSelect={setSelectedColor}
            />

            <GrößeButton
              availableSizes={availableSizes}
              selectedSize={selectedSize}
              onSelect={setSelectedSize}
            />

            <MengeButton
              quantity={quantity}
              onIncrease={increase}
              onDecrease={decrease}
            />

            <Column className="gap-4 mt-4">
              <Button
                variant="primary"
                label="Jetzt kaufen"
                icon={<ShoppingCart />}
              />
              <Button variant="secondary" label="In den Warenkorb" />
              <Button
                variant="outline"
                label="Produkt teilen"
                icon={<Share2 />}
              />
            </Column>

            <div className="grid grid-cols-3 gap-4 pt-6 border-t">
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="bg-purple-100 p-3 rounded-full">
                  <Truck className="w-6 h-6 text-purple-600" />
                </div>
                <span className="text-sm font-semibold">
                  Versand am selben Tag
                </span>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="bg-purple-100 p-3 rounded-full">
                  <Shield className="w-6 h-6 text-purple-600" />
                </div>
                <span className="text-sm font-semibold">2 Jahre Garantie</span>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="bg-purple-100 p-3 rounded-full">
                  <Check className="w-6 h-6 text-purple-600" />
                </div>
                <span className="text-sm font-semibold">Geprüfte Qualität</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8">
          <div className="flex space-x-8 border-b">
            <button
              type="button"
              onClick={() => handleTabChange('description')}
              className={`pb-4 font-semibold transition ${
                activeTab === 'description'
                  ? 'text-purple-600 border-b-2 border-purple-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Beschreibung
            </button>
            <button
              type="button"
              onClick={() => handleTabChange('reviews')}
              className={`pb-4 font-semibold transition ${
                activeTab === 'reviews'
                  ? 'text-purple-600 border-b-2 border-purple-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Bewertungen ({reviewCount})
            </button>
            <button
              type="button"
              onClick={() => handleTabChange('shipping')}
              className={`pb-4 font-semibold transition ${
                activeTab === 'shipping'
                  ? 'text-purple-600 border-b-2 border-purple-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Versand & Retouren
            </button>
          </div>

          <div className="mt-8">
            {activeTab === 'description' && (
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Highlights</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {features.map((feature, index) => (
                      <li
                        key={`${feature}-${index}`}
                        className="flex items-start space-x-2"
                      >
                        <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4">Technische Daten</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2 border-b">
                        <span className="font-semibold text-gray-700">
                          {key}:
                        </span>
                        <span className="text-gray-600 text-right">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-6">
                {reviews.map((review) => (
                  <div key={review.id} className="border-b pb-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="font-bold text-gray-900">
                            {review.author}
                          </span>
                          {review.verified && (
                            <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full inline-flex items-center space-x-1">
                              <Check className="w-3 h-3" />
                              <span>Verifiziert</span>
                            </span>
                          )}
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="flex">
                            {renderStars(review.rating)}
                          </div>
                          <span className="text-sm text-gray-500">
                            {review.date}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                  </div>
                ))}

                <button
                  type="button"
                  className="w-full border-2 border-purple-600 text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition font-semibold"
                >
                  Bewertung schreiben
                </button>
              </div>
            )}

            {activeTab === 'shipping' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-3">Versandinformationen</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Kostenloser Premium-Versand innerhalb Deutschlands ab 50 €.
                    Bestellungseingänge bis 14 Uhr werden noch am selben Tag
                    bearbeitet.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Retouren & Service</h3>
                  <p className="text-gray-700 leading-relaxed">
                    30 Tage Rückgaberecht. Ungetragene Ware kann kostenfrei
                    retourniert werden. Rückerstattungen erfolgen innerhalb von
                    5–7 Werktagen.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <footer className="bg-white mt-16 py-8 border-t">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-600">
          <p className="mb-2">Erstellt mit React, TypeScript & Tailwind CSS</p>
          <p className="text-sm">Shopify Produktdetailseite – Demo</p>
        </div>
      </footer>
    </div>
  );
};

export default ProductDetailPage;
