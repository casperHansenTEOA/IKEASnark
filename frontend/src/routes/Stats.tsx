import "./Stats.css";
import Card from "../components/Card/Card";
import { NavLink } from "react-router-dom";
import Chart from "chart.js/auto";
import LineChart from "../components/Charts/LineChart";
import { CategoryScale } from "chart.js";
import { useState } from "react";

Chart.register(CategoryScale);

function Stats() {
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
        label: "Time in bed, in hours", // Shared label for Bar and Line charts
        data: [8, 12, 9, 3, 7, 6, 9], // Common data for Bar and Line
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
        tension: 0.4, // For Line chart smoothing
        fill: false, // For Line chart fill
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
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(75, 192, 192, 1)",
        ],
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
        label: "Fell asleep after, in minutes", // Shared label for Bar and Line charts
        data: [20, 7, 2, 15, 8, 5, 20], // Common data for Bar and Line
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
        tension: 0.4, // For Line chart smoothing
        fill: false, // For Line chart fill
      },
    ],
  });
  return (
    <div className="wrapper">
      <div className="horizontal-buttons">
        <NavLink to="/manual">
          <Card startImage="/Manual.png" />
        </NavLink>
        <NavLink to="/brasida">
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
      </div>
    </div>
  );
}

export default Stats;
