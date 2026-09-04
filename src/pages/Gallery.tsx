import React, { useState } from 'react';
import { PageBanner } from '../components/PageBanner';
import { GALLERY_ITEMS } from '../data/menuData';
import { GalleryItem } from '../types';
import { X, Play, Sparkles } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'villa' | 'desserts' | 'savory' | 'drinks'>('all');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const filteredItems = filter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === filter);

  return (
    <main>
      {/* Exact banner matching Appetito reference image: STANDARD THREE COLUMNS */}
      <PageBanner
        title="STANDARD THREE COLUMNS"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Portfolio', path: '/gallery' },
          { label: 'Standard Three Columns' }
        ]}
      />

      <section className="gallery-section">
        <div className="container">
          {/* Category Filter Pills */}
          <div className="gallery-filters">
            <button
              type="button"
              className={`gallery-filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              ALL GLIMPSES
            </button>
            <button
              type="button"
              className={`gallery-filter-btn ${filter === 'villa' ? 'active' : ''}`}
              onClick={() => setFilter('villa')}
            >
              HERITAGE VILLA
            </button>
            <button
              type="button"
              className={`gallery-filter-btn ${filter === 'desserts' ? 'active' : ''}`}
              onClick={() => setFilter('desserts')}
            >
              EGGLESS PATISSERIE
            </button>
            <button
              type="button"
              className={`gallery-filter-btn ${filter === 'savory' ? 'active' : ''}`}
              onClick={() => setFilter('savory')}
            >
              SAVORY BRUNCH
            </button>
            <button
              type="button"
              className={`gallery-filter-btn ${filter === 'drinks' ? 'active' : ''}`}
              onClick={() => setFilter('drinks')}
            >
              SPECIALTY BREWS
            </button>
          </div>

          {/* 3-Column Grid matching reference image */}
          <div className="gallery-grid-3col">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="gallery-card"
                onClick={() => setActiveItem(item)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') setActiveItem(item);
                }}
              >
                <div className="gallery-media">
                  {item.isVideo && item.videoSrc ? (
                    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        src={item.videoSrc}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                      <div style={{ position: 'absolute', bottom: '12px', right: '12px', background: 'rgba(0,0,0,0.6)', color: '#fff', borderRadius: '50%', width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Play size={12} fill="#fff" />
                      </div>
                    </div>
                  ) : (
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '12px',
                        color: 'var(--color-gold)'
                      }}
                    >
                      <Sparkles size={36} />
                      <span style={{ fontSize: '0.74rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#888' }}>
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
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeItem && (
        <div className="lightbox-modal" onClick={() => setActiveItem(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="lightbox-close"
              onClick={() => setActiveItem(null)}
              aria-label="Close Lightbox"
            >
              <X size={20} />
            </button>

            <div className="lightbox-body">
              {activeItem.isVideo && activeItem.videoSrc ? (
                <video
                  controls
                  autoPlay
                  src={activeItem.videoSrc}
                />
              ) : (
                <div
                  style={{
                    padding: '80px 40px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '16px',
                    color: 'var(--color-gold)'
                  }}
                >
                  <Sparkles size={54} />
                  <span style={{ color: '#ccc', letterSpacing: '0.14em', textTransform: 'uppercase', fontSize: '0.86rem' }}>
                    Artisanal Capella Capture
                  </span>
                </div>
              )}
            </div>

            <div className="lightbox-footer">
              <div>
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', letterSpacing: '0.12em', color: '#fff' }}>
                  {activeItem.title}
                </h4>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '0.9rem', fontStyle: 'italic', color: 'var(--color-gold)' }}>
                  {activeItem.categoryLabel}
                </span>
              </div>
              <span style={{ fontSize: '0.76rem', letterSpacing: '0.14em', color: '#888', textTransform: 'uppercase' }}>
                Capella Cafe Mangalore
              </span>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};
