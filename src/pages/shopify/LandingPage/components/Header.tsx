import { Logo, MenuIcon } from '../ui';
import { NavItemsData } from '../data';
import { Link } from 'react-router-dom'

const Header: React.FC<{ compact: boolean }> = ({ compact }) => {
    const navItems = NavItemsData
    return (

    <header className="flex flex-wrap items-center justify-between gap-6 py-6">
    <div className="flex items-center gap-6">
        <Logo />
      <button
        className="navbutton md:hidden"
        type="button"
        aria-label="Bereiche öffnen"
      >
        <MenuIcon className="h-4 w-4" />
        Browse
      </button>
      <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
        {navItems.map((item) => (
          <Link
            key={item.id}
            type="button"
            to={item.to}
            className={`navlink  ${
              item.active ? 'text-white' : ''
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
    <div className="flex items-center gap-4 text-white/70">
    
    </div>
  </header>
);

};

export default Header;