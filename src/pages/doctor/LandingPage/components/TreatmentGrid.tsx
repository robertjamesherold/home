import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Star, Clock } from 'lucide-react';

const treatments = [
  {
    id: 1,
    title: 'Akupunktur-Paket',
    description: '10 Sitzungen inkl. Erstgespräch',
    price: '€ 450',
    originalPrice: '€ 580',
    duration: '60 Min.',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1529088512498-64b87b354b8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY3VwdW5jdHVyZSUyMHRyZWF0bWVudHxlbnwxfHx8fDE3NjIxMDM5NTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    badge: 'Beliebt'
  },
  {
    id: 2,
    title: 'Kräuter-Therapie',
    description: 'Individuelle Kräutermischung für 4 Wochen',
    price: '€ 180',
    originalPrice: '€ 230',
    duration: '30 Min.',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1758614037334-ed50e9ee9e2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwaGVhbGluZyUyMGhlcmJzfGVufDF8fHx8MTc2MjAzMzA1Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    badge: 'Neu'
  },
  {
    id: 3,
    title: 'Massage-Therapie',
    description: 'Therapeutische Ganzkörpermassage',
    price: '€ 85',
    originalPrice: '€ 110',
    duration: '90 Min.',
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1598901986949-f593ff2a31a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXNzYWdlJTIwdGhlcmFweXxlbnwxfHx8fDE3NjIwOTk2NTl8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 4,
    title: 'Meditations-Kurs',
    description: '8 Wochen Achtsamkeitstraining',
    price: '€ 220',
    originalPrice: '€ 280',
    duration: '45 Min.',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1695795910772-6336b0beba36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdGF0aW9uJTIwd2VsbmVzc3xlbnwxfHx8fDE3NjIwMTcwNzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    badge: 'Empfohlen'
  }
];

export function TreatmentGrid() {
  return (
    <section className="py-12 md:py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-slate-900 mb-4">
            Unsere Behandlungsangebote
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Wählen Sie aus unserem umfangreichen Angebot an naturheilkundlichen Behandlungen
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {treatments.map((treatment) => (
            <div
              key={treatment.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
             
                {treatment.badge && (
                  <Badge className="absolute top-3 left-3 bg-green-600">
                    {treatment.badge}
                  </Badge>
                )}
              </div>

              {/* Content */}
              <div className="p-5 space-y-3">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-slate-900">{treatment.rating}</span>
                  </div>
                  <div className="flex items-center gap-1 text-slate-600">
                    <Clock className="w-4 h-4" />
                    <span>{treatment.duration}</span>
                  </div>
                </div>

                <h3 className="text-slate-900">{treatment.title}</h3>
                
                <p className="text-slate-600 line-clamp-2">
                  {treatment.description}
                </p>

                <div className="flex items-baseline gap-2 pt-2">
                  <span className="text-green-600">{treatment.price}</span>
                  {treatment.originalPrice && (
                    <span className="text-slate-400 line-through">
                      {treatment.originalPrice}
                    </span>
                  )}
                </div>

                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Jetzt buchen
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Alle Behandlungen anzeigen
          </Button>
        </div>
      </div>
    </section>
  );
}
