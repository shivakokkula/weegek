import Contact from "./Contact";
import Services from "./Services";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.sectionContent}>
          <h1 className={styles.heroTitle}>Crafting Software Solutions</h1>
          <p className={styles.heroSubtitle}>
            Modern, responsive websites, high-performance apps, and enterprise solutions for your business growth.
          </p>
          <a href="/services" className={styles.heroBtn}>Get Started</a>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className={styles.whySection}>
        <div className={styles.sectionContent}>
          <h2 className={styles.whyTitle}>Why Choose Us</h2>
          <div className={styles.whyGrid}>
            <div className={styles.whyItem}>
              <span className={styles.whyIcon}>🚀</span>
              <div className={styles.whyText}>Fast, scalable delivery</div>
            </div>
            <div className={styles.whyItem}>
              <span className={styles.whyIcon}>🔒</span>
              <div className={styles.whyText}>Secure, robust code</div>
            </div>
            <div className={styles.whyItem}>
              <span className={styles.whyIcon}>💡</span>
              <div className={styles.whyText}>Innovative solutions</div>
            </div>
            <div className={styles.whyItem}>
              <span className={styles.whyIcon}>🤝</span>
              <div className={styles.whyText}>Trusted by clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES/FEATURES GRID */}
      <Services />

      {/* STATS/METRICS BAR */}
      <section className={styles.statsBar}>
        <div className={styles.sectionContent}>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>50+</div>
            <div className={styles.statLabel}>Projects</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>8+</div>
            <div className={styles.statLabel}>Technologies</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>98%</div>
            <div className={styles.statLabel}>Success Rate</div>
          </div>
        </div>
      </section>

      {/* TECH STACK/PARTNERS ROW */}
      <section className={styles.techRow}>
        <div className={styles.sectionContent}>
          <span>React</span>
          <span>Next.js</span>
          <span>Node.js</span>
          <span>Flutter</span>
          <span>AWS</span>
          <span>Azure</span>
          <span>Stripe</span>
          <span>OpenAI</span>
        </div>
      </section>

      {/* DEVELOPMENT PROCESS */}
      <section className={styles.processSection}>
        <div className={styles.sectionContent}>
          <h2 className={styles.processTitle}>How We Work</h2>
          <div className={styles.processGrid}>
            <div className={styles.processStep}>
              <span className={styles.processIcon}>🎯</span>
              <div className={styles.processStepTitle}>Discovery</div>
              <div className={styles.processStepDesc}>We learn your needs.</div>
            </div>
            <div className={styles.processStep}>
              <span className={styles.processIcon}>📝</span>
              <div className={styles.processStepTitle}>Design</div>
              <div className={styles.processStepDesc}>We architect your solution.</div>
            </div>
            <div className={styles.processStep}>
              <span className={styles.processIcon}>⚙️</span>
              <div className={styles.processStepTitle}>Build</div>
              <div className={styles.processStepDesc}>We develop and test.</div>
            </div>
            <div className={styles.processStep}>
              <span className={styles.processIcon}>🚀</span>
              <div className={styles.processStepTitle}>Launch</div>
              <div className={styles.processStepDesc}>We deploy and support.</div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT/LEAD FORM */}
      <Contact />
    </>
  );
}
