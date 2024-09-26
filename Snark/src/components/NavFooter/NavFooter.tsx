import React from "react";

import "./NavFooter.css"; // Assuming you have some CSS for stydivng

const NavFooter: React.FC = () => {
  return (
    <footer className="nav-footer">
      <button onClick={() => handleClick("home")}>
        <img src="src/assets/Home.svg" alt="home" />
      </button>
      <button onClick={() => handleClick("stats")}>
        <img src="src/assets/Bar chart-2.svg" alt="stats" />
      </button>
      <button onClick={() => handleClick("profile")}>
        <img src="src/assets/User.svg" alt="user" />
      </button>
    </footer>
  );
};

function handleClick(type: string) {
  console.log(`Navigating to ${type}`);
}

export default NavFooter;
