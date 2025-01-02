import React from "react";

const WaterResources = ({ data }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="bg-neutral-800 w-[312px] flex flex-col gap-4 p-6 rounded-2xl">
        <h2 className="font-bold text-xl">Water Resources</h2>
        {data.resources.map((resource, index) => (
          <div
            key={`water-resources ${index}`}
            className="flex text-sm justify-between"
          >
            <p>{resource.name}</p>
            <p>
              {resource.amount}
              {index > 2 ? "L" : "%"}
            </p>
          </div>
        ))}
      </div>

      <p>[Water Sufficent]</p>
      <table className="overflow-hidden rounded-xl">
        <thead className="bg-neutral-800 text-white">
          <tr>
            <th className="p-1">Sufficient Period</th>
            <th className="p-1">Daily Water Usage (L)</th>
            <th className="p-1">Remaining Availability (L)</th>
          </tr>
        </thead>
        <tbody className="bg-white text-neutral-700">
          <tr className="">
            <td className="text-center p-2">3 Month</td>
            <td className="text-center p-2">500/Day</td>
            <td className="text-center p-2">1000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WaterResources;
