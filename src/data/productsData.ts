import type { ProductType } from '@/types';

const productsData: ProductType[] = [
  {
    id: '1',
    name: 'Aurora Stehlampe',
    price: 179.99,
    originalPrice: 219.99,
    category: 'Beleuchtung',
    description:
      'Elegante Stehlampe mit drehbarem Kopf und dimmbarer LED-Technologie für warmes Ambiente.',
    rating: { score: 4.7, reviews: 124 },
    inStock: true,
    tags: ['new', 'sale'],
    link: 'aurora-stehlampe',
    image:
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1505691884115-22d6735ed2c8?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=600&q=80',
    ],
    details: {
      title: 'Produktdetails',
      tab: [
        {
          tabtitle: 'Eigenschaften',
          tabcontent: {
            Eigenschaften: ['Material: Aluminium', 'Dimmbar', 'Farbtemperatur: 2700K'],
            Wert: ['Kabellänge: 2 m', 'Gewicht: 3,2 kg', 'Leistung: 12 W'],
          },
        },
        {
          tabtitle: 'Lieferumfang',
          tabcontent: {
            Eigenschaften: ['Aurora Stehlampe', 'LED Leuchtmittel', 'Bedienungsanleitung'],
          },
        },
      ],
    },
  },
  {
    id: '2',
    name: 'Nordic Sofa Cloud',
    price: 1299,
    originalPrice: 1499,
    category: 'Wohnzimmer',
    description:
      'Modulares Sofa mit abnehmbaren Bezügen und ergonomischer Polsterung – ideal für große Wohnzimmer.',
    rating: { score: 4.8, reviews: 312 },
    inStock: true,
    tags: ['bestseller'],
    link: 'nordic-sofa-cloud',
    image:
      'https://images.unsplash.com/photo-1549187774-b4e9b0445b41?auto=format&fit=crop&w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1549187774-b4e9b0445b41?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=600&q=80',
    ],
    details: {
      title: 'Produktdetails',
      tab: [
        {
          tabtitle: 'Material',
          tabcontent: {
            Eigenschaften: ['Bezug: Leinen', 'Gestell: Massivholz', 'Füße: Stahl'],
          },
        },
        {
          tabtitle: 'Abmessungen',
          tabcontent: {
            Eigenschaften: ['Breite: 260 cm', 'Tiefe: 100 cm', 'Sitzhöhe: 42 cm'],
          },
        },
      ],
    },
  },
  {
    id: '3',
    name: 'Borealis Kaffeetisch',
    price: 349,
    category: 'Möbel',
    description:
      'Handgefertigter Couchtisch aus nachhaltigem Eichenholz mit integrierter Aufbewahrung.',
    rating: { score: 4.6, reviews: 98 },
    inStock: true,
    tags: ['new'],
    link: 'borealis-kaffeetisch',
    image:
      'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80',
    ],
    details: {
      title: 'Produktdetails',
      tab: [
        {
          tabtitle: 'Besonderheiten',
          tabcontent: {
            Eigenschaften: ['Nachhaltige Produktion', 'Matt lackierte Oberfläche', 'Soft-Close Schublade'],
          },
        },
      ],
    },
  },
  {
    id: '4',
    name: 'Skandi Essstuhl',
    price: 159.99,
    category: 'Esszimmer',
    description: 'Set aus zwei ergonomischen Essstühlen mit atmungsaktivem Stoffbezug.',
    rating: { score: 4.4, reviews: 205 },
    inStock: true,
    tags: ['sale'],
    link: 'skandi-essstuhl',
    image:
      'https://images.unsplash.com/photo-1505691723483-36a5ac3be353?auto=format&fit=crop&w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=600&q=80',
    ],
    details: {
      title: 'Produktdetails',
      tab: [
        {
          tabtitle: 'Material',
          tabcontent: {
            Eigenschaften: ['Stoff: Polyester', 'Polsterung: Formschaum', 'Gestell: Buchenholz'],
          },
        },
      ],
    },
  },
  {
    id: '5',
    name: 'Atlas Bücherregal',
    price: 499,
    category: 'Arbeitszimmer',
    description:
      'Flexibles Regalsystem mit verstellbaren Einlegeböden und integrierter Kabeldurchführung.',
    rating: { score: 4.5, reviews: 87 },
    inStock: false,
    tags: ['limited'],
    link: 'atlas-buecherregal',
    image:
      'https://images.unsplash.com/photo-1455792244736-3ed96c3d7f96?auto=format&fit=crop&w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1455894127589-22f75500213a?auto=format&fit=crop&w=600&q=80',
    ],
    details: {
      title: 'Produktdetails',
      tab: [
        {
          tabtitle: 'Konfiguration',
          tabcontent: {
            Eigenschaften: ['5 Einlegeböden', 'Integrierter Kabelkanal', 'Wandbefestigung inklusive'],
          },
        },
      ],
    },
  },
  {
    id: '6',
    name: 'Velvet Loungesessel',
    price: 399,
    category: 'Wohnzimmer',
    description: 'Komfortabler Loungesessel mit Samtbezug und drehbarem Metallfuß.',
    rating: { score: 4.9, reviews: 56 },
    inStock: true,
    tags: ['new', 'bestseller'],
    link: 'velvet-loungesessel',
    image:
      'https://images.unsplash.com/photo-1549187774-b4e9b0445b41?auto=format&fit=crop&w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=600&q=80',
    ],
    details: {
      title: 'Produktdetails',
      tab: [
        {
          tabtitle: 'Komfort',
          tabcontent: {
            Eigenschaften: ['360° Drehmechanismus', 'Extra tiefe Sitzfläche', 'Abnehmbares Kissen'],
          },
        },
      ],
    },
  },
  {
    id: '7',
    name: 'Lumen Tischleuchte',
    price: 89.99,
    category: 'Beleuchtung',
    description: 'Minimalistische LED-Tischleuchte mit Touch-Dimmer und USB-C-Ladeanschluss.',
    rating: { score: 4.3, reviews: 142 },
    inStock: true,
    tags: ['gift'],
    link: 'lumen-tischleuchte',
    image:
      'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=600&q=80',
    ],
    details: {
      title: 'Produktdetails',
      tab: [
        {
          tabtitle: 'Technik',
          tabcontent: {
            Eigenschaften: ['3 Helligkeitsstufen', 'USB-C Ausgang', 'Energieeffizienzklasse A+++'],
          },
        },
      ],
    },
  },
  {
    id: '8',
    name: 'Meridian Bettwäsche',
    price: 129.5,
    category: 'Schlafzimmer',
    description: 'Premium Bettwäsche-Set aus 100 % Bio-Baumwolle mit Satinstich-Verarbeitung.',
    rating: { score: 4.2, reviews: 64 },
    inStock: true,
    tags: ['eco'],
    link: 'meridian-bettwaesche',
    image:
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=600&q=80',
    ],
    details: {
      title: 'Produktdetails',
      tab: [
        {
          tabtitle: 'Pflege',
          tabcontent: {
            Eigenschaften: ['Waschbar bei 60 °C', 'Trocknergeeignet', 'OEKO-TEX Standard 100'],
          },
        },
      ],
    },
  },
];

export default productsData;
