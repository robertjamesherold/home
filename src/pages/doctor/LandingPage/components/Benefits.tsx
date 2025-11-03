import { Shield, Leaf, Heart, Clock, Award, Users } from 'lucide-react';

const benefits = [
  {
    icon: Shield,
    title: 'Zertifizierte Qualität',
    description: 'Alle Behandlungen nach höchsten medizinischen Standards',
  },
  {
    icon: Leaf,
    title: '100% Natürlich',
    description: 'Ausschließlich natürliche Heilmittel ohne Chemie',
  },
  {
    icon: Heart,
    title: 'Ganzheitlicher Ansatz',
    description: 'Körper, Geist und Seele im Einklang',
  },
  {
    icon: Clock,
    title: 'Flexible Termine',
    description: 'Auch abends und am Wochenende verfügbar',
  },
  {
    icon: Award,
    title: '15 Jahre Erfahrung',
    description: 'Langjährige Expertise in der Naturheilkunde',
  },
  {
    icon: Users,
    title: 'Persönliche Betreuung',
    description: 'Individuelle Behandlungspläne für jeden Patienten',
  },
];

export function Benefits() {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-slate-900">
            Warum Sie uns vertrauen können
          </h2>
          <p className="mx-auto max-w-2xl text-slate-600">
            Ihre Gesundheit liegt uns am Herzen. Deshalb bieten wir Ihnen
            erstklassige naturheilkundliche Behandlungen mit persönlicher
            Betreuung
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center rounded-xl p-6 text-center transition-colors duration-300 hover:bg-slate-50"
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <Icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="mb-2 text-slate-900">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
