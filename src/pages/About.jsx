
export default function About() {
  return (
    <>
      <section style={{ maxWidth: 1300, margin: '2rem auto', padding: '2rem 1rem', background: '#f7fafc', borderRadius: '1rem', boxShadow: '0 2px 12px rgba(0,0,0,0.04)',textAlign:'center' }}>
        <h2 style={{ marginBottom: 8  }}>About Us</h2>
        <p style={{ fontSize: '1.15rem', color: '#333', marginBottom: '1.5rem' }}>
          Weegek is a forward-thinking software company delivering SaaS products and custom solutions. Our mission is to empower businesses with technology.
        </p>
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginBottom: '2rem', textAlign: 'center' }}>
          <div style={{ flex: 1, minWidth: 220 }}>
            <h3 style={{ marginBottom: 8 }}>Mission</h3>
            <p>To deliver innovative, reliable, and scalable software solutions that drive business growth.</p>
          </div>
          <div style={{ flex: 1, minWidth: 220 }}>
            <h3 style={{ marginBottom: 8 }}>Vision</h3>
            <p>To be a global leader in digital transformation and SaaS innovation.</p>
          </div>
        </div>
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginBottom:'1rem' }}>
            <div style={{ flex: 1, minWidth: 150 }}>
              <img src="https://ui-avatars.com/api/?name=Shivakumar+Kokkula&background=2ec4b6&color=fff&size=128" alt="Founder" style={{ width: 72, height: 72, borderRadius: '50%', marginBottom: 8 }} />
              <div style={{ fontWeight: 600 }}>Shivakumar Kokkula</div>
              <div style={{ color: '#888' }}>Founder</div>
            </div>
        </div>
        <div style={{ fontSize: '1rem', color: '#444', background: '#e3f6f5', padding: '1rem', borderRadius: '0.5rem' }}>
          <strong>Registered Office:</strong> Worli, Mumbai, India<br />
        </div>
      </section>
    </>
  );
}