import { Users, Heart, Award, Clock } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: '2000+',
    label: 'Zufriedene Patienten',
    description: 'Seit 2008',
  },
  {
    icon: Heart,
    value: '15+',
    label: 'Jahre Erfahrung',
    description: 'In der Naturheilkunde',
  },
  {
    icon: Award,
    value: '98%',
    label: 'Erfolgsrate',
    description: 'Bei chronischen Beschwerden',
  },
  {
    icon: Clock,
    value: '24/7',
    label: 'Notfall-Hotline',
    description: 'Für unsere Patienten',
  },
];

export function Statistics() {
  return (
    <section className="bg-gradient-to-br from-green-600 to-green-700 py-12 text-white md:py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-white">
            Ihre Gesundheit ist unsere Mission
          </h2>
          <p className="mx-auto max-w-2xl text-green-100">
            Vertrauen Sie auf unsere langjährige Erfahrung und bewährte
            Behandlungsmethoden
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 md:gap-8 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="rounded-lg bg-white/10 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/20 md:h-16 md:w-16">
                  <Icon className="h-6 w-6 md:h-8 md:w-8" />
                </div>
                <div className="mb-2 text-white">{stat.value}</div>
                <div className="mb-1 text-white">{stat.label}</div>
                <p className="text-green-100">{stat.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
