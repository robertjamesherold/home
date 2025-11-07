import type { ProductType } from '@/types';



const productsData: ProductType[] = [
  {
    id: '1',
    name: 'Premium Cotton T-Shirt',
    price: 49.99,
    originalPrice: 69.99,
    description:
      'Luxuriöses T-Shirt aus 100% Bio-Baumwolle. Perfekt für jeden Anlass mit zeitlosem Design.',
    category: 'Clothing',

    rating: 4.8,
    reviews: 124,
    inStock: true,
    tags: ['new', 'sale'],
  },
  {
    id: '2',
    name: 'Luxury  Watch',
    price: 299.99,
    originalPrice: 449.99,
    description:
      'Elegante Armbanduhr mit Schweizer Uhrwerk und Saphirglas. Wasserdicht bis 50m.',
    category: 'Accessories',

    rating: 4.9,
    reviews: 87,
    inStock: true,
    tags: ['sale'],
  },
  {
    id: '3',
    name: 'Designer Sunglasses',
    price: 159.99,
    originalPrice: 279.99,

    description:
      'Polarisierte Designer-Sonnenbrille mit UV400-Schutz. Modernes Design trifft auf Funktionalität.',
    category: 'Accessories',

    rating: 4.7,
    reviews: 156,
    inStock: true,
    tags: ['new'],
  },
  {
    id: '4',
    name: 'Leather Crossbody Bag',
    price: 199.99,
    originalPrice: 279.99,
    description:
      'Handgefertigte Ledertasche aus italienischem Leder. Zeitloses Design mit praktischen Fächern.',
    category: 'Bags',

    rating: 4.6,
    reviews: 203,
    inStock: true,
    tags: ['sale'],
  },
  {
    id: '5',
    name: 'Running Shoes',
    price: 129.99,
    originalPrice: 279.99,
    description:
      'Hochwertige Laufschuhe mit optimaler Dämpfung und Atmungsaktivität. Ideal für lange Strecken.',
    category: 'Shoes',
    rating: 4.8,
    reviews: 342,
    inStock: true,
    tags: ['new'],
  },
  {
    id: '6',
    name: 'Wireless Headphones',
    price: 249.99,
    originalPrice: 329.99,
    description:
      'Premium Kopfhörer mit aktiver Geräuschunterdrückung. Bis zu 30 Stunden Akkulaufzeit.',
    category: 'Electronics',

    rating: 4.9,
    reviews: 521,
    inStock: true,
    tags: ['sale', 'popular'],
  },
  {
    id: '7',
    name: 'Minimal Backpack',
    price: 89.99,
    description:
      'Minimalistischer Rucksack mit Laptop-Fach. Perfekt für den Alltag und auf Reisen.',
    category: 'Bags',

    rating: 4.5,
    reviews: 178,
    inStock: true,
    tags: [],
  },
  {
    id: '8',
    name: 'Smart Watch Pro',
    price: 399.99,
    originalPrice: 279.99,

    description:
      'Smartwatch mit Fitness-Tracking, GPS und Herzfrequenzmessung. Kompatibel mit iOS und Android.',
    category: 'Electronics',

    rating: 4.7,
    reviews: 289,
    inStock: true,
    tags: ['new', 'popular'],
  },
];

export default productsData;