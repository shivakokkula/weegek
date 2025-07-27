import SEO from "../components/SEO";
export default function About() {
  return (
    <>
      <SEO title="About Weegek" description="Learn about Weegek, our mission, team, and values." keywords="about Weegek" url="https://Weegek.com/about" />
      <section style={{ maxWidth: 900, margin: '2rem auto', padding: '2rem 1rem', background: '#f7fafc', borderRadius: '1rem', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
        <h2 style={{ fontSize: '2.2rem', fontWeight: 700, color: '#2ec4b6', marginBottom: '1rem' }}>About Us</h2>
        <p style={{ fontSize: '1.15rem', color: '#333', marginBottom: '1.5rem' }}>
          Weegek is a forward-thinking software company delivering SaaS products and custom solutions. Our mission is to empower businesses with technology.
        </p>
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
          <div style={{ flex: 1, minWidth: 220 }}>
            <h3 style={{ color: '#4f8cff', marginBottom: 8 }}>Mission</h3>
            <p>To deliver innovative, reliable, and scalable software solutions that drive business growth.</p>
          </div>
          <div style={{ flex: 1, minWidth: 220 }}>
            <h3 style={{ color: '#4f8cff', marginBottom: 8 }}>Vision</h3>
            <p>To be a global leader in digital transformation and SaaS innovation.</p>
          </div>
        </div>
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: '#4f8cff', marginBottom: 8 }}>Our Team</h3>
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            <div style={{ textAlign: 'center', flex: 1, minWidth: 150 }}>
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="CEO" style={{ width: 72, height: 72, borderRadius: '50%', marginBottom: 8 }} />
              <div style={{ fontWeight: 600 }}>Rajesh Kumar</div>
              <div style={{ color: '#888' }}>Founder & CEO</div>
            </div>
            <div style={{ textAlign: 'center', flex: 1, minWidth: 150 }}>
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="CTO" style={{ width: 72, height: 72, borderRadius: '50%', marginBottom: 8 }} />
              <div style={{ fontWeight: 600 }}>Priya Sharma</div>
              <div style={{ color: '#888' }}>CTO</div>
            </div>
            <div style={{ textAlign: 'center', flex: 1, minWidth: 150 }}>
              <img src="https://randomuser.me/api/portraits/men/54.jpg" alt="Product Lead" style={{ width: 72, height: 72, borderRadius: '50%', marginBottom: 8 }} />
              <div style={{ fontWeight: 600 }}>Amit Patel</div>
              <div style={{ color: '#888' }}>Product Lead</div>
            </div>
          </div>
        </div>
        <div style={{ fontSize: '1rem', color: '#444', background: '#e3f6f5', padding: '1rem', borderRadius: '0.5rem' }}>
          <strong>Registered Office:</strong> 123 Business Park, Hyderabad, India.<br />
          <strong>Company Registration:</strong> CIN: U12345TG2020PTC123456
        </div>
      </section>
    </>
  );
}