const FooterLinksData = [
  {
    column: 1,
    category: 'Adresse',
    items: [
      {
        name: 'Musterstraße 123',
        link: '',
        isLink: false,
      },
      { name:  '12345 Musterstadt', link: 'tel:+490123456789', isLink: true },
    ],
  },
  {
    column: 1,
    category: 'Kontakt',
    items: [
      { name: '+49 (0) 123 456 789', link: 'tel:+490123456789', isLink: true },
      {
        name: 'info@heilpraxis.de',
        link: 'mailto:info@heilpraxis.de',
        isLink: true,
      },
    ],
  },
 
];

export default FooterLinksData;