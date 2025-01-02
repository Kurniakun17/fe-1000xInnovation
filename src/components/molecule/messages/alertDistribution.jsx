import React from "react";

const AlertDistribution = ({ data }) => {
  return (
    <div className="flex w-[400px] flex-col p-4 rounded-2xl border border-neutral-500">
      <h2 className="font-semibold text-lg mb-3">Alert Distribution</h2>

      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <p>{data.criticalAlerts}%</p>
          <p>{data.regularAlerts}%</p>
        </div>
        <div className="w-full bg-neutral-500 rounded-sm overflow-hidden">
          <div
            className="bg-blue-600 text-xs font-medium text-white text-center p-0.5 leading-none h-3"
            style={{ width: `${data.criticalAlerts}%` }}
          />
        </div>

        <div className="flex justify-between">
          <p>Critical Alerts</p>
          <p>Alerts</p>
        </div>
      </div>
    </div>
  );
};

export default AlertDistribution;
