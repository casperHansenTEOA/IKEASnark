// import React, { useState } from 'react';
// import { IoIosArrowDown } from "react-icons/io";
// import Card from "../components/Card/Card";
import "./CreateDevice.css";
import { useEffect, useState } from "react";

import { sensorManager, fetchSensors } from "../handlers/SensorHandler";
import SensorCreationCard from "../components/SensorCreationCard/SensorCreationCard";

const CreateSensor: React.FC = () => {
  const nav = document.getElementById("footer");
  if (nav) {
    nav.classList.add("hidden");
  }

  const [listOfConnectableSensors, setListOfConnectableSensors] = useState<
    React.ReactNode[]
  >([]);

  useEffect(() => {
    const fetchSensors = async () => {
      const sensors = await getNonConnectedSensors();
      setListOfConnectableSensors(sensors);
    };
    fetchSensors();
  }, []);

  return (
    <div className="wrapper">
      <h1>Connect sensor</h1>

      {listOfConnectableSensors}
    </div>
  );
};

export default CreateSensor;

async function getNonConnectedSensors() {
  const avalibleSensors = await fetchSensors();

  const avalibleSensorIds = avalibleSensors.map((sensor) => sensor.id);
  const connectedSensors = sensorManager.getConnectedSensors();
  const connectedSensorIds = connectedSensors.map((sensor) => sensor.id);
  const nonConnectedLightIds = avalibleSensorIds.filter(
    (sensorId) => !connectedSensorIds.includes(sensorId)
  );

  return nonConnectedLightIds.map((sensorId) => (
    <SensorCreationCard key={sensorId} n={sensorId} />
  ));
}
