import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Calendar, Phone, MapPin } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navItems = [
    { path: '/', label: 'HOME' },
    { path: '/about', label: 'ABOUT US' },
    { path: '/menu', label: 'MENU' },
    { path: '/cakes', label: 'CAKES' },
    { path: '/gallery', label: 'GALLERY' },
    { path: '/reservation', label: 'RESERVATIONS' },
    { path: '/contact', label: 'CONTACT US' }
  ];

  const isHome = location.pathname === '/';
  const isTransparent = isHome && !scrolled;

  return (
    <>
      <header
        className={`site-header ${scrolled ? 'scrolled' : ''} ${
          isTransparent ? 'header-transparent' : 'header-solid'
        }`}
      >
        <div className="nav-container">
          {/* Logo with vintage decorative tildes ~ CAPELLA ~ */}
          <Link to="/" className="brand-logo" aria-label="Capella Bakery & Patisserie Home">
            <span className="brand-title">
              <span className="brand-tilde">~</span>
              CAPELLA
              <span className="brand-tilde">~</span>
            </span>
            <span className="brand-sub">BAKERY & PATISSERIE</span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav aria-label="Primary Navigation">
            <ul className="nav-links">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Action CTAs & Mobile Trigger */}
          <div className="nav-actions">
            <Link to="/reservation" className="nav-reserve-btn">
              BOOK A TABLE
            </Link>
            <button
              className="mobile-toggle"
              onClick={() => setMobileOpen(true)}
              aria-label="Open Navigation Menu"
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Backdrop */}
      {mobileOpen && (
        <div
          className="mobile-drawer-backdrop"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <aside className={`mobile-drawer ${mobileOpen ? 'open' : ''}`}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
          <div className="brand-logo" style={{ alignItems: 'flex-start' }}>
            <span className="brand-title" style={{ fontSize: '1.4rem' }}>
              <span className="brand-tilde">~</span> CAPELLA <span className="brand-tilde">~</span>
            </span>
            <span className="brand-sub" style={{ fontSize: '0.55rem' }}>BAKERY & PATISSERIE</span>
          </div>
          <button onClick={() => setMobileOpen(false)} aria-label="Close Menu" style={{ color: '#222' }}>
            <X size={26} />
          </button>
        </div>

        <nav style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.9rem',
                fontWeight: 600,
                letterSpacing: '0.14em',
                color: location.pathname === item.path ? 'var(--color-gold)' : '#222',
                padding: '6px 0',
                borderBottom: '1px solid #f0ede8'
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div style={{ marginTop: 'auto', paddingTop: '24px', borderTop: '1px solid #eae5dd', display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <Link
            to="/reservation"
            className="btn-primary"
            style={{ width: '100%', justifyContent: 'center', padding: '14px 20px', fontSize: '0.74rem' }}
          >
            <Calendar size={16} /> BOOK A TABLE
          </Link>
          <a
            href="tel:+918123703000"
            style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: '#555' }}
          >
            <Phone size={15} style={{ color: 'var(--color-gold)' }} /> +91 81237 03000
          </a>
          <span style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: '#777' }}>
            <MapPin size={15} style={{ color: 'var(--color-gold)', flexShrink: 0 }} /> Bejai Church Rd, Kadri, Mangalore
          </span>
        </div>
      </aside>
    </>
  );
};
