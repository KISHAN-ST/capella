import React, { useState } from 'react';
import { CakeItem } from '../data/cakesData';

interface CakeAnatomyVisualizerProps {
  cake: CakeItem;
  size: 'half' | 'one';
}

export const CakeAnatomyVisualizer: React.FC<CakeAnatomyVisualizerProps> = ({ cake, size }) => {
  const [activeLayer, setActiveLayer] = useState<string | null>(null);

  // Derive realistic sponge and filling colors based on cake data
  const getSpongeColor = (cake: CakeItem) => {
    const name = cake.name.toLowerCase();
    if (name.includes('red velvet')) return '#881b25';
    if (name.includes('chocolate') || name.includes('truffle') || name.includes('dark forest') || name.includes('ganache') || name.includes('black forest')) return '#301b13';
    if (name.includes('rasmalai') || name.includes('mango')) return '#f5ce53';
    if (name.includes('pistachio')) return '#cadbb7';
    if (name.includes('carrot') || name.includes('caramel') || name.includes('biscoff')) return '#bf7a3b';
    if (name.includes('blueberry')) return '#574169';
    return '#f4e5c8'; // Classic golden vanilla sponge
  };

  const getFillingColor = (cake: CakeItem) => {
    const name = cake.name.toLowerCase();
    if (name.includes('blueberry')) return '#311f42';
    if (name.includes('caramel')) return '#c27d2b';
    if (name.includes('chocolate') || name.includes('truffle') || name.includes('ganache') || name.includes('oreo')) return '#24140e';
    if (name.includes('biscoff')) return '#a3551f';
    if (name.includes('rasmalai')) return '#ecd477';
    if (name.includes('red velvet cream cheese')) return '#fcfaf5';
    if (name.includes('rose pistachio')) return '#d9687e';
    if (name.includes('pineapple') || name.includes('mango')) return '#e5aa2b';
    if (name.includes('black forest')) return '#660b17';
    return cake.visualAesthetic.accentColor || '#d6ba94';
  };

  const spongeColor = getSpongeColor(cake);
  const fillingColor = getFillingColor(cake);
  const frostingColor = cake.visualAesthetic.baseColor || '#ffffff';
  const accentColor = cake.visualAesthetic.accentColor || '#c5a880';

  return (
    <div className="cake-anatomy-wrapper">
      {/* Visual Canvas Header */}
      <div
        className="anatomy-canvas"
        style={{
          background: `radial-gradient(circle at center 40%, #ffffff 0%, ${frostingColor}22 65%, #f2ede4 100%)`
        }}
      >
        {/* Top Badges */}
        <div className="canvas-header-strip">
          <span className="badge-tag eggless">100% EGGLESS</span>
          <span className="size-indicator-badge">
            {size === 'half' ? '½ KG (6" TIER)' : '1 KG (8" TIER)'}
          </span>
        </div>

        {/* =========================================================
            ARCHITECTURAL CAKE CROSS-SECTION (SVG ARTISTRY)
            ========================================================= */}
        <div className="cake-cut-stage">
          <svg
            viewBox="0 0 280 230"
            className="cake-slice-svg"
            aria-label={`Visual cross section of ${cake.name}`}
          >
            <defs>
              {/* Outer shadow */}
              <filter id="cakeDropShadow" x="-15%" y="-15%" width="130%" height="135%">
                <feDropShadow dx="0" dy="12" stdDeviation="10" floodColor="#1a1a1a" floodOpacity="0.18" />
              </filter>
              {/* Gradient for glossy frosting mantle */}
              <linearGradient id="frostingGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor={frostingColor} stopOpacity="0.95" />
                <stop offset="50%" stopColor="#ffffff" stopOpacity="0.4" />
                <stop offset="100%" stopColor={frostingColor} stopOpacity="0.95" />
              </linearGradient>
            </defs>

            <g filter="url(#cakeDropShadow)">
              {/* CAKE BASE PLATE */}
              <ellipse cx="140" cy="208" rx="100" ry="12" fill="#d9d2c5" opacity="0.6" />
              <ellipse cx="140" cy="206" rx="94" ry="10" fill="#ede7dc" />

              {/* TIER 3: BOTTOM SPONGE */}
              <path
                d="M 60 160 L 220 160 L 220 196 A 14 14 0 0 1 206 206 L 74 206 A 14 14 0 0 1 60 196 Z"
                fill={spongeColor}
                onMouseEnter={() => setActiveLayer('sponge')}
                onMouseLeave={() => setActiveLayer(null)}
                style={{ cursor: 'pointer', transition: 'filter 0.2s' }}
              />

              {/* FILLING LAYER 2 */}
              <rect
                x="60"
                y="153"
                width="160"
                height="8"
                fill={fillingColor}
                onMouseEnter={() => setActiveLayer('filling')}
                onMouseLeave={() => setActiveLayer(null)}
                style={{ cursor: 'pointer' }}
              />

              {/* TIER 2: MIDDLE SPONGE */}
              <rect
                x="60"
                y="114"
                width="160"
                height="39"
                fill={spongeColor}
                onMouseEnter={() => setActiveLayer('sponge')}
                onMouseLeave={() => setActiveLayer(null)}
                style={{ cursor: 'pointer' }}
              />

              {/* FILLING LAYER 1 */}
              <rect
                x="60"
                y="107"
                width="160"
                height="8"
                fill={fillingColor}
                onMouseEnter={() => setActiveLayer('filling')}
                onMouseLeave={() => setActiveLayer(null)}
                style={{ cursor: 'pointer' }}
              />

              {/* TIER 1: TOP SPONGE */}
              <rect
                x="60"
                y="68"
                width="160"
                height="39"
                fill={spongeColor}
                onMouseEnter={() => setActiveLayer('sponge')}
                onMouseLeave={() => setActiveLayer(null)}
                style={{ cursor: 'pointer' }}
              />

              {/* OUTER FROSTING SHELL / CRUST (Left & Right Sides) */}
              <path
                d="M 52 68 L 60 68 L 60 204 L 52 204 Q 48 136 52 68 Z"
                fill={frostingColor}
                stroke={accentColor}
                strokeWidth="1"
                onMouseEnter={() => setActiveLayer('frosting')}
                onMouseLeave={() => setActiveLayer(null)}
                style={{ cursor: 'pointer' }}
              />
              <path
                d="M 220 68 L 228 68 Q 232 136 228 204 L 220 204 L 220 68 Z"
                fill={frostingColor}
                stroke={accentColor}
                strokeWidth="1"
                onMouseEnter={() => setActiveLayer('frosting')}
                onMouseLeave={() => setActiveLayer(null)}
                style={{ cursor: 'pointer' }}
              />

              {/* TOP FROSTING MANTLE & CROWN */}
              <ellipse
                cx="140"
                cy="68"
                rx="88"
                ry="18"
                fill={frostingColor}
                stroke={accentColor}
                strokeWidth="1.5"
                onMouseEnter={() => setActiveLayer('frosting')}
                onMouseLeave={() => setActiveLayer(null)}
                style={{ cursor: 'pointer' }}
              />

              {/* TOPPING GARNISH / DECOR ACCENT */}
              <path
                d="M 80 66 Q 100 52, 140 50 Q 180 52, 200 66"
                stroke={accentColor}
                strokeWidth="5"
                fill="none"
                strokeLinecap="round"
                opacity="0.85"
                onMouseEnter={() => setActiveLayer('decor')}
                onMouseLeave={() => setActiveLayer(null)}
                style={{ cursor: 'pointer' }}
              />

              {/* Artisanal Piping Rosettes / Garnish Crowns */}
              <circle cx="100" cy="56" r="8" fill={accentColor} />
              <circle cx="140" cy="48" r="10" fill={accentColor} />
              <circle cx="180" cy="56" r="8" fill={accentColor} />
              <circle cx="140" cy="48" r="4" fill="#ffffff" opacity="0.6" />
            </g>
          </svg>
        </div>

        {/* Live Hover Inspection Tooltip */}
        <div className="anatomy-layer-hint">
          {activeLayer === 'decor' && (
            <span><strong>Crown & Finish:</strong> {cake.visualAesthetic.decorStyle}</span>
          )}
          {activeLayer === 'frosting' && (
            <span><strong>Frosting Shell:</strong> {cake.frostingType}</span>
          )}
          {activeLayer === 'sponge' && (
            <span><strong>Sponge Crumb:</strong> {cake.spongeType}</span>
          )}
          {activeLayer === 'filling' && (
            <span><strong>Infused Filling:</strong> Core compote & mousse cream</span>
          )}
          {!activeLayer && (
            <span style={{ color: '#888' }}>Hover cake layers to inspect crumb & filling</span>
          )}
        </div>
      </div>

      {/* Aesthetic Color Palette & Spec Sheet */}
      <div className="anatomy-spec-sheet">
        <div className="spec-palette-row">
          <span className="spec-label">PALETTE:</span>
          <div className="palette-chips">
            <span className="palette-swatch" style={{ backgroundColor: frostingColor }} title="Frosting Tone" />
            <span className="palette-swatch" style={{ backgroundColor: accentColor }} title="Garnish Accent" />
            <span className="palette-swatch" style={{ backgroundColor: spongeColor }} title="Sponge Tone" />
            <span className="palette-swatch" style={{ backgroundColor: fillingColor }} title="Filling Tone" />
          </div>
          <span className="spec-finish-tag">{cake.visualAesthetic.finishType}</span>
        </div>

        {/* 3 Physical Layer Specs */}
        <div className="layer-spec-list">
          <div className="layer-spec-item">
            <div className="layer-spec-icon" style={{ backgroundColor: accentColor }}>1</div>
            <div>
              <span className="layer-spec-title">CROWN & GARNISH</span>
              <p className="layer-spec-val">{cake.visualAesthetic.decorStyle}</p>
            </div>
          </div>

          <div className="layer-spec-item">
            <div className="layer-spec-icon" style={{ backgroundColor: frostingColor, border: `1px solid ${accentColor}` }}>2</div>
            <div>
              <span className="layer-spec-title">FROSTING & SILK COAT</span>
              <p className="layer-spec-val">{cake.frostingType}</p>
            </div>
          </div>

          <div className="layer-spec-item">
            <div className="layer-spec-icon" style={{ backgroundColor: spongeColor }}>3</div>
            <div>
              <span className="layer-spec-title">TRIPLE-TIERED SPONGE</span>
              <p className="layer-spec-val">{cake.spongeType}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
