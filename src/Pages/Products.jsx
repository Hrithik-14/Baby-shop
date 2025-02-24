
import { useState, useEffect } from 'react';
import axios from 'axios';

const ProductList = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/users')
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
    <h2>Baby Products</h2>
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {products.map(product => (
        <div key={product.id} style={{ border: "1px solid ", margin: "10px", padding: "10px", width: "250px" }}>
          <h3>{product.name}</h3>
          <img src={product.image} alt={product.name} style={{ width: "100%", height: "auto" }} />
          <p>{product.description}</p>
          <p><strong>${product.price}</strong></p>
        </div>
      ))}
    </div>
  </div>
);
};

export default ProductList;

