import { useEffect, useState } from 'react'
import { productImages } from '@/assets/images'
import type { ProductType } from '@/types'

export const useProductsWithPokemon = () => {
  const [products, setProducts] = useState<ProductType[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchPokemonImages = async () => {
      try {
        setIsLoading(true)

        // Generiere direkte URLs zu den Official Artwork Bildern
        const pokemonImages = Array.from(
          { length: 151 },
          (_, i) => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${i + 1}.png`
        )

        // Erstelle Produkte mit Pokémon-Bildern
        const productsWithPokemon: ProductType[] = [
          {
            id: 'aurora-stehlampe',
            title: 'Aurora Stehlampe',
            price: 179.99,
            originalPrice: 219.99,
            category: 'Beleuchtung',
            description: 'Elegante Stehlampe mit drehbarem Kopf und dimmbarer LED-Technologie für warmes Ambiente.',
            rating: { score: 4.7, reviews: 124 },
            inStock: true,
            tags: ['new', 'sale'],
            link: 'aurora-stehlampe',
            image: productImages[0],
            images: pokemonImages.slice(0, 5),
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
            id: 'nordic-sofa-cloud',
            title: 'Nordic Sofa Cloud',
            price: 1299,
            originalPrice: 1499,
            category: 'Wohnzimmer',
            description: 'Modulares Sofa mit abnehmbaren Bezügen und ergonomischer Polsterung – ideal für große Wohnzimmer.',
            rating: { score: 4.8, reviews: 312 },
            inStock: true,
            tags: ['bestseller'],
            link: 'nordic-sofa-cloud',
            image: productImages[1],
            images: pokemonImages.slice(5, 10),
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
            id: 'borealis-kaffeetisch',
            title: 'Borealis Kaffeetisch',
            price: 349,
            category: 'Möbel',
            description: 'Handgefertigter Couchtisch aus nachhaltigem Eichenholz mit integrierter Aufbewahrung.',
            rating: { score: 4.6, reviews: 98 },
            inStock: true,
            tags: ['new'],
            link: 'borealis-kaffeetisch',
            image: productImages[2],
            images: pokemonImages.slice(10, 15),
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
            id: 'skandi-essstuhl',
            title: 'Skandi Essstuhl',
            price: 159.99,
            category: 'Esszimmer',
            description: 'Set aus zwei ergonomischen Essstühlen mit atmungsaktivem Stoffbezug.',
            rating: { score: 4.4, reviews: 205 },
            inStock: true,
            tags: ['sale'],
            link: 'skandi-essstuhl',
            image: productImages[3],
            images: pokemonImages.slice(15, 20),
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
            id: 'atlas-buecherregal',
            title: 'Atlas Bücherregal',
            price: 499,
            category: 'Arbeitszimmer',
            description: 'Flexibles Regalsystem mit verstellbaren Einlegeböden und integrierter Kabeldurchführung.',
            rating: { score: 4.5, reviews: 87 },
            inStock: false,
            tags: ['limited'],
            link: 'atlas-buecherregal',
            image: productImages[4],
            images: pokemonImages.slice(20, 25),
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
            id: 'velvet-loungesessel',
            title: 'Velvet Loungesessel',
            price: 399,
            category: 'Wohnzimmer',
            description: 'Komfortabler Loungesessel mit Samtbezug und drehbarem Metallfuß.',
            rating: { score: 4.9, reviews: 56 },
            inStock: true,
            tags: ['new', 'bestseller'],
            link: 'velvet-loungesessel',
            image: productImages[5],
            images: pokemonImages.slice(25, 30),
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
            id: 'lumen-tischleuchte',
            title: 'Lumen Tischleuchte',
            price: 89.99,
            category: 'Beleuchtung',
            description: 'Minimalistische LED-Tischleuchte mit Touch-Dimmer und USB-C-Ladeanschluss.',
            rating: { score: 4.3, reviews: 142 },
            inStock: true,
            tags: ['gift'],
            link: 'lumen-tischleuchte',
            image: productImages[6],
            images: pokemonImages.slice(30, 35),
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
            id: 'meridian-bettwaesche',
            title: 'Meridian Bettwäsche',
            price: 129.5,
            category: 'Schlafzimmer',
            description: 'Premium Bettwäsche-Set aus 100 % Bio-Baumwolle mit Satinstich-Verarbeitung.',
            rating: { score: 4.2, reviews: 64 },
            inStock: true,
            tags: ['eco'],
            link: 'meridian-bettwaesche',
            image: productImages[7],
            images: pokemonImages.slice(78, 82),
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
        ]

        setProducts(productsWithPokemon)
        setError(null)
      } catch (err) {
        console.error('Error fetching Pokémon images:', err)
        setError(err instanceof Error ? err : new Error('Failed to load Pokémon images'))
      } finally {
        setIsLoading(false)
      }
    }

    fetchPokemonImages()
  }, [])

  return { products, isLoading, error }
}
