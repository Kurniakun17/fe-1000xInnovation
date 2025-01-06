import React from "react";
import AlertDistribution from "./alertDistribution";
import generate from "@/assets/generate.png";
import CriticalAlertBreakdown from "./criticalAlertBreakdown";
import WaterResources from "./waterResources";
import CommodityPredictionTable from "./commodityPredictionTable";
import CommodityPredictionLine from "./commodityPredictionLine";
import mockChartData from "../../../data/yieldChartData";

export const generateMessageContent = (message, crop) => {
  if (message.type == "commodity_prediction_line") {
    switch (crop) {
      case "Wheat":
        return "For wheat farmers, the commodity price shows a generally stable trend with slight fluctuations throughout the year. In the early months (January-March), the price of wheat experiences a slight decrease, followed by a rise in prices from April to June. However, prices stabilize in the second half of the year (July-December), with a slight increase in December. Farmers can take advantage of higher prices in months like June, August, and December to maximize their income. However, caution is needed for possible price fluctuations in months like March and September, so a good marketing strategy and timely harvest planning will be crucial to avoid losses.";
      case "Rice":
        return "Rice prices show higher stability with slight fluctuations throughout the year. Prices tend to be higher in the late months of the year, especially from June to August, with a slight decrease in October and December. Rice farmers are advised to plan harvests around high-price months like June to August. It is also beneficial to take advantage of price increases in other months, such as January, February, and May. The relatively stable price fluctuations offer an opportunity for stability in production and marketing planning, with a focus on proper crop care and optimal yields";
      case "Corn":
        return "Corn prices tend to be volatile throughout the year. In the first quarter (January-March), corn prices are relatively low, but there is a significant price increase from April to June. From July to September, prices drop again and rise again in December. Corn farmers are advised to maximize production and sales during peak price months like June and December. On the other hand, months with lower prices, such as January and November, might be good times to buy or store corn for future sales at higher prices. Proper harvest timing and adjustment to market prices will play a major role in profitability.";
      case "Soybean":
        return "Soybean prices show a generally positive trend throughout the year, with a slight dip in September and November but remaining higher than at the beginning of the year. With relatively stable prices and slight increases in months such as May, June, and December, soybean farmers can take advantage of these periods to increase production and plan sales when prices are higher. However, attention should be paid to price decreases in October and November. Therefore, farmers should closely monitor price changes and consider storing some of the harvest when prices are low to sell later when prices become more favorable.";
      default:
        return message.data.content;
    }
  }

  if (message.type == "commodity_prediction_table") {
    switch (crop) {
      case "Wheat":
        return "For wheat, it is advisable to hold off on selling and plan to sell towards the end of the year. This is because the current price is Rp 520,000, and it is predicted to increase by 9.62% over the year, reaching Rp 570,000. Waiting until later in the year could offer a better return on your investment.";
      case "Rice":
        return "For rice, it is recommended to hold onto your stock for the next quarter. This is because the price is currently stable at Rp 1,180,000 with a slight increase of 0.99% predicted over the next three months, bringing the price to Rp 1,191,666.67. The year-end prediction shows a minor increase to Rp 1,190,000, so waiting for a slight price rise could be beneficial.";
      case "Corn":
        return "For corn, it is recommended to hold your stock for the next quarter. Although the price is stable at Rp 460,000 this month, a 4.35% increase is anticipated over the next three months, raising the price to Rp 480,000. The price is expected to remain at this level throughout the year, offering consistent returns if you decide to wait for the quarter.";

      case "Soybean":
        return "For corn, it is recommended to hold your stock for the next quarter. Although the price is stable at Rp 460,000 this month, a 4.35% increase is anticipated over the next three months, raising the price to Rp 480,000. The price is expected to remain at this level throughout the year, offering consistent returns if you decide to wait for the quarter.";
      default:
        return message.data.content;
    }
  }
};

const MessageBubble = ({ message, crop }) => {
  let content = generateMessageContent(message, crop);

  return (
    <div className="flex gap-4">
      <img src={generate} className="w-[22px] h-[26px]" />
      <div className="flex flex-col gap-4">
        {message.type == "alert_distribution" && (
          <AlertDistribution data={message.data} crop={crop} />
        )}

        {message.type == "location_breakdown" && (
          <CriticalAlertBreakdown data={message.data} crop={crop} />
        )}
        {message.type == "commodity_prediction_table" && (
          <CommodityPredictionTable
            data={message.data.predictions}
            crop={crop}
          />
        )}
        {message.type == "water_resources" && (
          <WaterResources data={message.data} crop={crop} />
        )}

        {message.type == "commodity_prediction_line" && (
          <CommodityPredictionLine data={mockChartData[crop]} crop={crop} />
        )}
        <p className="text-gray-400 mr-8 text-justify">
          <span className="font-bold text-white">What To Do: </span>
          {content}
        </p>
      </div>
    </div>
  );
};

export default MessageBubble;
