import "./Manual.css";
import Card from "../components/Card/Card";

function Manual() {
  return (
    <div id="overlay">
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
