import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Active section highlight based on scroll position
      const sections = navLinks.map((l) => l.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Events', href: '#events' },
    { name: 'Couple', href: '#couple' },
    { name: 'Venue', href: '#events' }
  ];

  // Scrolled: parchment glass | transparent: fully see-through over hero
  const navBg = isScrolled
    ? 'rgba(249,242,232,0.88)'
    : 'transparent';
  const navBorder = isScrolled ? '1px solid #D4A8B0' : '1px solid transparent';
  const navShadow = isScrolled ? '0 4px 24px rgba(74,18,48,0.08)' : 'none';
  const navBackdrop = isScrolled ? 'blur(14px)' : 'none';

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: navBg,
        borderBottom: navBorder,
        boxShadow: navShadow,
        backdropFilter: navBackdrop,
        WebkitBackdropFilter: navBackdrop,
        paddingTop: isScrolled ? '10px' : '20px',
        paddingBottom: isScrolled ? '10px' : '20px',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">

        {/* Logo — S & Y monogram */}
        <a
          href="#home"
          className="flex flex-col items-start leading-none group"
          style={{ textDecoration: 'none' }}
        >
          <span
            style={{
              fontFamily: "'Playfair Display', 'Georgia', serif",
              fontStyle: 'italic',
              fontSize: '1.4rem',
              color: '#4A1230',
              letterSpacing: '0.06em',
              lineHeight: 1,
              transition: 'color 0.3s',
            }}
          >
            S <span style={{ color: '#C9A84C' }}>&</span> Y
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.name}
                href={link.href}
                style={{
                  fontSize: '0.7rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.2em',
                  color: isActive ? '#4A1230' : '#8B6E5A',
                  textDecoration: 'none',
                  position: 'relative',
                  paddingBottom: '3px',
                  transition: 'color 0.3s',
                  fontWeight: isActive ? '600' : '400',
                }}
                onMouseEnter={e => e.currentTarget.style.color = '#4A1230'}
                onMouseLeave={e => e.currentTarget.style.color = isActive ? '#4A1230' : '#8B6E5A'}
              >
                {link.name}
                {/* Gold underline for active */}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 right-0 h-px"
                    style={{ background: '#C9A84C' }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden flex items-center justify-center"
          style={{
            color: '#4A1230',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
          }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen
            ? <X size={22} strokeWidth={1.5} />
            : <Menu size={22} strokeWidth={1.5} />
          }
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="absolute top-full left-0 right-0 md:hidden flex flex-col items-center py-8 gap-6"
            style={{
              background: 'rgba(249,242,232,0.97)',
              borderBottom: '1px solid #D4A8B0',
              boxShadow: '0 8px 32px rgba(74,18,48,0.10)',
              backdropFilter: 'blur(16px)',
            }}
          >
            {/* Bismillah in mobile menu */}
            <p
              style={{
                fontSize: '0.65rem',
                letterSpacing: '0.15em',
                color: '#8B6E5A',
                textTransform: 'uppercase',
                marginBottom: '4px',
              }}
            >
              Sana Nasrin &amp; Yasir Shan
            </p>

            {/* Gold rule */}
            <div className="flex items-center gap-3 w-40">
              <div className="flex-1 h-px" style={{ background: '#C9A84C' }} />
              <span style={{ color: '#C9A84C', fontSize: '10px' }}>✦</span>
              <div className="flex-1 h-px" style={{ background: '#C9A84C' }} />
            </div>

            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  fontSize: '0.7rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.25em',
                  color: activeSection === link.href.replace('#', '') ? '#4A1230' : '#8B6E5A',
                  textDecoration: 'none',
                  fontWeight: activeSection === link.href.replace('#', '') ? '600' : '400',
                }}
              >
                {link.name}
              </motion.a>
            ))}

            {/* Gold rule */}
            <div className="flex items-center gap-3 w-40">
              <div className="flex-1 h-px" style={{ background: '#C9A84C' }} />
              <span style={{ color: '#C9A84C', fontSize: '10px' }}>✦</span>
              <div className="flex-1 h-px" style={{ background: '#C9A84C' }} />
            </div>

            {/* Date & venue pill */}
            <div
              className="flex flex-col items-center px-6 py-3 rounded-full"
              style={{ background: '#4A1230', border: '1px solid #C9A84C' }}
            >
              <span style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: '#E8CC7A', textTransform: 'uppercase' }}>
                Nikkah · 11:00 AM
              </span>
              <span style={{ fontSize: '0.6rem', color: '#D4A8B0', letterSpacing: '0.1em', marginTop: '2px' }}>
                27 July 2026 · Taj Palace Auditorium
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;