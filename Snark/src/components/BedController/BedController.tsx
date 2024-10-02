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

  const [currentTemp, setTemperature] = useState(bed.temperature);


  function decreaseTemperature() {
    setTemperature(bed.temperature - 1);

    bed.temperature= currentTemp;
  }

  function increaseTemperature() {
    setTemperature(bed.temperature + 1);
    bed.temperature= currentTemp;

    //TODO bed api call to actually change the temperature
  }
  
  return (
    <Card>
      <div className="horizontal">
        <button onClick={decreaseTemperature}>
          <b>-</b>
        </button>
        <p>{currentTemp} °C</p>
        <button onClick={increaseTemperature}>
          <b>+</b>
        </button>
      </div>
    </Card>
  );
};



export default BedController;
