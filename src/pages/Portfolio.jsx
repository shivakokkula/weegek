
import styles from "./Portfolio.module.css";

export default function Portfolio() {
  const projects = [
    {
      name: "Retail Automation Platform",
      client: "RetailCo",
      logo: "https://dummyimage.com/60x60/4f8cff/fff&text=RC",
      desc: "Inventory and sales automation for a leading retail chain.",
      url: "#"
    },
    {
      name: "EduSaaS LMS",
      client: "EduPrime",
      logo: "https://dummyimage.com/60x60/2ec4b6/fff&text=EP",
      desc: "Cloud-based learning management for 50,000+ students.",
      url: "#"
    },
    {
      name: "FinEdge Analytics",
      client: "FinEdge",
      logo: "https://dummyimage.com/60x60/ffbe40/fff&text=FE",
      desc: "Advanced analytics and reporting for a fintech startup.",
      url: "#"
    }
  ];
  return (
    <>
      <section className={styles.portfolioRoot}>
        <h2 className={styles.portfolioHeader}>Our Portfolio</h2>
        <div className={styles.projectList}>
          {projects.map(project => (
            <div key={project.name} className={styles.projectCard}>
              <img src={project.logo} alt={project.client + ' logo'} style={{ width: 60, height: 60, borderRadius: '50%', marginBottom: 4 }} />
              <div className={styles.projectTitle}>{project.name}</div>
              <div className={styles.projectMeta}>{project.client}</div>
              <div className={styles.projectDesc}>{project.desc}</div>
              <a href={project.url} className={styles.projectMeta}>View Project</a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
