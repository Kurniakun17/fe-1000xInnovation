/* eslint-disable react/prop-types */
import drop from "@/assets/drop.png";
import temp from "@/assets/temp.png";
import wind from "@/assets/wind.png";
import sunshine from "@/assets/sunshine.png";
import growth from "@/assets/growth.png";

const SelectionComponent = ({ selectedMode, setSelectedMode }) => {

  const handleSelect = (element) => {
    setSelectedMode(element);
  };

  return (
    <div className="flex">
      <div
        className={`border-2 border-neutral-500 py-2 px-3 cursor-pointer ${
          selectedMode === "temp" ? "bg-gray-800" : ""
        }`}
        onClick={() => handleSelect("temp")}
      >
        <img src={temp} alt="temp" className="w-6" />
      </div>
      <div
        className={`border-2 border-neutral-500 py-2 px-3 cursor-pointer ${
          selectedMode === "drop" ? "bg-gray-800" : ""
        }`}
        onClick={() => handleSelect("drop")}
      >
        <img src={drop} alt="drop" className="w-6" />
      </div>
      <div
        className={`border-2 border-neutral-500 py-2 px-3 cursor-pointer ${
          selectedMode === "wind" ? "bg-gray-800" : ""
        }`}
        onClick={() => handleSelect("wind")}
      >
        <img src={wind} alt="wind" className="w-6" />
      </div>
      <div
        className={`border-2 border-neutral-500 py-2 px-3 cursor-pointer ${
          selectedMode === "sunshine" ? "bg-gray-800" : ""
        }`}
        onClick={() => handleSelect("sunshine")}
      >
        <img src={sunshine} alt="sunshine" className="w-6" />
      </div>
      <div
        className={`border-2 border-neutral-500 py-2 px-3 cursor-pointer ${
          selectedMode === "growth" ? "bg-gray-800" : ""
        }`}
        onClick={() => handleSelect("growth")}
      >
        <img src={growth} alt="growth" className="w-6" />
      </div>
    </div>
  );
};

export default SelectionComponent;
