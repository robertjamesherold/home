import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '@/hooks';

const useNavigationBar = () => {
  const { totalItems } = useCart();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  // beim Abschicken navigieren auf /products mit ?search=<term>
  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = searchValue.trim();

    const searchQuery = trimmed ? `?search=${encodeURIComponent(trimmed)}` : '';
    navigate(`/products${searchQuery}`);
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
};

export default useNavigationBar;
