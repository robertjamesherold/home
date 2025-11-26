import {
  Headphones,
  ShieldCheck,
  PhoneCall,
  type LucideIcon,
} from 'lucide-react';

type SupportHighlightsProps = {
  title: string;
  description: string;
  meta: string;
  icon: LucideIcon;
  badge: string;
};

const SupportHighlightsData: SupportHighlightsProps[] = [
  {
    title: 'Concierge Service',
    description:
      'Zertifizierte Style Guides begleiten Sie durch Bestellungen, Retouren und Anpassungen in Echtzeit.',
    meta: 'Ø Antwortzeit 2 Min.',
    icon: Headphones,
    badge: 'bg-purple-200 text-purple-900',
  },
  {
    title: 'Premium Schutz',
    description:
      'Wir kümmern uns um Reparaturen, Garantieanfragen und Ersatzlieferungen innerhalb von 24 Stunden.',
    meta: '24 Monate Schutz',
    icon: ShieldCheck,
    badge: 'bg-amber-200 text-amber-800',
  },
  {
    title: 'Rückruf nach Wahl',
    description:
      'Planen Sie individuelle Rückrufe und sprechen Sie direkt mit einem Senior Specialist für komplexe Anfragen.',
    meta: 'alle 15 Min.',
    icon: PhoneCall,
    badge: 'bg-lime-200 text-lime-800',
  },
];

export default SupportHighlightsData;
