import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

function OrderDetails() {
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchOrderDetails();
  }, [id]);

  const fetchOrderDetails = async () => {
    try {
      setLoading(true);
      const { data: users } = await axios.get("http://localhost:4001/users");
      const userData = users.find(user => user.orders && user.orders.some(order => order.id === id));

      if (!userData) {
        setError("Order not found.");
        return;
      }

      const orderData = userData.orders.find(order => order.id === id);
      setOrder(orderData);
      setUser(userData);
    } catch (err) {
      console.error("Error fetching order details:", err);
      setError("Failed to fetch order details. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Loading order details...</p>;
  if (error) return <p style={styles.error}>{error}</p>;
  if (!order) return <p>No order data found.</p>;

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Order Details</h2>
      <div style={styles.details}>
        <p><strong>Order ID:</strong> {order.id}</p>
        <p><strong>User:</strong> {user ? user.name : "Unknown"}</p>
        <p><strong>Product:</strong> {order.name}</p>
        <p><strong>Price:</strong> ${order.price}</p>
        <p><strong>Description:</strong> {order.description}</p>
      </div>
      <Link to="/admin/order" style={styles.backButton}>Back to Orders</Link>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    border: "1px solid #ccc",
    width: "400px",
    margin: "auto",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  header: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#333",
  },
  details: {
    marginBottom: "20px",
  },
  backButton: {
    display: "block",
    marginTop: "10px",
    textDecoration: "none",
    color: "white",
    background: "#007bff",
    padding: "10px",
    textAlign: "center",
    borderRadius: "5px",
    transition: "background 0.3s ease",
  },
  error: {
    color: "red",
    textAlign: "center",
  },
};

export default OrderDetails;


