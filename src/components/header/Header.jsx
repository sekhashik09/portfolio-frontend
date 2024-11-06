import React, { useEffect, useState } from 'react';
import './Header.css';
import Language from '../language/Language';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={isSticky ? 'sticky' : ''}>
      <a href="#" className="logo">DevUne<span>X.</span></a>
      <div className="bx bx-menu" id="menu-icon" onClick={handleMenuToggle}></div>
      <ul className={`navlist ${isMenuOpen ? 'open' : ''}`}>
        <li><a href="#home" onClick={handleMenuClose}>{t('header.home')}</a></li>
        <li><a href="#about" onClick={handleMenuClose}>{t('header.about')}</a></li>
        <li><a href="#skills" onClick={handleMenuClose}>{t('header.skills')}</a></li>
        <li><a href="#portfolio" onClick={handleMenuClose}>{t('header.portfolio')}</a></li>
        <li><a href="#contact" onClick={handleMenuClose}>{t('header.contact')}</a></li>
        <li><Language /></li>
      </ul>
    </header>
  );
};

export default Header;
