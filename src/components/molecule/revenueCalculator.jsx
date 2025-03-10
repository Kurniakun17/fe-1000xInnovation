/* eslint-disable react/prop-types */
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { cropPrices } from "@/data/yieldChartData";
import { formatToIDR } from "../../helper/functions";

const RevenueCalculator = ({ crop }) => {
  const [tons, setTons] = useState("");
  const [revenue, setRevenue] = useState(0);
  const [selectedMonth, setSelectedMonth] = useState("3 Months");

  const mutation = useMutation({
    mutationFn: async () => {
      const response = await axios.post(
        "https://f9d0-114-10-119-91.ngrok-free.app/predict_estimated_revenue",
        {
          total_available: parseInt(tons),
          seasonal:
            selectedMonth === "3 Months"
              ? 90
              : selectedMonth === "6 Months"
              ? 180
              : 360,
        }
      );
      return response.data;
    },
    onSuccess: (data) => {
      setRevenue(data.estimated_revenue.toFixed(0));
    },
    onError: (error) => {
      console.error("Error calculating revenue:", error);
    },
  });

  // const handleGenerateRevenue = () => {
  //   mutation.mutate();
  // };

  const handleGenerateRevenue = () => {
    if (tons === "") return;

    const currentDate = new Date();
    const currentMonthIndex = currentDate.getMonth();
    const cropData = cropPrices[crop];

    let futurePrice = 0;

    if (selectedMonth === "3 Months") {
      const futureMonthIndex = (currentMonthIndex + 3) % 12;
      futurePrice = cropData[futureMonthIndex];
    } else if (selectedMonth === "6 Months") {
      const futureMonthIndex = (currentMonthIndex + 6) % 12;
      futurePrice = cropData[futureMonthIndex];
    } else if (selectedMonth === "12 Months") {
      const futureMonthIndex = (currentMonthIndex + 12) % 12;
      futurePrice = cropData[futureMonthIndex];
    }

    const estimatedRevenue = tons * futurePrice;
    setRevenue(estimatedRevenue.toFixed(0));
  };

  console.log(typeof(revenue));
  return (
    <div className="flex flex-col items-center justify-center">
      {/* Estimated Revenue */}
      <div className="text-white text-lg">Estimated Revenue</div>
      <div className="bg-neutral-600 text-white text-xl font-bold rounded-md px-6 py-3">
        {/* {revenue
          ? `Rp${revenue.toLocaleString("en-US", { maximumFractionDigits: 2 })}`
          : "Rp0"} */}
        {formatToIDR(Number(revenue))}
      </div>

      {/* Input Fields */}
      <div className="text-white mt-3 mb-2 text-center">
        How many tons {crop} available?
      </div>
      <input
        type="number"
        placeholder="Enter tons"
        className="bg-neutral-700 text-white w-full p-2.5 rounded-md focus:outline-none"
        value={tons}
        onChange={(e) => setTons(e.target.value)}
      />

      {/* Commodity Price in the Future */}
      <div className="text-white text-center mt-3 mb-2">
        Commodity Price in The Future
      </div>
      <div className="flex flex-wrap gap-y-4 w-fit bg-neutral-700 rounded-lg overflow-hidden justify-center">
        {["3 Months", "6 Months", "12 Months"].map((month) => (
          <button
            key={month}
            onClick={() => setSelectedMonth(month)}
            className={`px-3 py-1 xl:px-6 xl:py-2 border-2 rounded-lg transition-all duration-300 ${
              selectedMonth === month
                ? "bg-neutral-800 border-neutral-500 text-white"
                : "border-neutral-700"
            } focus:outline-none`}
          >
            {month}
          </button>
        ))}
      </div>

      <button
        onClick={handleGenerateRevenue}
        disabled={tons === ""}
        className="mt-5 bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-400 text-white px-6 py-2 rounded-lg hover:bg-blue-500 focus:outline-none"
      >
        Generate Revenue
      </button>

      {/* Displaying loading or error states */}
      {mutation.isLoading && <p className="text-white">Calculating...</p>}
      {mutation.isError && (
        <p className="text-red-500">Error calculating revenue.</p>
      )}
      {mutation.isSuccess && (
        <p className="text-green-500">Revenue calculated successfully!</p>
      )}
    </div>
  );
};

export default RevenueCalculator;
