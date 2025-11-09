import { forwardRef, type FormEvent, type HTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Button, Input } from '@ui/.';
import { cn } from '@ui/utils';
import { Column, Grid } from '@/layout';

type PageFooterProps = HTMLAttributes<HTMLElement>;

type FooterLink = {
  label: string;
  to?: string;
  href?: string;
};

const shopLinks: FooterLink[] = [
  { label: 'Alle Produkte', to: '/products' },
  { label: 'Neuheiten', to: '/products' },
  { label: 'Sale', to: '/sale' },
];

const serviceLinks: FooterLink[] = [
  { label: 'Kontakt', href: 'mailto:hello@luxe.studio' },
  { label: 'Versand & Rückgabe', href: '#' },
  { label: 'FAQ', href: '#' },
  { label: 'Größenguide', href: '#' },
];

const inspirationLinks: FooterLink[] = [
  { label: 'Stories', href: '#' },
  { label: 'Lookbook', href: '#' },
  { label: 'Geschenkideen', href: '#' },
];

const footerNavigation = [
  { title: 'Shop', links: shopLinks },
  { title: 'Service', links: serviceLinks },
  { title: 'Inspiration', links: inspirationLinks },
];

const infoLinks = [
  { label: 'Datenschutz', href: '#' },
  { label: 'AGB', href: '#' },
  { label: 'Impressum', href: '#' },
];

const socials = [
  { label: 'Instagram', href: 'https://www.instagram.com', icon: Instagram },
  { label: 'Facebook', href: 'https://www.facebook.com', icon: Facebook },
  { label: 'Twitter', href: 'https://www.twitter.com', icon: Twitter },
];

const PageFooter = forwardRef<HTMLElement, PageFooterProps>(
  ({ className = '', ...rest }, ref) => {
    const footerClassName = cn(
      'mt-auto border-t border-border/60 bg-gradient-to-b from-background via-muted/40 to-muted/70',
      className
    );

    const handleNewsletterSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
    };

    return (
      <footer ref={ref} className={footerClassName} {...rest}>
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-3 sm:gap-10 lg:grid-cols-5">
            <Grid className="col-span-1 grid-cols-1 gap-y-8 sm:col-span-3 sm:grid-cols-3 lg:gap-y-2">
              {footerNavigation.map((section) => (
                <div key={section.title} className="space-y-3">
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                    {section.title}
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {section.links.map((link) => (
                      <li key={link.label}>
                        {link.to ? (
                          <Link
                            to={link.to}
                            className="transition hover:text-foreground"
                          >
                            {link.label}
                          </Link>
                        ) : (
                          <a
                            href={link.href ?? '#'}
                            className="transition hover:text-foreground"
                          >
                            {link.label}
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <Column className="space-y-4 sm:col-span-3 xl:col-span-2">
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  Newsletter
                </p>
                <p className="text-sm text-muted-foreground">
                  Drops, Stories und Previews zuerst erfahren – direkt in dein
                  Postfach.
                </p>
                <form
                  onSubmit={handleNewsletterSubmit}
                  className="flex w-full flex-col gap-3 sm:flex-row"
                >
                  <Input
                    type="email"
                    placeholder="E-Mail-Adresse"
                    required
                    className="flex-1 border-border/60 bg-background/80 py-2"
                  />
                  <Button type="submit" className="sm:w-auto">
                    Abonnieren
                  </Button>
                </form>
                <p className="text-xs text-muted-foreground">
                  Keine Werbung – nur kuratierte Inspiration und limitierte
                  Vorabzugänge.
                </p>
              </Column>
            </Grid>
            <div className="space-y-6 sm:col-span-3 lg:col-span-2">
              <Link
                to="/"
                className="inline-flex items-center gap-3 text-foreground"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-xs font-semibold tracking-[0.6em] text-background">
                  LX
                </div>
                <div>
                  <p className="text-xl font-semibold tracking-tight">LUXE</p>
                  <p className="text-sm text-muted-foreground">
                    Modern Wardrobe Studio
                  </p>
                </div>
              </Link>
              <p className="max-w-sm text-sm text-muted-foreground">
                Bewusst gefertigte Essentials, entworfen in Berlin und aus
                recycelten Materialien verpackt. Wir kombinieren klare Linien
                mit langlebigen Stoffen für Looks, die jede Saison tragen.
              </p>
              <div className="flex flex-wrap gap-3">
                {socials.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border/60 text-muted-foreground transition hover:border-foreground hover:text-foreground"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
              <div className="rounded-2xl border border-border/60 bg-background/70 p-4 text-sm text-muted-foreground shadow-sm">
                <p className="font-semibold text-foreground">
                  Studio & Versand
                </p>
                <p>Rosenthaler Straße 72</p>
                <p>10119 Berlin</p>
                <p className="mt-2">Mo–Fr · 10:00 – 18:00 Uhr</p>
              </div>
            </div>
          </div>
          <div className="mt-10 flex flex-col gap-4 border-t border-border/60 pt-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
            <p>
              &copy; {new Date().getFullYear()} LUXE · Entworfen in Berlin und
              verantwortungsvoll produziert in Europa.
            </p>
            <div className="flex flex-wrap gap-4">
              {infoLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="transition hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    );
  }
);

export default PageFooter;
