import React from "react";
import { Link } from "react-router-dom";
import "./NavFooter.css"; // Assuming you have some CSS for styling

const NavFooter: React.FC = () => {
  return (
    <footer className="nav-footer">
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/stats">About</Link>
          </li>
          <li>
            <Link to="/profile">Services</Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default NavFooter;
