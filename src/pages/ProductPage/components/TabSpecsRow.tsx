import { Star } from 'lucide-react';
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
  CardContent,
} from '@ui/.';

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
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[300px]">Eigenschaft</TableHead>
                <TableHead>Wert</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {articleData.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="align-top text-gray-600">
                    {item.label}
                  </TableCell>
                  <TableCell>{item.value}</TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell className="align-top text-gray-600">
                  Durchschnittliche Kundenbewertung
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <span>{rating}</span>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
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
                  </div>
                  <p className="mt-1 cursor-pointer text-sm text-blue-600 hover:underline">
                    ({reviewCount.toLocaleString('de-DE')} Rezensionen)
                  </p>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="align-top text-gray-600">
                  Amazon Bestseller-Rang
                </TableCell>
                <TableCell>
                  <div className="space-y-1">
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
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TabsContent>

        <TabsContent value="dimensions" className="mt-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[300px]">Eigenschaft</TableHead>
                <TableHead>Wert</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {dimensionsData.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="align-top text-gray-600">
                    {item.label}
                  </TableCell>
                  <TableCell>{item.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>

        <TabsContent value="additional" className="mt-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[300px]">Eigenschaft</TableHead>
                <TableHead>Wert</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {additionalData.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="align-top text-gray-600">
                    {item.label}
                  </TableCell>
                  <TableCell>{item.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>
      </Tabs>
    </Card>
  );
}
