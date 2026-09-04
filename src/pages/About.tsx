import React from 'react';
import { PageBanner } from '../components/PageBanner';
import { SectionHeader } from '../components/SectionHeader';
import { Link } from 'react-router-dom';
import { Flower2, Heart, Sparkles, Coffee, Calendar, ArrowRight } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <main>
      {/* Breadcrumb banner matching Appetito reference */}
      <PageBanner
        title="ABOUT CAPELLA"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'About Us' }
        ]}
      />

      {/* Main Story Section */}
      <section style={{ padding: '90px 0', backgroundColor: '#ffffff' }}>
        <div className="container">
          <SectionHeader
            subtitle="OUR ORIGIN & JOURNEY"
            title="THE CAPELLA STORY"
            description="From a bespoke 100% eggless patisserie to Mangalore's most beloved 142-year-old heritage villa cafe."
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '50px', alignItems: 'center' }}>
            <div>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.22em', color: 'var(--color-gold)', textTransform: 'uppercase', display: 'block', marginBottom: '12px' }}>
                A 142-Year-Old Sanctuary
              </span>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', letterSpacing: '0.12em', color: 'var(--color-dark)', marginBottom: '20px', lineHeight: 1.2 }}>
                WHERE TIME SLOWS DOWN ON BEJAI CHURCH ROAD
              </h3>
              <p style={{ fontSize: '0.94rem', color: '#555', lineHeight: '1.8', marginBottom: '18px' }}>
                Nestled on Bejai Church Road in Kodialguttu, Kadri, <strong>Capella Bakery & Patisserie</strong> began with a single vision: creating exceptional, 100% eggless cakes crafted with master-level precision and refined aesthetics.
              </p>
              <p style={{ fontSize: '0.94rem', color: '#555', lineHeight: '1.8', marginBottom: '24px' }}>
                As our loyal following blossomed, we discovered an extraordinary 142-year-old heritage villa wrapped in tranquil tropical flora. We painstakingly restored its natural timber beams, high vintage ceilings, and terracotta-lined verandahs to give Mangalore an aesthetic, light-filled gathering place where friends, foodies, and creators could feel truly at home.
              </p>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <Link to="/menu" className="btn-primary">
                  EXPLORE OUR MENU <ArrowRight size={16} />
                </Link>
                <Link to="/reservation" className="btn-secondary">
                  RESERVE A SPOT
                </Link>
              </div>
            </div>

            {/* Visual Box with video snippet */}
            <div style={{ position: 'relative' }}>
              <div style={{ borderRadius: '4px', overflow: 'hidden', boxShadow: 'var(--shadow-plate)', border: '1px solid #eae5dd', background: '#f5f2ed' }}>
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  src="/capella2.mp4"
                  style={{ width: '100%', height: '400px', objectFit: 'cover' }}
                />
              </div>
              <div style={{ position: 'absolute', bottom: '-20px', left: '20px', background: '#1a1a1a', color: '#fff', padding: '16px 24px', borderRadius: '2px', boxShadow: '0 10px 25px rgba(0,0,0,0.2)' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', letterSpacing: '0.12em', color: 'var(--color-gold)' }}>142 YEARS</span>
                <p style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#ccc', margin: 0 }}>Heritage Villa Architecture</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pillars of Capella */}
      <section style={{ padding: '85px 0', backgroundColor: '#faf7f2', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <SectionHeader
            subtitle="WHAT DEFINES US"
            title="THE FOUR PILLARS"
            description="Everything we do at Capella is guided by aesthetic simplicity, uncompromised eggless baking, and warm hospitality."
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
            <div style={{ background: '#fff', padding: '36px 28px', border: '1px solid #eee8df', textAlign: 'center' }}>
              <div style={{ width: '54px', height: '54px', borderRadius: '50%', background: '#faf6f0', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', color: 'var(--color-gold)' }}>
                <Heart size={26} />
              </div>
              <h4 style={{ fontSize: '1.15rem', marginBottom: '12px', letterSpacing: '0.12em' }}>100% EGGLESS PATISSERIE</h4>
              <p style={{ fontSize: '0.86rem', color: '#777', lineHeight: '1.65' }}>
                Famed across the city for our custom bento cakes, molten Basque cheesecakes, delicate macarons, and velvety milk cakes—crafted without a single egg.
              </p>
            </div>

            <div style={{ background: '#fff', padding: '36px 28px', border: '1px solid #eee8df', textAlign: 'center' }}>
              <div style={{ width: '54px', height: '54px', borderRadius: '50%', background: '#faf6f0', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', color: 'var(--color-gold)' }}>
                <Flower2 size={26} />
              </div>
              <h4 style={{ fontSize: '1.15rem', marginBottom: '12px', letterSpacing: '0.12em' }}>PLANT-SURROUNDED VILLA</h4>
              <p style={{ fontSize: '0.86rem', color: '#777', lineHeight: '1.65' }}>
                Vintage windows, sun-dappled courtyard tables, fresh florals refreshed daily, and soothing warm lighting designed for relaxed solo dates and work sessions.
              </p>
            </div>

            <div style={{ background: '#fff', padding: '36px 28px', border: '1px solid #eee8df', textAlign: 'center' }}>
              <div style={{ width: '54px', height: '54px', borderRadius: '50%', background: '#faf6f0', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', color: 'var(--color-gold)' }}>
                <Coffee size={26} />
              </div>
              <h4 style={{ fontSize: '1.15rem', marginBottom: '12px', letterSpacing: '0.12em' }}>SPECIALTY BREWS & MATCHA</h4>
              <p style={{ fontSize: '0.86rem', color: '#777', lineHeight: '1.65' }}>
                Ceremonial Uji matcha, Spanish iced lattes with condensed milk, roasted hazelnut brews, and rich Belgian dark hot chocolate.
              </p>
            </div>

            <div style={{ background: '#fff', padding: '36px 28px', border: '1px solid #eee8df', textAlign: 'center' }}>
              <div style={{ width: '54px', height: '54px', borderRadius: '50%', background: '#faf6f0', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', color: 'var(--color-gold)' }}>
                <Sparkles size={26} />
              </div>
              <h4 style={{ fontSize: '1.15rem', marginBottom: '12px', letterSpacing: '0.12em' }}>EUROPEAN-STYLE BRUNCH</h4>
              <p style={{ fontSize: '0.86rem', color: '#777', lineHeight: '1.65' }}>
                Fresh artisanal sourdoughs, ciabatta chicken sandwiches, eggs benedict, garlic aglio olio, and gourmet pasta bowls prepared fresh all day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Atmosphere & Peak Crowds note */}
      <section style={{ padding: '80px 0', backgroundColor: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="crowd-notice" style={{ padding: '24px 30px' }}>
            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', color: '#1a1a1a', letterSpacing: '0.12em', marginBottom: '8px' }}>
              A NOTE ON WEEKEND VIBES & POPULARITY
            </h4>
            <p style={{ fontSize: '0.88rem', color: '#5a544a', lineHeight: '1.7' }}>
              Because of Capella’s viral popularity on social media and love from Mangalore's youth, weekends and evenings (after 6:00 PM) can get quite full. If you’re visiting for quiet reading, focused work, or photography, weekday mornings (10:00 AM – 1:00 PM) offer the most serene experience.
            </p>
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link to="/reservation" className="btn-primary">
              <Calendar size={16} /> BOOK YOUR TABLE IN ADVANCE
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};
