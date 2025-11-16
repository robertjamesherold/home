import type { FooterLinkGroupType } from '../types';



export const FooterLinksData: FooterLinkGroupType[] = [
  {
    title: 'Shop',
    links: [
      { label: 'Alle Produkte', to: '/products' },
      { label: 'Neuheiten', to: '/products' },
      { label: 'Sale', to: '/sale' },
    ],
  },
  {
    title: 'Service',
    links: [
      { label: 'Kontakt', to: 'mailto:hello@luxe.studio' },
      { label: 'Versand & Rückgabe', to: '/versand' },
      { label: 'Support', to: '/support' },
    ],
  },
  {
    title: 'Rechtliches',
    links: [
      { label: 'Datenschutz', to: '#' },
      { label: 'AGB', to: '#' },
      { label: 'Impressum', to: '#' },
    ],
  },
];

