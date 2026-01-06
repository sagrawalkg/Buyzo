import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Checkout.module.css'; // Reusing some styles or add specific ones

export const Success: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', padding: '5rem 0' }}>
      <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎉</div>
      <h1>Order Successful!</h1>
      <p style={{ color: 'var(--secondary)', margin: '1rem 0 2rem' }}>
        Thank you for your purchase. Your order is being processed.
      </p>
      <Link 
        to="/" 
        style={{ 
          display: 'inline-block',
          backgroundColor: 'var(--primary)',
          color: 'white',
          padding: '0.75rem 2rem',
          borderRadius: '8px',
          fontWeight: '600'
        }}
      >
        Back to Shopping
      </Link>
    </div>
  );
};
