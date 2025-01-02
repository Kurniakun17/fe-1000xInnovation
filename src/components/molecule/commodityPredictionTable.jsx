import React from "react";
import soybean from "@/assets/soybean.png";
const CommodityPredictionTable = ({ data }) => {
  return (
    <div className=" border-2 border-neutral-600 rounded-xl overflow-hidden w-fit">
      <div className="flex gap-4 border-b-2 border-neutral-600 p-4">
        <img src={soybean} />
        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-semibold">Soybeans</h2>
          <h3>Commodity Price Predictions</h3>
        </div>
      </div>
      <div className="grid grid-cols-3 grid-rows-3 ">
        {/* Month */}
        <div className="text-center p-2 border-b-2 border-neutral-600 py-3 text-green-600">
          Month
        </div>
        <div className="text-center p-2 border-b-2 border-neutral-600 py-3">
          {data.month.price} IDR
        </div>
        <div
          className={`text-center p-2 border-b-2 border-neutral-600 py-3 ${
            data.month.percentage < 0 ? "text-red-700" : "text-blue-600"
          }`}
        >
          {data.month.percentage > 0 && "+"}
          {data.month.percentage}%
        </div>

        {/* Quarter */}
        <div className="text-center p-2 border-b-2 border-neutral-600 py-3 text-green-600">
          Quarter
        </div>
        <div className="text-center p-2 border-b-2 border-neutral-600 py-3">
          {data.quarter.price} IDR
        </div>
        <div
          className={`text-center p-2 border-b-2 border-neutral-600 py-3 ${
            data.quarter.percentage < 0 ? "text-red-700" : "text-blue-600"
          }`}
        >
          {data.quarter.percentage > 0 && "+"}
          {data.quarter.percentage}%
        </div>

        {/* Year */}
        <div className="text-center p-2  py-3 text-green-600">
          Year
        </div>
        <div className="text-center p-2  py-3">
          {data.year.price} IDR
        </div>
        <div
          className={`text-center p-2  py-3 ${
            data.year.percentage < 0 ? "text-red-700" : "text-blue-600"
          }`}
        >
          {data.year.percentage > 0 && "+"}
          {data.year.percentage}%
        </div>
      </div>
    </div>
  );
};

export default CommodityPredictionTable;
