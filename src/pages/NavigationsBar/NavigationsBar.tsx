import { forwardRef, type HTMLAttributes, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'motion/react'
import { ShoppingCart, Search, Menu, User, X } from 'lucide-react'
import { Button, Badge, Input } from '@ui/.'
import { useCart } from '@hooks/useProductContext'

type NavigationsBarProps = HTMLAttributes<HTMLElement>

const NavigationsBar = forwardRef<HTMLElement, NavigationsBarProps>( ( { className = '', ...rest }, ref ) =>
{
  const { totalItems } = useCart()
  const navigate = useNavigate()
  const [ mobileMenuOpen, setMobileMenuOpen ] = useState( false );
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

  const toggleMenu = () =>
  {
    setMobileMenuOpen( !mobileMenuOpen )
  }

  const closeMenu = () =>
  {
    setMobileMenuOpen( false )
  };

  return (
    <>
    <header ref={ ref } className={ headerClassName } { ...rest }>
        <div className="container mx-auto px-4 w-full">
          <div className="flex h-16 items-center justify-between w-full md:gap-8">
            <div className="flex items-center gap-8 ">
              <Link to="/" className="flex items-center gap-2">
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

            <div className="flex items-center gap-3 md:w-full">
            <form
              onSubmit={ handleSearchSubmit }
                className="relative hidden md:flex items-center gap-2 pl-4 h-8 rounded-lg  border border-orange-500 shadow-sm w-full"
            >
              <Search className="h-4 w-4 text-gray-400" aria-hidden />
              <Input
                value={ searchValue }
                onChange={ ( event ) => setSearchValue( event.target.value ) }
                placeholder="Produkte durchsuchen"
                  className="border-0 bg-transparent px-0 py-0 text-sm focus-visible:ring-0"
              />
                <Button type="submit" size="sm" className="relative h-full rounded-l-none rounded-r-lg box-content ">
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
              <Button variant="ghost" size="icon" className="md:hidden" onClick={ toggleMenu } aria-label="Menü öffnen">
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

      {/* Mobile Menu */ }
      <AnimatePresence>
        { mobileMenuOpen && (
          <>
            {/* Backdrop */ }
            <motion.div
              initial={ { opacity: 0 } }
              animate={ { opacity: 1 } }
              exit={ { opacity: 0 } }
              transition={ { duration: 0.3 } }
              className="fixed inset-0 bg-black/50 z-[60] md:hidden"
              onClick={ closeMenu }
            />

            {/* Menu Panel */ }
            <motion.div
              initial={ { x: '100%' } }
              animate={ { x: 0 } }
              exit={ { x: '100%' } }
              transition={ { type: 'tween', duration: 0.3 } }
              className="fixed top-0 right-0 bottom-0 w-full bg-white z-[70] md:hidden overflow-y-auto"
            >
              <div className="flex flex-col h-full">
                {/* Header */ }
                <div className="flex items-center justify-between p-4 border-b">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">LUXE</span>
                  </div>
                  <Button variant="ghost" size='icon' onClick={ closeMenu }>
                    <X className="h-12 w-12" />
                  </Button>
                </div>

                {/* Navigation */ }
                <nav className="flex-1 p-6">
                  <div className="space-y-1">
                    <Link
                      to="/products"
                      className="block py-4 text-2xl hover:opacity-70 transition-opacity"
                      onClick={ closeMenu }
                    >
                      Produkte
                    </Link>
                    <Link
                      to="/"
                      className="block py-4 text-2xl hover:opacity-70 transition-opacity"
                      onClick={ closeMenu }
                    >
                      Neu
                    </Link>
                    <Link
                      to="/"
                      className="block py-4 text-2xl hover:opacity-70 transition-opacity"
                      onClick={ closeMenu }
                    >
                      Sale
                    </Link>
                    <div className="pt-6 border-t mt-6">
                      <Link
                        to="/cart"
                        className="relative block py-4 text-xl hover:opacity-70 transition-opacity items-center gap-2"
                        onClick={ closeMenu }
                      >
                        <span className="flex items-center gap-2 w-fit relative">
                          <ShoppingCart className="h-5 w-5" />
                          Warenkorb

                          { totalItems > 0 && (
                            <Badge className="relative">{ totalItems }</Badge>
                          ) }
                        </span>
                      </Link>
                      <button className="w-full text-left py-4 text-xl hover:opacity-70 transition-opacity flex items-center gap-2">
                        <User className="h-5 w-5" />
                        Mein Konto
                      </button>
                      <button className="w-full text-left py-4 text-xl hover:opacity-70 transition-opacity flex items-center gap-2">
                        <Search className="h-5 w-5" />
                        Suchen
                      </button>
                    </div>
                  </div>
                </nav>
              </div>
            </motion.div>
          </>
        ) }
      </AnimatePresence>
    </>

  )
} )

NavigationsBar.displayName = 'NavigationsBar'

export default NavigationsBar
