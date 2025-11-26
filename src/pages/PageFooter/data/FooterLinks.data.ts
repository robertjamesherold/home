type FooterLinkGroupType = {
  title: string;
  links: {
    label: string;
    to?: string;
  }[];
};

const FooterLinksData: FooterLinkGroupType[] = [
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
      { label: 'Datenschutz', to: '/datenschutz' },
      { label: 'AGB', to: '/agb' },
      { label: 'Impressum', to: '/impressum' },
    ],
  },
];

export default FooterLinksData;