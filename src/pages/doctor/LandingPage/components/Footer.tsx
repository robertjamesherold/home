import { Facebook, Instagram, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const footerLinks = {
    Behandlungen: [
      'Akupunktur',
      'Kräuterheilkunde',
      'Massage',
      'Meditation',
      'Ernährungsberatung',
      'Schmerztherapie',
    ],
    'Über uns': [
      'Unsere Praxis',
      'Team',
      'Philosophie',
      'Zertifikate',
      'Karriere',
      'Blog',
    ],
    Service: [
      'Terminbuchung',
      'FAQ',
      'Kostenübernahme',
      'Notfall-Hotline',
      'Downloads',
      'Newsletter',
    ],
    Rechtliches: ['Impressum', 'Datenschutz', 'AGB', 'Cookie-Richtlinie'],
  };

  return (
    <footer className="bg-slate-900 pb-6 pt-12 text-white">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="mb-12 grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-6">
          {/* Brand */}
          <div className="col-span-2">
            <h3 className="mb-4 text-green-400">NaturHeil</h3>
            <p className="mb-6 text-slate-400">
              Ihre Praxis für ganzheitliche Naturheilkunde in Musterstadt. Seit
              2008 helfen wir Menschen auf ihrem Weg zu mehr Gesundheit und
              Wohlbefinden.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 transition-colors hover:bg-green-600"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 transition-colors hover:bg-green-600"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 transition-colors hover:bg-green-600"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 transition-colors hover:bg-green-600"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="mb-4 text-white">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-slate-400 transition-colors hover:text-green-400"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Payment & Trust Badges */}
        <div className="mb-8 border-t border-slate-800 pt-8">
          <div className="flex flex-wrap items-center justify-center gap-6 text-slate-400">
            <span>Sichere Zahlung:</span>
            <div className="flex gap-4">
              <div className="rounded bg-slate-800 px-3 py-1">VISA</div>
              <div className="rounded bg-slate-800 px-3 py-1">Mastercard</div>
              <div className="rounded bg-slate-800 px-3 py-1">PayPal</div>
              <div className="rounded bg-slate-800 px-3 py-1">Rechnung</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-slate-400 md:text-left">
              © 2025 NaturHeil Praxis. Alle Rechte vorbehalten.
            </p>
            <div className="flex gap-6 text-slate-400">
              <a href="#" className="transition-colors hover:text-green-400">
                Impressum
              </a>
              <a href="#" className="transition-colors hover:text-green-400">
                Datenschutz
              </a>
              <a href="#" className="transition-colors hover:text-green-400">
                AGB
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
