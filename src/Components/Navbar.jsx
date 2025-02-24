import { Link } from "react-router-dom";
// import { CgProfile } from "react-icons/cg";
import { FaUserCircle } from "react-icons/fa";
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img
          src="https://websitedemos.net/baby-store-04/wp-content/uploads/sites/750/2020/12/baby-store-logo.svg"
          alt=""
          className="logo"
        />
        <div className="store-name">Baby Store</div>
      </div>
      <ul className="nav-links">
        <li><Link to="/" className="nav-link">Home</Link></li>
        <li><Link to="/products" className="nav-link">Products</Link></li>
        <li><Link to="/cart" className="nav-link">Carts</Link></li>
        <li><Link to="/login" className="nav-link">Login</Link></li>
        <li><Link to="/register" className="nav-link">Register</Link></li>
        
      </ul>
    </nav>
  );
};
export default Navbar





