import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';
import styles from './Navbar.module.css';

// --- DEBOUNCE ASSIGNMENT ---
// TODO: Complete this utility
function debounce(func: Function, delay: number) {
  // AUTO-COMPLETE THIS PART
  // Return a function that cancels the previous timer and sets a new one
  return (...args: any[]) => {
    // Write logic here
  };
}
// ---------------------------

export const Navbar: React.FC = () => {
  const { logout } = useAuth();
  const { cart, setIsCartOpen } = useCart();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  // --- DEBOUNCE USAGE ---
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Searching for:", e.target.value);
  };
  
  // Wrap the handler (uncomment when debounce is implemented)
  const debouncedSearch = debounce(handleSearch, 500);
  // ----------------------

  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.navContent}`}>
        <div className={styles.leftSection}>
          <Link to="/" className={styles.logo}>
            <span className={styles.logoIcon}>B</span>
            Buyzo
          </Link>
          <div className={styles.navLinks}>
            <Link to="/" className={styles.navLink}>Shop</Link>
            <Link to="/orders" className={styles.navLink}>Orders</Link>
            {/* SEARCH BAR ASSIGNMENT */}
            {/* <input 
                type="text" 
                placeholder="Search..." 
                // @ts-ignore
                onChange={debouncedSearch} 
                className={styles.searchInput}
            /> */}
          </div>
        </div>
        
        <div className={styles.rightSection}>
          <button onClick={() => setIsCartOpen(true)} className={styles.cartBtn}>
            <span className={styles.cartIcon}>🛒</span>
            <span className={styles.cartCount}>{totalItems}</span>
          </button>
          <div className={styles.divider}></div>
          <button onClick={logout} className={styles.logoutBtn}>Sign Out</button>
        </div>
      </div>
    </nav>
  );
};
