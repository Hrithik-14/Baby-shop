import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";

function Order() {
  const [orders, setOrders] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:4001/users");
      setUsers(response.data);
      
      fetchOrders(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const fetchOrders = (users) => {
    let allOrders = [];
    users.forEach((user) => {
      if (user.orders && user.orders.length > 0) {
        allOrders = [...allOrders, ...user.orders];
      }
    });
    setOrders(allOrders);
  };

  const cancelOrder = async (id) => {
    try {
      await axios.delete(`http://localhost:4001/orders/${id}`);
      fetchUsers();  // Refresh orders after deletion
    } catch (error) {
      console.error("Error deleting order:", error);
    }
  };

  const getUserName = (userId) => {
    const user = users.find((u) => u.id === userId);
    return user ? user.name : "Unknown User";
  };

  const styles = {
    main: {
      padding: "20px",
      fontFamily: "Arial, sans-serif",
      width: "100%",
    },
    sectionHeader: {
      fontSize: "24px",
      marginBottom: "20px",
      color: "#333",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      marginBottom: "20px",
    },
    tableHeader: {
      backgroundColor: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px solid #ddd",
      textAlign: "left",
    },
    tableRow: {
      borderBottom: "1px solid #ddd",
      "&:hover": {
        backgroundColor: "#f9f9f9",
      },
    },
    tableCell: {
      padding: "10px",
      textAlign: "left",
    },
    actions: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
    },
    iconButton: {
      color: "#007bff",
      textDecoration: "none",
      display: "flex",
      alignItems: "center",
      "&:hover": {
        color: "#0056b3",
      },
    },
    deleteButton: {
      backgroundColor: "#dc3545",
      color: "#fff",
      border: "none",
      padding: "5px 10px",
      borderRadius: "4px",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "#c82333",
      },
    },
  };

  return (
    <div style={styles.main}>
      <h2 style={styles.sectionHeader}>Orders</h2>
      {orders.length === 0 ? (
        <p>No orders available.</p>
      ) : (
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.tableHeader}>User</th>
              <th style={styles.tableHeader}>Order</th>
              <th style={styles.tableHeader}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} style={styles.tableRow}>
                <td style={styles.tableCell}>{getUserName(order.userId)}</td>
                <td style={styles.tableCell}>{order.name}</td>
                <td style={styles.tableCell}>
                  <div style={styles.actions}>
                    <Link to={`/admin/order/${order.id}`} style={styles.iconButton}>
                      <AiOutlineEye />
                    </Link>
                    <button style={styles.deleteButton} onClick={() => cancelOrder(order.id)}>
                      Cancel Order
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Order;


