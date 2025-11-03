import { Users, Heart, Award, Clock } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: '2000+',
    label: 'Zufriedene Patienten',
    description: 'Seit 2008'
  },
  {
    icon: Heart,
    value: '15+',
    label: 'Jahre Erfahrung',
    description: 'In der Naturheilkunde'
  },
  {
    icon: Award,
    value: '98%',
    label: 'Erfolgsrate',
    description: 'Bei chronischen Beschwerden'
  },
  {
    icon: Clock,
    value: '24/7',
    label: 'Notfall-Hotline',
    description: 'Für unsere Patienten'
  }
];

export function Statistics() {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-green-600 to-green-700 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-white mb-4">
            Ihre Gesundheit ist unsere Mission
          </h2>
          <p className="text-green-100 max-w-2xl mx-auto">
            Vertrauen Sie auf unsere langjährige Erfahrung und bewährte Behandlungsmethoden
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center p-6 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-full mb-4">
                  <Icon className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <div className="text-white mb-2">{stat.value}</div>
                <div className="text-white mb-1">{stat.label}</div>
                <p className="text-green-100">{stat.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
