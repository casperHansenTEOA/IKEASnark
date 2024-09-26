import React from "react";
import {NavLink} from "react-router-dom";

import "./NavFooter.css"; // Assuming you have some CSS for stydivng

const NavFooter: React.FC = () => {
  return (
    <footer className="nav-footer">
      <NavLink to="/">
        <img src="src/assets/Home.svg" alt="home" />
      </NavLink>
      <NavLink to="/stats">
        <img src="src/assets/Bar chart-2.svg" alt="stats" />
      </NavLink>
      <NavLink to="/profile">
        <img src="src/assets/User.svg" alt="user" />
      </NavLink>
    </footer>
  );
};

// function handleClick(type: string) {
  
//     switch (type) {
//         case "home":
//         //redirect to home page
        
//         break;
//     }
// }

export default NavFooter;
