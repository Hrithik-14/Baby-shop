import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

function ProfileDetail() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchUserDetails();
    fetchUserOrders();
  }, []);

  const fetchUserDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:4001/users/${id}`);
      setUser(response.data);
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  const fetchUserOrders = async () => {
    try {
      const response = await axios.get("http://localhost:4001/orders");
      const userOrders = response.data.filter((order) => order.userId === parseInt(id));
      setOrders(userOrders);
    } catch (error) {
      console.error("Error fetching user orders:", error);
    }
  };

  if (!user) {
    return <p>Loading user details...</p>;
  }

  return (
    <div style={styles.container}>
      <h2>User Details</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      
      <h3>Orders</h3>
      {orders.length > 0 ? (
        <ul>
          {orders.map((order) => (
            <li key={order.id}>
              <strong>Order ID:</strong> {order.id} | <strong>Total Price:</strong> ${order.price}
            </li>
          ))}
        </ul>
      ) : (
        <p>No orders found for this user.</p>
      )}

      <Link to="/admin/profile" style={styles.backButton}>Back to Users</Link> {/* Corrected link */}
    </div>
  );
}

const styles = {
  container: { padding: "20px", fontFamily: "Arial, sans-serif", border: "1px solid #ccc", width: "400px", margin: "auto" },
  backButton: { display: "block", marginTop: "10px", textDecoration: "none", color: "white", background: "blue", padding: "10px", textAlign: "center", borderRadius: "5px" }
};

export default ProfileDetail;

