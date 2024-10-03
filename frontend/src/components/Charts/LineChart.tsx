// components/Charts/LineChart.js
import { Line } from "react-chartjs-2";

import { BubbleDataPoint, ChartData, Point } from "chart.js";

interface LineChartProps {
  chartData: ChartData<
    "line",
    (number | [number, number] | Point | BubbleDataPoint | null)[],
    unknown
  >;
}

function LineChart({ chartData }: LineChartProps) {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Line Chart</h2>
      <Line
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
        }}
      />
    </div>
  );
}
export default LineChart;
