export const CATEGORY_COLORS: Record<string, { name: string; hex: string }[]> = {
  Electronics: [
    { name: 'Black', hex: '#111827' },
    { name: 'Silver', hex: '#D1D5DB' },
    { name: 'Blue', hex: '#2563EB' },
    { name: 'Burgundy', hex: '#7C2D12' },
  ],
  Fashion: [
    { name: 'Cognac', hex: '#92400E' },
    { name: 'Black', hex: '#111827' },
    { name: 'Olive', hex: '#4D7C0F' },
    { name: 'Stone', hex: '#9CA3AF' },
  ],
  Accessories: [
    { name: 'Charcoal', hex: '#374151' },
    { name: 'Sand', hex: '#D6D3D1' },
    { name: 'Forest', hex: '#14532D' },
    { name: 'Ocean', hex: '#1D4ED8' },
  ],
  Sports: [
    { name: 'Midnight', hex: '#0F172A' },
    { name: 'Volt', hex: '#FACC15' },
    { name: 'Crimson', hex: '#DC2626' },
    { name: 'Ice', hex: '#E0F2FE' },
  ],
};

export const CATEGORY_SIZES: Record<string, string[]> = {
  Fashion: ['S', 'M', 'L', 'XL'],
  Accessories: ['One Size'],
  Electronics: ['One Size'],
  Sports: ['EU 39', 'EU 40', 'EU 41', 'EU 42'],
};

export const CATEGORY_FEATURES: Record<string, string[]> = {
  Electronics: [
    'Aktive Geräuschunterdrückung für maximale Ruhe',
    '40 Stunden Akkulaufzeit mit Schnellladefunktion',
    'Bluetooth 5.3 mit Mehrgeräte-Kopplung',
    'Leichtes Premium-Aluminium-Gehäuse',
  ],
  Fashion: [
    'Handgefertigte Nähte und hochwertiges Innenfutter',
    'Wasserabweisende Oberfläche für jedes Wetter',
    'Nachhaltig gegerbtes Echtleder',
    'Verstellbare Passform für maximalen Komfort',
  ],
  Accessories: [
    'Intelligente Fächeraufteilung mit Laptop-Schutz',
    'Wasserabweisende, recycelte Materialien',
    'Atmungsaktive Rückenpolsterung',
    'Robuste YKK-Reißverschlüsse',
  ],
  Sports: [
    'Atmungsaktives Mesh-Obermaterial',
    'Energie-rückführende Zwischensohle',
    'Stabilisierende Laufsohle für jeden Untergrund',
    'Ultraleichtes Design für schnelle Läufe',
  ],
};

export const CATEGORY_SPECIFICATIONS: Record<string, Record<string, string>> = {
  Electronics: {
    Akku: '40 Stunden (ANC aus), 30 Stunden (ANC an)',
    Konnektivität: 'Bluetooth 5.3, USB-C Schnellladung',
    Gewicht: '250 g',
    Garantie: '24 Monate Herstellergarantie',
  },
  Fashion: {
    Material: '100% Premium-Leder mit Baumwollfutter',
    Pflege: 'Schonende Reinigung, regelmäßiges Einfetten',
    Passform: 'Slim Fit, fällt normal aus',
    Herkunft: 'Handgefertigt in Portugal',
  },
  Accessories: {
    Volumen: '18 Liter Fassungsvermögen',
    Laptopfach: 'Bis 16 Zoll',
    Material: 'Recyceltes PET & veganes Leder',
    Gewicht: '750 g',
  },
  Sports: {
    Dämpfung: 'Reaktive EVA-Zwischensohle',
    Gewicht: '230 g (Größe EU 42)',
    Einsatzbereich: 'Straße & leichtes Gelände',
    Besonderheiten: 'Reflektierende Details & atmungsaktive Einsätze',
  },
};
