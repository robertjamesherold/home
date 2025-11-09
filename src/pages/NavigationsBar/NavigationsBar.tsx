import { forwardRef, type HTMLAttributes, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingCart, Search, Menu, User, X } from 'lucide-react';
import { Button, Badge, Input } from '@/ui';
import { useCart } from '@/hooks';

type NavigationsBarProps = HTMLAttributes<HTMLElement>;

const NavigationsBar = forwardRef<HTMLElement, NavigationsBarProps>(
  ({ className = '', ...rest }, ref) => {
    const { totalItems } = useCart();
    const navigate = useNavigate();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();
    const [searchValue, setSearchValue] = useState('');
    const [isMobileSearchOpen, setMobileSearchOpen] = useState(false);

    useEffect(() => {
      if (location.pathname === '/products') {
        const params = new URLSearchParams(location.search);
        setSearchValue(params.get('search') ?? '');
      }
      setMobileSearchOpen(false);
    }, [location]);

    const handleSearchSubmit = (event: React.FormEvent) => {
      event.preventDefault();
      const trimmed = searchValue.trim();
      const target = trimmed
        ? `/products?search=${encodeURIComponent(trimmed)}`
        : '/products';
      navigate(target);
      setMobileSearchOpen(false);
    };

    const handleSearchIconClick = () => {
      if (
        typeof window !== 'undefined' &&
        window.matchMedia('(min-width: 768px)').matches
      ) {
        return;
      }
      setMobileSearchOpen((prev) => !prev);
    };

    const headerClassName = className
      ? `sticky top-0 z-50 w-full border-b border-gray-100 bg-white/90 backdrop-blur ${className}`
      : 'sticky top-0 z-50 w-full border-b border-gray-100 bg-white/90 backdrop-blur';

    const toggleMenu = () => {
      setMobileMenuOpen(!mobileMenuOpen);
    };

    const closeMenu = () => {
      setMobileMenuOpen(false);
    };

    return (
      <>
        <header ref={ref} className={headerClassName} {...rest}>
          <div className="container mx-auto w-full px-4">
            <div className="flex h-16 w-full items-center justify-between md:gap-8">
              <div className="flex items-center gap-8">
                <Link to="/" className="flex items-center gap-2">
                  <span className="text-xl">LUXE</span>
                </Link>

                <nav className="hidden items-center gap-6 text-sm font-medium text-gray-600 md:flex">
                  <Link
                    to="/products"
                    className="transition-opacity hover:opacity-70"
                  >
                    Produkte
                  </Link>
                  <Link
                    to="/sale"
                    className="transition-opacity hover:opacity-70"
                  >
                    Sale
                  </Link>

                  <Link
                    to="/account"
                    className="transition-opacity hover:opacity-70"
                  >
                    Konto
                  </Link>
                </nav>
              </div>

              <div className="flex items-center gap-3 md:w-full max-w-120 ml-auto">
                <form
                  onSubmit={handleSearchSubmit}
                  className="relative hidden h-8 w-full items-center gap-2 rounded-lg border border-orange-500 pl-4 shadow-sm md:flex"
                >
                  <Search className="h-4 w-4 text-gray-400" aria-hidden />
                  <Input
                    value={searchValue}
                    onChange={(event) => setSearchValue(event.target.value)}
                    placeholder="Produkte durchsuchen"
                    className="border-0 bg-transparent px-0 py-0 text-sm focus-visible:ring-0"
                  />
                  <Button
                    type="submit"
                    size="sm"
                    className="relative box-content h-full rounded-l-none rounded-r-lg"
                  >
                    Suchen
                  </Button>
                </form>

                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden"
                  onClick={handleSearchIconClick}
                  aria-label="Suche öffnen"
                >
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
                    {totalItems > 0 && (
                      <Badge className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full p-0">
                        {totalItems}
                      </Badge>
                    )}
                  </Button>
                </Link>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden"
                  onClick={toggleMenu}
                  aria-label="Menü öffnen"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
          {isMobileSearchOpen && (
            <div className="border-t border-gray-200 bg-white/95 px-4 py-3 backdrop-blur md:hidden">
              <form
                onSubmit={handleSearchSubmit}
                className="flex items-center gap-2"
              >
                <Input
                  value={searchValue}
                  onChange={(event) => setSearchValue(event.target.value)}
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
                  onClick={() => setMobileSearchOpen(false)}
                  aria-label="Suche schließen"
                >
                  <X className="h-4 w-4" />
                </Button>
              </form>
            </div>
          )}
        </header>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 z-[60] bg-black/50 md:hidden"
                onClick={closeMenu}
              />

              {/* Menu Panel */}
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'tween', duration: 0.3 }}
                className="fixed bottom-0 right-0 top-0 z-[70] w-full overflow-y-auto bg-white md:hidden"
              >
                <div className="flex h-full flex-col">
                  {/* Header */}
                  <div className="flex items-center justify-between border-b p-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">LUXE</span>
                    </div>
                    <Button variant="ghost" size="icon" onClick={closeMenu}>
                      <X className="h-12 w-12" />
                    </Button>
                  </div>

                  {/* Navigation */}
                  <nav className="flex-1 p-6">
                    <div className="space-y-1">
                      <Link
                        to="/products"
                        className="block py-4 text-2xl transition-opacity hover:opacity-70"
                        onClick={closeMenu}
                      >
                        Produkte
                      </Link>
                      <Link
                        to="/"
                        className="block py-4 text-2xl transition-opacity hover:opacity-70"
                        onClick={closeMenu}
                      >
                        Neu
                      </Link>
                      <Link
                        to="/sale"
                        className="block py-4 text-2xl transition-opacity hover:opacity-70"
                        onClick={closeMenu}
                      >
                        Sale
                      </Link>
                      <Link
                        to="/support"
                        className="block py-4 text-2xl transition-opacity hover:opacity-70"
                        onClick={ closeMenu }
                      >
                        Support
                      </Link>
                      <div className="mt-6 border-t pt-6">
                        <Link
                          to="/cart"
                          className="relative block items-center gap-2 py-4 text-xl transition-opacity hover:opacity-70"
                          onClick={closeMenu}
                        >
                          <span className="relative flex w-fit items-center gap-2">
                            <ShoppingCart className="h-5 w-5" />
                            Warenkorb
                            {totalItems > 0 && (
                              <Badge className="relative">{totalItems}</Badge>
                            )}
                          </span>
                        </Link>
                        <button className="flex w-full items-center gap-2 py-4 text-left text-xl transition-opacity hover:opacity-70">
                          <User className="h-5 w-5" />
                          Mein Konto
                        </button>
                        <button className="flex w-full items-center gap-2 py-4 text-left text-xl transition-opacity hover:opacity-70">
                          <Search className="h-5 w-5" />
                          Suchen
                        </button>
                      </div>
                    </div>
                  </nav>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </>
    );
  }
);

NavigationsBar.displayName = 'NavigationsBar';

export default NavigationsBar;
