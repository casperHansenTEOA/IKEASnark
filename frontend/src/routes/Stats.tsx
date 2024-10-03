import "./Stats.css";
import Card from "../components/Card/Card";
import { NavLink } from "react-router-dom";

function Stats() {
  return (
    <div className="wrapper">
      <div className="horizontal-buttons">
        <NavLink to="/manual">
          <Card startImage="/Manual.png" />
        </NavLink>
        <NavLink to="/brasida">
          <Card startImage="/BraKnapp.png" />
        </NavLink>
      </div>
      <Card startImage="/TimeInBed.png" />
      <Card startImage="/Asleep.png" />
      <Card startImage="/AsleepAfter.png" />
    </div>
  );
}

export default Stats;

// type StatPropps = {
//     title:? string;
//     xstats: number[];
//     ystats: number[];
//     xtitle:? string;
//     ytitle:? string;
// }

// const Statsfield = ({variabler, man , lägger, in}) => {

//     return
//         //Här gör du koden för snyghet
//         <div>

//         </div>;
// } ;
