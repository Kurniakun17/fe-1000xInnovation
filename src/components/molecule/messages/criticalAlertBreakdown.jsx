import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const AlertBreakdownChart = ({ data }) => {
  const chartData = {
    labels: data.locations.map((item) => item.location),
    datasets: [
      {
        label: "Alerts",
        data: data.locations.map((item) => item.alerts),
        backgroundColor: "rgb(75, 192, 192)",
        stack: "Stack 0",
        barThickness: 10,
      },
      {
        label: "Extreme Alerts",
        data: data.locations.map((item) => item.extremeAlerts),
        backgroundColor: "rgb(54, 162, 235)",
        stack: "Stack 0",
        barThickness: 10,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allow custom height

    scales: {
      x: {
        stacked: true,
        grid: {
          display: false,
        },
      },
      y: {
        stacked: true,
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
          borderDash: [5, 5],
        },
        ticks: {
          color: 'white',
          includeBounds: true,
          count: 5,  // This will force approximately 5 ticks
          maxTicksLimit: 5,
          precision: 0,
          beginAtZero: true,
        },

        max: () => {
          const max = Math.max(
            ...data.locations.map((item) => item.alerts + item.extremeAlerts)
          );
          return 12;
        },
        min: 0,
      },
    },
    plugins: {
      title: {
        display: true,
        text: data.title,
        color: "white",
        font: {
          size: 16,
        },
        padding: {
          bottom: 30,
        },
      },
      legend: {
        position: "bottom",
        labels: {
          color: "white",
          padding: 20,
        },
      },
    },
  };

  return (
    <div className="w-fit h-[250px] bg-background p-5 border border-neutral-500 rounded-2xl">
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default AlertBreakdownChart;
