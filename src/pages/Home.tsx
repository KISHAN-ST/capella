import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SectionHeader } from '../components/SectionHeader';
import { MenuItemRow } from '../components/MenuItemRow';
import { STARTERS_MENU, GALLERY_ITEMS } from '../data/menuData';
import { Check, ArrowRight, Sparkles, Coffee, Cake, UtensilsCrossed, Calendar } from 'lucide-react';

export const Home: React.FC = () => {
  const [activeOfferTab, setActiveOfferTab] = useState<'meals' | 'desserts' | 'drinks'>('meals');

  // Featured starters preview (first 6 items)
  const previewStarters = STARTERS_MENU.slice(0, 6);
  // Featured gallery preview (first 3 items matching 3-column layout)
  const previewGallery = GALLERY_ITEMS.slice(0, 3);

  const offerData = {
    meals: {
      title: 'CIABATTA CHICKEN SANDWICH',
      sub: 'Warm Artisanal Sourdough & Herb Aioli',
      price: '₹360',
      text: 'Our signature ciabatta is baked fresh daily in our villa oven, layered with tender herb-marinated chicken breast, sun-dried tomatoes, and wild garden rocket. A comforting lunch favorite.',
      bullets: [
        'Artisanal breads baked fresh daily from slow-fermented dough',
        'Locally sourced herbs, crisp garden greens, and farm produce',
        'House-made garlic aioli and aged balsamic vinaigrette',
        'Served warm and crisp in our sunlit plant-surrounded verandah'
      ]
    },
    desserts: {
      title: 'BURNT BASQUE CHEESECAKE',
      sub: 'Molten Caramelised Cream Cheese Center',
      price: '₹320',
      text: 'Capella’s crowning glory. A Spanish Basque cheesecake featuring a deep mahogany caramelised crust that gives way to an ultra-creamy, molten vanilla-infused center.',
      bullets: [
        'Proprietary recipe perfected over hundreds of artisanal bakes',
        'Pure European cream cheese, Madagascar vanilla, and rich dairy',
        'Caramelised crust with deep toffee notes and velvety melt-in-mouth core',
        'Mangalore’s most beloved dessert sensation since our patisserie inception'
      ]
    },
    drinks: {
      title: 'SPECIALTY CEREMONIAL MATCHA',
      sub: 'First-Harvest Japanese Uji Green Tea',
      price: '₹260',
      text: 'Whisked to perfection with bamboo chasen, our ceremonial grade matcha brings smooth umami notes paired with velvety steamed milk or served crisp over clear ice blocks.',
      bullets: [
        'Directly sourced ceremonial-grade matcha from Kyoto, Japan',
        'Whisked traditionally for a rich, vivid green froth and silky body',
        'Available with whole milk, oat milk, or sweetened almond milk',
        'The aesthetic drink of choice for afternoon catchups and solo dates'
      ]
    }
  };

  const currentOffer = offerData[activeOfferTab];

  return (
    <main>
      {/* ===================================================================
          HERO SECTION (Video Background + Black-Themed Lightweight Mask + Text)
          =================================================================== */}
      <section className="hero-video-section">
        {/* Background Video */}
        <video
          className="hero-video-bg"
          autoPlay
          loop
          muted
          playsInline
          src="/capella.mp4"
        />

        {/* Black-themed lightweight mask overlay */}
        <div className="hero-black-mask" />

        {/* Minimal direct text above mask */}
        <div className="hero-content">
          <h1 className="hero-title-dark">
            <span className="brand-tilde">~</span> CAPELLA <span className="brand-tilde">~</span>
          </h1>
          <p className="hero-sub-dark">BAKERY & PATISSERIE</p>

          <div className="hero-actions">
            <Link
              to="/menu"
              className="btn-primary"
              style={{ backgroundColor: 'var(--color-gold)', color: '#1a1a1a', padding: '14px 32px' }}
            >
              EXPLORE OUR MENU <ArrowRight size={16} />
            </Link>
            <Link
              to="/reservation"
              className="btn-secondary"
              style={{
                color: '#ffffff',
                borderColor: 'rgba(255, 255, 255, 0.65)',
                backgroundColor: 'rgba(0, 0, 0, 0.25)',
                backdropFilter: 'blur(6px)',
                padding: '13px 30px'
              }}
            >
              <Calendar size={16} /> RESERVE A TABLE
            </Link>
          </div>
        </div>
      </section>

      {/* ===================================================================
          TODAY'S BEST OFFER (Matching appetito image reference)
          =================================================================== */}
      <section className="offer-section">
        <div className="offer-bg-watermark">CAPELLA</div>
        <div className="container">
          <SectionHeader
            subtitle="TASTY AND CRUNCHY"
            title="TODAY'S BEST OFFER"
            description="From freshly assembled ciabatta sandwiches and hand-pulled pastas to our legendary eggless cheesecakes and ceremonial matcha."
          />

          <div className="offer-container">
            {/* Left circular dish hero presentation with drop shadow */}
            <div className="offer-visual">
              <div className="offer-plate">
                <div style={{ color: 'var(--color-gold)', marginBottom: '8px' }}>
                  {activeOfferTab === 'meals' && <UtensilsCrossed size={42} />}
                  {activeOfferTab === 'desserts' && <Cake size={42} />}
                  {activeOfferTab === 'drinks' && <Coffee size={42} />}
                </div>
                <h3 className="offer-plate-title">{currentOffer.title}</h3>
                <span className="offer-plate-sub">{currentOffer.sub}</span>
                <span className="offer-plate-price">{currentOffer.price}</span>
              </div>
            </div>

            {/* Right Tabs & Checklist Card */}
            <div>
              {/* 3 Tabs: MEALS | DESSERTS | DRINKS */}
              <div className="offer-tabs">
                <button
                  type="button"
                  className={`offer-tab-btn ${activeOfferTab === 'meals' ? 'active' : ''}`}
                  onClick={() => setActiveOfferTab('meals')}
                >
                  MEALS
                </button>
                <button
                  type="button"
                  className={`offer-tab-btn ${activeOfferTab === 'desserts' ? 'active' : ''}`}
                  onClick={() => setActiveOfferTab('desserts')}
                >
                  DESSERTS
                </button>
                <button
                  type="button"
                  className={`offer-tab-btn ${activeOfferTab === 'drinks' ? 'active' : ''}`}
                  onClick={() => setActiveOfferTab('drinks')}
                >
                  DRINKS
                </button>
              </div>

              {/* Tab Content Box */}
              <div className="offer-tab-card">
                <p className="offer-tab-text">{currentOffer.text}</p>

                <ul className="offer-checklist">
                  {currentOffer.bullets.map((bullet, idx) => (
                    <li key={idx} className="offer-check-item">
                      <Check className="offer-check-icon" size={18} />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                  <Link to="/menu" className="btn-primary" style={{ padding: '12px 28px' }}>
                    VIEW FULL MENU
                  </Link>
                  <Link to="/reservation" className="btn-secondary" style={{ padding: '11px 26px' }}>
                    BOOK A TABLE
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          AWESOME STARTERS SECTION (Matching appetito image reference)
          =================================================================== */}
      <section style={{ padding: '90px 0', backgroundColor: '#faf8f5', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <SectionHeader
            subtitle="TASTY AND CRUNCHY"
            title="AWESOME STARTERS"
            description="Crispy sourdough toasts, warm artisanal ciabatta, eggs benedict, and truffle-infused accompaniments prepared to order in our Mangalore kitchen."
          />

          <div className="menu-grid-2col">
            {previewStarters.map((dish) => (
              <MenuItemRow key={dish.id} item={dish} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <Link to="/menu" className="btn-primary">
              EXPLORE ALL DISHES & DESSERTS <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===================================================================
          STANDARD THREE COLUMNS GALLERY PREVIEW (Matching reference)
          =================================================================== */}
      <section className="gallery-section">
        <div className="container">
          <SectionHeader
            subtitle="INSTAGRAM-WORTHY MOMENTS"
            title="STANDARD THREE COLUMNS"
            description="Lush greenery, warm sunlight filtering through vintage timber windows, and fresh flowers on every table. A peaceful sanctuary on Bejai Church Road."
          />

          <div className="gallery-grid-3col">
            {previewGallery.map((item) => (
              <div key={item.id} className="gallery-card">
                <div className="gallery-media">
                  {item.isVideo && item.videoSrc ? (
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      src={item.videoSrc}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  ) : (
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '10px',
                        color: 'var(--color-gold)'
                      }}
                    >
                      <Sparkles size={32} />
                      <span style={{ fontSize: '0.75rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#999' }}>
                        Capella Moment
                      </span>
                    </div>
                  )}
                  <div className="gallery-overlay">
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.78rem', letterSpacing: '0.18em', fontWeight: 600 }}>
                      VIEW MOMENT
                    </span>
                  </div>
                </div>

                <div className="gallery-info">
                  <h3 className="gallery-card-title">{item.title}</h3>
                  <span className="gallery-card-cat">{item.categoryLabel}</span>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link to="/gallery" className="btn-secondary">
              SEE FULL GALLERY GRID <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===================================================================
          CROWD ADVISORY & RESERVATION CALLOUT
          =================================================================== */}
      <section style={{ backgroundColor: 'var(--color-dark)', color: '#ffffff', padding: '80px 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <span style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-sans)', fontSize: '0.78rem', letterSpacing: '0.25em', fontWeight: 600, display: 'block', marginBottom: '12px' }}>
            POPULAR WEEKEND DESTINATION
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: '#fff', marginBottom: '20px' }}>
            JOIN US IN THE HERITAGE VILLA
          </h2>
          <div className="gold-divider" />
          <p style={{ color: '#b5b5b5', fontSize: '0.96rem', lineHeight: '1.8', marginBottom: '32px' }}>
            Because of Capella’s viral popularity on social media, our villa can get quite lively during weekends and evenings. For relaxed solo dates, catchups with friends, or quiet work sessions, we warmly invite you to reserve your table ahead of time.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <Link to="/reservation" className="btn-primary" style={{ backgroundColor: 'var(--color-gold)', color: '#1a1a1a' }}>
              RESERVE YOUR TABLE
            </Link>
            <a href="tel:+918123703000" className="btn-secondary" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff', backgroundColor: 'transparent' }}>
              CALL: +91 81237 03000
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};
