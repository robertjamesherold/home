import type { PreviewMapping } from '../types' 

export const previewData:PreviewMapping = {
    data: [{
        isReversed: true,
        subtitle: 'Signature Stay',
        title: 'Villa Oliveto – Ihr Rückzugsort über dem Tal',
        paragraph: [
            'Eingebettet zwischen Olivenhainen empfängt Sie eine Architektur, die Ruhe und Weite atmet. Große Glasflächen öffnen das Innere zur Landschaft, während klare Linien und warme Materialien für zeitlose Eleganz sorgen.',
            'Ob für erholsame Wochen mit Familie oder inspirierende Aufenthalte mit Freunden – Villa Oliveto kombiniert Privatsphäre, Design und Naturerlebnis zu einem besonderen Gefühl von Zuhause.'
        ],
        button: {
            entry: '#anfrage',
            label: 'Hier ansehen',
            icon: '→'
        },
        image: 1
    },
    {
        isReversed: false,
        subtitle: 'Panorama & Genuss',
        title: 'Grenzenloser Blick, kulinarische Freiheit',
        paragraph: [
            "Der Infinity Pool legt sich wie ein rahmenloses Spiegelbild über die Hügellandschaft – hier werden goldene Sonnenuntergänge zur täglichen Routine.",
            "Direkt daneben lädt die überdachte Freiluft-Küche mit großzügigem Esstisch zu langen Abenden ein. Slow Food, lokale Weine und leises Zikadenrauschen – mehr braucht es nicht."
            ],
        button: {
            entry: '#potato',
            label: 'Mehr dazu',
            icon: '→'
        },
        image: 3
    }]
}