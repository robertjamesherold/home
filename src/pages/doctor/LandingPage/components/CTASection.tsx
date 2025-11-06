import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Section } from '@/layout';

export function CTASection() {
  return (
    <Section className="bg-gradient-to-br from-green-600 to-green-700 py-12 text-white md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Left side - CTA */}
          <div className="space-y-6">
            <h2 className="text-white">
              Beginnen Sie Ihre Reise zu mehr Gesundheit und Wohlbefinden
            </h2>
            <p className="text-green-100">
              Vereinbaren Sie jetzt Ihr kostenloses Erstgespräch und erfahren
              Sie, wie wir Ihnen mit naturheilkundlichen Methoden helfen können.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Input
                placeholder="Ihre E-Mail-Adresse"
                className="border-none bg-white text-slate-900"
              />
              <Button
                size="lg"
                className="whitespace-nowrap bg-slate-900 text-white hover:bg-slate-800"
              >
                Termin anfragen
              </Button>
            </div>

            <p className="text-green-100">
              Oder rufen Sie uns direkt an:{' '}
              <span className="text-white">+49 (0) 123 456 789</span>
            </p>
          </div>

          {/* Right side - Contact Info */}
          <div className="space-y-6">
            <div className="space-y-6 rounded-xl bg-white/10 p-8 backdrop-blur-sm">
              <h3 className="text-white">Kontaktinformationen</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white/20">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="mb-1 text-white">Adresse</div>
                    <p className="text-green-100">
                      Musterstraße 123
                      <br />
                      12345 Musterstadt
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white/20">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="mb-1 text-white">Telefon</div>
                    <p className="text-green-100">+49 (0) 123 456 789</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white/20">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="mb-1 text-white">E-Mail</div>
                    <p className="text-green-100">info@heilpraxis.de</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/20 pt-4">
                <div className="mb-2 text-white">Öffnungszeiten</div>
                <div className="space-y-1 text-green-100">
                  <p>Mo - Fr: 08:00 - 18:00 Uhr</p>
                  <p>Sa: 09:00 - 14:00 Uhr</p>
                  <p>So: Geschlossen</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
