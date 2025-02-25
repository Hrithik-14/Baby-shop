
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './ProductList.css';
import { BiCartAdd } from "react-icons/bi";
// import Cart from './Carts';
// import Payment from './Payment';
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  const navigate = useNavigate()
  const [products, setProducts] = useState([]);
  console.log(products);
  
  useEffect(() => {
    const fetchproduct = async () => {
      try {
        const res = await axios.get("http://localhost:3001/products");
        console.log(res.data);
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchproduct();
  }, []);

  return (
    <div className="container">
      <h1>Products</h1>
      {products.map(product => (
        <div key={product.id} className="product">
          
          <img src={product.image1} alt={product.name} />
          <div className="product-details">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p className="price">${product.price}</p>
            <BiCartAdd onClick={() =>{
              navigate('/carts')
            }} style={{height:'20px', width: '50px'}} />
            
          </div>
          <button onClick={() =>{
            navigate('/payment')
          }}  style={{height:'30px', width: '40px', borderRadius:'5px', background:' #84E1A8'}}>Buy</button>
        </div>
     

      ))}
    </div>
  );
};

export default ProductList;
