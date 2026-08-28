import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const navLinks = [
  { label: 'Story', id: 'story' },
  { label: 'Menu', id: 'menu' },
  { label: 'Chef', id: 'chef' },
  { label: 'Experience', id: 'experience' },
  { label: 'Ingredients', id: 'ingredients' },
  { label: 'Gallery', id: 'gallery' },
  { label: 'Contact', id: 'contact' },
];

export default function Navbar({ theme, cycleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const getThemeInfo = () => {
    if (theme === 'champagne') return { icon: '✨', label: 'Champagne Gold' };
    if (theme === 'pure-white') return { icon: '⚪', label: 'Pure White' };
    return { icon: '🌙', label: 'Midnight Noir' };
  };

  const currentTheme = getThemeInfo();

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        <div className="navbar__inner">
          {/* Brand Wordmark Logo */}
          <div className="navbar__logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <span className="navbar__logo-symbol">✦</span>
            <div className="navbar__logo-text">
              <span className="navbar__logo-mark">EMBER &amp; OAK</span>
              <span className="navbar__logo-sub">FINE DINING &amp; GRILL</span>
            </div>
          </div>

          {/* Center Links */}
          <ul className="navbar__links">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button className="navbar__link" onClick={() => scrollTo(link.id)}>
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Right Controls: 3-Mode Theme Switcher + Reserve Button */}
          <div className="navbar__right">
            
            {/* 3-Mode Theme Toggle Button */}
            <button
              className="theme-switcher-btn"
              onClick={cycleTheme}
              title={`Current: ${currentTheme.label}. Click to switch theme.`}
              aria-label="Cycle Theme"
            >
              <span className="theme-switcher-icon">{currentTheme.icon}</span>
              <span className="theme-switcher-text">{currentTheme.label}</span>
            </button>

            {/* Reserve CTA */}
            <button className="navbar__cta" onClick={() => scrollTo('contact')}>
              Reserve a Table
            </button>

            {/* Mobile Hamburger */}
            <button
              className={`navbar__hamburger ${menuOpen ? 'active' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mobile-menu__header">
              <span className="navbar__logo-mark">EMBER &amp; OAK</span>
              <button className="mobile-menu__close" onClick={() => setMenuOpen(false)}>✕</button>
            </div>

            <ul className="mobile-menu__links">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.05, duration: 0.3 }}
                >
                  <button onClick={() => scrollTo(link.id)}>{link.label}</button>
                </motion.li>
              ))}
            </ul>

            <div className="mobile-menu__footer">
              <button className="theme-switcher-btn" onClick={cycleTheme}>
                <span>{currentTheme.icon} {currentTheme.label}</span>
              </button>
              <button className="btn-primary" onClick={() => scrollTo('contact')}>
                Reserve a Table
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
