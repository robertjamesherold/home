import { Star } from 'lucide-react';
import { type ReactNode } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Card,
} from '@ui/.';

type SpecRow = {
  label: string;
  value: ReactNode | (() => ReactNode);
};

export function ProductDetails() {
  const rating = 4.3;
  const reviewCount = 3099;

  const articleData = [
    { label: 'Marke', value: "L'Oréal Men Expert" },
    { label: 'Hersteller', value: "L'Oréal Paris" },
    { label: 'Global Trade Identification Number', value: '03600523528738' },
    { label: 'ASIN', value: 'B075VX64ZP' },
    { label: 'Herkunftsland', value: 'Spanien' },
    {
      label: 'Kontaktinformationen des Herstellers',
      value: '14, Rue Royale FR-75008 Paris',
    },
  ];

  const dimensionsData = [
    { label: 'Flüssigkeitsvolumen', value: '75 Milliliter' },
    { label: 'Anzahl von Artikeln', value: '1' },
    { label: 'Anzahl von Einheiten', value: '75.0 Milliliter' },
    { label: 'Artikelvolumen', value: '75 Milliliter' },
  ];

  const additionalData = [
    { label: 'Material Typ frei', value: 'Ohne Silikone, ohne Parabene' },
  ];

  const articleRows: SpecRow[] = [
    ...articleData.map((item) => ({
      label: item.label,
      value: item.value,
    })),
    {
      label: 'Durchschnittliche Kundenbewertung',
      value: () => (
        <div className="flex flex-wrap items-center gap-2 text-sm text-foreground">
          <span className="font-semibold">{rating.toFixed(1)}</span>
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={`rating-star-${i}`}
                className={`h-4 w-4 ${
                  i < Math.floor(rating)
                    ? 'fill-yellow-400 text-yellow-400'
                    : i < rating
                      ? 'fill-yellow-400 text-yellow-400 opacity-50'
                      : 'fill-gray-200 text-gray-200'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">
            ({reviewCount.toLocaleString('de-DE')} Rezensionen)
          </span>
        </div>
      ),
    },
    {
      label: 'Amazon Bestseller-Rang',
      value: () => (
        <div className="space-y-1 text-sm text-foreground">
          <div>
            Nr. 1.591 in{' '}
            <span className="cursor-pointer text-blue-600 hover:underline">
              Kosmetik
            </span>
          </div>
          <div>
            Nr. 7 in{' '}
            <span className="cursor-pointer text-blue-600 hover:underline">
              Frisiercremes &amp; Haarwachs
            </span>
          </div>
        </div>
      ),
    },
  ];

  const dimensionRows: SpecRow[] = dimensionsData.map((item) => ({
    label: item.label,
    value: item.value,
  }));

  const additionalRows: SpecRow[] = additionalData.map((item) => ({
    label: item.label,
    value: item.value,
  }));

  return (
    <Card className="w-full">
      <Tabs defaultValue="article" className="@container">
        <TabsList className="flex w-full grid-cols-4 rounded-b-none border-b border-slate-900 bg-slate-200">
          <TabsTrigger
            value="article"
            className="rounded-xl rounded-b-none rounded-r-none"
          >
            Artikelangaben
          </TabsTrigger>
          <TabsTrigger value="dimensions" className="rounded-none">
            Maße
          </TabsTrigger>
          <TabsTrigger
            value="additional"
            className="rounded-xl rounded-b-none rounded-l-none"
          >
            Zusätzliche Angaben
          </TabsTrigger>
        </TabsList>

        <TabsContent value="article" className="mt-6">
          <SpecsContent rows={articleRows} />
        </TabsContent>

        <TabsContent value="dimensions" className="mt-6">
          <SpecsContent rows={dimensionRows} />
        </TabsContent>

        <TabsContent value="additional" className="mt-6">
          <SpecsContent rows={additionalRows} />
        </TabsContent>
      </Tabs>
    </Card>
  );
}

const renderRowValue = (row: SpecRow) =>
  typeof row.value === 'function' ? row.value() : row.value;

const SpecsContent = ({ rows }: { rows: SpecRow[] }) => (
  <div className="space-y-4">
    <div className="hidden md:block">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[320px] whitespace-nowrap text-muted-foreground">
              Eigenschaft
            </TableHead>
            <TableHead className="text-muted-foreground">Wert</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.label}>
              <TableCell className="whitespace-normal align-top text-sm text-muted-foreground">
                {row.label}
              </TableCell>
              <TableCell className="whitespace-normal align-top text-sm text-foreground">
                {renderRowValue(row)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
    <div className="grid gap-3 md:hidden">
      {rows.map((row) => (
        <div
          key={`${row.label}-mobile`}
          className="rounded-xl border border-border/70 bg-background/80 p-4 shadow-sm"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            {row.label}
          </p>
          <div className="mt-2 text-sm text-foreground">{renderRowValue(row)}</div>
        </div>
      ))}
    </div>
  </div>
);
