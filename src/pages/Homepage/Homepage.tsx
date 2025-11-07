import { Link } from 'react-router-dom'
import { ArrowRight, Truck, Shield, RefreshCw } from 'lucide-react'
import { Button, Card, CardContent } from '@ui/.'
import { productsData } from '@data/.'
import useRandomImages from '@/hooks/useRandomImages'
import { Main } from '@/layout'


const Homepage: React.FC = () =>
{
  const featuredProducts = productsData.filter( ( p ) => p.tags.includes( 'new' ) ).slice( 0, 4 )
  const { getRandomImageUrls } = useRandomImages();

  return (
    <Main className="flex flex-col">
      {/* Hero Section */ }
      <section className="relative h-[600px] flex items-center justify-center bg-gray-100">
        <img 
          src={ getRandomImageUrls( 1, { size: { width: 1920, height: 1080 } , cacheKey: 'homepage-hero' })[0]}
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white max-w-3xl px-4">
          <h1 className="mb-6">Neue Kollektion</h1>
          <p className="text-xl mb-8 opacity-90">
            Entdecken Sie zeitlose Eleganz und moderne Designs für jeden Anlass
          </p>
          <Link to="/products">
            <Button size="lg" className="gap-2">
              Jetzt einkaufen
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Features */ }
      <section className="py-16 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center">
                <Truck className="h-6 w-6" />
              </div>
              <h3>Kostenloser Versand</h3>
              <p className="text-gray-600">
                Ab 50€ Bestellwert versandkostenfrei
              </p>
            </div>
            <div className="flex flex-col items-center text-center gap-4">
              <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center">
                <RefreshCw className="h-6 w-6" />
              </div>
              <h3>30 Tage Rückgabe</h3>
              <p className="text-gray-600">
                Kostenlose Rücksendung innerhalb von 30 Tagen
              </p>
            </div>
            <div className="flex flex-col items-center text-center gap-4">
              <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center">
                <Shield className="h-6 w-6" />
              </div>
              <h3>Sichere Zahlung</h3>
              <p className="text-gray-600">
                SSL-verschlüsselt und sicher
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */ }
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">Neue Produkte</h2>
            <p className="text-gray-600">
              Die neuesten Highlights unserer Kollektion
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            { featuredProducts.map( ( product ) => (
              <Link key={ product.id } to={ `/product/${ product.id }` }>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-square overflow-hidden">
                    { getRandomImageUrls( 2, { cacheKey: product.id } ).map( ( img ) => (
                      <img
                        key={ img }
                        src={ img }
                        alt={ product.name }
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    ) ) }
                  </div>
                  <CardContent className="p-4">
                    <h3 className="mb-2">{ product.name }</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{ product.price.toFixed( 2 ) }€</span>
                      { product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">
                          { product.originalPrice.toFixed( 2 ) }€
                        </span>
                      ) }
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ) ) }
          </div>

          <div className="text-center mt-12">
            <Link to="/products">
              <Button variant="outline" size="lg">
                Alle Produkte ansehen
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Banner */ }
      <section className="relative h-[400px] flex items-center justify-center bg-gray-100">
        <img
          src={ getRandomImageUrls( 3, { size: { width: 1920, height: 1080 }, cacheKey: 'homepage-hero' } )[ 0 ] }
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 text-center text-white max-w-2xl px-4">
          <h2 className="mb-4">Sale bis zu 40%</h2>
          <p className="text-lg mb-6 opacity-90">
            Sichern Sie sich jetzt Ihre Favoriten zu reduzierten Preisen
          </p>
          <Link to="/products">
            <Button size="lg" variant="secondary">
              Zum Sale
            </Button>
          </Link>
        </div>
      </section>
    </Main>
  )
}

export default Homepage;