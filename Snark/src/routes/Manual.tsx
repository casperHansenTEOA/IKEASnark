import "./Manual.css";
import Card from "../components/Card/Card";
import { FaArrowLeft } from "react-icons/fa";

function Manual() {
  return (
    <div id="overlay">
      <FaArrowLeft id="ArrowLeft" />
      <div className="horizontal-cards">
        <Card startImage="src/assets/manualVErktyg.png" />
        <Card startImage="src/assets/manualVErktyg.png" />
        <Card startImage="src/assets/manualVErktyg.png" />
        <Card startImage="src/assets/manualVErktyg.png" />
      </div>
    </div>
  );
}

export default Manual;
