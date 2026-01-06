import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import styles from './ProductDetails.module.css';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

export const ProductDetails: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:5001/api/products/${id}`);
        if (!response.ok) throw new Error('Product not found');
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error(error);
        navigate('/');
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id, navigate]);

  if (loading) return <p>Loading product...</p>;
  if (!product) return <p>Product not found.</p>;

  return (
    <div className={styles.container}>
      <div className={styles.imageSection}>
        <img src={product.image} alt={product.name} className={styles.mainImage} />
      </div>
      <div className={styles.infoSection}>
        <h1>{product.name}</h1>
        <p className={styles.price}>${product.price}</p>
        <div className={styles.description}>
          <h3>Description</h3>
          <p>{product.description}</p>
        </div>
        <button 
          className={styles.addToCartBtn}
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};
