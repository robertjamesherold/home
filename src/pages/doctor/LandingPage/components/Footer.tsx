import { Facebook, Instagram, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const footerLinks = {
    'Behandlungen': [
      'Akupunktur',
      'Kräuterheilkunde',
      'Massage',
      'Meditation',
      'Ernährungsberatung',
      'Schmerztherapie'
    ],
    'Über uns': [
      'Unsere Praxis',
      'Team',
      'Philosophie',
      'Zertifikate',
      'Karriere',
      'Blog'
    ],
    'Service': [
      'Terminbuchung',
      'FAQ',
      'Kostenübernahme',
      'Notfall-Hotline',
      'Downloads',
      'Newsletter'
    ],
    'Rechtliches': [
      'Impressum',
      'Datenschutz',
      'AGB',
      'Cookie-Richtlinie'
    ]
  };

  return (
    <footer className="bg-slate-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2">
            <h3 className="text-green-400 mb-4">NaturHeil</h3>
            <p className="text-slate-400 mb-6">
              Ihre Praxis für ganzheitliche Naturheilkunde in Musterstadt. 
              Seit 2008 helfen wir Menschen auf ihrem Weg zu mehr Gesundheit und Wohlbefinden.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-slate-400 hover:text-green-400 transition-colors"
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
        <div className="border-t border-slate-800 pt-8 mb-8">
          <div className="flex flex-wrap justify-center items-center gap-6 text-slate-400">
            <span>Sichere Zahlung:</span>
            <div className="flex gap-4">
              <div className="px-3 py-1 bg-slate-800 rounded">VISA</div>
              <div className="px-3 py-1 bg-slate-800 rounded">Mastercard</div>
              <div className="px-3 py-1 bg-slate-800 rounded">PayPal</div>
              <div className="px-3 py-1 bg-slate-800 rounded">Rechnung</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-center md:text-left">
              © 2025 NaturHeil Praxis. Alle Rechte vorbehalten.
            </p>
            <div className="flex gap-6 text-slate-400">
              <a href="#" className="hover:text-green-400 transition-colors">
                Impressum
              </a>
              <a href="#" className="hover:text-green-400 transition-colors">
                Datenschutz
              </a>
              <a href="#" className="hover:text-green-400 transition-colors">
                AGB
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
