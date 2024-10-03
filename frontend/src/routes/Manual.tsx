import "./Manual.css";
import Card from "../components/Card/Card";
import { FaArrowLeft } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Manual() {
  return (
    <div id="overlay">
      <NavLink to="/stats">
        <button className="ArrowLeftButton">
          <FaArrowLeft id="ArrowLeft" />
        </button>
      </NavLink>

      <div className="horizontal-cards">
        <Card startImage="/manualVerktyg.png" />
        <Card startImage="/manualVerktyg.png" />
        <Card startImage="/manualVerktyg.png" />
        <Card startImage="/manualVerktyg.png" />
      </div>
    </div>
  );
}

export default Manual;
