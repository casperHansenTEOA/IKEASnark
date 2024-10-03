// import React, { useState } from 'react';
// import { IoIosArrowDown } from "react-icons/io";
// import Card from "../components/Card/Card";
import "./CreateLightAndBed.css";
import { useEffect, useState } from "react";

import { lightManager, fetchLights } from "../handlers/LightHandler";
import LightCreationCard from "../components/LightCreationCard/LightCreationCard";
// import {fetchBeds} from "../handlers/BedHandler";
// import Bed from "../types/Bed";
// import LightCreationCard from "../components/LightCreationCard/LightCreationCard";

const CreateLight: React.FC = () => {
  // const [lightName, setLightName] = useState('');
  // const [bedId, setBedId] = useState('');


  const nav = document.getElementById("footer");
  if (nav) {
    nav.classList.add("hidden");
  }


  const [listOfConnectableLights, setListOfConnectableLights] = useState<React.ReactNode[]>([]);

  

  useEffect(() => {
    const fetchLights = async () => {
      const lights = await getNonConnectedLights();
      setListOfConnectableLights(lights);
    };
    fetchLights();
  }, []);

  return (
    <div className="wrapper">
      <h1>Connect lights</h1>

      {listOfConnectableLights}
    </div>
  );
};


export default CreateLight;

async function getNonConnectedLights() {
  const avalibleLights = await fetchLights();

  const avalibleLightIds = avalibleLights.map((light) => light.id);
  const connectedLights = lightManager.getConnectedLights();
  const connectedLightIds = connectedLights.map((light) => light.id);
  const nonConnectedLightIds =  avalibleLightIds.filter(
    (lightId) => !connectedLightIds.includes(lightId)
  );

  return nonConnectedLightIds.map((lightId) => <LightCreationCard key={lightId} n={lightId} />);
}


