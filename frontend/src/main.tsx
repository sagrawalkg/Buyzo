import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { runEventLoopExample } from './utils/eventLoopAssignment';
import { showBanner } from './utils/domAssignment';

// --- ASSIGNMENT EXECUTION ---
// See assignment instructions: ../../JAVASCRIPT_ASSIGNMENT.md
// runEventLoopExample();
// showBanner("Welcome to Buyzo!");
// -----------------------------

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </AuthProvider>
  </React.StrictMode>
);
