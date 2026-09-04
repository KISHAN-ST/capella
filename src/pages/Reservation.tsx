import React, { useState } from 'react';
import { PageBanner } from '../components/PageBanner';
import { SectionHeader } from '../components/SectionHeader';
import { Clock, Phone, MapPin, Calendar, CheckCircle2, AlertCircle } from 'lucide-react';

export const Reservation: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '12:00 PM',
    guests: '2 Guests (Catchup / Date)',
    seating: 'Plant-Surrounded Verandah',
    occasion: 'Casual Brunch / Catchup',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main>
      <PageBanner
        title="TABLE RESERVATIONS"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Reservations' }
        ]}
      />

      <section className="reservation-section">
        <div className="container">
          <SectionHeader
            subtitle="EXPERIENCE THE VILLA"
            title="BOOK YOUR TABLE"
            description="Whether it’s a tranquil solo work date, an afternoon matcha catchup, or an intimate celebration with friends."
          />

          <div className="reservation-box">
            {/* Peak hours note */}
            <div className="crowd-notice">
              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <AlertCircle size={18} style={{ color: 'var(--color-gold)', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong>Weekend & Evening Peak Times:</strong> Because of Capella’s viral popularity on social media, tables fill up swiftly on Friday, Saturday, and Sunday evenings. We recommend reserving at least 4 to 6 hours in advance.
                </div>
              </div>
            </div>

            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                <CheckCircle2 size={56} style={{ color: 'var(--color-gold)', margin: '0 auto 16px' }} />
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', letterSpacing: '0.12em', color: 'var(--color-dark)', marginBottom: '12px' }}>
                  RESERVATION RECEIVED!
                </h3>
                <p style={{ fontSize: '0.94rem', color: '#555', maxWidth: '550px', margin: '0 auto 24px', lineHeight: 1.7 }}>
                  Thank you, <strong>{formData.name}</strong>! Your table for <strong>{formData.guests}</strong> on <strong>{formData.date || 'your selected date'}</strong> at <strong>{formData.time}</strong> in the <strong>{formData.seating}</strong> has been logged. Our host will confirm via WhatsApp or call at <strong>{formData.phone}</strong>.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '14px' }}>
                  <button
                    type="button"
                    className="btn-primary"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        date: '',
                        time: '12:00 PM',
                        guests: '2 Guests (Catchup / Date)',
                        seating: 'Plant-Surrounded Verandah',
                        occasion: 'Casual Brunch / Catchup',
                        notes: ''
                      });
                    }}
                  >
                    BOOK ANOTHER TABLE
                  </button>
                  <a href="tel:+918123703000" className="btn-secondary">
                    <Phone size={16} /> CALL DIRECTLY
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder="e.g. Aditi Rao"
                      className="form-control"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="phone">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      placeholder="+91 98765 43210"
                      className="form-control"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="your.email@example.com"
                      className="form-control"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="guests">Number of Guests *</label>
                    <select
                      id="guests"
                      className="form-control form-select"
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    >
                      <option value="1 Guest (Solo Date / Work Session)">1 Guest (Solo Date / Work)</option>
                      <option value="2 Guests (Catchup / Date)">2 Guests (Catchup / Date)</option>
                      <option value="3 to 4 Guests">3 to 4 Guests</option>
                      <option value="5 to 8 Guests">5 to 8 Guests</option>
                      <option value="8+ Guests (Celebration Party)">8+ Guests (Celebration Party)</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="date">Reservation Date *</label>
                    <input
                      type="date"
                      id="date"
                      required
                      className="form-control"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="time">Preferred Time Slot *</label>
                    <select
                      id="time"
                      className="form-control form-select"
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    >
                      <option value="10:30 AM (Morning Coffee & Croissant)">10:30 AM (Morning Coffee)</option>
                      <option value="12:00 PM (Lunch / Sourdough)">12:00 PM (Lunch)</option>
                      <option value="01:30 PM (Midday Dining)">01:30 PM (Midday)</option>
                      <option value="04:00 PM (Afternoon Tea & Basque Cheesecake)">04:00 PM (High Tea & Cake)</option>
                      <option value="05:30 PM (Sunset Matcha Session)">05:30 PM (Sunset Matcha)</option>
                      <option value="07:30 PM (Evening Dinner)">07:30 PM (Dinner)</option>
                      <option value="09:00 PM (Late Night Dessert)">09:00 PM (Late Dessert)</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="seating">Seating Zone Preference</label>
                    <select
                      id="seating"
                      className="form-control form-select"
                      value={formData.seating}
                      onChange={(e) => setFormData({ ...formData, seating: e.target.value })}
                    >
                      <option value="Plant-Surrounded Verandah">Plant-Surrounded Verandah (Natural light & greenery)</option>
                      <option value="142-Year Heritage Indoors">142-Year Heritage Indoors (Warm lighting & AC)</option>
                      <option value="Sunlit Garden Patio">Sunlit Garden Patio (Open-air charm)</option>
                      <option value="First Available Table">First Available Table</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="occasion">Occasion</label>
                    <select
                      id="occasion"
                      className="form-control form-select"
                      value={formData.occasion}
                      onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                    >
                      <option value="Casual Brunch / Catchup">Casual Brunch / Catchup</option>
                      <option value="Solo Date / Book Reading">Solo Date / Book Reading</option>
                      <option value="Birthday (Surprise Eggless Cake)">Birthday (Surprise Eggless Cake)</option>
                      <option value="Anniversary / Romantic Date">Anniversary / Romantic Date</option>
                      <option value="Work / Remote Meeting">Work / Remote Meeting</option>
                    </select>
                  </div>

                  <div className="form-group full-width">
                    <label className="form-label" htmlFor="notes">Special Requests or Cake Customization</label>
                    <textarea
                      id="notes"
                      rows={3}
                      placeholder="Let us know if you would like flowers arranged on your table, a specific 100% eggless pastry reserved, or plug access for laptops."
                      className="form-control"
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center', padding: '16px', fontSize: '0.8rem' }}
                >
                  <Calendar size={18} /> CONFIRM TABLE RESERVATION
                </button>
              </form>
            )}
          </div>

          {/* Quick Info Strip */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px', marginTop: '50px' }}>
            <div style={{ background: '#fff', padding: '24px', border: '1px solid #eee6db', display: 'flex', gap: '16px', alignItems: 'center' }}>
              <Clock size={28} style={{ color: 'var(--color-gold)' }} />
              <div>
                <h4 style={{ fontSize: '0.92rem', letterSpacing: '0.1em' }}>TIMINGS</h4>
                <p style={{ fontSize: '0.82rem', color: '#666' }}>10:00 AM – 10:00 PM (Up to 11:30 PM peak)</p>
              </div>
            </div>

            <div style={{ background: '#fff', padding: '24px', border: '1px solid #eee6db', display: 'flex', gap: '16px', alignItems: 'center' }}>
              <Phone size={28} style={{ color: 'var(--color-gold)' }} />
              <div>
                <h4 style={{ fontSize: '0.92rem', letterSpacing: '0.1em' }}>TELEPHONE</h4>
                <a href="tel:+918123703000" style={{ fontSize: '0.82rem', color: '#666' }}>+91 81237 03000</a>
              </div>
            </div>

            <div style={{ background: '#fff', padding: '24px', border: '1px solid #eee6db', display: 'flex', gap: '16px', alignItems: 'center' }}>
              <MapPin size={28} style={{ color: 'var(--color-gold)' }} />
              <div>
                <h4 style={{ fontSize: '0.92rem', letterSpacing: '0.1em' }}>LOCATION</h4>
                <p style={{ fontSize: '0.82rem', color: '#666' }}>Bejai Church Rd, Kadri, Mangaluru</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
