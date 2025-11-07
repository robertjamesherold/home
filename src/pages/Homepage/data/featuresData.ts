import { Truck, RefreshCw, Shield } from 'lucide-react';
import type { FeaturesType } from '@/pages/Homepage/types';



const featuresData: FeaturesType = {
  data: [
    {
      Icon: Truck,
      title: 'Kostenloser Versand',
      text: 'Ab 50€ Bestellwert versandkostenfrei',
    },
    {
      Icon: RefreshCw,
      title: '30 Tage Rückgabe',
      text: 'Kostenlose Rücksendung innerhalb von 30 Tagen',
    },
    {
      Icon: Shield,
      title: 'Sichere Zahlung',
      text: 'SSL-verschlüsselt und sicher',
    },
  ],
}; 

export default featuresData;