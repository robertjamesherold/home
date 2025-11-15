import { forwardRef } from 'react'
import { useNavigationBar } from './hooks'
import { MainMenu, MobileMenu } from './components'
import { NavigationsLinksData } from './data'


const NavigationsBar = forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>( ( _, ref ) =>
{
  const { totalItems,
    searchValue,
    isMobileSearchOpen,
    mobileMenuOpen,
    handleSearchIconClick,
    setSearchValue,
    handleSearchSubmit,
    toggleMenu,
    closeMenu,
  } = useNavigationBar()


    return (
      <>
        <MainMenu
          ref={ ref }
          data={ NavigationsLinksData }
          isMobileSearchOpen={ isMobileSearchOpen }
          onSubmit={ handleSearchSubmit }
          onChange={ ( event ) => setSearchValue( event.target.value ) }
          searchValue={ searchValue }
          showMenu={ toggleMenu }
          closeMenu={ closeMenu }
          showMobileSearch={ handleSearchIconClick }
          totalItems={ totalItems }
        />

        <MobileMenu
          data={ NavigationsLinksData }
          mobileMenuOpen={ mobileMenuOpen }
          closeMenu={ closeMenu }
          totalItems={ totalItems }
        />
      </>
  )
} );

export default NavigationsBar;
