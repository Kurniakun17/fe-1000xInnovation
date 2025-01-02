/* eslint-disable react/prop-types */
import soybeans from "@/assets/soybean.png";
import rice from "@/assets/rice.png";
import corn from "@/assets/corn.png";
import wheat from "@/assets/wheat.png";

const PricePredictions = ({ commodity, prices }) => {
  const commodities = [
    { name: "Soybean", icon: soybeans },
    { name: "Rice", icon: rice },
    { name: "Wheat", icon: wheat },
    { name: "Corn", icon: corn },
  ];

  const findIconByName = (commodities, targetName) => {
    const foundCommodity = commodities.find(
      (commodity) => commodity.name === targetName
    );
    return foundCommodity ? foundCommodity.icon : null;
  };

  return (
    <div className="flex flex-col justify-center border-2 border-neutral-500 p-1 rounded-lg text-white min-w-72 mx-auto">
      <div className="flex items-center mb-5">
        <img
          src={findIconByName(commodities, commodity)}
          alt="logo"
          className="w-12 mr-4"
        />
        <div>
          <h3 className="text-xl font-bold">{commodity}</h3>
          <p className="text-gray-400">Commodity Price predictions</p>
        </div>
      </div>

      <div>
        {prices.map((priceData, index) => (
          <div
            key={index}
            className="flex justify-between items-center border-t-2 border-b-2 border-neutral-700 p-3"
          >
            <span className="text-green-500">{priceData.period}</span>
            <span>Rp{priceData.data.price_now === null ? 0 : priceData.data.price_now.toFixed(2)}</span>
            <span
              className={`text-sm ${
                priceData.data.estimated_revenue > 0
                  ? "text-blue-500"
                  : "text-red-500"
              }`}
            >
              {priceData.data.estimated_revenue > 0
                ? `+${priceData.data.estimated_revenue}%`
                : `${priceData.data.estimated_revenue}%`}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricePredictions;
