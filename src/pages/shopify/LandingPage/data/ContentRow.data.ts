import type { ContentRow } from '../types';

const ContentRowData: ContentRow[] = [
  {
    id: 'continue-watching',
    title: 'Weiterschauen',
    subtitle: 'Setzen Sie Ihre Serien und Filme genau dort fort, wo Sie aufgehört haben.',
    variant: 'continue',
    items: [
      {
        id: 'expanse',
        title: 'The Expanse · S05 E04',
        subtitle: 'Noch 42 Minuten',
        progress: 0.65,
        image:
          'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1200&q=80',
      },
      {
        id: 'jack-ryan',
        title: 'Tom Clancy’s Jack Ryan · S02 E07',
        subtitle: 'Noch 18 Minuten',
        progress: 0.25,
        image:
          'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=1200&q=80',
      },
      {
        id: 'maradona',
        title: 'Maradona: Sueño Bendito · S01 E03',
        subtitle: 'Noch 9 Minuten',
        progress: 0.85,
        image:
          'https://images.unsplash.com/photo-1543342386-4a5de8304e0b?auto=format&fit=crop&w=1200&q=80',
      },
      {
        id: 'good-omens',
        title: 'Good Omens · S02 E02',
        subtitle: 'Noch 35 Minuten',
        progress: 0.52,
        image:
          'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=1200&q=80',
      },
      {
        id: 'bosch',
        title: 'Bosch · S06 E05',
        subtitle: 'Noch 21 Minuten',
        progress: 0.4,
        image:
          'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=80',
      },
    ],
  },
  {
    id: 'prime-originals',
    title: 'Prime Originals',
    subtitle: 'Exklusive Serien und Filme, nur mit Prime Video verfügbar.',
    items: [
      {
        id: 'night-sky',
        title: 'Night Sky',
        subtitle: 'Science-Fiction · Prime Original',
        tag: 'prime',
        image:
          'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1200&q=80',
      },
      {
        id: 'wheel-of-time',
        title: 'The Wheel of Time',
        subtitle: 'Fantasy · Prime Original',
        tag: 'prime',
        image:
          'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80',
      },
      {
        id: 'man-in-the-high-castle',
        title: 'The Man in the High Castle',
        subtitle: 'Drama · Prime Original',
        tag: 'prime',
        image:
          'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=80',
      },
      {
        id: 'the-boys',
        title: 'The Boys',
        subtitle: 'Action · Prime Original',
        tag: 'prime',
        image:
          'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
      },
      {
        id: 'mrs-maisel',
        title: 'The Marvelous Mrs. Maisel',
        subtitle: 'Komödie · Prime Original',
        tag: 'prime',
        image:
          'https://images.unsplash.com/photo-1520854221050-0f4caff449fb?auto=format&fit=crop&w=1200&q=80',
      },
      {
        id: 'invincible',
        title: 'Invincible',
        subtitle: 'Animation · Prime Original',
        tag: 'prime',
        image:
          'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=1200&q=80',
      },
    ],
  },
  {
    id: 'new-releases',
    title: 'Neu bei Prime',
    subtitle: 'Frisch hinzugefügt und jetzt verfügbar zum Streamen.',
    items: [
      {
        id: 'air',
        title: 'AIR',
        subtitle: 'Drama · Neu hinzufügen',
        tag: 'neu',
        image:
          'https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=1200&q=80',
      },
      {
        id: 'thirteen-lives',
        title: 'Thirteen Lives',
        subtitle: 'Drama · Jetzt verfügbar',
        tag: 'neu',
        image:
          'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80',
      },
      {
        id: 'samaritan',
        title: 'Samaritan',
        subtitle: 'Action · Sylvester Stallone',
        tag: 'neu',
        image:
          'https://images.unsplash.com/photo-1518895949257-7621c3c786d4?auto=format&fit=crop&w=1200&q=80',
      },
      {
        id: 'lost-city',
        title: 'The Lost City',
        subtitle: 'Abenteuer · Neu',
        tag: 'neu',
        image:
          'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
      },
      {
        id: 'house-of-gucci',
        title: 'House of Gucci',
        subtitle: 'Drama · Oscar-Nominierung',
        tag: 'neu',
        image:
          'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
      },
      {
        id: 'licorice-pizza',
        title: 'Licorice Pizza',
        subtitle: 'Komödie · Neu',
        tag: 'neu',
        image:
          'https://images.unsplash.com/photo-1520854221050-0f4caff449fb?auto=format&fit=crop&w=1200&q=80',
      },
    ],
  },
  {
    id: 'family',
    title: 'Für die ganze Familie',
    subtitle: 'Beliebte Highlights für Groß und Klein.',
    items: [
      {
        id: 'paddington',
        title: 'Paddington 2',
        subtitle: 'Familie · Charmant',
        tag: 'prime',
        image:
          'https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=1200&q=80',
      },
      {
        id: 'sonic',
        title: 'Sonic The Hedgehog 2',
        subtitle: 'Animation · Action',
        tag: 'prime',
        image:
          'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=1200&q=80',
      },
      {
        id: 'hotel-transylvania',
        title: 'Hotel Transsilvanien 4',
        subtitle: 'Animation · Abenteuer',
        tag: 'prime',
        image:
          'https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=1200&q=80',
      },
      {
        id: 'spirited-away',
        title: 'Chihiros Reise ins Zauberland',
        subtitle: 'Animation · Klassiker',
        tag: 'prime',
        image:
          'https://images.unsplash.com/photo-1581905764498-75ec41b77354?auto=format&fit=crop&w=1200&q=80',
      },
      {
        id: 'minions',
        title: 'Minions: Auf der Suche nach dem Miniboss',
        subtitle: 'Animation · Comedy',
        tag: 'prime',
        image:
          'https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=1200&q=80',
      },
      {
        id: 'moana',
        title: 'Vaiana',
        subtitle: 'Animation · Abenteuer',
        tag: 'prime',
        image:
          'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&w=1200&q=80',
      },
    ],
  },
];

export default ContentRowData;
