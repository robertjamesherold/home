import { forwardRef, type HTMLAttributes } from 'react'
import { Link } from 'react-router-dom'
import { Facebook, Instagram, Twitter } from 'lucide-react'

type PageFooterProps = HTMLAttributes<HTMLElement>

const footerLinks = [
  { label: 'Alle Produkte', to: '/products' },
  { label: 'Neuheiten', to: '/products' },
  { label: 'Sale', to: '/sale' },
]

const infoLinks = [
  { label: 'Datenschutz', href: '#' },
  { label: 'AGB', href: '#' },
  { label: 'Impressum', href: '#' },
]

const PageFooter = forwardRef<HTMLElement, PageFooterProps>( ( { className = '', ...rest }, ref ) =>
{
  const footerClassName = className
    ? `mt-auto border-t border-gray-100 bg-white ${ className }`
    : 'mt-auto border-t border-gray-100 bg-white'

  return (
    <footer ref={ ref } className={ footerClassName } { ...rest }>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[2fr,1fr,1fr,1fr]">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-gray-900 text-white" />
              <span className="text-xl font-semibold tracking-tight">LUXE</span>
            </div>
            <p className="text-sm text-gray-500">
              Präzise kuratierte Looks mit einem klaren Akzent. Designed in Berlin, verschickt in recycelten Boxen.
            </p>
          </div>

          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-gray-400">Shop</p>
            <ul className="space-y-2 text-sm text-gray-600">
              { footerLinks.map( ( link ) => (
                <li key={ link.label }>
                  <Link to={ link.to } className="transition hover:text-gray-900">
                    { link.label }
                  </Link>
                </li>
              ) ) }
            </ul>
          </div>

          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-gray-400">Service</p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="transition hover:text-gray-900">
                  Kontakt
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-gray-900">
                  Versand & Rückgabe
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-gray-900">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-gray-400">Social</p>
            <div className="flex gap-3 text-gray-500">
              <a href="#" className="rounded-full border border-gray-200 p-2 transition hover:border-primary hover:text-primary">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="rounded-full border border-gray-200 p-2 transition hover:border-primary hover:text-primary">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="rounded-full border border-gray-200 p-2 transition hover:border-primary hover:text-primary">
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-gray-100 pt-6 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
          <p>&copy; { new Date().getFullYear() } LUXE. Redefining essential wardrobe pieces.</p>
          <div className="flex flex-wrap gap-4">
            { infoLinks.map( ( link ) => (
              <a key={ link.label } href={ link.href } className="transition hover:text-gray-900">
                { link.label }
              </a>
            ) ) }
          </div>
        </div>
      </div>
    </footer>
  )
} )

PageFooter.displayName = 'PageFooter'

export default PageFooter
