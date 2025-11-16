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
  default: 'border-yellow-400 bg-yellow-400/10  ',
  secondary: 'border-gray-900 bg-gray-900/10',
  destructive: 'border-red-600 bg-red-600/10 ',
  complete: 'border-lime-700 bg-lime-700/10 ',
  assistance: 'border-teal-700 bg-teal-700/10  ',
  outline: 'bg-gray-300/10  border-gray-300',
  danger: 'border-destructive bg-destructive-700/10',
  success: 'border-green-700 bg-green-700/10 ',
  info: 'border-sky-700 bg-sky-700/10 ',
  service: 'border-purple-700 bg-purple-700/10 ',
  enhancement: 'border-indigo-700 bg-indigo-700/10 ',
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
      badge: 'border-transparent bg-indigo-200 text-indigo-700 ',
      border: border.enhancement,
    },
    {
      title: 'Telefon',
      detail: '+49 30 8145 2200',
      description: 'Persönlicher Concierge werktags von 08:00 - 18:00 Uhr.',
      hours: 'Mo-Fr',
      icon: PhoneCall,
      badge: 'border-transparent bg-lime-200 text-lime-700 ',
      border: border.complete,
    },
    {
      title: 'E-Mail',
      detail: 'support@luxe.plus',
      description: 'Wir melden uns innerhalb eines Werktages zurück.',
      hours: '24/7 Eingang',
      icon: Mail,
      badge: 'border-transparent bg-blue-200 text-blue-700 ',
      border: border.info,
    },
    {
      title: 'Studio Besuch',
      detail: 'LUXE Support Studio Berlin',
      description:
        'Termine nach Vereinbarung – persönliche Fittings, Reparatur-Check-ins und Same-Day Abholung.',
      hours: 'Nach Vereinbarung',
      icon: MapPin,
      badge: 'border-transparent bg-purple-200 text-purple-700 ',
      border: border.service,
    },
  ],
};

export default SupportChannelsData;
