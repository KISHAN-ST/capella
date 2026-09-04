import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, Compass, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        {/* Top brand & quick contact strip matching Appetito reference */}
        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-brand-title">
              <span style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-serif)' }}>~</span> CAPELLA <span style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-serif)' }}>~</span>
            </span>
          </div>

          <div className="footer-contact-quick">
            <div className="quick-item">
              <Phone size={17} className="quick-icon" />
              <a href="tel:+918123703000">+91 81237 03000</a>
            </div>
            <div className="quick-item">
              <Clock size={17} className="quick-icon" />
              <span>Mon – Sun: 10:00 AM – 10:00 PM (11:30 PM on Peak Days)</span>
            </div>
          </div>
        </div>

        {/* 4-column footer body */}
        <div className="footer-main-grid">
          {/* Col 1: About */}
          <div>
            <h4 className="footer-col-title">THE 142-YEAR VILLA</h4>
            <p className="footer-text" style={{ marginBottom: '16px' }}>
              Capella Bakery & Patisserie is a minimalist, aesthetic sanctuary located on Bejai Church Road in Mangalore. Operating inside a plant-surrounded 142-year-old Portuguese-influenced villa, we craft 100% eggless artisanal patisserie, specialty brews, and gourmet savory dishes.
            </p>
            <div className="social-icons">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="social-icon-link"
                title="Instagram"
                aria-label="Capella Instagram"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a
                href="https://maps.google.com/?q=Capella+Patisserie+Kadri+Mangalore"
                target="_blank"
                rel="noreferrer"
                className="social-icon-link"
                title="Google Maps"
                aria-label="Directions on Google Maps"
              >
                <Compass size={16} />
              </a>
              <a
                href="https://www.zomato.com/mangalore/capella-patisserie-kadri"
                target="_blank"
                rel="noreferrer"
                className="social-icon-link"
                title="Zomato"
                aria-label="Order on Zomato"
              >
                <ExternalLink size={16} />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="footer-col-title">EXPLORE</h4>
            <ul className="footer-links">
              <li><Link to="/">Home Sanctuary</Link></li>
              <li><Link to="/about">Our Villa Heritage</Link></li>
              <li><Link to="/menu">Curated Menu</Link></li>
              <li><Link to="/cakes">Custom Cakes & Pricing</Link></li>
              <li><Link to="/gallery">Visual Gallery</Link></li>
              <li><Link to="/reservation">Reserve a Table</Link></li>
              <li><Link to="/contact">Find & Contact Us</Link></li>
            </ul>
          </div>

          {/* Col 3: Culinary Pillars */}
          <div>
            <h4 className="footer-col-title">SIGNATURES</h4>
            <ul className="footer-links">
              <li><Link to="/cakes">100% Eggless Custom Cakes</Link></li>
              <li><Link to="/menu">Burnt Basque Cheesecake</Link></li>
              <li><Link to="/menu">Ciabatta Chicken Sandwich</Link></li>
              <li><Link to="/menu">Chicken Aglio Olio Pasta</Link></li>
              <li><Link to="/menu">Artisanal Uji Matcha</Link></li>
              <li><Link to="/menu">Spanish & Hazelnut Iced Lattes</Link></li>
            </ul>
          </div>

          {/* Col 4: Visit & Address */}
          <div>
            <h4 className="footer-col-title">VISIT US</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.84rem', color: '#999' }}>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <MapPin size={18} style={{ color: 'var(--color-gold)', flexShrink: 0, marginTop: '2px' }} />
                <span>
                  Bejai Church Rd, Kodialguttu, Kadri, Mangaluru, Karnataka 575004
                </span>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <Phone size={16} style={{ color: 'var(--color-gold)', flexShrink: 0, marginTop: '2px' }} />
                <a href="tel:+918123703000" style={{ color: '#ccc' }}>+91 81237 03000</a>
              </div>
              <p style={{ fontSize: '0.78rem', color: '#777', marginTop: '6px' }}>
                Average Cost for Two: ₹400 – ₹1,000. Ample parking & serene verandah seating.
              </p>
            </div>
          </div>
        </div>

        {/* Footer bottom bar */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Capella Bakery & Patisserie, Mangalore. All Rights Reserved.</p>
          <p style={{ letterSpacing: '0.08em' }}>
            Crafted for aesthetic minimalist lovers & patisserie connoisseurs.
          </p>
        </div>
      </div>
    </footer>
  );
};
