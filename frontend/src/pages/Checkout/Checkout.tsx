import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import styles from './Checkout.module.css';

export const Checkout: React.FC = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();
  const [shippingData, setShippingData] = useState({
    name: '',
    address: '',
    city: '',
    zip: ''
  });

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // INTENTIONAL GAP: No validation on the frontend or backend
    try {
      const response = await fetch('http://localhost:5001/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: cart,
          shipping: shippingData,
          total
        })
      });

      if (response.ok) {
        clearCart();
        navigate('/success');
      }
    } catch (error) {
      console.error('Failed to place order:', error);
    }
  };

  if (cart.length === 0) {
    return <div className={styles.empty}>Your cart is empty. Please add some items first.</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.checkoutForm}>
        <h2>Shipping Information</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label>Full Name</label>
            <input 
              type="text" 
              value={shippingData.name}
              onChange={(e) => setShippingData({...shippingData, name: e.target.value})}
              required
            />
          </div>
          <div className={styles.field}>
            <label>Address</label>
            <input 
              type="text" 
              value={shippingData.address}
              onChange={(e) => setShippingData({...shippingData, address: e.target.value})}
              required
            />
          </div>
          <div className={styles.row}>
            <div className={styles.field}>
              <label>City</label>
              <input 
                type="text" 
                value={shippingData.city}
                onChange={(e) => setShippingData({...shippingData, city: e.target.value})}
                required
              />
            </div>
            <div className={styles.field}>
              <label>ZIP Code</label>
              <input 
                type="text" 
                value={shippingData.zip}
                onChange={(e) => setShippingData({...shippingData, zip: e.target.value})}
                required
              />
            </div>
          </div>
          <button type="submit" className={styles.payBtn}>Pay Now (${total.toFixed(2)})</button>
        </form>
      </div>
      
      <div className={styles.summary}>
        <h2>Order Summary</h2>
        {cart.map(item => (
          <div key={item.id} className={styles.summaryItem}>
            <span>{item.name} x {item.quantity}</span>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
        <div className={styles.totalRow}>
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};
