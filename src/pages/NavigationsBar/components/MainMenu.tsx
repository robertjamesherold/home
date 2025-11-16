import { forwardRef } from 'react'
import { Container, Header, Row, Link, Nav } from '@layout/.'
import { DesktopAccountButton, DesktopCartButton, DesktopSearchButton, DesktopSearchForm, DesktopMenuButton, MobileSearchForm, LogoButton } from '../ui'
import type { NavigationsLinksData } from '../data'



type MainMenuProps = {
    data: typeof NavigationsLinksData;
    
    isMobileSearchOpen: boolean;
    showMobileSearch: () => void;

    onSubmit: ( event: React.FormEvent<HTMLFormElement> ) => void;
    onChange: ( event: React.ChangeEvent<HTMLInputElement> ) => void;

    searchValue: string;

    showMenu: () => void;
    closeMenu: () => void;

    totalItems: number
};

const MainMenu = forwardRef<HTMLElement, MainMenuProps>( ( {
    data,
    isMobileSearchOpen,
    onSubmit,
    onChange,
    searchValue,
    showMenu,
    closeMenu,
    showMobileSearch,
    totalItems,
}, ref ) =>
{
    return (
        <Header ref={ ref } className='sticky  top-0 z-50 w-full  border-b border-gray-300 bg-white/90 backdrop-blur'>
            <Container className="container mx-auto w-full px-4 ">
                <Row className="h-16 w-full items-center justify-between md:gap-8">
                    <Row className="items-center gap-8">
                        <LogoButton />
                        <Nav className="hidden items-center gap-6 text-sm font-medium text-gray-600 md:flex"> 
                            {data.map(({ href, text }) => (
                                <Link key={href} to={href} className="transition-opacity hover:opacity-70" text={text} />
                            ))}
                        </Nav>
                    </Row>
                     <Row className="flex items-center gap-3 md:w-full max-w-120 ml-auto">
                        <DesktopSearchForm
                            searchValue={ searchValue }
                            onChange={ onChange }
                            onSubmit={ onSubmit }
                        />
                        <DesktopSearchButton onClick={ showMobileSearch } />
                        <DesktopAccountButton />
                        <DesktopCartButton totalItems={ totalItems } />
                        <DesktopMenuButton onClick={ showMenu } />
                    </Row>
                </Row>
            </Container>
            <MobileSearchForm
                isMobileSearchOpen={ isMobileSearchOpen }
                searchValue={ searchValue }
                onChange={ onChange }
                onClick={ closeMenu }
                onSubmit={ onSubmit }
            />
        </Header >
    );
} )
export default MainMenu;
