import "./Stats.css";
import Card from "../components/Card/Card";
import { NavLink } from "react-router-dom";
import Chart from "chart.js/auto";
import LineChart from "../components/Charts/LineChart";
import { CategoryScale } from "chart.js";
import { useState } from "react";

// import MixedChart from "../components/Charts/MixedChart";

Chart.register(CategoryScale);

function Stats() {
  const rootStyles = getComputedStyle(document.documentElement); // Access :root variables

  const [chartData0] = useState({
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ], // Common labels for all charts
    datasets: [
      {
        label: "Time in bed, in hours", // Label
        data: [8, 12, 9, 3, 7, 6, 9], // Data
        display: false,
        pointBorderColor: rootStyles.getPropertyValue("--point-color").trim(), //Color of points
        backgroundColor: rootStyles.getPropertyValue("--point-color").trim(), //Infill of points
        borderColor: rootStyles.getPropertyValue("--line-color").trim(), //Color of line
        borderWidth: 1,
        tension: 0.4, // For Line chart smoothing
        fill: false, // Area under chart infill
      },
    ],
  });
  const [chartData1] = useState({
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    datasets: [
      {
        label: "Hours slept", //
        data: [6, 10, 8, 3, 7, 5, 9], //

        pointBorderColor: rootStyles.getPropertyValue("--point-color").trim(), // Color of point border
        backgroundColor: rootStyles.getPropertyValue("--point-color").trim(), //Infill of points
        borderColor: rootStyles.getPropertyValue("--line-color").trim(), // Infill of line
        borderWidth: 1,
        tension: 0.4, // For Line chart smoothing
        fill: false, // For Line chart fill
      },
    ],
  });
  const [chartData2] = useState({
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ], // Common labels for all charts
    datasets: [
      {
        label: "Fell asleep after, in minutes",
        data: [20, 7, 2, 15, 8, 5, 20],
        pointBorderColor: rootStyles.getPropertyValue("--point-color").trim(), //Color of pointsborder
        backgroundColor: rootStyles.getPropertyValue("--point-color").trim(), //Infill of points
        borderColor: rootStyles.getPropertyValue("--line-color").trim(), // Color of line
        borderWidth: 1,
        tension: 0.4, // For Line chart smoothing
        fill: false, // Infill under line
      },
    ],
  });

  const chartData3 = {
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    datasets: [
      {
        type: "bar",
        label: "Average temperature",
        data: [18, 27, 5, 2, 18, 20, 9],
        backgroundColor: rootStyles.getPropertyValue("--bar-color").trim(),
      },
      {
        type: "line",
        label: "Time in bed",
        data: [6, 10, 8, 3, 7, 5, 9],
        pointBorderColor: rootStyles.getPropertyValue("--point-color").trim(), //Color of pointsborder
        backgroundColor: rootStyles.getPropertyValue("--point-color").trim(), //Infill of points
        borderColor: rootStyles.getPropertyValue("--line-color").trim(), // Line color
        borderWidth: 1,
        tension: 0.4, // For Line chart smoothing
        fill: false, // For Line chart fill
      },
    ],
  };
  return (
    <div className="wrapper">
      <div className="horizontal-buttons">
        <NavLink to="/manual">
          <Card startImage="/Manual.png" />
        </NavLink>
        <NavLink to="/braknapp">
          <Card startImage="/BraKnapp.png" />
        </NavLink>
      </div>
      <div className="statCards">
        <Card>
          {"Time in bed"}
          <LineChart chartData={chartData0} />
        </Card>
        <Card>
          {"Hours slept"}
          <LineChart chartData={chartData1} />
        </Card>
        <Card>
          {"Asleep after"}
          <LineChart chartData={chartData2} />
        </Card>
        <Card>
          {"Time in bed and Temperature"}
          <LineChart chartData={chartData3} />
        </Card>
      </div>
    </div>
  );
}

export default Stats;
