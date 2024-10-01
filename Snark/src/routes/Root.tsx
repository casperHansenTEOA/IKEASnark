// import { useState } from 'react'

import "./Root.css";
import Card from "../components/Card/Card";

import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";

function Root() {
  const [temp, setTemp] = useState(20);
  return (
    <div className="wrapper">
      <h1>Snark</h1>
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
      <Card>
        <div className="horizontal">
          <button onClick={() => setTemp(temp - 1)}>-</button>
          <p>{temp} °C</p>
          <button onClick={() => setTemp(temp + 1)}>+</button>
        </div>
      </Card>
    </div>
  );
}
export default Root;
