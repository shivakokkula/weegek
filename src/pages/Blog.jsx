import SEO from "../components/SEO";
import styles from "./Blog.module.css";

export default function Blog() {
  const posts = [
    {
      title: "How SaaS is Transforming Business",
      excerpt: "Discover how Software as a Service is enabling rapid innovation and scalability for modern enterprises.",
      date: "2025-07-01",
      url: "#"
    },
    {
      title: "Case Study: Retail Automation",
      excerpt: "See how Weegek helped a retail client automate inventory and improve sales forecasting.",
      date: "2025-06-15",
      url: "#"
    },
    {
      title: "Best Practices for Cloud Migration",
      excerpt: "A checklist for a smooth, secure transition to the cloud for your business.",
      date: "2025-05-28",
      url: "#"
    }
  ];
  return (
    <>
      <SEO title="Blog & Insights" description="Articles, case studies, and insights from Weegek." keywords="Weegek blog, insights, case studies" url="https://Weegek.com/blog" />
      <section className={styles.blogRoot}>
        <h2 className={styles.blogHeader}>Blog & Insights</h2>
        <div className={styles.blogList}>
          {posts.map(post => (
            <div key={post.title} className={styles.blogCard}>
              <div className={styles.blogMeta}>{post.date}</div>
              <div className={styles.blogTitle}>{post.title}</div>
              <div className={styles.blogExcerpt}>{post.excerpt}</div>
              <a href={post.url} className={styles.blogMeta}>Read More</a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
