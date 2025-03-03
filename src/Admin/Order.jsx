import React, { useEffect, useState } from "react";
import axios from "axios";

function Order() {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchProducts();
    fetchUsers();
    fetchOrders();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:4001/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:4001/users");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const fetchOrders = async () => {
    try {
      const response = await axios.get("http://localhost:4001/orders");
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

  return (
    <div style={styles.main}>
      {/* <h1 style={styles.header}>Admin Dashboard</h1> */}

      <h2 style={styles.sectionHeader}>Products</h2>
      <ul style={styles.list}>
        {products.map((product) => (
          <li key={product.id} style={styles.listItem}>
            <span>
              {product.name} - {product.category}
            </span>
          </li>
        ))}
      </ul>

      <h2 style={styles.sectionHeader}>Orders</h2>
      <ul style={styles.list}>
        {orders.map((order) => (
          <li key={order.id} style={styles.listItem}>
            <span>{order.name}</span>
            <button
              style={styles.detailsButton}
              onClick={() =>
                alert(`User: ${order.name}\nOrder Details:\n${JSON.stringify(order, null, 2)}`)
              }
            >
              View Details
            </button>
            <button style={styles.deleteButton} onClick={() => cancelOrder(order.id)}>
              Cancel Order
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  main: { padding: "20px", fontFamily: "Arial, sans-serif" },
  header: { textAlign: "center" },
  sectionHeader: { marginTop: "20px" },
  list: { listStyle: "none", padding: 0 },
  listItem: { display: "flex", justifyContent: "space-between", marginBottom: "10px" },
  detailsButton: { marginLeft: "10px", backgroundColor: "blue", color: "white", border: "none", padding: "5px 10px", cursor: "pointer" },
  deleteButton: { marginLeft: "10px", backgroundColor: "red", color: "white", border: "none", padding: "5px 10px", cursor: "pointer" }
};

export default Order;

