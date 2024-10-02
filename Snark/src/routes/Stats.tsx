import "./Stats.css";
import React, { useEffect, useRef } from "react";
import Card from "../components/Card/Card";
import { NavLink } from "react-router-dom";
import Chart from "chart.js/auto";
import LineChart from "../components/Charts/LineChart";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import { Data } from "./Data";

Chart.register(CategoryScale);

function Stats() {
  const [chartData] = useState({
    labels: ["January", "February", "March", "April", "May", "June", "July"], // Common labels for all charts
    datasets: [
      {
        label: "Sales Data", // Shared label for Bar and Line charts
        data: [65, 59, 80, 81, 56, 55, 40], // Common data for Bar and Line
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(75, 192, 192, 0.2)",
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
      {
        // Additional dataset for PieChart
        label: "Expenses Data",
        data: [120, 50, 70, 90, 30, 85, 40], // Data specifically for PieChart
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 159, 64, 0.6)",
          "rgba(75, 192, 192, 0.6)",
        ],
        hoverOffset: 4, // For Pie chart hover effect
      },
    ],
  });
  return (
    <div className="wrapper">
      <div className="horizontal-buttons">
        <NavLink to="/manual">
          <Card startImage="src/assets/Manual.png" />
        </NavLink>
        <NavLink to="/brasida">
          <Card startImage="src/assets/BraKnapp.png" />
        </NavLink>
      </div>
      <Card>
        {"Test "}
        <LineChart chartData={chartData} />
      </Card>
      <Card>
        {" "}
        <LineChart chartData={chartData} />
      </Card>
      <Card>
        {" "}
        <LineChart chartData={chartData} />
      </Card>
    </div>
  );
}

export default Stats;
