import React, { useState } from 'react';
import { PageBanner } from '../components/PageBanner';
import { SectionHeader } from '../components/SectionHeader';
import { MapPin, Clock, Phone, IndianRupee, Send, CheckCircle2, MessageSquare } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'Custom Eggless Cake Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main>
      <PageBanner
        title="CONTACT & LOCATION"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Contact Us' }
        ]}
      />

      <section style={{ padding: '80px 0', backgroundColor: '#ffffff' }}>
        <div className="container">
          <SectionHeader
            subtitle="FIND US IN MANGALORE"
            title="GET IN TOUCH"
            description="We look forward to welcoming you to our 142-year-old villa. Reach out for custom eggless cakes, private events, or cafe inquiries."
          />

          {/* Quick Facts 4-Card Grid from User Prompt */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px', marginBottom: '60px' }}>
            <div style={{ padding: '30px 24px', border: '1px solid #eee8df', background: '#faf8f5', textAlign: 'center' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: '#f2ece2', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', color: 'var(--color-gold)' }}>
                <MapPin size={24} />
              </div>
              <h4 style={{ fontSize: '1.05rem', letterSpacing: '0.1em', marginBottom: '8px' }}>OUR ADDRESS</h4>
              <p style={{ fontSize: '0.84rem', color: '#666', lineHeight: '1.6' }}>
                Bejai Church Rd, Kodialguttu, Kadri, Mangaluru, Karnataka 575004
              </p>
            </div>

            <div style={{ padding: '30px 24px', border: '1px solid #eee8df', background: '#faf8f5', textAlign: 'center' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: '#f2ece2', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', color: 'var(--color-gold)' }}>
                <Clock size={24} />
              </div>
              <h4 style={{ fontSize: '1.05rem', letterSpacing: '0.1em', marginBottom: '8px' }}>CAFE HOURS</h4>
              <p style={{ fontSize: '0.84rem', color: '#666', lineHeight: '1.6' }}>
                Monday to Sunday<br />
                <strong>10:00 AM – 10:00 PM</strong><br />
                <span style={{ fontSize: '0.78rem', color: '#888' }}>(Up to 11:30 PM on peak days)</span>
              </p>
            </div>

            <div style={{ padding: '30px 24px', border: '1px solid #eee8df', background: '#faf8f5', textAlign: 'center' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: '#f2ece2', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', color: 'var(--color-gold)' }}>
                <Phone size={24} />
              </div>
              <h4 style={{ fontSize: '1.05rem', letterSpacing: '0.1em', marginBottom: '8px' }}>TELEPHONE</h4>
              <p style={{ fontSize: '0.84rem', color: '#666', lineHeight: '1.6' }}>
                <a href="tel:+918123703000" style={{ fontWeight: 600, color: '#222' }}>
                  +91 81237 03000
                </a><br />
                <span style={{ fontSize: '0.78rem', color: '#888' }}>Call for quick orders & tables</span>
              </p>
            </div>

            <div style={{ padding: '30px 24px', border: '1px solid #eee8df', background: '#faf8f5', textAlign: 'center' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: '#f2ece2', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', color: 'var(--color-gold)' }}>
                <IndianRupee size={24} />
              </div>
              <h4 style={{ fontSize: '1.05rem', letterSpacing: '0.1em', marginBottom: '8px' }}>COST FOR TWO</h4>
              <p style={{ fontSize: '0.84rem', color: '#666', lineHeight: '1.6' }}>
                Approximately<br />
                <strong>₹400 – ₹1,000</strong><br />
                <span style={{ fontSize: '0.78rem', color: '#888' }}>All major payment modes accepted</span>
              </p>
            </div>
          </div>

          {/* Form & Map Section */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '48px', alignItems: 'start' }}>
            {/* Inquiry Form */}
            <div style={{ background: '#ffffff', border: '1px solid #eee6db', padding: '40px', boxShadow: 'var(--shadow-subtle)' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', letterSpacing: '0.12em', color: 'var(--color-dark)', marginBottom: '8px' }}>
                SEND US A MESSAGE
              </h3>
              <p style={{ fontSize: '0.86rem', color: '#777', marginBottom: '24px' }}>
                For custom bento cakes, large celebrations, or general inquiries.
              </p>

              {submitted ? (
                <div style={{ textAlign: 'center', padding: '30px 10px' }}>
                  <CheckCircle2 size={48} style={{ color: 'var(--color-gold)', margin: '0 auto 14px' }} />
                  <h4 style={{ fontSize: '1.3rem', letterSpacing: '0.1em', marginBottom: '8px' }}>MESSAGE SENT!</h4>
                  <p style={{ fontSize: '0.88rem', color: '#666', marginBottom: '20px' }}>
                    Thank you, <strong>{formData.name}</strong>. Our cafe team will get back to you shortly at {formData.phone || formData.email}.
                  </p>
                  <button
                    type="button"
                    className="btn-primary"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', phone: '', email: '', subject: 'Custom Eggless Cake Inquiry', message: '' });
                    }}
                  >
                    SEND ANOTHER MESSAGE
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-name">Your Name *</label>
                    <input
                      type="text"
                      id="contact-name"
                      required
                      placeholder="e.g. Rahul Shenoy"
                      className="form-control"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="contact-phone"
                      required
                      placeholder="+91 81237 03000"
                      className="form-control"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-email">Email Address</label>
                    <input
                      type="email"
                      id="contact-email"
                      placeholder="rahul@example.com"
                      className="form-control"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-subject">Inquiry Type</label>
                    <select
                      id="contact-subject"
                      className="form-control form-select"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    >
                      <option value="Custom Eggless Cake Inquiry">Custom Eggless Cake Inquiry</option>
                      <option value="Table / Group Reservation">Table / Group Reservation</option>
                      <option value="Private Villa Event Booking">Private Villa Event Booking</option>
                      <option value="Feedback / Press Inquiry">Feedback / Press Inquiry</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-message">Your Message *</label>
                    <textarea
                      id="contact-message"
                      required
                      rows={4}
                      placeholder="Tell us about your cake theme, flavor preferences, date of event, or any questions..."
                      className="form-control"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button type="submit" className="btn-primary" style={{ justifyContent: 'center', marginTop: '6px' }}>
                    <Send size={16} /> SEND INQUIRY
                  </button>
                </form>
              )}
            </div>

            {/* Map & Directions */}
            <div>
              <div style={{ border: '1px solid #eee6db', overflow: 'hidden', height: '360px', background: '#e5e3df', position: 'relative' }}>
                <iframe
                  title="Capella Bakery & Patisserie Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.378775459346!2d74.8519441!3d12.8833989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35a39cb256b7f%3A0xe54d6fccecfd7b27!2sBejai%20Church%20Rd%2C%20Kodialguttu%2C%20Kadri%2C%20Mangaluru%2C%20Karnataka%20575004!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div style={{ marginTop: '24px', padding: '24px', background: '#faf8f5', border: '1px solid #eee8df' }}>
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', letterSpacing: '0.1em', marginBottom: '8px' }}>
                  GETTING HERE
                </h4>
                <p style={{ fontSize: '0.84rem', color: '#666', lineHeight: '1.7' }}>
                  Located just off Bejai Church Road in Kodialguttu, Kadri. Look for the verdant plant-lined entrance of the 142-year-old villa. Dedicated two-wheeler and four-wheeler parking is available nearby.
                </p>
                <div style={{ display: 'flex', gap: '12px', marginTop: '16px' }}>
                  <a
                    href="https://maps.google.com/?q=Capella+Patisserie+Kadri+Mangalore"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-secondary"
                    style={{ fontSize: '0.72rem', padding: '10px 20px' }}
                  >
                    GET DIRECTIONS
                  </a>
                  <a
                    href="https://wa.me/918123703000"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary"
                    style={{ fontSize: '0.72rem', padding: '10px 20px', backgroundColor: '#25D366' }}
                  >
                    <MessageSquare size={14} /> WHATSAPP US
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
