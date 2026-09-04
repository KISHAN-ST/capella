import React, { useState, useMemo } from 'react';
import { PageBanner } from '../components/PageBanner';
import { CAKES_DATA, CakeItem, getCakeImage } from '../data/cakesData';
import {
  Search,
  MessageSquare,
  Phone,
  X,
  Cake as CakeIcon
} from 'lucide-react';

export const Cakes: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'buttercream' | 'freshcream' | 'special' | 'fusion'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCake, setSelectedCake] = useState<CakeItem | null>(null);
  const [selectedWeight, setSelectedWeight] = useState<'half' | 'one'>('half');

  // Filter cakes by category and search query
  const filteredCakes = useMemo(() => {
    return CAKES_DATA.filter((cake) => {
      const matchesCategory = selectedCategory === 'all' || cake.category === selectedCategory;
      const matchesSearch =
        cake.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cake.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cake.spongeType.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cake.flavorNotes.some((f) => f.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const getWhatsAppLink = (cake: CakeItem) => {
    const weightLabel = selectedWeight === 'half' ? '½ kg' : '1 kg';
    const price = selectedWeight === 'half' ? cake.halfKgPrice : cake.oneKgPrice;
    const message = encodeURIComponent(
      `Hi Capella Bakery & Patisserie, I would like to order the 100% Eggless *${cake.name}* (${weightLabel} - ₹${price}). Please share confirmation and availability!`
    );
    return `https://wa.me/918123703000?text=${message}`;
  };

  const handleOpenCake = (cake: CakeItem) => {
    setSelectedCake(cake);
  };

  return (
    <main className="cakes-page-wrapper">
      {/* Page Banner */}
      <PageBanner
        title="CUSTOM CAKE LOOKBOOK"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Cakes Lookbook' }
        ]}
      />

      {/* Main Catalog Section - Clean & Direct */}
      <section style={{ padding: '36px 0 80px', backgroundColor: '#ffffff' }}>
        <div className="container">
          {/* Minimalist Lookbook Navigation & Search Toolbar */}
          <div className="cake-lookbook-controls">
            {/* Category Filter Pills */}
            <div className="cake-lookbook-categories">
              <button
                type="button"
                className={`category-tab-btn ${selectedCategory === 'all' ? 'active' : ''}`}
                onClick={() => setSelectedCategory('all')}
              >
                ALL CAKES ({CAKES_DATA.length})
              </button>
              <button
                type="button"
                className={`category-tab-btn ${selectedCategory === 'buttercream' ? 'active' : ''}`}
                onClick={() => setSelectedCategory('buttercream')}
              >
                BUTTERCREAM (10)
              </button>
              <button
                type="button"
                className={`category-tab-btn ${selectedCategory === 'freshcream' ? 'active' : ''}`}
                onClick={() => setSelectedCategory('freshcream')}
              >
                FRESH CREAM (10)
              </button>
              <button
                type="button"
                className={`category-tab-btn ${selectedCategory === 'special' ? 'active' : ''}`}
                onClick={() => setSelectedCategory('special')}
              >
                SPECIAL CAKES (13)
              </button>
              <button
                type="button"
                className={`category-tab-btn ${selectedCategory === 'fusion' ? 'active' : ''}`}
                onClick={() => setSelectedCategory('fusion')}
              >
                INDIAN FUSION (2)
              </button>
            </div>

            {/* Elegant Fixed-Width Centered Search Bar */}
            <div className="cake-search-center-wrap">
              <div className="cakes-search-wrap">
                <Search size={16} className="search-icon" style={{ color: 'var(--color-gold)' }} />
                <input
                  type="text"
                  placeholder="Search 35 cake varieties by flavor or name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="cakes-search-input"
                />
                {searchQuery && (
                  <button type="button" onClick={() => setSearchQuery('')} className="search-clear-btn" aria-label="Clear Search">
                    <X size={14} />
                  </button>
                )}
              </div>
            </div>

            {/* Refined Status Strip */}
            <div className="catalog-status-strip">
              <span>SHOWING <strong>{filteredCakes.length}</strong> CAKE CREATIONS</span>
              <span className="status-hint">All 100% eggless • Click any cake to inspect recipe layers & order</span>
            </div>
          </div>

          {/* Pure Lookbook 3-Column Card Grid */}
          {filteredCakes.length === 0 ? (
            <div className="empty-catalog-state">
              <CakeIcon size={44} style={{ color: 'var(--color-gold)' }} />
              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', marginTop: '12px' }}>
                NO CAKES FOUND
              </h4>
              <p style={{ color: '#777', fontSize: '0.88rem' }}>
                No cakes matched your search "{searchQuery}".
              </p>
              <button
                type="button"
                className="btn-secondary"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
              >
                RESET FILTERS
              </button>
            </div>
          ) : (
            <div className="lookbook-grid">
              {filteredCakes.map((cake) => (
                <article
                  key={cake.id}
                  className="lookbook-card"
                  onClick={() => handleOpenCake(cake)}
                >
                  {/* High-Resolution Artisanal Cake Photography */}
                  <div className="lookbook-card-media">
                    <img
                      src={getCakeImage(cake)}
                      alt={cake.name}
                      className="lookbook-card-img"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (!target.src.includes('photo-1578985545062')) {
                          target.src = 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=700&q=80';
                        }
                      }}
                    />
                    <div className="lookbook-card-overlay">
                      <span className="lookbook-overlay-text">VIEW RECIPE & ORDER</span>
                    </div>
                    {cake.badge && (
                      <span className="lookbook-card-badge">{cake.badge}</span>
                    )}
                  </div>

                  {/* Clean, Spacious Editorial Card Body */}
                  <div className="lookbook-card-body">
                    <span className="lookbook-cat-tag">{cake.categoryLabel}</span>
                    <h3 className="lookbook-card-name">{cake.name}</h3>
                    <p className="lookbook-card-desc">{cake.description}</p>

                    {/* Price & Action Row */}
                    <div className="lookbook-footer">
                      <div className="lookbook-price-pair">
                        <div className="lookbook-price-col">
                          <span className="lookbook-weight-unit">½ KG</span>
                          <span className="lookbook-price-val">₹{cake.halfKgPrice}</span>
                        </div>
                        <div className="lookbook-price-divider" />
                        <div className="lookbook-price-col">
                          <span className="lookbook-weight-unit">1 KG</span>
                          <span className="lookbook-price-val">₹{cake.oneKgPrice}</span>
                        </div>
                      </div>

                      <button
                        type="button"
                        className="lookbook-order-trigger-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleOpenCake(cake);
                        }}
                      >
                        ORDER
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Bespoke Custom Cake Advisory Banner */}
          <div className="custom-cake-advisory">
            <div style={{ maxWidth: '680px' }}>
              <span className="section-subtitle" style={{ textAlign: 'left', marginBottom: '6px' }}>
                BESPOKE DESIGN & CELEBRATIONS
              </span>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.9rem', color: '#1a1a1a', marginBottom: '10px' }}>
                CUSTOM 2-TIER & THEME CAKES
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: '1.7' }}>
                All Capella cakes are <strong>100% eggless</strong>, baked fresh in our 142-year-old villa kitchen on Bejai Church Road. We handcraft bespoke wedding tiers, minimalist Korean bento cakes, and custom anniversary florals. Please place custom tiered orders 24–48 hours in advance.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <a
                href="https://wa.me/918123703000?text=Hi%20Capella,%20I%20would%20like%20to%20discuss%20a%20bespoke%20custom%20cake%20for%20my%20event!"
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
                style={{ backgroundColor: '#25D366' }}
              >
                <MessageSquare size={16} /> WHATSAPP CUSTOM INQUIRY
              </a>
              <a href="tel:+918123703000" className="btn-secondary">
                <Phone size={16} /> CALL +91 81237 03000
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          LUXURY CAKE DETAILS & WHATSAPP ORDER MODAL
          ========================================================= */}
      {selectedCake && (
        <div className="cake-modal-backdrop" onClick={() => setSelectedCake(null)}>
          <div className="cake-modal-box" onClick={(e) => e.stopPropagation()}>
            {/* Top Hero Photo with Close Trigger & Floating Badges */}
            <div className="modal-hero-media">
              <img
                src={getCakeImage(selectedCake)}
                alt={selectedCake.name}
                className="modal-hero-img"
              />
              <div className="modal-hero-overlay" />
              <span className="modal-badge-eggless">100% EGGLESS</span>
              {selectedCake.badge && (
                <span className="modal-badge-special">{selectedCake.badge}</span>
              )}
              <button
                type="button"
                className="modal-close-floating"
                onClick={() => setSelectedCake(null)}
                aria-label="Close Modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body Content */}
            <div className="cake-modal-body">
              <span className="modal-category-tag">{selectedCake.categoryLabel}</span>
              <h2 className="modal-cake-title">{selectedCake.name}</h2>
              <p className="modal-cake-desc">{selectedCake.description}</p>

              {/* Artisanal Recipe Highlights */}
              <div className="modal-recipe-grid">
                <div className="modal-recipe-item">
                  <span className="recipe-label">SPONGE CRUMB</span>
                  <span className="recipe-val">{selectedCake.spongeType}</span>
                </div>
                <div className="modal-recipe-item">
                  <span className="recipe-label">FROSTING COAT</span>
                  <span className="recipe-val">{selectedCake.frostingType}</span>
                </div>
              </div>

              {/* Flavor Profile Tags */}
              {selectedCake.flavorNotes && selectedCake.flavorNotes.length > 0 && (
                <div className="modal-flavor-row">
                  <span className="flavor-label">FLAVOR PROFILE:</span>
                  <div className="flavor-chips">
                    {selectedCake.flavorNotes.map((note, i) => (
                      <span key={i} className="flavor-chip">{note}</span>
                    ))}
                  </div>
                </div>
              )}

              {/* Size & Servings Selector */}
              <div className="modal-size-box">
                <div className="modal-size-header">
                  <span>CHOOSE WEIGHT & SERVINGS:</span>
                  <span className="modal-size-active-price">
                    ₹{selectedWeight === 'half' ? selectedCake.halfKgPrice : selectedCake.oneKgPrice}
                  </span>
                </div>
                <div className="modal-size-options">
                  <button
                    type="button"
                    className={`modal-size-btn ${selectedWeight === 'half' ? 'active' : ''}`}
                    onClick={() => setSelectedWeight('half')}
                  >
                    <span className="size-btn-title">½ KG • ₹{selectedCake.halfKgPrice}</span>
                    <span className="size-btn-sub">Serves 3–4 Guests (6" Tier)</span>
                  </button>
                  <button
                    type="button"
                    className={`modal-size-btn ${selectedWeight === 'one' ? 'active' : ''}`}
                    onClick={() => setSelectedWeight('one')}
                  >
                    <span className="size-btn-title">1 KG • ₹{selectedCake.oneKgPrice}</span>
                    <span className="size-btn-sub">Serves 8–10 Guests (8" Tier)</span>
                  </button>
                </div>
              </div>

              {/* Order Actions */}
              <div className="modal-actions-row">
                <a
                  href={getWhatsAppLink(selectedCake)}
                  target="_blank"
                  rel="noreferrer"
                  className="modal-whatsapp-btn"
                >
                  <MessageSquare size={18} />
                  <span>ORDER ON WHATSAPP • ₹{selectedWeight === 'half' ? selectedCake.halfKgPrice : selectedCake.oneKgPrice}</span>
                </a>
                <a
                  href="tel:+918123703000"
                  className="modal-call-btn"
                  title="Call +91 81237 03000"
                >
                  <Phone size={18} />
                </a>
              </div>

              <p className="modal-footnote">
                Handcrafted fresh to order at our 142-year-old villa kitchen on Bejai Church Road. Please order 24–48h in advance.
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};
