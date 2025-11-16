import { useNavigationBar } from './hooks'
import { Nav } from '@/layout'
import { MainMenu, MobileMenu } from './components'
import { NavigationsLinksData } from './data'
import { forwardRef } from 'react'


const NavigationsBar = forwardRef<HTMLElement>( ( props, ref ) =>
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
      <Nav ref={ ref } { ...props }>
        <MainMenu   
          data={ NavigationsLinksData }
          isMobileSearchOpen={ isMobileSearchOpen }
          onSubmit={ handleSearchSubmit }
          onChange={ ( event ) => setSearchValue( event.target.value ) }
          searchValue={ searchValue }
          showMenu={ toggleMenu }
          closeMenu={ handleSearchIconClick }
          showMobileSearch={ handleSearchIconClick }
          totalItems={ totalItems }
        />

        <MobileMenu
          data={ NavigationsLinksData }
          mobileMenuOpen={ mobileMenuOpen }
          closeMenu={ closeMenu }
          totalItems={ totalItems }
        />
      </Nav>
  )
}
);

export default NavigationsBar;
