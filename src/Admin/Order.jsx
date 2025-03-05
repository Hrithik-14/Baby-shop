import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";

function Order() {
  const [orders, setOrders] = useState([]);
  const [users, setUsers] = useState([]); 

  useEffect(() => {
    fetchUsers();
    fetchOrders();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:4001/users");
      console.log(response.data); 
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const fetchOrders = async () => {
    try {
      const response = await axios.get("http://localhost:4001/orders");
      console.log(response.data); 
      setOrders(response.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  const cancelOrder = async (id) => {
    try {
      await axios.delete(`http://localhost:4001/orders/${id}`);
      fetchOrders(); 
    } catch (error) {
      console.error("Error deleting order:", error);
    }
  };

  
  const getUserName = (userId) => {
    const user = users.find((u) => u.id === userId);
    console.log(user); 
    return user ? user.name : "Unknown User";
  };

  return (
    <div style={styles.main}>
      <h2 style={styles.sectionHeader}>Orders</h2>
      <ul style={styles.list}>
        {orders.length === 0 ? (
          <p>No orders available.</p>
        ) : (
          orders.map((order) => (
            <li key={order.id} style={styles.listItem}>
              <span>
                <strong>User:</strong> {getUserName(order.userId)} | <strong>Order:</strong> {order.name}
              </span>

              
              <Link to={`/admin/order/${order.id}`} style={styles.iconButton}>
                <AiOutlineEye />
              </Link>

              
              <button style={styles.deleteButton} onClick={() => cancelOrder(order.id)}>
                Cancel Order
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

const styles = {
  main: { padding: "20px", fontFamily: "Arial, sans-serif" },
  sectionHeader: { marginTop: "20px" },
  list: { listStyle: "none", padding: 0 },
  listItem: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "10px" },
  iconButton: { marginLeft: "10px", cursor: "pointer", textDecoration: "none", fontSize: "20px", color: "blue" },
  deleteButton: { marginLeft: "10px", backgroundColor: "red", color: "white", border: "none", padding: "5px 10px", cursor: "pointer" }
};

export default Order;
