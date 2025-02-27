import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import "./Navbar.css";
import Search from "./Search";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src="https://websitedemos.net/baby-store-04/wp-content/uploads/sites/750/2020/12/baby-store-logo.svg" alt="Baby Store Logo" className="logo" />
        <div className="store-name">Baby Store</div>
      </div>
      <ul className="nav-links">
        <li><Search/></li>
        <li><Link to="/search"></Link></li>
        <li><Link to="/" className="nav-link">Home</Link></li>
        <li><Link to="/products" className="nav-link">Products</Link></li>
        <li><Link to="/cart" className="nav-link"><MdOutlineShoppingCartCheckout /></Link></li>
        <li><Link to="/login" className="nav-link"><FaUserCircle/></Link></li>
        {/* <li><Link to="/register" className="nav-link"><FaUserCircle/><Link to="/login"></Link></Link></li> */}
        
      </ul>
    </nav>
  );
};

export default Navbar;

