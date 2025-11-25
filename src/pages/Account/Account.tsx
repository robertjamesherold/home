import { Contact, Package, Settings, ShieldCheck } from 'lucide-react';
import {
  Card,
  CardContent,
  CardHeader,
  Button,
  Badge,
  Separator,
} from '@ui/.';
import { Column, Header, Row } from '@/layout';
import { TextParagraph, Title } from '@/typography';

const upcomingDeliveries = [
  {
    id: 'LX-4821',
    status: 'Unterwegs',
    eta: 'Voraussichtlich 12. Mai',
    items: 2,
  },
  {
    id: 'LX-4797',
    status: 'Verpackt',
    eta: 'Voraussichtlich 9. Mai',
    items: 1,
  },
];

const preferences = [
  {
    label: 'Persönliche Daten',
  },
  {
    label: 'Sicherheit',
  },
  {
    label: 'Benachrichtigungen',
  },
];

const accountData = {
  id: 'Name',
  name: 'Robert James Herold',
  letter: 'Mail',
  email: 'i@robertjamesherold.me',
  call: 'Telefon',
  phone: '+49 151 61660444',
  kontakt: 'Adresse',
  address: 'Im Kammerfest 23',
  postalCode: '63628 Bad Soden-Salmünster',
};

const AccountPage: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-10">
      <div className="mb-10 flex flex-col gap-2">
        <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
          Konto
        </p>
        <h1 className="text-3xl font-semibold text-gray-900">Übersicht</h1>
        <p className="text-gray-500">
          Behalten Sie Bestellungen, Daten und Favoriten im minimalistischen
          Cockpit im Blick.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="bg-white shadow-sm">
          <CardHeader className="mb-2 flex h-20 flex-row items-center justify-between">
            <Header>
              <Title
                level={5}
                weight="semibold"
                className="flex flex-row items-center gap-1"
              >
                <Contact className="h-5 w-5 text-gray-900" />
                Persönliche Daten
              </Title>
              <TextParagraph
                sm
                className="text-gray-400"
                text="Ihre Profildaten."
              />
            </Header>
          </CardHeader>
          <hr className="mx-6 pb-4" />
          <CardContent className="grid gap-6 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            <Column>
              <TextParagraph
                xs
                className="font-medium text-gray-400"
                text={accountData.id}
              />
              <TextParagraph
                className="font-medium text-gray-900"
                text={accountData.name}
              />
            </Column>
            <Column>
              <TextParagraph
                xs
                className="font-medium text-gray-400"
                text={accountData.letter}
              />
              <TextParagraph
                className="font-medium text-gray-900"
                text={accountData.email}
              />
            </Column>

            <Column>
              <TextParagraph
                xs
                className="font-medium text-gray-400"
                text={accountData.call}
              />
              <TextParagraph
                className="font-medium text-gray-900"
                text={accountData.phone}
              />
            </Column>
            <Column>
              <TextParagraph
                xs
                className="font-medium text-gray-400"
                text={accountData.kontakt}
              />
              <TextParagraph
                className="font-medium text-gray-900"
                text={accountData.address}
              />
              <TextParagraph
                className="font-medium text-gray-900"
                text={accountData.postalCode}
              />
            </Column>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-sm">
          <CardHeader className="mb-2 flex h-20 flex-row items-center justify-between">
            <Header>
              <Title
                level={5}
                weight="semibold"
                className="flex flex-row items-center gap-1"
              >
                <ShieldCheck className="h-5 w-5 text-gray-900" />
                Mitgliedschaft
              </Title>
              <TextParagraph
                sm
                className="text-gray-400"
                text="Verwalten sie ihre Mitgliedschaft."
              />
            </Header>
          </CardHeader>
          <hr className="mx-6 pb-4" />

          <CardContent className="space-y-4">
            <Row className="rounded-lg bg-emerald-100 px-4 py-3 text-sm text-emerald-700">
              Du hast das Professional-Abo
            </Row>
            <Column className="space-y-1">
              <TextParagraph sm className="font-bold text-gray-600">
                Nächste monatliche Rechnung
              </TextParagraph>
              <Title
                level={5}
                weight="bold"
                className="font-bold text-gray-600"
                text="12,99 €"
              />
            </Column>
            <div className="rounded-lg bg-gray-50 px-4 py-3 text-sm text-gray-600">
              Luxe+ garantiert kostenlosen Versand, 30 Tage Rückgabe und Early
              Access.
            </div>
            <Column className="gap-4 space-y-1">
              <Button variant='secondary' className="w-full">Vorteile ansehen</Button>
              <Button variant="outline" className="w-full">
                Mitgliedschaft verwalten
              </Button>
            </Column>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <Card className="bg-white shadow-sm">
          <CardHeader className="mb-2 flex h-20 flex-row items-center justify-between">
            <Header>
              <Title
                level={5}
                weight="semibold"
                className="flex flex-row items-center gap-1"
              >
                <Package className="h-5 w-5 text-gray-900" />
                Bestellungen
              </Title>
              <TextParagraph
                sm
                className="text-gray-400"
                text="Sendungsstatus, Rücksendungen"
              />
            </Header>
          </CardHeader>
          <hr className="mx-6 pb-4" />
          <CardContent className="space-y-4">
            {upcomingDeliveries.map((delivery) => (
              <div
                key={delivery.id}
                className="rounded-2xl border border-gray-100 p-4"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <Badge className="rounded-full bg-gray-900 text-white">
                    {delivery.id}
                  </Badge>
                  <span className="text-sm text-gray-500">
                    {delivery.items} Artikel
                  </span>
                </div>
                <div className="mt-3 flex flex-wrap items-center gap-3">
                  <span className="text-sm font-medium text-gray-900">
                    {delivery.status}
                  </span>
                  <Separator
                    orientation="vertical"
                    className="hidden h-4 sm:block"
                  />
                  <span className="text-sm text-gray-500">{delivery.eta}</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="bg-white shadow-sm">
          <CardHeader className="mb-2 flex h-20 flex-row items-center justify-between">
            <Header>
              <Title
                level={5}
                weight="semibold"
                className="flex flex-row items-center gap-1"
              >
                <Settings className="h-5 w-5 text-gray-900" />
                Einstellungen
              </Title>
              <TextParagraph
                sm
                className="text-gray-400"
                text="Ändern Sie Ihre Einstellungen"
              />
            </Header>
          </CardHeader>
          <hr className="mx-6 pb-4" />
          <CardContent className="space-y-4 text-sm text-gray-600">
            {preferences.map((preference) => (
              <Card className="items-left flex flex-row justify-between rounded-lg border border-slate-400 bg-slate-400/30 px-4 py-2">
                <span className="text-gray-700">{preference.label}</span>
              </Card>
            ))}
            <Button variant="outline" className="w-full">
              Einstellungen anpassen
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AccountPage;
