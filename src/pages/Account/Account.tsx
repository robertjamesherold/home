import { ShieldCheck, Truck } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, Button, Badge, Separator } from '@ui/.'
import { Column } from '@/layout'

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
]

const preferences = [
  {
    label: 'Newsletter',
    value: 'Wöchentlich',
  },
  {
    label: 'Lieblingskategorie',
    value: 'Minimal Street',
  },
]

const AccountPage: React.FC = () =>
{
  return (
    <section className="container mx-auto px-4 py-10">
      <div className="mb-10 flex flex-col gap-2">
        <p className="text-xs uppercase tracking-[0.3em] text-gray-400">Konto</p>
        <h1 className="text-3xl font-semibold text-gray-900">Übersicht</h1>
        <p className="text-gray-500">
          Behalten Sie Bestellungen, Daten und Favoriten im minimalistischen Cockpit im Blick.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[2fr,1fr]">
        <Card className="bg-white shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-lg">Persönliche Daten</CardTitle>
              <p className="text-sm text-gray-500">Schnell editierbar, sicher verschlüsselt.</p>
            </div>
            <Button variant="outline">Bearbeiten</Button>
          </CardHeader>
          <CardContent className="grid gap-6 sm:grid-cols-2">
            <div>
              <p className="text-xs text-gray-400">Name</p>
              <p className="text-base font-medium text-gray-900">Alex Schneider</p>
            </div>
            <div>
              <p className="text-xs text-gray-400">E-Mail</p>
              <p className="text-base font-medium text-gray-900">alex@example.com</p>
            </div>
            <div>
              <p className="text-xs text-gray-400">Telefon</p>
              <p className="text-base font-medium text-gray-900">+49 171 2345678</p>
            </div>
            <div>
              <p className="text-xs text-gray-400">Adresse</p>
              <p className="text-base font-medium text-gray-900">Rosenthaler Str. 75, Berlin</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <ShieldCheck className="h-5 w-5 text-gray-900" />
              Mitgliedschaft
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-2xl bg-gray-50 px-4 py-3 text-sm text-gray-600">
              Luxe+ garantiert kostenlosen Versand, 30 Tage Rückgabe und Early Access.
            </div>
            <Column className="gap-4 space-y-1">
              <Button className="w-full">Vorteile ansehen</Button>
              <Button variant="outline" className="w-full">
                Mitgliedschaft verwalten
              </Button>
            </Column>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr,0.8fr]">
        <Card className="bg-white shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg">Bestellungen</CardTitle>
            <Button variant="outline" size="sm">
              Verlauf ansehen
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            { upcomingDeliveries.map( ( delivery ) => (
              <div key={ delivery.id } className="rounded-2xl border border-gray-100 p-4">
                <div className="flex flex-wrap items-center gap-3">
                  <Badge className="rounded-full bg-gray-900 text-white">{ delivery.id }</Badge>
                  <span className="text-sm text-gray-500">{ delivery.items } Artikel</span>
                </div>
                <div className="mt-3 flex flex-wrap items-center gap-3">
                  <span className="text-sm font-medium text-gray-900">{ delivery.status }</span>
                  <Separator orientation="vertical" className="hidden h-4 sm:block" />
                  <span className="text-sm text-gray-500">{ delivery.eta }</span>
                </div>
              </div>
            ) ) }
          </CardContent>
        </Card>

        <Card className="bg-white shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg">Präferenzen</CardTitle>
            <Truck className="h-5 w-5 text-gray-900" />
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-gray-600">
            { preferences.map( ( preference ) => (
              <div
                key={ preference.label }
                className="flex items-center justify-between rounded-2xl border border-gray-100 px-4 py-3"
              >
                <span className="text-gray-400">{ preference.label }</span>
                <span className="font-medium text-gray-900">{ preference.value }</span>
              </div>
            ) ) }
            <Button variant="outline" className="w-full">
              Einstellungen anpassen
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default AccountPage
