import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

function ProfileDetail() {
  const { id } = useParams(); 
  const [user, setUser] = useState(null); 

  useEffect(() => {
    fetchUserDetails();
  }, [id]); 

  const fetchUserDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:4001/users/${id}`);
      setUser(response.data);
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  if (!user) {
    return <p>Loading user details...</p>;
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>User Details</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>

      <h3 style={styles.orderHeading}>Orders</h3>
      {user.orders && user.orders.length > 0 ? (
        <ul style={styles.orderList}>
          {user.orders.map((order) => (
            <li key={order.id} style={styles.orderItem}>
              <strong>Product:</strong> {order.name} | 
              <strong> Price:</strong> ${order.price} | 
              <strong> Quantity:</strong> {order.quantity} | 
              <strong> Status:</strong> {order.status}
            </li>
          ))}
        </ul>
      ) : (
        <p>No orders found for this user.</p>
      )}

      <Link to="/admin/profile" style={styles.backButton}>Back to Users</Link>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    border: "1px solid #e0e0e0",
    width: "80%",
    maxWidth: "500px",
    margin: "auto",
    marginTop: "50px",
    backgroundColor: "#fafafa",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    fontSize: "24px",
    color: "#333",
    textAlign: "center",
    marginBottom: "20px",
  },
  orderHeading: {
    fontSize: "18px",
    color: "#333",
    marginBottom: "15px",
  },
  orderList: {
    listStyleType: "none",
    paddingLeft: "0",
  },
  orderItem: {
    marginBottom: "10px",
    padding: "10px",
    backgroundColor: "#fff",
    borderRadius: "5px",
    border: "1px solid #e0e0e0",
  },
  backButton: {
    display: "inline-block",
    marginTop: "20px",
    textDecoration: "none",
    color: "#fff",
    backgroundColor: "#007bff",
    padding: "10px 20px",
    textAlign: "center",
    borderRadius: "5px",
    transition: "background-color 0.3s ease",
  },
  backButtonHover: {
    backgroundColor: "#0056b3",
  },
};

export default ProfileDetail;
