import { useEffect, useState } from 'react';
import { products } from "./productsData.js";
import styles from './Services.module.css';

export default function Products() {
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      // Verify products data
      if (!products) {
        throw new Error('Products data is undefined');
      }
      
      if (!Array.isArray(products)) {
        throw new Error('Products data is not an array');
      }
      
      setProductsData(products);
      setLoading(false);
    } catch (err) {
      console.error('Error loading products:', err);
      setError(err.message);
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <div className={styles.productsSection}><p>Loading products...</p></div>;
  }

  if (error) {
    return (
      <div className={styles.productsSection}>
        <h2>Error Loading Products</h2>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <section className={styles.productsSection}>
      <div className={styles.productsContainer}>
        <header className={styles.productsHeader}>
          <h1 className={styles.productsTitle}>Our Products</h1>
          <p className={styles.productsSubtitle}>Discover our range of innovative solutions</p>
        </header>

        {productsData.length > 0 ? (
          <div className={styles.productsGrid}>
            {productsData.map((product, index) => (
              <div key={index} className={styles.productCard}>
                <h3 className={styles.productName}>{product.name}</h3>
                <p className={styles.productDesc}>{product.desc}</p>
                <a 
                  href={product.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.productLink}
                >
                  Learn More
                </a>
              </div>
            ))}
          </div>
        ) : (
          <div className={styles.noProducts}>
            <p>No products available at the moment.</p>
          </div>
        )}
      </div>
    </section>
  );
}
