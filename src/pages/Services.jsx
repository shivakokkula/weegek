import SEO from "../components/SEO";
import styles from './Services.module.css';
import { products, serviceIcons } from './productsData';

const services = [
  {
    icon: serviceIcons.ai,
    title: 'AI Agent Development',
    subtitle: 'Custom AI agents and autonomous systems powered by cutting-edge LLMs',
    features: [
      'Custom LLM Integration',
      'Autonomous Agents',
      'Task Automation',
      'Natural Language Processing',
    ],
    link: '/contact',
  },
  {
    icon: serviceIcons.web,
    title: 'Web Development',
    subtitle: 'Custom web applications built with cutting-edge technologies and modern frameworks',
    features: [
      'Responsive Web Design',
      'Progressive Web Apps',
      'E-commerce Solutions',
      'Custom CMS Development',
    ],
    link: '/contact',
  },
  {
    icon: serviceIcons.mobile,
    title: 'Mobile Development',
    subtitle: 'Native and cross-platform mobile applications for iOS and Android',
    features: [
      'iOS Development',
      'Android Development',
      'Cross-platform Apps',
      'Mobile UI/UX Design',
    ],
    link: '/contact',
  },
  {
    icon: serviceIcons.desktop,
    title: 'Desktop Development',
    subtitle: 'Powerful desktop applications for Windows, macOS, and Linux',
    features: [
      'Cross-platform Solutions',
      'Native Applications',
      'System Integration',
      'Performance Optimization',
    ],
    link: '/contact',
  },
  {
    icon: serviceIcons.cloud,
    title: 'Cloud Services',
    subtitle: 'Scalable cloud solutions and infrastructure management',
    features: [
      'Cloud Migration',
      'AWS/Azure/GCP',
      'Serverless Architecture',
      'Cloud Security',
    ],
    link: '/contact',
  },
  {
    icon: serviceIcons.automation,
    title: 'Automations',
    subtitle: 'Intelligent automation solutions to streamline your workflows',
    features: [
      'Process Automation',
      'Workflow Optimization',
      'AI Integration',
      'Custom Scripts',
    ],
    link: '/contact',
  },
];

export default function Services() {
  return (
    <>
      <SEO title="Our Services" description="Explore our range of software services and products." keywords="Weegek services" url="https://Weegek.com/services" />

      {/* Services Section */}
      <section className={styles.servicesSection}>
        <div className={styles.visionHeader}>
          <h2 className={styles.visionTitle}>Our Vision, Your Success</h2>
          <div className={styles.visionDesc}>
            Weegek builds world-class digital products and custom solutions for ambitious businesses. Our expertise spans AI, web, mobile, desktop, cloud, and automation—empowering you to achieve more.
          </div>
        </div>
        <div className={styles.servicesGrid}>
          {services.map((s, idx) => (
            <div key={s.title} className={styles.serviceCard}>
              <div className={styles.serviceIcon}>{s.icon}</div>
              <div className={styles.serviceTitle}>{s.title}</div>
              <div className={styles.serviceSubtitle}>{s.subtitle}</div>
              <ul className={styles.featureList}>
                {s.features.map(f => (
                  <li key={f} className={styles.featureItem}>{f}</li>
                ))}
              </ul>
              <a href={s.link} className={styles.learnMore}>Learn More &rarr;</a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}