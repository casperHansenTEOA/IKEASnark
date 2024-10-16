// components/Charts/BarChart.js
import { Bar } from "react-chartjs-2";
import { BubbleDataPoint, ChartData, Point } from "chart.js";

interface BarChartProps {
  chartData: ChartData<
    "bar",
    (number | [number, number] | Point | BubbleDataPoint | null)[],
    unknown
  >;
}

function BarChart({ chartData }: BarChartProps) {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Bar Chart</h2>
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: false,
            },
            legend: {
              display: false,
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

export default BarChart;
