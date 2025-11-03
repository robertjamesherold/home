# Testimonial Component

## 📁 Struktur

```
Testimonial/
├── components/
│   ├── Button.tsx
│   ├── NavigationDots.tsx
│   ├── SliderControls.tsx
│   └── TestimonialCard.tsx
├── hooks/
│   └── useInfiniteSlider.ts
├── types/
│   └── Testimonial.types.ts
├── data/
│   └── Testimonial.data.ts
├── constants.ts
├── Testimonial.tsx
├── index.ts
└── README.md
```

## 🚀 Verwendung

```tsx
import Testimonial from '@/components/sections/Testimonial';

function App() {
  return <Testimonial />;
}
```

## ⚙️ Anpassungen

### Eigene Testimonials hinzufügen
Bearbeite `data/Testimonial.data.ts`

### Timing anpassen
Bearbeite `constants.ts`:
- `TRANSITION_MS` - Übergangsgeschwindigkeit
- `AUTOPLAY_INTERVAL_MS` - Zeit zwischen automatischen Slides
- `SWIPE_THRESHOLD_PX` - Mindest-Swipe-Distanz

## 📦 Abhängigkeiten

- React
- lucide-react
- Tailwind CSS
