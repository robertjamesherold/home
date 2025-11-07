import type { HeroCardDataTypes } from '../types'
import Portrait from '@images/AndreaMeyer.jpeg';

const HeroCardData: HeroCardDataTypes = {
  image: Portrait,
  alt: 'Portrait von Andrea Meyer',
  name: 'Andrea Meyer',
  title: 'Heilpraktikerin',
  patientCount: 'Über 100 zufriedene Patient:innen',
  rating: '4.9/5 Zufriedenheit',
  ratingInfo: 'Basierend auf lokalen Umfragen.',
};

export { HeroCardData };