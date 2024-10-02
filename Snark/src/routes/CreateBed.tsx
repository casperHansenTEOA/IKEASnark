// import React, { useState } from 'react';

import { NavigateFunction, useNavigate } from "react-router-dom";
import Card from "../components/Card/Card";
import "./CreateLightAndBed.css";
import { useEffect, useState } from "react";

import {fetchBeds} from "../handlers/BedHandler";

import { bedManager } from "../handlers/BedHandler";

const CreateBed: React.FC = () => {
  // const [lightName, setLightName] = useState('');
  // const [bedId, setBedId] = useState('');
  const navigate = useNavigate();

  const nav = document.getElementById("footer");
  if (nav) {
    nav.classList.add("hidden");
  }
  const [listOfDummyBeds, setListOfDummyBeds] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    const fetchDummyBeds = async () => {
      const resolvedBeds = await getAvalibleBeds(navigate);
      setListOfDummyBeds(resolvedBeds);
    };
    fetchDummyBeds();
  }, [navigate]);

  return (
    <div className="wrapper">
      <h1>Connect lights</h1>

      {listOfDummyBeds}
    </div>
  );
};

function dummyBed(n: number, navigate: NavigateFunction) {
  return (
    <div key={n}>
      <Card>
        <h1>Bed {n}</h1>

        <div className="expanded-info  ">
          <form
            onSubmit={(e) => {
              e.stopPropagation();
              e.preventDefault();
              bedManager.addBedFromId(n);

              navigateToHome(navigate);

              //TODO send data to backend
              // Handle form submission logic here
            }}
            className="light-form "
          >
            <button type="submit">Connect</button>
          </form>
        </div>
      </Card>
    </div>
  );
}
export default CreateBed;

async function getAvalibleBeds(navigate: NavigateFunction) {
  //TODO get beds from backend
  const connectedBeds =  bedManager.getConnectedBeds();
  
   const beds = await fetchBeds();


    const allBedIds = beds.map((bed) => bed.id);
    const connectedBedIds = connectedBeds.map((bed) => bed.id);

    const unconnectedBedIds = allBedIds.filter(
      (bedId) => !connectedBedIds.includes(bedId)
    );

  return unconnectedBedIds.map((n) => dummyBed(n, navigate));
}

function navigateToHome(navigate: NavigateFunction) {
  // Redirect to home page
  console.log("Home");
  document.querySelectorAll(".nav-footer")[0].classList.toggle("hidden");

  navigate("/");
}
