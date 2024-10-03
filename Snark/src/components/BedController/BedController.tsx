import { useEffect } from "react";
import { useState } from "react";
import Bed from "../../types/Bed";
import Card from "../Card/Card";

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
    <Card>
      <div className="horizontal">
        <button onClick={decreaseTemperature}>
          <b>-</b>
        </button>
        <p>{currentWantedTemp} °C</p>
        <button onClick={increaseTemperature}>
          <b>+</b>
        </button>
      </div>
    </Card>
  );
};



export default BedController;
