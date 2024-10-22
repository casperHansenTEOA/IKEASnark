
import { useState, useEffect } from "react";
import Bed from "../types/Bed";
import "./BedDetails.css";
import { NavLink, useLocation } from "react-router-dom";
import { Slider } from "@mui/material";
import { bedManager } from "../handlers/BedHandler";
import { sensorManager } from "../handlers/SensorHandler";
import Card from "../components/Card/Card";
import Sensor from "../types/Sensor";
import SensorController from "../components/SensorController/SensorController";
import { FaPlus } from "react-icons/fa";

const BedDetails = () => {

  const location = useLocation();
  const bed: Bed = location.state.bed;
  const sensors: Sensor[] = sensorManager.getConnectedSensors();
  const [temperature, setTemperature] = useState<number>(bed.temperature);

  const [newTime, setNewTime] = useState<string>("");

  // const [sliders, setSliders] = useState<JSX.Element[]>([]);
  const [times, setTimes] = useState<Set<string>>(new Set([]));

  useEffect(() => {
    //write all the keys of the schedule object to the times array
    console.log(bed.schedule);
    setTimes(new Set(Object.keys(bed.schedule)));
  }, []);

  const handleTemperatureChange = (delta: number) => {
    //save temps to the controller here as well
    setTemperature((prevTemp) => prevTemp + delta);
    bed.temperature = temperature + delta;
  };

  async function addSchedule(nt: string) {
    // times.sort();
    console.log(nt);
    if (times.size < 6) {
      await setTimes(new Set([...times.values(), nt]));
      bedManager.addEntryToScheduleFromId(bed.id, nt, 0);
    } else {
      alert("Max 6 schedules allowed");
    }
    console.log(times);
    // setSliders([]);
    // setSliders(slidersInit(internalTimes));

    sortDocumentAfterClassName();
  }

  function saveTemperature(time: string) {
    return (event: Event, value: number | number[]) => {
      const newSchedule = bed.schedule;
      newSchedule[time] = Array.isArray(value) ? value[0] : value;
      bed.schedule = newSchedule;
      bedManager.addEntryToScheduleFromId(
        bed.id,
        time,
        Array.isArray(value) ? value[0] : value
      );
      console.log(bed.schedule);
      console.log(event);
    };
  }
  function createSliderFromTime(time: string, i: number): JSX.Element {
    const defvalue = bed.schedule[Array.from(times)[i]];
    return (
      <div className={"slide-container " + time}>
        <Slider
          aria-label="Temperature"
          defaultValue={defvalue}
          getAriaValueText={(value) => `${value}°C`}
          valueLabelDisplay="auto"
          shiftStep={30}
          step={1}
          marks
          min={16}
          max={28}
          orientation="vertical"
          style={{ WebkitAppearance: "slider-vertical" }}
          onChange={saveTemperature(Array.from(times)[i])}
        />

        <input
          className="slider-label"
          type="time"
          defaultValue={Array.from(times)[i]}
          onChange={async (e) => {
            const timesArray = Array.from(times);
            timesArray[i] = e.target.value;
            console.log(timesArray);

            // change the key of the schedule object to the new time by removng the old entry
            const tempTemperature = bed.schedule[Array.from(times)[i]];
            delete bed.schedule[Array.from(times)[i]];
            bed.schedule[e.target.value] = tempTemperature;

            await setTimes(new Set([]));
            await setTimes(new Set(timesArray));
            // document.querySelectorAll('.schedule-sliders')[0].children[i].classList.remove(time);
            document
              .querySelectorAll(".schedule-sliders")[0]
              .children[i].classList.add(e.target.value);

            // await setTimes(times);
            console.log(times);
            sortDocumentAfterClassName();
          }}
          pattern="(([0-1][0-9]|2[0-4]):([0-5][0-9]|60))"
        />
      </div>
    );
  }

  // slidersInit(['22:00', '1:00', '04:00', '07:00']);

  return (
    <div className="wrapper bed-detail-page">
      <h1>Bed {bed.id}</h1>

      <Card>
        <div className="horizontal temp-controller">
          <button onClick={() => handleTemperatureChange(-1)}>-</button>
          <h1>{temperature}°C</h1>
          <button onClick={() => handleTemperatureChange(1)}>+</button>
        </div>
      </Card>

      <Card>
        <div>
          <div className="schedule-sliders">
            {Array.from(times).map((time, index) => {
              return createSliderFromTime(time, index);
            })}
          </div>
          <div className="time-addition-box">
            <form action="">
              <input
                type="time"
                value={newTime}
                onChange={(e) => setNewTime(e.target.value)}
                className="time-input"
              />
            </form>
            <button
              onClick={() => {
                addSchedule(newTime);
              }}
            >
              Add
            </button>
          </div>

        </div>
      </Card>

      <h2>Sensors</h2>
      {sensors
        .filter((sensor) => sensor.connectedToBed === bed.id)
        .map((sensor) => (
          <SensorController key={sensor.id} Sensor={sensor} />
        ))}
      <NavLink to="/createSensor">
        <FaPlus className="settings-button bottom-button" />
      </NavLink>
    </div>
  );
};

export default BedDetails;

//ugly fucking solution for sorting elements in the dom tree based on their second class
function sortDocumentAfterClassName() {
  const list = document.querySelectorAll(".schedule-sliders")[0];

  [...list.children]
    .sort((a, b) => (a.classList[1] > b.classList[1] ? 1 : -1))
    .forEach((node) => list.appendChild(node));
}
