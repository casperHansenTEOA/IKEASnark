// import { useState } from 'react'

import "./Root.css";
import Card from "../components/Card/Card";

import { FaArrowRight } from "react-icons/fa";

function Root() {
  // const [count, setCount] = useState(0)

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
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
        incidunt cumque eum dolorem laboriosam perspiciatis veniam explicabo,
        nisi architecto fugiat, deleniti molestias cupiditate labore eaque
        consequatur, dolores voluptatum corporis? Nisi.
      </Card>
      <Card>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
        incidunt cumque eum dolorem laboriosam perspiciatis veniam explicabo,
        nisi architecto fugiat, deleniti molestias cupiditate labore eaque
        consequatur, dolores voluptatum corporis? Nisi.
      </Card>
    </div>
  );
}

export default Root;
