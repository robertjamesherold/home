import { Truck, RefreshCw, Shield } from 'lucide-react';
import type { FeaturesType } from '@/pages/Homepage/types';

const featuresData: FeaturesType = {
  data: [
    {
      icon: Truck,
      title: 'Kostenloser Versand',
      text: 'Ab 50€ Bestellwert',
    },
    {
      icon: RefreshCw,
      title: '30 Tage Rückgabe',
      text: 'Kostenlose Rücksendung',
    },
    {
      icon: Shield,
      title: 'Sichere Zahlung',
      text: 'SSL-verschlüsselt',
    },
  ],
};

export default featuresData;
