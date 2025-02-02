import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../../assets/frontend_assets/assets";
const Navbar = () => {
  const [menu,setMenu] = useState("home");
  return (
    <div className="navbar">
      <img src={assets.logo} alt="" />
        <div className="">
          <ul>
            <li onClick={() => setMenu("home")} className={menu === "home"? "active":""}>Home</li>
            <li onClick={() => setMenu("Menu")} className={menu === "Menu"? "active":""}>Menu</li>
            <li onClick={() => setMenu("Mobile App")} className={menu === "Mobile App"? "active":""}>Mobile App</li>
            <li onClick={() => setMenu("Contact Us")} className={menu === "Contact Us"? "active":""}>Contact Us</li>
          </ul>
        </div>
        <div className="">
          <ul>
            <li><img src={assets.search_icon} alt="" /></li>
            <li><img src={assets.basket_icon} alt="" />
            <div className="dot"></div>
            </li>
            <li><button>
                sign in
            </button></li>
          </ul>
        </div>
    </div>
  );
};

export default Navbar;
