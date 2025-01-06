import React from "react";
import { Line } from "react-chartjs-2";

const CommodityPredictionLine = ({data, crop}) => {
  // const data = {
  //   labels: ["January", "February", "March", "April", "May", "June", "July"],
  //   datasets: [
  //     {
  //       label: "Data",
  //       data: [100, 200, 150, 300, 250, 400, 350],
  //       borderColor: "rgba(75, 192, 192, 1)",
  //       backgroundColor: "rgba(75, 192, 192, 0.2)",
  //       fill: true,
  //       tension: 0.1,
  //       segment: {
  //         borderColor: "blue",
  //       },
  //     },
  //   ],
  // };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
        position: "top",
      },
      title: {
        display: true,
        text: `${crop} Commodity Prices`,
      },
    },
    scales: {
      y: {
        beginAtZero: false,
      },
    },
  };

  return (
    <div className="h-48 max-w-[500px] bg-white p-4 rounded-xl">
      <Line data={data} options={options} />
    </div>
  );
};

export default CommodityPredictionLine;
