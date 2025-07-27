import SEO from "../components/SEO";
import styles from "./Services.module.css";
import { products } from "./productsData.js";

export default function Products() {
  return (
    <>
      <SEO
        title="Our SaaS Products"
        description="Explore Weegek's SaaS product portfolio."
        keywords="Weegek products, saas"
        url="https://Weegek.com/products"
      />
      {/* Our Products Section */}
      <section className={styles.productsSection}>
        <div className={styles.productsHeader}>
          <h2 className={styles.productsTitle}>Our SaaS Products</h2>
        </div>
        <div className={styles.productsGrid}>
          {products.map((product) => (
            <div key={product.name} className={styles.productCard}>
              <img
                src={product.logo}
                alt={product.name + " logo"}
                className={styles.productLogo}
              />
              <div className={styles.productName}>{product.name}</div>
              <div className={styles.productDesc}>{product.desc}</div>
              <a
                href={product.url}
                className={styles.productLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Product &rarr;
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
