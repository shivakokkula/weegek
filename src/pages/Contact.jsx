import SEO from "../components/SEO";
import { useState } from "react";
import styles from "./Contact.module.css";
export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };
  return (
    <>
      <SEO title="Contact Weegek" description="Get in touch with Weegek." keywords="contact Weegek" url="https://Weegek.com/contact" />
      <section className={styles.contactSection}>
        <h2 className={styles.contactTitle}>Contact Us</h2>
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', alignItems: 'flex-start' }}>
          <div className={styles.inputGroup}>
            <div style={{ marginBottom: '1.2rem' }}>
              <strong>Email:</strong> <a href="mailto:contact@Weegek.com" style={{ color: '#2ec4b6', textDecoration: 'none' }}>contact@Weegek.com</a>
            </div>
            <div style={{ marginBottom: '1.2rem' }}>
              <strong>Phone:</strong> <a href="tel:+919876543210" style={{ color: '#2ec4b6', textDecoration: 'none' }}>+91-9876543210</a>
            </div>
            <div style={{ marginBottom: '1.2rem' }}>
              <strong>Address:</strong><br />123 Business Park, Hyderabad, India
            </div>
          </div>
          <div className={styles.inputGroup} style={{ flex: 2, minWidth: 260 }}>
            <form onSubmit={handleSubmit} className={styles.contactForm}>
              <div className={styles.inputGroup}>
                <label className={styles.inputLabel}>Name
                  <input required name="name" value={form.name} onChange={handleChange} className={styles.inputField} />
                </label>
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.inputLabel}>Email
                  <input required type="email" name="email" value={form.email} onChange={handleChange} className={styles.inputField} />
                </label>
              </div>
              <div className={styles.inputGroup} style={{ flex: '2 1 100%' }}>
                <label className={styles.inputLabel}>Message
                  <textarea required name="message" rows={4} value={form.message} onChange={handleChange} className={styles.textareaField} />
                </label>
              </div>
              <div className={styles.submitGroup}>
                <button type="submit" className={styles.submitBtn}>Send Message</button>
                {submitted && <div style={{ color: '#4f8cff', fontWeight: 600, marginTop: 8 }}>Thank you! We will get back to you soon.</div>}
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}