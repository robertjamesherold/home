import { MessageSquare, PhoneCall, Mail } from 'lucide-react';

type SupportChannelsProps = {
  title: string;
  detail: string;
  description: string;
  hours: string;
  icon: LucideIcon;
};

const SupportChannelsData: SupportChannelsProps[] = [
  {
    title: 'Live-Chat',
    detail: 'Antwort in 2 Minuten',
    description: 'Direkt im Browser oder in der LUXE App verfügbar.',
    hours: '24/7',
    icon: MessageSquare,
  },
  {
    title: 'Telefon',
    detail: '+49 30 8145 2200',
    description: 'Persönlicher Concierge werktags von 08:00 - 18:00 Uhr.',
    hours: 'Mo-Fr',
    icon: PhoneCall,
  },
  {
    title: 'E-Mail',
    detail: 'support@luxe.plus',
    description: 'Wir melden uns innerhalb eines Werktages zurück.',
    hours: '24/7 Eingang',
    icon: Mail,
  },
];

export default SupportChannelsData;