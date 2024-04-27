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
          labels: ["SCi-fi", "Drama", "Comedy", "Horror", "Documentary"],
          datasets: [
            {
              data: data,
              backgroundColor: ["blue","purple", "green","yellow", "red"],
            },
          ],
        },
        options: {
            plugins: {
              legend: {
                display: true,
                position: "right",
                align: "end",
                labels: {
                  boxWidth: 8,
                  padding: 5,
                  usePointStyle: true,
                  font: {
                    size: 12,
                    weight: "bold",
                  },

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
      <h1 className="text-2xl font-semibold text-gray-800 mt-2 mb-15">Orders by categories</h1>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default PieChart;