import { useEffect, useState } from 'react';
import { products, getProductsByCategory, categories } from "./productsData";
import styles from './Services.module.css';

export default function Products() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [categorizedProducts, setCategorizedProducts] = useState({});

  useEffect(() => {
    try {
      // Verify products data
      if (!products) {
        throw new Error('Products data is undefined');
      }
      
      if (!Array.isArray(products)) {
        throw new Error('Products data is not an array');
      }
      
      // Group products by category
      const groupedProducts = {};
      categories.forEach(category => {
        groupedProducts[category] = getProductsByCategory(category);
      });
      
      setCategorizedProducts(groupedProducts);
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
          <h1 className={styles.productsTitle}>Our Products & Resources</h1>
          <p className={styles.productsSubtitle}>Discover our range of innovative solutions and resources</p>
        </header>

        {Object.keys(categorizedProducts).length > 0 ? (
          <div className={styles.productsCategories}>
            {categories.map((category) => (
              <div key={category} className={styles.categorySection}>
                <h2 className={styles.categoryTitle}>{category}</h2>
                <div className={styles.productsGrid}>
                  {categorizedProducts[category].map((product) => (
                    <div key={product.id} className={styles.productCard}>
                      <h3 className={styles.productName}>{product.name}</h3>
                      <p className={styles.productDesc}>{product.desc}</p>
                      <a 
                        href={product.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={styles.productLink}
                      >
                        {category === 'Guides' || category === 'Templates' ? 'View' : 'Learn More'}
                      </a>
                    </div>
                  ))}
                </div>
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
