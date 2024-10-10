
import { useEffect, useState } from "react";
import Light from "../../types/Light";
import Card from "../Card/Card";

import { lightManager } from "../../handlers/LightHandler";

import { RgbaColorPicker, RgbaColor} from "react-colorful";

import "./LightController.css";
import { IoIosArrowDown } from "react-icons/io";
import SquareCard from "../Card/SquareCard";



type Props = {
  Light: Light;
};


const LightController = ({ Light }: Props) => {

  const [currentColor, setLocalColor] = useState(Light.color);
  const [currentRGB, setLocalRGB] = useState(getRgbaColorFromHexString(Light.color));
  const [connectedToBed, setConnectedToBed] = useState(Light.connectedToBed);

  useEffect(() => {
    const fetchLights = async () => {
      const light = await lightManager.getLightById(Light.id);
      if (light) {
        setConnectedToBed(light.connectedToBed);
        // console.log("Setting connected to bed to: ", light.connectedToBed);

        setLocalColor(light.color);
        setLocalRGB(getRgbaColorFromHexString(light.color));
      }

    }
    fetchLights();
  }, []);




  function setColor(value: RgbaColor) {

    //make numerical value into a color
    setLocalColor(getHexStringFromRgbaColor(value));
    setLocalRGB(value);

    console.log("Setting color to: ", currentColor );

    Light.color = getHexStringFromRgbaColor(value);

    //TODO Light api call to actually change the color
  }

  function getRgbaColorFromHexString(color:string): RgbaColor{
    const r = parseInt(color.slice(1,3), 16);
    const g = parseInt(color.slice(3,5), 16);
    const b = parseInt(color.slice(5,7), 16);
    const a = 1;
    return {r: r, g: g, b: b, a: a };
  }

  function getHexStringFromRgbaColor(color: RgbaColor): string{
    const r = color.r.toString(16);
    const g = color.g.toString(16);
    const b = color.b.toString(16);
    return "#" + r + g + b;
  }



  return (
    <SquareCard>
      <div >
        <h3>{Light.name}</h3>
        <IoIosArrowDown
      
          className="controller-arrow down-arrow" id={"arrow"+Light.id.toString()} 
          onClick={() => expandCard(Light.id)}
        />
        </div>
        
      <div className ="expanded-info hidden" id={"card"+Light.id.toString()}>
        <RgbaColorPicker color={currentRGB} onChange={() => setColor(currentRGB)} />
       
            {
              connectedToBed !== 0 ? (
                <h4>Connected to bed: {connectedToBed}</h4>
              ) : (<h4>Not connected to bed</h4>) 
            }
      
      </div>
      
      </SquareCard>
  );
};


function expandCard(n: number) {
  const cardId = "card"+n.toString();
  const card = document.getElementById(cardId);
  if (card) {
    card.classList.toggle("hidden");
  }

  const arrow = document.getElementById("arrow"+n.toString());
  if (arrow) {
    arrow.classList.toggle("rotate");
  }

}


export default LightController;
