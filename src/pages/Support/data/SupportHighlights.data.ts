import { Headphones, ShieldCheck, PhoneCall } from 'lucide-react';

type SupportHighlightsProps = {
  title: string;
  description: string;
  meta: string;
  icon: LucideIcon;
};

const SupportHighlightsData: SupportHighlightsProps[] = [
  {
    title: 'Concierge Service',
    description:
      'Zertifizierte Style Guides begleiten Sie durch Bestellungen, Retouren und Anpassungen in Echtzeit.',
    meta: 'Ø Antwortzeit 2 Min.',
    icon: Headphones,
  },
  {
    title: 'Premium Schutz',
    description:
      'Wir kümmern uns um Reparaturen, Garantieanfragen und Ersatzlieferungen innerhalb von 24 Stunden.',
    meta: '24 Monate Schutz',
    icon: ShieldCheck,
  },
  {
    title: 'Rückruf nach Wahl',
    description:
      'Planen Sie individuelle Rückrufe und sprechen Sie direkt mit einem Senior Specialist für komplexe Anfragen.',
    meta: 'alle 15 Min.',
    icon: PhoneCall,
  },
];

export default SupportHighlightsData;