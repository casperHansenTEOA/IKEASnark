import React from "react";
import "./AddNewDevice.css"; // Make sure to create this CSS file
import Card from "../Card/Card";
import { NavLink } from "react-router-dom";

const AddNewDevice: React.FC = () => {
  return (
    <div className="settings-overlay hidden">
      <div className="settings-content">
        <h2>Add a new device</h2>
        <NavLink to="/createLight" onClick={hideNavBar}>
          <Card>
            <h3>Add a light</h3>
          </Card>
        </NavLink>

        <NavLink to="/createSensor" onClick={hideNavBar}>
          <Card>
            <h3>Add a sensor</h3>
          </Card>
        </NavLink>

        <NavLink to="/createBed">
          <Card>
            <h3>Add a bed</h3>
          </Card>
        </NavLink>
      </div>
    </div>
  );
};

function hideNavBar() {
  const nav = document.querySelectorAll(".nav-footer")[0];
  nav.classList.toggle("hidden");
}

export default AddNewDevice;
