import React from "react";
import "./Home.css";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import ProductList from "./Products";

function Home() {

  const navigate = useNavigate()
  return (
    <>
     
      <main className="baby-container">
        
        <div className="baby-para">
          <h1>Baby Fashion</h1>
          <p>
            Explore the cutest and most stylish baby fashion collection. Our
            handpicked designs ensure comfort and joy for your little ones.
          </p>
          <button onClick={() =>{
            navigate('/products')
          }}  className="shop-now">Shop Now</button>
        </div>
        <div className="babyimg">
          <img
            src="https://websitedemos.net/baby-store-04/wp-content/uploads/sites/750/2020/12/baby-store-hero-baby-img.png"
            alt="Baby Fashion"
          />
          
        </div> 
        <img   style={{width:'300px', height:'300px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZGl3rg3pnDNJfYc60LMMNavOYNPpKdzLQ2A&s" alt="" />
      

      <img style={{width:'300px', height:'300px'}} src="https://cdn.create.vista.com/downloads/c4240145-070f-4d55-ad44-3ea8f4827182_1024.jpeg" alt="" />

      </main>
      
    </>
  );
}

export default Home;


