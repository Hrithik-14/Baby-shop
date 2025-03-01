// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import './Dashboard.css'

// const Dashboard = () => {
//     const [products, setProducts] = useState([]);
//     const [users, setUsers] = useState([]);

//     useEffect(() => {
//         fetchProducts();
//         fetchUsers();
//     }, []);

//     const fetchProducts = async () => {
//         const response = await axios.get("http://localhost:4001/products");
//         setProducts(response.data);
//     };

//     const fetchUsers = async () => {
//         const response = await axios.get("http://localhost:4001/users");
//         setUsers(response.data);
//     };

//     const deleteProduct = async (id) => {
//         await axios.delete(`http://localhost:4001/products/${id}`);
//         fetchProducts();
//     };

//     return (
//         <div className="main">
//             <h1>Admin Dashboard</h1>
            
//             <h2>Products</h2>
//             <ul>
//                 {products.map((product) => (
//                     <li key={product.id}>
//                         {product.name} - {product.category}
//                         <button onClick={() => deleteProduct(product.id)}>Delete</button>
//                     </li>
//                 ))}
//             </ul>

//             <h2>Users</h2>
//             <ul>
//                 {users.map((user) => (
//                     <li key={user.id}>
//                         {user.name}
//                         <button onClick={() => alert(`User: ${user.name}\nOrder Details: Order #123 - 3 items`)}>View Details</button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default Dashboard;
import React, { useState, useEffect } from "react";
import axios from "axios";
// import './Dashboard.css';

const Dashboard = () => {
    const [products, setProducts] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchProducts();
        fetchUsers();
    }, []);

    const fetchProducts = async () => {
        const response = await axios.get("http://localhost:4001/products");
        setProducts(response.data);
    };

    const fetchUsers = async () => {
        const response = await axios.get("http://localhost:4001/users");
        setUsers(response.data);
    };

    const deleteProduct = async (id) => {
        await axios.delete(`http://localhost:4001/products/${id}`);
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
                            onClick={() => deleteProduct(product.id)}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>

            <h2 style={styles.sectionHeader}>Users</h2>
            <ul style={styles.list}>
                {users.map((user) => (
                    <li key={user.id} style={styles.listItem}>
                        <span>{user.name}</span>
                        <button 
                            style={styles.detailsButton} 
                            onClick={() => alert(`User: ${user.name}\nOrder Details: Order #123 - 3 items`)}
                        >
                            View Details
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;
const styles = {
  main: {
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f9f9f9',
      borderRadius: '8px',
      maxWidth: '800px',
      margin: '0 auto',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  header: {
      textAlign: 'center',
      color: '#333',
      marginBottom: '20px',
  },
  sectionHeader: {
      color: '#555',
      borderBottom: '2px solid #ddd',
      paddingBottom: '10px',
      marginTop: '20px',
  },
  list: {
      listStyle: 'none',
      padding: '0',
  },
  listItem: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px',
      margin: '10px 0',
      backgroundColor: '#fff',
      borderRadius: '4px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  deleteButton: {
      backgroundColor: '#ff4d4d',
      color: '#fff',
      border: 'none',
      padding: '8px 12px',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '14px',
  },
  detailsButton: {
      backgroundColor: '#4CAF50',
      color: '#fff',
      border: 'none',
      padding: '8px 12px',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '14px',
  },
};