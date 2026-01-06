import React, { useState, useEffect } from 'react';
import styles from './Orders.module.css';

interface OrderItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface Order {
  id: number;
  status: string;
  createdAt: string;
  total: number;
  items: OrderItem[];
  shipping: {
    name: string;
    address: string;
    city: string;
    zip: string;
  };
}

export const Orders: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/orders');
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error('Failed to fetch orders:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, []);

  if (loading) return (
    <div className={styles.loadingContainer}>
      <div className={styles.spinner}></div>
      <p>Loading your orders...</p>
    </div>
  );

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Order History</h1>
        <p className={styles.subtitle}>Manage and track your recent purchases</p>
      </div>

      {orders.length === 0 ? (
        <div className={styles.emptyState}>
          <div className={styles.emptyIcon}>📦</div>
          <h3>No orders yet</h3>
          <p>When you place an order, it will appear here.</p>
        </div>
      ) : (
        <div className={styles.orderList}>
          {orders.map((order) => (
            <div key={order.id} className={styles.orderCard}>
              <div className={styles.orderHeader}>
                <div className={styles.orderMeta}>
                  <span className={styles.orderId}>Order #{order.id}</span>
                  <span className={styles.orderDate}>
                    {new Date(order.createdAt).toLocaleDateString(undefined, {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>
                </div>
                <div className={styles.orderStatus}>
                  <span className={`${styles.statusBadge} ${styles[order.status.toLowerCase()]}`}>
                    {order.status}
                  </span>
                  <span className={styles.orderTotal}>${order.total.toFixed(2)}</span>
                </div>
              </div>

              <div className={styles.itemsList}>
                {order.items.map((item) => (
                  <div key={item.id} className={styles.itemRow}>
                    <img src={item.image} alt={item.name} className={styles.itemImage} />
                    <div className={styles.itemInfo}>
                      <p className={styles.itemName}>{item.name}</p>
                      <p className={styles.itemQty}>Qty: {item.quantity}</p>
                    </div>
                    <span className={styles.itemPrice}>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>

              <div className={styles.orderFooter}>
                <div className={styles.shippingInfo}>
                  <strong>Shipping to:</strong> {order.shipping.name}, {order.shipping.city}
                </div>
                <button className={styles.trackBtn}>Track Order</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
