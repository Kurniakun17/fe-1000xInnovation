/* eslint-disable react/prop-types */
import soybeans from "@/assets/soybean.png";
import rice from "@/assets/rice.png";
import corn from "@/assets/corn.png";
import wheat from "@/assets/wheat.png";

const CommoditySelector = ({ crop, setCrop }) => {
  const commodities = [
    { name: "Soybean", icon: soybeans },
    { name: "Rice", icon: rice },
    { name: "Wheat", icon: wheat },
    { name: "Corn", icon: corn },
  ];

  return (
    <div className="flex flex-col items-center bg-background text-white">
      <h2 className="text-xl font-bold my-2">Commodity</h2>

      <ul className="w-full">
        {commodities.map((commodity) => (
          <li
            key={commodity.name}
            onClick={() => setCrop(commodity.name)}
            className={`flex items-center p-3 cursor-pointer border-b-2 border-neutral-600 ${
              crop === commodity.name
                ? "bg-neutral-800 text-blue-500"
                : "bg-background text-gray-400"
            }`}
          >
            <img className="mr-3 w-8" src={commodity.icon} />
            {commodity.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommoditySelector;
