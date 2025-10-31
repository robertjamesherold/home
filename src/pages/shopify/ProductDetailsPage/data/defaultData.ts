import type { ColorOption, SizeOption } from '../types';

export const DEFAULT_COLORS: ColorOption[] = [
  { name: 'Black', hex: '#111827' },
  { name: 'White', hex: '#F9FAFB' },
  { name: 'Red', hex: '#EF4444' },
  { name: 'Blue', hex: '#3B82F6' },
];

export const DEFAULT_SIZES: SizeOption[] = [
  { name: 'S', availability: true },
  { name: 'M', availability: true },
  { name: 'L', availability: false },
  { name: 'XL', availability: true },
];

export const DEFAULT_FEATURES: string[] = [
  'Premium Materialien für langanhaltende Qualität',
  'Alltagstaugliches Design mit hohem Tragekomfort',
  'Sorgfältig getestete Komponenten und Verarbeitung',
  'Klimaneutral verpackt und schnell geliefert',
];

export const DEFAULT_SPECIFICATIONS: Record<string, string> = {
  Material: 'Premium-Materialmix',
  Gewicht: 'Leichtgewichtsklasse',
  Garantie: '24 Monate Herstellergarantie',
  Herkunft: 'Sorgfältig zusammengestellt in der EU',
};
