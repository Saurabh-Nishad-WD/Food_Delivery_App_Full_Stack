import React from "react";
import "./Navbar.css";
import { assets } from "../../assets/frontend_assets/assets";
const Navbar = () => {
  return (
    <div className="navbar">
      <img src={assets.logo} alt="" />
        <div className="">
          <ul>
            <li>Home</li>
            <li>Menu</li>
            <li>Mobile App</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="">
          <ul>
            <li><img src={assets.search_icon} alt="" /></li>
            <li><img src={assets.basket_icon} alt="" /></li>
            <li><button>
                sign in
            </button></li>
          </ul>
        </div>
    </div>
  );
};

export default Navbar;
