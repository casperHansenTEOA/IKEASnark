import { useEffect, useState } from "react";
import Sensor from "../../types/Sensor";

import { sensorManager } from "../../handlers/SensorHandler";

import { RgbaColorPicker, RgbaColor } from "react-colorful";

import "./SensorController.css";
import { IoIosArrowDown } from "react-icons/io";
import SquareCard from "../Card/SquareCard";

type Props = {
  Sensor: Sensor;
};

const SensorController = ({ Sensor }: Props) => {
  const [connectedToBed, setConnectedToBed] = useState(Sensor.connectedToBed);

  useEffect(() => {
    const fetchSensors = async () => {
      const sensor = await sensorManager.getSensorById(Sensor.id);
      if (sensor) {
        setConnectedToBed(sensor.connectedToBed);
        // console.log("Setting connected to bed to: ", sensor.connectedToBed);
      }
    };
    fetchSensors();
  }, []);

  return (
    <SquareCard>
      <div>
        <h3>{Sensor.name}</h3>
        <IoIosArrowDown
          className="controller-arrow down-arrow"
          id={"arrow" + Sensor.id.toString()}
          onClick={() => expandCard(Sensor.id)}
        />
      </div>

      <div className="expanded-info hidden" id={"card" + Sensor.id.toString()}>
        {connectedToBed !== 0 ? (
          <h4>Connected to bed: {connectedToBed}</h4>
        ) : (
          <h4>Not connected to bed</h4>
        )}
      </div>
    </SquareCard>
  );
};

function expandCard(n: number) {
  const cardId = "card" + n.toString();
  const card = document.getElementById(cardId);
  if (card) {
    card.classList.toggle("hidden");
  }

  const arrow = document.getElementById("arrow" + n.toString());
  if (arrow) {
    arrow.classList.toggle("rotate");
  }
}

export default SensorController;
