import type { DetailDataType } from '../types/detail.types'
import { Truck, RefreshCw, Shield, CreditCard, Wallet, Smartphone, Headset, MessageCircle, Mail } from 'lucide-react';

const DetailData: DetailDataType[] = [
    {
        title: 'Versand & Garantie',
        content: [
            {
                Icon: Truck,
                text: 'Kostenloser Versand ab 50€',
            },
            {
                Icon: RefreshCw,
                text: '30 Tage Rückgaberecht',
            },
            {
                Icon: Shield,
                text: '2 Jahre Garantie auf alle Produkte',
            },
        ],
    },
    {
        title: 'Zahlungsmethoden',
        content: [
            {
                Icon: CreditCard,
                text: 'Kreditkarte (Visa, MasterCard, American Express)',
            },
            {
                Icon: Wallet,
                text: 'PayPal',
            },
            {
                Icon: Smartphone,
                text: 'Apple Pay',
            },
        ],
    },
    {
        title: 'Kundensupport',
        content: [
            {
                Icon: Headset,
                text: '24/7 Kundensupport',
            },
            {
                Icon: MessageCircle,
                text: 'Live-Chat Unterstützung',
            },
            {
                Icon: Mail,
                text: 'E-Mail Support innerhalb von 24 Stunden',
            },
        ],
    },
]

export default DetailData;



