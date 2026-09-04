import React, { useState } from 'react';
import { PageBanner } from '../components/PageBanner';
import { SectionHeader } from '../components/SectionHeader';
import { MenuItemRow } from '../components/MenuItemRow';
import { STARTERS_MENU, MAINS_MENU, DESSERTS_MENU, DRINKS_MENU } from '../data/menuData';
import { Phone, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Menu: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'starters' | 'mains' | 'desserts' | 'drinks'>('all');

  return (
    <main>
      {/* Banner */}
      <PageBanner
        title="OUR CULINARY MENU"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Menu' }
        ]}
      />

      {/* Category Filter Pills */}
      <div style={{ backgroundColor: '#faf8f5', padding: '24px 0', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div className="gallery-filters" style={{ margin: 0 }}>
            <button
              type="button"
              className={`gallery-filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('all')}
            >
              ALL CREATIONS
            </button>
            <button
              type="button"
              className={`gallery-filter-btn ${selectedCategory === 'starters' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('starters')}
            >
              AWESOME STARTERS
            </button>
            <button
              type="button"
              className={`gallery-filter-btn ${selectedCategory === 'mains' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('mains')}
            >
              STUNNING MAINS
            </button>
            <button
              type="button"
              className={`gallery-filter-btn ${selectedCategory === 'desserts' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('desserts')}
            >
              100% EGGLESS PATISSERIE
            </button>
            <button
              type="button"
              className={`gallery-filter-btn ${selectedCategory === 'drinks' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('drinks')}
            >
              SPECIALTY BEVERAGES
            </button>
          </div>
        </div>
      </div>

      {/* 1. AWESOME STARTERS (Matching Appetito Image) */}
      {(selectedCategory === 'all' || selectedCategory === 'starters') && (
        <section style={{ padding: '80px 0', backgroundColor: '#ffffff' }}>
          <div className="container">
            <SectionHeader
              subtitle="TASTY AND CRUNCHY"
              title="AWESOME STARTERS"
              description="Artisanal sourdough tartines, warm ciabatta sandwiches, golden eggs benedict, and truffle-infused nibbles prepared fresh to order."
            />
            <div className="menu-grid-2col">
              {STARTERS_MENU.map((item) => (
                <MenuItemRow key={item.id} item={item} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 2. STUNNING MAINS (Matching Appetito Image) */}
      {(selectedCategory === 'all' || selectedCategory === 'mains') && (
        <section style={{ padding: '80px 0', backgroundColor: '#faf8f5', borderTop: '1px solid var(--color-border)' }}>
          <div className="container">
            <SectionHeader
              subtitle="TASTY AND CRUNCHY"
              title="STUNNING MAINS"
              description="Comforting European-style pastas, herb-seared chicken supreme, creamy wild mushroom risotto, and nourishing Mediterranean grain bowls."
            />
            <div className="menu-grid-2col">
              {MAINS_MENU.map((item) => (
                <MenuItemRow key={item.id} item={item} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 3. 100% EGGLESS PATISSERIE & DESSERTS */}
      {(selectedCategory === 'all' || selectedCategory === 'desserts') && (
        <section style={{ padding: '80px 0', backgroundColor: '#ffffff', borderTop: '1px solid var(--color-border)' }}>
          <div className="container">
            <SectionHeader
              subtitle="100% EGGLESS LUXURY"
              title="BAKERY & PATISSERIE"
              description="Capella’s signature eggless wonders: molten Basque cheesecakes, rich Nutella bakes, delicate Parisian macarons, and daily bento creations."
            />
            <div className="menu-grid-2col">
              {DESSERTS_MENU.map((item) => (
                <MenuItemRow key={item.id} item={item} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. SPECIALTY BEVERAGES */}
      {(selectedCategory === 'all' || selectedCategory === 'drinks') && (
        <section style={{ padding: '80px 0', backgroundColor: '#faf8f5', borderTop: '1px solid var(--color-border)' }}>
          <div className="container">
            <SectionHeader
              subtitle="HAND-CRAFTED & REFRESHING"
              title="SPECIALTY BREWS & BEVERAGES"
              description="Ceremonial Uji matcha, Spanish iced lattes with condensed milk, cold brew tonics, and Belgian melted dark hot chocolates."
            />
            <div className="menu-grid-2col">
              {DRINKS_MENU.map((item) => (
                <MenuItemRow key={item.id} item={item} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Custom Celebration Cakes Banner */}
      <section style={{ backgroundColor: 'var(--color-dark)', color: '#ffffff', padding: '70px 0' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '30px' }}>
          <div style={{ maxWidth: '650px' }}>
            <span style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-sans)', fontSize: '0.78rem', letterSpacing: '0.2em', fontWeight: 600, display: 'block', marginBottom: '8px' }}>
              BESPOKE ORDERS & CELEBRATIONS
            </span>
            <h3 style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '12px' }}>
              NEED A CUSTOM 100% EGGLESS CAKE?
            </h3>
            <p style={{ color: '#aaa', fontSize: '0.92rem', lineHeight: '1.6' }}>
              We handcraft bespoke multi-tier birthday cakes, minimalist aesthetic bento cakes, and dessert hampers for your special occasions. Pre-orders are recommended 24–48 hours in advance.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a
              href="tel:+918123703000"
              className="btn-primary"
              style={{ backgroundColor: 'var(--color-gold)', color: '#111' }}
            >
              <Phone size={16} /> CALL TO ORDER
            </a>
            <Link to="/reservation" className="btn-secondary" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.4)', backgroundColor: 'transparent' }}>
              <Calendar size={16} /> BOOK A TABLE
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};
