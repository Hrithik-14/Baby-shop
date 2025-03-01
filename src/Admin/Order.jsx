import React, { useEffect, useState } from 'react'

function Order() {
  const [products,setProducts] = useState([])
  const [users, setUsers] = useState([]);
  const [order, setOrders] = useState([]);
  
      useEffect(() => {
          fetchProducts();
          fetchUsers();
          fetchOrders();
      }, []);
      const fetchUsers = async() => {
        const response = await axios.get("http://localhost:4001/users");
        setUsers(response.data);
    };

    const fetchOrders = async () => {
        const response = await axios.get("http://localhost:4001/orders");
        setOrders(response.data);
    };
    const CancelProduct = async (id) => {
      await axios.delete(`http://localhost:4001/orders/${id}`);
      fetchProducts();
  };
  return (
      <div style={styles.main}>
            <h1 style={styles.header}>Admin Dashboard</h1>
            
            <h2 style={styles.sectionHeader}>Products</h2>
            <ul style={styles.list}>
                {products.map((product) => (
                    <li key={product.id} style={styles.listItem}>
                        <span>{product.name} - {product.category}</span>
                        <button 
                            style={styles.deleteButton} 
                            onClick={() => CancelProduct(product.id)}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>

            <h2 style={styles.sectionHeader}>Users</h2>
            <ul style={styles.list}>
                {orders.map((order) => (
                    <li key={order.id} style={styles.listItem}>
                        <span>{order.name}</span>
                        <button 
                            style={styles.detailsButton} 
                            onClick={() => alert(`User: ${order.name}\nOrder Details: Order : ${order}`)}
                        >
                            View Details
                        </button>
                    </li>
                ))}
            </ul>
        </div>
  )
}

export default Order