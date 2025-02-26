import React from "react";
import "./Home.css";
// import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";


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
       
      </main>
      
    </>
  );
}

export default Home;


