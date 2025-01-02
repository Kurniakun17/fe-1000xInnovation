/* eslint-disable react/prop-types */
import MapSoybean from "@/assets/map-Soybean.png";
import MapRice from "@/assets/map-Rice.png";
import MapCorn from "@/assets/map-Corn.png";
import MapWheat from "@/assets/map-Wheat.png";

export default function CropDistribution({ crop }) {
  return (
    <img
      className="object-cover h-full w-full border-"
      src={
        crop === "Soybean"
          ? MapSoybean
          : crop === "Rice"
          ? MapRice
          : crop === "Corn"
          ? MapCorn
          : MapWheat
      }
    />
  );
}
