import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import styles from './Auth.module.css';

export const LoginForm: React.FC = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Just mock login for now
    login();
  };

  return (
    <div className={styles.authContainer}>
      <form className={styles.authForm} onSubmit={handleSubmit}>
        <h2>Welcome to Buyzo</h2>
        <p>Please login to continue</p>
        <div className={styles.field}>
          <label>Email</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="admin@example.com"
            required 
          />
        </div>
        <div className={styles.field}>
          <label>Password</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="password"
            required 
          />
        </div>
        <button type="submit" className={styles.submitBtn}>Login</button>
      </form>
    </div>
  );
};
