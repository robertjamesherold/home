import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

import { Section, Container, Column, Row } from '@/layout';
import { Title, TextParagraph } from '@/typography';
import {
  Button,
  Input,
  Label,
  Switch,
  Textarea,
} from '@/ui';
import { useProducts } from '@/hooks';
import { slugify } from '@/lib/slugify';

const initialFormState = {
  name: '',
  category: '',
  price: '',
  originalPrice: '',
  description: '',
  slug: '',
  ratingScore: '4.5',
  ratingReviews: '0',
  inStock: true,
  tags: '',
  image: '',
  images: '',
};

type FormState = typeof initialFormState;

type StatusState = {
  type: 'success' | 'error';
  message: string;
};

const parseList = (value: string): string[] => {
  return value
    .split(/[\n,]+/)
    .map((item) => item.trim())
    .filter(Boolean);
};

const toNumber = (value: string): number | undefined => {
  if (!value.trim()) {
    return undefined;
  }

  const normalized = value.replace(',', '.');
  const parsed = Number.parseFloat(normalized);

  if (Number.isNaN(parsed)) {
    return undefined;
  }

  return parsed;
};

const ProductEditorPage: React.FC = () => {
  const { addProduct } = useProducts();
  const [formState, setFormState] = useState<FormState>(initialFormState);
  const [status, setStatus] = useState<StatusState | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [createdProductSlug, setCreatedProductSlug] = useState<string | null>(
    null
  );

  const slugPreview = useMemo(() => {
    return slugify(formState.slug || formState.name || 'produkt');
  }, [formState.slug, formState.name]);

  const handleChange = (
    field: keyof FormState,
    value: string | boolean
  ) => {
    setFormState((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus(null);
    setCreatedProductSlug(null);

    const trimmedName = formState.name.trim();
    const trimmedCategory = formState.category.trim();

    if (!trimmedName) {
      setStatus({
        type: 'error',
        message: 'Bitte gib einen Produktnamen ein.',
      });
      return;
    }

    if (!trimmedCategory) {
      setStatus({
        type: 'error',
        message: 'Bitte wähle eine Kategorie.',
      });
      return;
    }

    const price = toNumber(formState.price);

    if (typeof price !== 'number' || price <= 0) {
      setStatus({
        type: 'error',
        message: 'Bitte gib einen gültigen Preis ein (größer 0).',
      });
      return;
    }

    const originalPrice = toNumber(formState.originalPrice);
    const ratingScore = toNumber(formState.ratingScore);
    const ratingReviews = toNumber(formState.ratingReviews);

    const tags = parseList(formState.tags);
    const additionalImages = parseList(formState.images);
    const primaryImage = formState.image.trim();
    const combinedImages = primaryImage
      ? [primaryImage, ...additionalImages]
      : additionalImages;
    const uniqueImages = Array.from(new Set(combinedImages));

    setIsSubmitting(true);

    try {
      const newProduct = addProduct({
        name: trimmedName,
        category: trimmedCategory,
        price,
        originalPrice: originalPrice,
        description: formState.description.trim() || undefined,
        ratingScore,
        ratingReviews,
        inStock: formState.inStock,
        tags,
        image: uniqueImages[0],
        images: uniqueImages,
        link: formState.slug ? slugify(formState.slug) : undefined,
      });

      setStatus({
        type: 'success',
        message: 'Produkt wurde erfolgreich angelegt.',
      });
      setCreatedProductSlug(newProduct.link ?? newProduct.id);
      setFormState(initialFormState);
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : 'Produkt konnte nicht gespeichert werden.';
      setStatus({ type: 'error', message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section className="w-full bg-gray-50 py-10">
      <Container className="mx-auto w-full max-w-4xl rounded-3xl bg-white p-6 shadow-sm sm:p-10">
        <Column className="space-y-8">
          <header className="space-y-2">
            <Title level={1} weight="bold" text="Produkt anlegen" />
            <TextParagraph
              className="text-gray-600"
              text="Erstelle neue Produkte direkt im Frontend. Die Daten werden gespeichert und stehen anschließend sofort im Shop zur Verfügung."
            />
          </header>

          {status ? (
            <div
              className={`rounded-lg border p-4 text-sm ${
                status.type === 'success'
                  ? 'border-emerald-200 bg-emerald-50 text-emerald-900'
                  : 'border-red-200 bg-red-50 text-red-900'
              }`}
            >
              <p className="font-medium">{status.message}</p>
              {status.type === 'success' && createdProductSlug ? (
                <div className="mt-2 flex flex-wrap items-center gap-2">
                  <TextParagraph
                    sm
                    className="text-gray-600"
                    text="Ansehen:"
                  />
                  <Button asChild size="sm">
                    <Link to={`/product/${createdProductSlug}`}>
                      Produktseite öffnen
                    </Link>
                  </Button>
                </div>
              ) : null}
            </div>
          ) : null}

          <form className="space-y-8" onSubmit={handleSubmit}>
            <Column className="gap-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Produktname *</Label>
                  <Input
                    id="name"
                    value={formState.name}
                    onChange={(event) => handleChange('name', event.target.value)}
                    placeholder="z. B. Aurora Stehlampe"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Kategorie *</Label>
                  <Input
                    id="category"
                    value={formState.category}
                    onChange={(event) =>
                      handleChange('category', event.target.value)
                    }
                    placeholder="z. B. Beleuchtung"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="price">Preis (in €) *</Label>
                  <Input
                    id="price"
                    type="number"
                    step="0.01"
                    min="0"
                    value={formState.price}
                    onChange={(event) => handleChange('price', event.target.value)}
                    placeholder="179.99"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="originalPrice">Streichpreis (optional)</Label>
                  <Input
                    id="originalPrice"
                    type="number"
                    step="0.01"
                    min="0"
                    value={formState.originalPrice}
                    onChange={(event) =>
                      handleChange('originalPrice', event.target.value)
                    }
                    placeholder="219.99"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="ratingScore">Bewertung (0-5)</Label>
                  <Input
                    id="ratingScore"
                    type="number"
                    step="0.1"
                    min="0"
                    max="5"
                    value={formState.ratingScore}
                    onChange={(event) =>
                      handleChange('ratingScore', event.target.value)
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="ratingReviews">Anzahl Bewertungen</Label>
                  <Input
                    id="ratingReviews"
                    type="number"
                    min="0"
                    value={formState.ratingReviews}
                    onChange={(event) =>
                      handleChange('ratingReviews', event.target.value)
                    }
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Beschreibung</Label>
                <Textarea
                  id="description"
                  className="min-h-[120px]"
                  onChange={(event) =>
                    handleChange( 'description', ( event.target as HTMLTextAreaElement ).value )
                  }
                  placeholder="Beschreibe dein Produkt..."
                />
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="slug">Individueller Link (optional)</Label>
                  <Input
                    id="slug"
                    value={formState.slug}
                    onChange={(event) => handleChange('slug', event.target.value)}
                    placeholder="aurora-stehlampe"
                  />
                  <TextParagraph
                    sm
                    className="text-gray-500"
                    text={`Vorschau: /product/${slugPreview}`}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tags">Tags (Komma-getrennt)</Label>
                  <Input
                    id="tags"
                    value={formState.tags}
                    onChange={(event) => handleChange('tags', event.target.value)}
                    placeholder="new, sale"
                  />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="image">Titelbild URL</Label>
                  <Input
                    id="image"
                    value={formState.image}
                    onChange={(event) => handleChange('image', event.target.value)}
                    placeholder="https://..."
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="images">Weitere Bilder (je Zeile)</Label>
                  <Textarea
                    id="images"
                    className="min-h-[96px]"
                    onChange={ ( event ) => handleChange( 'images', ( event.target as HTMLTextAreaElement ).value ) }
                    placeholder={`https://.../bild-1.jpg\nhttps://.../bild-2.jpg`}
                  />
                </div>
              </div>

              <Row className="items-center justify-between gap-3 rounded-lg border border-gray-200 p-4">
                <div>
                  <Label htmlFor="inStock" className="text-base">
                    Verfügbar
                  </Label>
                  <TextParagraph
                    sm
                    className="text-gray-500"
                    text="Steuert, ob das Produkt als lieferbar angezeigt wird."
                  />
                </div>
                <Switch
                  id="inStock"
                  checked={formState.inStock}
                  onCheckedChange={(checked) => handleChange('inStock', checked)}
                />
              </Row>
            </Column>

            <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
              <Button
                type="submit"
                className="sm:w-auto"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Speichern…' : 'Produkt speichern'}
              </Button>
              <Button
                type="button"
                variant="ghost"
                className="sm:w-auto"
                onClick={() => {
                  setFormState(initialFormState);
                  setStatus(null);
                  setCreatedProductSlug(null);
                }}
              >
                Formular zurücksetzen
              </Button>
            </div>
          </form>
        </Column>
      </Container>
    </Section>
  );
};

export default ProductEditorPage;
