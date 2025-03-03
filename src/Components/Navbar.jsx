import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { useEffect, useState } from "react";
import { IoIosLogOut } from "react-icons/io";
import "./Navbar.css";
import Search from "./Search";

const Navbar = () => {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    if (storedName) {
      setUserName(storedName);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("userName");
    localStorage.removeItem("userRole");
    localStorage.removeItem("rememberedEmail");
    setUserName("");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img
          src="https://websitedemos.net/baby-store-04/wp-content/uploads/sites/750/2020/12/baby-store-logo.svg"
          alt="Baby Store Logo"
          className="logo"
        />
        <div className="store-name">Baby Store</div>
      </div>

      <ul className="nav-links">
        <li>
          <Search />
        </li>
        <li>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/productlist" className="nav-link">
            Products
          </Link>
        </li>
        <li>
          <Link to="/cart" className="nav-link">
            <MdOutlineShoppingCartCheckout />
          </Link>
        </li>
        <li className="nav-link">
          {userName ? (
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <select
                style={{ border: "none", background: "none", cursor: "pointer" }}
                onChange={(e) => {
                  if (e.target.value === "logout") {
                    handleLogout();
                  }
                }}


              >
                
                <option value="">{userName}</option>
                
                <option value="logout">Log Out</option>
              </select>
            </div>
          ) : (
            <Link to="/login">
              <FaUserCircle />
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;



