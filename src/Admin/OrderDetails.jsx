import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

function OrderDetails() {
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchOrderDetails();
  }, []);

  const fetchOrderDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:4001/orders/${id}`);
      setOrder(response.data);
      fetchUserDetails(response.data.userId); // Fetch user details using userId
    } catch (error) {
      console.error("Error fetching order details:", error);
    }
  };

  const fetchUserDetails = async (userId) => {
    try {
      const response = await axios.get(`http://localhost:4001/users/${userId}`);
      setUser(response.data);
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(); // Returns the date in the format "MM/DD/YYYY"
  };

  if (!order || !user) {
    return <p>Loading order details...</p>;
  }

  return (
    <div style={styles.container}>
      <h2>Order Details</h2>
      <p><strong>Order ID:</strong> {order.id}</p>
      <p><strong>User:</strong> {user.name}</p>
      <p><strong>Product:</strong> {order.product}</p>
      <p><strong>Quantity:</strong> {order.quantity}</p>
      <p><strong>Total Price:</strong> ${order.totalPrice}</p>
      <p><strong>Order Date:</strong> {formatDate(order.orderDate)}</p> {/* Added Order Date */}

      <Link to="/admin/order" style={styles.backButton}>Back to Orders</Link>
    </div>
  );
}

const styles = {
  container: { padding: "20px", fontFamily: "Arial, sans-serif", border: "1px solid #ccc", width: "400px", margin: "auto" },
  backButton: { display: "block", marginTop: "10px", textDecoration: "none", color: "white", background: "blue", padding: "10px", textAlign: "center", borderRadius: "5px" }
};

export default OrderDetails;
