import {
  MessageSquare,
  PhoneCall,
  Mail,
  MapPin,
  type LucideIcon,
} from 'lucide-react';

type SupportChannelsProps = {
  title: string;
  subtitle: string;
  data: {
    title: string;
    detail: string;
    description: string;
    hours: string;
    icon: LucideIcon;
    badge: string;
    border: string;
  }[];
};

const border: Record<string, string> = {
  default: 'border-yellow-400  ',
  secondary: 'border-gray-900',
  destructive: 'border-red-600 ',
  complete: 'border-green-600  ',
  assistance: 'border-teal-700   ',
  outline: ' border-gray-300',
  danger: 'border-destructive',
  success: 'border-green-700  ',
  info: 'border-secondary-500 ',
  service: 'border-purple-700',
  enhancement: 'border-orange-500',
};

const SupportChannelsData: SupportChannelsProps = {
  title: 'Kontaktwege & Studio',
  subtitle: 'Wählen Sie den Kanal, der am besten zu Ihrer Situation passt.',
  data: [
    {
      title: 'Live-Chat',
      detail: 'Antwort in 2 Minuten',
      description: 'Direkt im Browser oder in der LUXE App verfügbar.',
      hours: '24/7',
      icon: MessageSquare,
      badge: 'bg-primary-500 text-gray-200 ',
      border: border.info,
    },
    {
      title: 'Telefon',
      detail: '+49 30 8145 2200',
      description: 'Persönlicher Concierge werktags von 08:00 - 18:00 Uhr.',
      hours: 'Mo-Fr',
      icon: PhoneCall,
      badge: 'bg-primary-500 text-gray-200 ',
      border: border.info,
    },
    {
      title: 'E-Mail',
      detail: 'support@luxe.plus',
      description: 'Wir melden uns innerhalb eines Werktages zurück.',
      hours: '< 3hr',
      icon: Mail,
      badge: 'bg-primary-500 text-gray-200 ',
      border: border.info,
    },
    {
      title: 'Studio Besuch',
      detail: 'LUXE Support Studio Berlin',
      description:
        'Persönliche Fittings, Reparatur-Check-ins und Same-Day Abholung.',
      hours: 'Exklusiv',
      icon: MapPin,
      badge: 'bg-primary-500 text-gray-200 ',
      border: border.info,
    },
  ],
};

export default SupportChannelsData;
