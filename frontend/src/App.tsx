import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import { LoginForm } from './components/Auth/LoginForm';
import { Navbar } from './components/Layout/Navbar';
import { Home } from './pages/Home/Home';
import { ProductDetails } from './pages/ProductDetails/ProductDetails';
import { Checkout } from './pages/Checkout/Checkout';
import { Success } from './pages/Checkout/Success';
import { Orders } from './pages/Orders/Orders';
import { CartDrawer } from './components/Cart/CartDrawer';
import './styles/global.css';

const App: React.FC = () => {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return <LoginForm />;
  }

  return (
    <Router>
      <Navbar />
      <main className="container" style={{ padding: '2rem 1rem' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/success" element={<Success />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
      <CartDrawer />
    </Router>
  );
};

export default App;
