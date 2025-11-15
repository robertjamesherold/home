import { useEffect, useState, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'
import { useCart } from '@/hooks';

const useNavigationBar = () =>
{
  const { totalItems } = useCart();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const [isMobileSearchOpen, setMobileSearchOpen] = useState(false);

  const getSearchValueFromLocation = useCallback(() =>
  {
    const params = new URLSearchParams( location.search )
    const searchParam = params.get( 'search' )
    if ( searchParam )
    {
      return searchParam
    }

    if ( location.pathname.startsWith( '/products' ) )
    {
      const parts = location.pathname.split( '/' ).filter( Boolean )
      return parts[ 1 ] ?? ''
    }

    return ''
  }, [location.pathname, location.search])

  const [searchValue, setSearchValue] = useState(() => {
    return getSearchValueFromLocation()
  } );

  useEffect( () =>
  {
    const nextValue = getSearchValueFromLocation()
    if ( nextValue === searchValue ) return

    // schedule update asynchronously to avoid synchronous setState inside effect
    const timer = typeof window !== 'undefined' ? window.setTimeout( () => setSearchValue( nextValue ), 0 ) : null
    return () =>
    {
      if ( timer !== null ) window.clearTimeout( timer )
    }
  }, [ getSearchValueFromLocation, searchValue ] )

  // beim Abschicken navigieren auf /products mit ?search=<term>
  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = searchValue.trim();

    const params = new URLSearchParams()
    if ( trimmed )
    {
      params.set( 'search', trimmed )
    }

    navigate( {
      pathname: '/products',
      search: params.toString() ? `?${ params.toString() }` : '',
    } );
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

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };
  return {
    totalItems,
    searchValue,
    isMobileSearchOpen,
    mobileMenuOpen,
    handleSearchSubmit,
    handleSearchIconClick,
    setSearchValue,
    setMobileSearchOpen,
    toggleMenu,
    closeMenu,
    navigate,
  };
}

export default useNavigationBar;
