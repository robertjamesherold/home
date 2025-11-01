import { PrimeLogo, MenuIcon, SearchIcon, UserIcon, ChevronDownIcon } from '../ui';
import { NavItemsData } from '../data';

const Header: React.FC<{ compact: boolean }> = ({ compact }) => {
    const navItems = NavItemsData
    return (

    <header className="flex flex-wrap items-center justify-between gap-6 py-6">
    <div className="flex items-center gap-6">
      <div className="flex items-center gap-2 text-xl font-semibold uppercase tracking-tight text-white">
        <PrimeLogo />
      </div>
      <button
        className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs font-semibold uppercase text-white/80 transition hover:border-white/40 hover:text-white md:hidden"
        type="button"
        aria-label="Bereiche öffnen"
      >
        <MenuIcon className="h-4 w-4" />
        Browse
      </button>
      <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
        {navItems.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`transition hover:text-white ${
              item.active ? 'text-white' : ''
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </div>
    <div className="flex items-center gap-4 text-white/70">
      <button
        type="button"
        className="flex size-10 items-center justify-center rounded-full border border-white/10 transition hover:border-white/40 hover:text-white"
        aria-label="Prime Video durchsuchen"
      >
        <SearchIcon className="h-5 w-5" />
      </button>
      <button
        type="button"
        className="hidden items-center gap-1 text-sm transition hover:text-white md:flex"
      >
        DE
        <ChevronDownIcon className="h-4 w-4" />
      </button>
      <button
        type="button"
        className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:border-white/40"
      >
        <UserIcon className="h-4 w-4" />
        {compact ? 'Ich' : 'Mein Bereich'}
      </button>
    </div>
  </header>
);

};

export default Header;