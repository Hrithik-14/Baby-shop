import { Link } from "react-router-dom";
// import { CgProfile } from "react-icons/cg";
import { FaUserCircle } from "react-icons/fa";
import './Navbar.css';


// const Navbar() {
//   return (
//     <nav className="navbar">
//       <div className="logo-container">
//         <img
//           src="https://img.atom.com/story_images/visual_images/1700375499-BabyZee1.png?class=listing"
//           alt=""
//           className="logo"
//         />
//         <div className="store-name">Baby Store</div>
//       </div>
//       <ul className="nav-links">
//         <li><a href="/" className="nav-link">Home</a></li>
//         <li><a href="/products" className="nav-link">Products</a></li>
//         <li><a href="/cart" className="nav-link">Cart</a></li>
//         <li><a href="/login" className="nav-link">Login</a></li>
//         <li><a href="/register" className="nav-link">Register</a></li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;    


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
        <li><Link to="/cart" className="nav-link">Add Cart</Link></li>
        <li><Link to="/login" className="nav-link">Login</Link></li>
        <li><Link to="/register" className="nav-link">Register</Link></li>
      </ul>
    </nav>
  );
};
export default Navbar





// const NavbarComponent = () => {
//   return (
//     <nav className="bg-blue-500 p-4 text-white flex justify-between items-center">
//       <div className="flex items-center gap-2">
//         <img src="https://img.atom.com/story_images/visual_images/1700375499-BabyZee1.png?class=listing" alt="" className="h-10" />
//         <div className="text-lg font-bold">Baby Store</div>
//       </div>
//       <ul className="flex gap-4">
//         <li><a href="/" className="hover:underline">Home</a></li>
//         <li><a href="/products" className="hover:underline">Products</a></li>
//         <li><a href="/cart" className="hover:underline">Cart</a></li>
//         <li><a href="/login" className="hover:underline">Login</a></li>
//         <li><a href="/register" className="hover:underline">Register</a></li>
//       </ul>
//     </nav>
//   );
// };