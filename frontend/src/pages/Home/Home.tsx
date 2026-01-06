import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

const CATEGORIES = ['All', 'Electronics', 'Clothing', 'Home & Garden', 'Books', 'Sports'];

export const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, [searchTerm, selectedCategory]);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const queryParams = new URLSearchParams();
      if (searchTerm) queryParams.append('q', searchTerm);
      if (selectedCategory && selectedCategory !== 'All') queryParams.append('category', selectedCategory);

      const response = await fetch(`http://localhost:5001/api/products?${queryParams.toString()}`);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Failed to fetch products:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    console.log('Searching for:', value); // Intentional inefficient log
  };

  return (
    <div className={styles.pageLayout}>
      {/* Sidebar Filters */}
      <aside className={styles.sidebar}>
        <div className={styles.filterSection}>
          <h3 className={styles.filterTitle}>Categories</h3>
          <div className={styles.categoryList}>
            {CATEGORIES.map(category => (
              <button
                key={category}
                className={`${styles.categoryBtn} ${selectedCategory === category ? styles.active : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className={styles.mainContent}>
        <div className={styles.header}>
          <div>
            <h1 className={styles.pageTitle}>Marketplace</h1>
            <p className={styles.subtitle}>Showing {products.length} results</p>
          </div>
          <div className={styles.searchContainer}>
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={handleSearchChange}
              className={styles.searchInput}
            />
          </div>
        </div>

        {loading ? (
          <div className={styles.loadingState}>
            <div className={styles.spinner}></div>
          </div>
        ) : (
          <div className={styles.productGrid}>
            {products.map((product) => (
              <div key={product.id} className={`${styles.productCard} fade-in`}>
                <Link to={`/product/${product.id}`} className={styles.cardLink}>
                  <div className={styles.imageWrapper}>
                    <img src={product.image} alt={product.name} className={styles.productImage} loading="lazy" />
                    <span className={styles.categoryTag}>{product.category}</span>
                  </div>
                  <div className={styles.productInfo}>
                    <h3 className={styles.productName}>{product.name}</h3>
                    <div className={styles.productFooter}>
                      <span className={styles.price}>${product.price}</span>
                      <span className={styles.viewBtn}>View</span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
        
        {!loading && products.length === 0 && (
          <div className={styles.emptyState}>
            <p>No products found matching your criteria.</p>
            <button 
              className="btn-primary"
              onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
            >
              Clear Filters
            </button>
          </div>
        )}
      </main>
    </div>
  );
};
