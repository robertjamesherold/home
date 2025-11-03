import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Phone, Mail, MapPin } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-green-600 to-green-700 text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - CTA */}
          <div className="space-y-6">
            <h2 className="text-white">
              Beginnen Sie Ihre Reise zu mehr Gesundheit und Wohlbefinden
            </h2>
            <p className="text-green-100">
              Vereinbaren Sie jetzt Ihr kostenloses Erstgespräch und erfahren Sie, 
              wie wir Ihnen mit naturheilkundlichen Methoden helfen können.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                placeholder="Ihre E-Mail-Adresse"
                className="bg-white text-slate-900 border-none"
              />
              <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white whitespace-nowrap">
                Termin anfragen
              </Button>
            </div>

            <p className="text-green-100">
              Oder rufen Sie uns direkt an: <span className="text-white">+49 (0) 123 456 789</span>
            </p>
          </div>

          {/* Right side - Contact Info */}
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 space-y-6">
              <h3 className="text-white">Kontaktinformationen</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-white mb-1">Adresse</div>
                    <p className="text-green-100">
                      Musterstraße 123<br />
                      12345 Musterstadt
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-white mb-1">Telefon</div>
                    <p className="text-green-100">+49 (0) 123 456 789</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-white mb-1">E-Mail</div>
                    <p className="text-green-100">info@heilpraxis.de</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/20">
                <div className="text-white mb-2">Öffnungszeiten</div>
                <div className="text-green-100 space-y-1">
                  <p>Mo - Fr: 08:00 - 18:00 Uhr</p>
                  <p>Sa: 09:00 - 14:00 Uhr</p>
                  <p>So: Geschlossen</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
