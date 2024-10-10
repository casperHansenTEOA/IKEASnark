import { useEffect } from "react";
import { useState } from "react";
import Bed from "../../types/Bed";
import Card from "../Card/Card";
import SquareCard from "../Card/SquareCard";

type Props = {
  bed: Bed;
};

const BedController = ({ bed }: Props) => {
  useEffect(() => {
    console.log("Bed temperature is now: ", bed.temperature);
  }, [bed.temperature]);

  const [currentWantedTemp, setWantedTemperature] = useState(bed.temperature);

  // this is to be used to fetch actual current temperature
  // const [currentTemp, setTemp] = useState(bed.temperature);


  function decreaseTemperature() {
    setWantedTemperature(bed.temperature - 1);

    bed.temperature= currentWantedTemp;
  }

  function increaseTemperature() {
    setWantedTemperature(bed.temperature + 1);
    bed.temperature= currentWantedTemp;

    //TODO bed api call to actually change the temperature
  }
  
  return (
    <SquareCard>
      <div className="horizontal">
        
        <p>{currentWantedTemp} °C</p>
        <button onClick={increaseTemperature}>
          
          <b>+</b>
        </button>
        <button onClick={decreaseTemperature}>
          <b>-</b>
        </button>
      </div>
    </SquareCard>
  );
};



export default BedController;
