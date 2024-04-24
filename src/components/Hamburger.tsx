// import { Line } from "react-chartjs-2";
// import "chart.js/auto";
// import { LineChartBackground } from "./LineChart.Styled";
// import { fetchMonthlyTrend } from "../../../../api/admin";
// import { useState, useEffect } from "react";

// // eslint-disable-next-line @typescript-eslint/no-explicit-any

// const MonthlyTrendLineChart = () => {
//   const [monthlyTrend, setMonthlyTrend] = useState<number[]>();
//   const [months, setMonths] = useState<string[]>();
//   useEffect(() => {
//     fetchMonthlyTrend().then((res) => {
//       if (res) {
//         setMonthlyTrend(Object.values<number>(res));
//         setMonths(Object.keys(res));
//       }
//     });
//   }, []);

//   const data = {
//     labels: months,
//     datasets: [
//       {
//         label: `Monthly trend`,
//         data: monthlyTrend,
//         fill: false,
//         borderColor: "rgb(54, 162, 235)",
//         tension: 0.3,
//         // backgroundColor: `rgba(255, 255, 255, 1)`
//       },
//     ],
//   };

//   const options = {
//     scales: {
//       y: {
//         beginAtZero: true,
//         title: {
//           display: true,
//           text: "Revenue in Naira",
//         },
//         ticks: {
//           stepSize: 1, // Ensures the y-axis increments by whole numbers
//         },
//       },
//       x: {
//         title: {
//           display: true,
//           text: "Months of the year",
//         },
//       },
//     },
//   };

//   return (
//     <LineChartBackground>
//       <Line data={data} options={options} datasetIdKey={`chartId`} />
//     </LineChartBackground>
//   );
// };
// export default MonthlyTrendLineChart;