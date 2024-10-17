import { useEffect } from "react";
import { useState } from "react";
import Bed from "../../types/Bed";

import SquareCard from "../Card/SquareCard";
import { IoBedOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";


type Props = {
  bed: Bed;
};

const BedController = ({ bed }: Props) => {
  useEffect(() => {
    console.log("Bed temperature is now: ", bed.temperature);
  }, [bed.temperature]);

  const nav = useNavigate();

  const [currentWantedTemp, setWantedTemperature] = useState(bed.temperature);

  // this is to be used to fetch actual current temperature
  // const [currentTemp, setTemp] = useState(bed.temperature);


  // function decreaseTemperature() {
  //   setWantedTemperature(bed.temperature - 1);

  //   bed.temperature= currentWantedTemp;
  // }

  // function increaseTemperature() {
  //   setWantedTemperature(bed.temperature + 1);
  //   bed.temperature= currentWantedTemp;

  //   //TODO bed api call to actually change the temperature
  // }
  
  return (
    <SquareCard >
      <div className="clickable" onClick={()=>{nav("/beddetails", {state: {bed:bed}})}}>
        {/* <button onClick={increaseTemperature}>
          
          <b>+</b>
        </button> */}
        <IoBedOutline size={30}  />
        <h3>{currentWantedTemp} °C</h3>
        
        {/* <button onClick={decreaseTemperature}>
          <b>-</b>
        </button> */}
      </div>
    </SquareCard>



  );
};

// select the square card and add an event listener to it
// when clicked, it should redirect to the bed details page


export default BedController;
