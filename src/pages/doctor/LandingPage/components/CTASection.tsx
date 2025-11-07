import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Phone, Mail, MapPin, CalendarDays } from 'lucide-react'
import { Section } from '@/layout';

export function CTASection() {
  return (
    <Section
      id="termin"
      className="relative section safe-area-padding text-slate-800"
    >

      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#6fc4a3]/40 bg-[#6fc4a3]/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#2f7266]">
              <CalendarDays className="h-4 w-4 text-[#2f7266]" />
              Erstberatung
            </span>
            <h2 className="text-3xl font-semibold leading-tight text-[#1f3e4d] md:text-4xl">
              Beginnen Sie Ihre Reise zu mehr Gesundheit und Wohlbefinden
            </h2>
            <p className="max-w-xl text-[#4a5d66]">
              Vereinbaren Sie jetzt Ihr kostenloses Erstgespräch und erfahren
              Sie, wie wir Sie mit naturheilkundlichen Methoden begleiten
              können.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Input
                placeholder="Ihre E-Mail-Adresse"
                className="border-[#dceaea] bg-white text-[#1f3e4d] placeholder:text-[#8ca0a8]"
              />
              <Button className="whitespace-nowrap rounded-full border border-[#2f6d8b] bg-[#2f6d8b] px-6 text-sm font-semibold text-white shadow-[0_18px_60px_-32px_rgba(47,109,139,0.45)] transition hover:bg-[#285b74]">
                Termin anfragen
              </Button>
            </div>

            <p className="text-[#4a5d66]">
              Oder rufen Sie uns direkt an:{' '}
              <span className="font-semibold text-[#2f6d8b]">
                +49 (0) 123 456 789
              </span>
            </p>
          </div>

          <div className="space-y-6 rounded-[32px] border border-[#dceaea] bg-white p-8 shadow-[0_45px_120px_-80px_rgba(47,109,139,0.35)] backdrop-blur-xl">
            <h3 className="text-xl font-semibold text-[#1f3e4d]">
              Kontaktinformationen
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-4 rounded-2xl border border-[#dceaea] bg-[#f4fbfb] p-4">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-[#6fc4a3]/40 bg-[#6fc4a3]/20 text-[#2f7266]">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="mb-1 text-sm font-semibold text-[#1f3e4d]">
                    Adresse
                  </div>
                  <p className="text-sm text-[#4a5d66]">
                    Musterstraße 123
                    <br />
                    12345 Musterstadt
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-[#dceaea] bg-[#f4fbfb] p-4">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-[#6fc4a3]/40 bg-[#6fc4a3]/20 text-[#2f7266]">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="mb-1 text-sm font-semibold text-[#1f3e4d]">
                    Telefon
                  </div>
                  <p className="text-sm text-[#4a5d66]">+49 (0) 123 456 789</p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-[#dceaea] bg-[#f4fbfb] p-4">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-[#6fc4a3]/40 bg-[#6fc4a3]/20 text-[#2f7266]">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="mb-1 text-sm font-semibold text-[#1f3e4d]">
                    E-Mail
                  </div>
                  <p className="text-sm text-[#4a5d66]">info@heilpraxis.de</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-[#dceaea] bg-[#f4fbfb] p-4">
              <div className="mb-2 text-sm font-semibold text-[#1f3e4d]">
                Öffnungszeiten
              </div>
              <div className="space-y-1 text-sm text-[#4a5d66]">
                <p>Mo - Fr: 08:00 - 18:00 Uhr</p>
                <p>Sa: 09:00 - 14:00 Uhr</p>
                <p>So: Geschlossen</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
