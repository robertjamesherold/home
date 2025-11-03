import { Shield, Leaf, Heart, Clock, Award, Users } from 'lucide-react';

const benefits = [
  {
    icon: Shield,
    title: 'Zertifizierte Qualität',
    description: 'Alle Behandlungen nach höchsten medizinischen Standards'
  },
  {
    icon: Leaf,
    title: '100% Natürlich',
    description: 'Ausschließlich natürliche Heilmittel ohne Chemie'
  },
  {
    icon: Heart,
    title: 'Ganzheitlicher Ansatz',
    description: 'Körper, Geist und Seele im Einklang'
  },
  {
    icon: Clock,
    title: 'Flexible Termine',
    description: 'Auch abends und am Wochenende verfügbar'
  },
  {
    icon: Award,
    title: '15 Jahre Erfahrung',
    description: 'Langjährige Expertise in der Naturheilkunde'
  },
  {
    icon: Users,
    title: 'Persönliche Betreuung',
    description: 'Individuelle Behandlungspläne für jeden Patienten'
  }
];

export function Benefits() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-slate-900 mb-4">
            Warum Sie uns vertrauen können
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Ihre Gesundheit liegt uns am Herzen. Deshalb bieten wir Ihnen erstklassige 
            naturheilkundliche Behandlungen mit persönlicher Betreuung
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-xl hover:bg-slate-50 transition-colors duration-300"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
