// import React, { useEffect, useState } from 'react'

// function Products() {
//   const [products,setProducts] = useState([])

//   useEffect(()=>{
//     async () =>{
//       const response = await axios.get("http://localhost:4001/products");
//       setProducts(response.dat)
//     }

//   })
//   return (
//   <div  className="main">
//                 <h1 >Admin Dashboard</h1>
//                 <h2>Products</h2>
//                 <ul style={styles.list}>
//                     {products.map((product) => (
//                         <li key={product.id}>
//                             <span>{product.name} </span>
//                             <button 
//                                 onClick={() => deleteProduct(product.id)}
//                             >
//                                 <FaDeleteLeft />
//                             </button>
//                         </li>
//                     ))}
//                 </ul>
//                 </div>
//   )
//   }

// export default Products



import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Products.css"; 

const Products = () => {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    axios.get("http://localhost:4001/products") 
      .then(response => setProducts(response.data))
      .catch(error => console.error("Error fetching products:", error));
  }, []);

  
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4001/products/${id}`);
      setProducts(products.filter(product => product.id !== id));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div className="admin-container">
      <h2 className="admin-title">Admin Panel</h2>
      <table className="admin-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>${product.price}</td>
              <td>
                <button 
                  onClick={() => handleDelete(product.id)}
                  className="delete-button"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;