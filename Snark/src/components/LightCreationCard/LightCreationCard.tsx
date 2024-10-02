import { useEffect, useState } from "react";
import { fetchBeds } from "../../handlers/BedHandler";
import { lightManager } from "../../handlers/LightHandler";
import { IoIosArrowDown } from "react-icons/io";
import { NavigateFunction, useNavigate } from "react-router-dom";
import Card from "../Card/Card";
import Bed from "../../types/Bed";

type Props = {
    n: number;
  };

function LightCreationCard({ n }: Props) {
    const navigate = useNavigate();
    const [avalibleBeds, setAvalibleBeds] = useState<Bed[]>([]);
    const [bedId, setBedId] = useState<number>();
  
    useEffect(() => {
      fetchBeds().then((beds) => {
        setAvalibleBeds(beds);
      });
  
    }
    , []);
  
  
  
    const setLocalBedId = async (bedId: string) => {
        setBedId(parseInt(bedId));
        // console.log("Setting bed id to: ", parseInt(bedId));
      await lightManager.updateLightConnectedToBed(n, parseInt(bedId));
  
    }
  
    const arrow = (
      <IoIosArrowDown
        className={"down-arrow " + n} id={"arrow" + n.toString()}
        onClick={() => expandCard(n)}
      />
    );
  
    const derefAvalibleBeds = avalibleBeds;
    const lightOptions = derefAvalibleBeds.map((bed) => (
      <option key={bed.id} value={bed.id}>
        Bed {bed.id}
      </option>
    ));
    return (
      <div key={n}>
        <Card>
          {arrow}
          <h1 onClick={() => expandCard(n)}>Light {n}</h1>
  
          <div className="expanded-info hidden " id={"card" + n.toString()}>
            <form
              onSubmit={async (e) => {
                e.stopPropagation();
                e.preventDefault();
                await lightManager.addLightFromId(n);
                if (bedId !== undefined) {
                // console .log("Setting bed id to: ", bedId);
                  await lightManager.updateLightConnectedToBed(n, bedId);
                }
                console.log("Light added");

                navigateToHome(navigate);
  
                //TODO send data to backend
                // Handle form submission logic here
              }}
              className="light-form "
            >
              <label htmlFor={`bed-select-${n}`}>Select Bed:</label>
              <select
                id={`bed-select-${n}`}
                // value={bedId}

                onChange={(e) => setLocalBedId(e.target.value)}
              >
                <option value="">Select a bed</option>
                {lightOptions}
              </select>
              <button type="submit">Connect</button>
            </form>
          </div>
        </Card>
      </div>
    );
  }


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
  
  function navigateToHome(navigate: NavigateFunction) {
    // Redirect to home page
    console.log("Home");
    document.querySelectorAll(".nav-footer")[0].classList.toggle("hidden");
  
    navigate("/");
  }

export default LightCreationCard;