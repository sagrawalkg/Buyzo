import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import styles from './CartDrawer.module.css';

export const CartDrawer: React.FC = () => {
  const { cart, removeFromCart, isCartOpen, setIsCartOpen } = useCart();
  const navigate = useNavigate();

  if (!isCartOpen) return null;

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    setIsCartOpen(false);
    navigate('/checkout');
  };

  return (
    <div className={styles.overlay} onClick={() => setIsCartOpen(false)}>
      <div className={styles.drawer} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h2>Your Cart</h2>
          <button className={styles.closeBtn} onClick={() => setIsCartOpen(false)}>×</button>
        </div>

        <div className={styles.content}>
          {cart.length === 0 ? (
            <p className={styles.emptyMsg}>Your cart is empty.</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className={styles.cartItem}>
                <img src={item.image} alt={item.name} className={styles.itemImage} />
                <div className={styles.itemInfo}>
                  <h4>{item.name}</h4>
                  <p>${item.price} x {item.quantity}</p>
                </div>
                <button 
                  className={styles.removeBtn}
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className={styles.footer}>
            <div className={styles.totalRow}>
              <span>Total:</span>
              <span className={styles.totalPrice}>${total.toFixed(2)}</span>
            </div>
            <button className={styles.checkoutBtn} onClick={handleCheckout}>
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
