import React from "react";
import {NavLink} from "react-router-dom";
import { FaRegChartBar } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import { MdOutlinePersonOutline } from "react-icons/md";



import "./NavFooter.css"; // Assuming you have some CSS for stydivng

const NavFooter: React.FC = () => {
  return (
    <footer className="nav-footer">
      <NavLink to="/">
        <FaHouse/>
      </NavLink>
      <NavLink to="/stats">
        <FaRegChartBar/>
      </NavLink>
      <NavLink to="/profile">
        <MdOutlinePersonOutline/>
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
