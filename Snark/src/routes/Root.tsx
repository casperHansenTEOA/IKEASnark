// import { useState } from 'react'

import "./Root.css";
import Card from "../components/Card/Card";
import AddNewDevice from "../components/AddNewDevice/AddNewDevice";

import { FaArrowRight } from "react-icons/fa";
// import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import { FaPlus } from "react-icons/fa6";
import BedController from "../components/BedController/BedController";
import { fetchBeds } from "../handlers/BedHandler";
import Bed from "../types/Bed";
import { useEffect, useState } from "react";

function Root() {
  const [beds, setBeds] = useState<Bed[]>([]);

  useEffect(() => {
    const fetchAllBeds = async () => {
      setBeds(await fetchBeds());
    };
    fetchAllBeds();
  }, []);

  return (
    <div className="wrapper">
      <header className="front-page-header">
        <h1>Snark</h1>

        <AiOutlineClose
          className="settings-button hidden"
          onClick={closeSettings}
        />
      </header>
      <AddNewDevice />
      <Card startImage="src/assets/home-page-bed.png">
        <h2>About the bed</h2>
        <p>
          The temperature-controlled smart bed adjusts automatically to your set
          sleep temperature, ensuring optimal comfort all night long.
        </p>
        <p>
          As you enter the room, the lights can trigger the bed's cooling
          system, preparing the bed to your preferred temperature before you
          even lie down.
        </p>
        <b> Find out more and see your statistics {<FaArrowRight />}</b>
      </Card>
      {beds.map((bed) => (
        <BedController key={bed.id} bed={bed} />
      ))}
      <Card>
        <FaPlus
          className="settings-button bottom-button"
          onClick={showSettings}
        />
      </Card>
    </div>
  );
}

function showSettings() {
  //Redirect to settings page
  console.log("Settings");
  document.querySelectorAll(".nav-footer")[0].classList.toggle("hidden");

  //show seetings page
  document.querySelectorAll(".settings-overlay")[0].classList.toggle("hidden");
  // hide button
  document.querySelectorAll(".settings-button")[0].classList.toggle("hidden");
  // show close button
  document.querySelectorAll(".settings-button")[1].classList.toggle("hidden");
}

function closeSettings() {
  //Redirect to home page
  console.log("Settings");
  document.querySelectorAll(".nav-footer")[0].classList.toggle("hidden");

  // hide seetings page
  document.querySelectorAll(".settings-overlay")[0].classList.toggle("hidden");

  // hide button
  document.querySelectorAll(".settings-button")[0].classList.toggle("hidden");
  // show close button
  document.querySelectorAll(".settings-button")[1].classList.toggle("hidden");
}

export default Root;
