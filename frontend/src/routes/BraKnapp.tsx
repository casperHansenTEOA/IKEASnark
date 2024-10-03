import Card from "../components/Card/Card";
import { FaArrowLeft } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function BraKnapp() {
  return (
    <div id="overlay">
      <NavLink to="/stats">
        <button className="ArrowLeftButton">
          <FaArrowLeft id="ArrowLeft" />
        </button>
      </NavLink>
      <div className="vertical-cards">
        <Card startImage="/braKnappImg.png" />
        <Card startImage="/braKnappImg.png" />
        <Card startImage="/braKnappImg.png" />
        <Card startImage="/braKnappImg.png" />
      </div>
    </div>
  );
}

export default BraKnapp;
