import { Button } from '../ui/button';
import { Badge } from '../ui/badge';

export function FeatureSection() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image */}
          <div className="relative order-2 md:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            
              
              {/* Floating card */}
              <div className="absolute bottom-4 right-4 bg-white rounded-lg shadow-xl p-4 max-w-[200px]">
              
                <h4 className="text-slate-900 mb-1">Kräutertherapie</h4>
                <p className="text-slate-600">Individuelle Mischungen</p>
                <Button className="w-full mt-2 bg-green-600 hover:bg-green-700" size="sm">
                  Details
                </Button>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 order-1 md:order-2">
            <Badge className="bg-green-600">Unsere Philosophie</Badge>
            
            <h2 className="text-slate-900">
              Ganzheitliche Behandlung für nachhaltige Gesundheit
            </h2>
            
            <p className="text-slate-600">
              Wir betrachten den Menschen als Einheit von Körper, Geist und Seele. 
              Unsere Behandlungsansätze zielen darauf ab, die Selbstheilungskräfte zu aktivieren 
              und das natürliche Gleichgewicht wiederherzustellen.
            </p>

            <div className="space-y-4">
              {[
                {
                  title: 'Individuelle Behandlung',
                  description: 'Jeder Patient erhält einen persönlichen Therapieplan'
                },
                {
                  title: 'Natürliche Methoden',
                  description: 'Ohne Nebenwirkungen und nachhaltig wirksam'
                },
                {
                  title: 'Langfristige Betreuung',
                  description: 'Wir begleiten Sie auf Ihrem Weg zur Gesundheit'
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mt-1">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-slate-900 mb-1">{item.title}</h4>
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
