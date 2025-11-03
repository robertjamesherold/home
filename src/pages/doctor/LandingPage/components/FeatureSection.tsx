import { Button } from '../ui/button';
import { Badge } from '../ui/badge';

export function FeatureSection() {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-8 md:grid-cols-2 lg:gap-12">
          {/* Image */}
          <div className="relative order-2 md:order-1">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              {/* Floating card */}
              <div className="absolute bottom-4 right-4 max-w-[200px] rounded-lg bg-white p-4 shadow-xl">
                <h4 className="mb-1 text-slate-900">Kräutertherapie</h4>
                <p className="text-slate-600">Individuelle Mischungen</p>
                <Button
                  className="mt-2 w-full bg-green-600 hover:bg-green-700"
                  size="sm"
                >
                  Details
                </Button>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 space-y-6 md:order-2">
            <Badge className="bg-green-600">Unsere Philosophie</Badge>

            <h2 className="text-slate-900">
              Ganzheitliche Behandlung für nachhaltige Gesundheit
            </h2>

            <p className="text-slate-600">
              Wir betrachten den Menschen als Einheit von Körper, Geist und
              Seele. Unsere Behandlungsansätze zielen darauf ab, die
              Selbstheilungskräfte zu aktivieren und das natürliche
              Gleichgewicht wiederherzustellen.
            </p>

            <div className="space-y-4">
              {[
                {
                  title: 'Individuelle Behandlung',
                  description:
                    'Jeder Patient erhält einen persönlichen Therapieplan',
                },
                {
                  title: 'Natürliche Methoden',
                  description: 'Ohne Nebenwirkungen und nachhaltig wirksam',
                },
                {
                  title: 'Langfristige Betreuung',
                  description: 'Wir begleiten Sie auf Ihrem Weg zur Gesundheit',
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-3">
                  <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                    ✓
                  </div>
                  <div>
                    <h4 className="mb-1 text-slate-900">{item.title}</h4>
                    <p className="text-slate-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button className="bg-green-600 hover:bg-green-700" size="lg">
              Beratungsgespräch vereinbaren
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
