import { forwardRef, type HTMLAttributes, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { ShoppingCart, Search, Menu, User, X } from 'lucide-react'
import { Button, Badge, Input } from '@ui/.'
import { useCart } from '@hooks/useProductContext'

type NavigationsBarProps = HTMLAttributes<HTMLElement>

const NavigationsBar = forwardRef<HTMLElement, NavigationsBarProps>( ( { className = '', ...rest }, ref ) =>
{
  const { totalItems } = useCart()
  const navigate = useNavigate()
  const location = useLocation()
  const [ searchValue, setSearchValue ] = useState( '' )
  const [ isMobileSearchOpen, setMobileSearchOpen ] = useState( false )

  useEffect( () =>
  {
    if ( location.pathname === '/products' )
    {
      const params = new URLSearchParams( location.search )
      setSearchValue( params.get( 'search' ) ?? '' )
    }
    setMobileSearchOpen( false )
  }, [ location ] )

  const handleSearchSubmit = ( event: React.FormEvent ) =>
  {
    event.preventDefault()
    const trimmed = searchValue.trim()
    const target = trimmed ? `/products?search=${ encodeURIComponent( trimmed ) }` : '/products'
    navigate( target )
    setMobileSearchOpen( false )
  }

  const handleSearchIconClick = () =>
  {
    if ( typeof window !== 'undefined' && window.matchMedia( '(min-width: 768px)' ).matches )
    {
      return
    }
    setMobileSearchOpen( ( prev ) => !prev )
  }

  const headerClassName = className
    ? `sticky top-0 z-50 w-full border-b border-gray-100 bg-white/90 backdrop-blur ${ className }`
    : 'sticky top-0 z-50 w-full border-b border-gray-100 bg-white/90 backdrop-blur'

  return (
    <header ref={ ref } className={ headerClassName } { ...rest }>
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-black" />
              <span className="text-xl">LUXE</span>
            </Link>

            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
              <Link to="/products" className="hover:opacity-70 transition-opacity">
                Produkte
              </Link>
              <Link to="/sale" className="hover:opacity-70 transition-opacity">
                Sale
              </Link>
              <Link to="/" className="hover:opacity-70 transition-opacity">
                Neu
              </Link>
              <Link to="/account" className="hover:opacity-70 transition-opacity">
                Konto
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <form
              onSubmit={ handleSearchSubmit }
              className="hidden md:flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1.5 shadow-sm"
            >
              <Search className="h-4 w-4 text-gray-400" aria-hidden />
              <Input
                value={ searchValue }
                onChange={ ( event ) => setSearchValue( event.target.value ) }
                placeholder="Produkte durchsuchen"
                className="border-0 bg-transparent px-0 py-0 text-sm focus-visible:ring-0"
              />
              <Button type="submit" size="sm">
                Suchen
              </Button>
            </form>

            <Button variant="ghost" size="icon" className="md:hidden" onClick={ handleSearchIconClick } aria-label="Suche öffnen">
              <Search className="h-5 w-5" />
            </Button>
            <Link to="/account">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                { totalItems > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 rounded-full">
                    { totalItems }
                  </Badge>
                ) }
              </Button>
            </Link>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
      { isMobileSearchOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur px-4 py-3">
          <form onSubmit={ handleSearchSubmit } className="flex items-center gap-2">
            <Input
              value={ searchValue }
              onChange={ ( event ) => setSearchValue( event.target.value ) }
              placeholder="Produkte durchsuchen"
              className="bg-gray-50"
            />
            <Button type="submit" size="sm">
              Suchen
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={ () => setMobileSearchOpen( false ) }
              aria-label="Suche schließen"
            >
              <X className="h-4 w-4" />
            </Button>
          </form>
        </div>
      ) }
    </header>
  )
} )

NavigationsBar.displayName = 'NavigationsBar'

export default NavigationsBar
