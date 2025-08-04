import styles from './Services.module.css';

const services = [
  {
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
    <section className={styles.servicesSection}>
      <div className={styles.visionHeader}>
        <h2 className={styles.visionTitle}>Our Vision, Your Success</h2>
        <div className={styles.visionDesc}>
          Weegek builds world-class digital products and custom solutions for ambitious businesses. Our expertise spans AI, web, mobile, desktop, cloud, and automation—empowering you to achieve more.
        </div>
      </div>
      <div className={styles.servicesGrid}>
        {services.map((service, index) => (
          <div key={index} className={styles.serviceCard}>
            <h3 className={styles.serviceTitle}>{service.title}</h3>
            <p className={styles.serviceSubtitle}>{service.subtitle}</p>
            <ul className={styles.featureList}>
              {service.features.map((feature, idx) => (
                <li key={idx} className={styles.featureItem}>
                  {feature}
                </li>
              ))}
            </ul>
            <a href={service.link} className={styles.learnMore}>
              Learn More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}