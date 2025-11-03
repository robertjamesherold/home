import { Menu, Phone, Mail } from 'lucide-react';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';

export function Header() {
  const navItems = ['Behandlungen', 'Über uns', 'Leistungen', 'Kontakt'];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      {/* Top bar */}
      <div className="bg-slate-900 py-2 text-white">
        <div className="container mx-auto flex items-center justify-between px-4">
          <div className="flex items-center gap-4">
            <a
              href="tel:+49123456789"
              className="flex items-center gap-2 transition-colors hover:text-green-400"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">+49 (0) 123 456 789</span>
            </a>
            <a
              href="mailto:info@heilpraxis.de"
              className="flex items-center gap-2 transition-colors hover:text-green-400"
            >
              <Mail className="h-4 w-4" />
              <span className="hidden md:inline">info@heilpraxis.de</span>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span>Kostenlose Erstberatung</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-green-600">NaturHeil</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-slate-700 transition-colors hover:text-green-600"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4">
            <Button className="hidden bg-green-600 hover:bg-green-700 sm:flex">
              Termin buchen
            </Button>

            {/* Mobile menu */}
            <Sheet>
              <SheetTrigger className="inline-flex h-10 w-10 items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-white transition-colors hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 md:hidden [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0">
                <Menu className="h-4 w-4" />
              </SheetTrigger>
              <SheetContent>
                <nav className="mt-8 flex flex-col gap-4">
                  {navItems.map((item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className="text-slate-700 transition-colors hover:text-green-600"
                    >
                      {item}
                    </a>
                  ))}
                  <Button className="mt-4 w-full bg-green-600 hover:bg-green-700">
                    Termin buchen
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
