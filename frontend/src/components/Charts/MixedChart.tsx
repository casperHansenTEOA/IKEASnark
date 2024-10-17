// components/Charts/MixedChart.js
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Chart } from "react-chartjs-2"; // Use `Chart` for mixed chart instead of `Line`
import { ChartData } from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface MixedChartProps {
  chartData: ChartData<"bar" | "line", (number | [number, number])[], string>;
}

function MixedChart({ chartData }: MixedChartProps) {
  return (
    <div className="chart-container">
      <Chart
        type="bar" // This is the base chart type
        data={chartData}
        options={{
          responsive: true,
          plugins: {
            legend: {
              display: true,
              position: "top",
            },
            title: {
              display: true,
              text: "Mixed Bar and Line Chart",
            },
          },
          scales: {
            x: {
              beginAtZero: true,
            },
            y: {
              beginAtZero: true,
            },
          },
        }}
      />
    </div>
  );
}

export default MixedChart;
