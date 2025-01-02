import React from "react";
import AlertDistribution from "./AlertDistribution";
import generate from "@/assets/generate.png";
import CriticalAlertBreakdown from "./criticalAlertBreakdown";
import WaterResources from "./waterResources";
import CommodityPredictionTable from "./commodityPredictionTable";

const MessageBubble = ({ message }) => {
  return (
    <div className="flex gap-4">
      <img src={generate} className="w-[22px] h-[26px]" />
      <div className="flex flex-col gap-4">
        {message.type == "alert_distribution" && (
          <AlertDistribution data={message.data} />
        )}

        {message.type == "location_breakdown" && (
          <CriticalAlertBreakdown data={message.data} />
        )}
        {message.type == "commodity_prediction_table" && (
          <CommodityPredictionTable data={message.data.predictions} />
        )}
        {message.type == "water_resources" && (
          <WaterResources data={message.data} />
        )}
        <p className="text-gray-400">
          <span className="font-bold text-white">What To Do: </span>
          {message.data.content}
        </p>
      </div>
    </div>
  );
};

export default MessageBubble;
