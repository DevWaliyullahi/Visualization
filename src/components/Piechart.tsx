import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const PieChart: React.FC<{ data: number[] }> = ({ data }) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstance = useRef<Chart<"pie", number[], string> | null>(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy(); // Cleaning up previous instance
    }

    if (chartRef.current) {
      chartInstance.current = new Chart(chartRef.current, {
        type: "pie",
        data: {
          labels: ["Drama", "Comedy", "Documentary", "Sci-Fi", "Horror"],
          datasets: [
            {
              data: data,
              backgroundColor: ["red", "blue", "yellow", "green", "purple"],
            },
          ],
        },
        options: {
            plugins: {
              legend: {
                position: "right",
                align: "end",
                labels: {
                  boxWidth: 10,
                  padding: 10,
                  usePointStyle: true,
                },
              },
            },
        },
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy(); // Cleaning up on unmount
      }
    };
  }, [data]);

  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-800 mt-5 mb-4">Orders by categories</h1>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default PieChart;