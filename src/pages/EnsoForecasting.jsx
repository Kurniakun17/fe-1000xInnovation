import logo from "@/assets/logo.png";

import supply from "@/assets/supply.png";
import generate from "@/assets/generate.png";
import L from "leaflet";
import locationIc from "@/assets/location_ic.png";
import dropdown from "@/assets/dropdown.png";
import warning from "@/assets/warning.png";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { MapContainer, TileLayer, Circle, Marker, Popup } from "react-leaflet";
import SelectionComponent from "@/components/molecule/selectMode";
import CropDistribution from "@/components/molecule/cropDistribution";
import WaterCard from "@/components/molecule/waterCard";
import Navigation from "@/components/molecule/navigation";
import SoonFeatureModal from "@/components/molecule/soonfeatureModal";
import GeneratedRecommend from "@/components/molecule/generatedRecommendModal";
import {
  la_nina_probabilities,
  el_nino_probabilities,
} from "@/data/laninaelnino";
import {
  soil_moisture_difference,
  soil_moisture_today,
} from "@/data/soilmoisture";
import { ensoInsightData } from "../data/insightsData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const markerIcon = new L.Icon({
  iconUrl: locationIc,
  iconSize: [41, 41],
  iconAnchor: [20, 30],
  popupAnchor: [1, 1],
  shadowSize: [41, 41],
});

export default function EnsoForecasting() {
  const location = useLocation();
  const userData = location.state;

  const [setSelectedDate] = useState(null);
  const [selectedMode, setSelectedMode] = useState("temp");
  const [currentData, setCurrentData] = useState(userData[0]);
  const [crop] = useState(userData[0].crop);

  const [position, setPosition] = useState([currentData.lat, currentData.lng]);
  const radius = 10000;

  const [visible, setVisible] = useState(false);
  const [soonFeature, setSoonFeature] = useState("");

  const [visibleGenerated, setVisibleGenerated] = useState(false);

  const [elnino, setElnino] = useState(
    el_nino_probabilities[userData[0].region]
  );
  const [lanina, setLanina] = useState(
    la_nina_probabilities[userData[0].region]
  );

  const [soilIndex, setSoilIndex] = useState(
    soil_moisture_today[userData[0].region]
  );
  const [soilPercent, setSoilPercent] = useState(
    soil_moisture_difference[userData[0].region]
  );

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Data",
        data: [100, 200, 150, 300, 250, 400, 350],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
        tension: 0.1,
        segment: {
          borderColor: function (context) {
            const index = context.p0DataIndex;
            const label = context.chart.data.labels[index];

            if (
              label === "April" ||
              index > context.chart.data.labels.indexOf("April")
            ) {
              return "blue";
            }
            return "green";
          },
        },
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
        position: "top",
      },
      title: {
        display: false,
        text: "Monthly Sales",
      },
    },
    scales: {
      y: {
        beginAtZero: false,
      },
    },
  };

  const handleLocationChange = (e) => {
    const { value } = e.target;

    const targetLocation = userData.find(
      (data) => data.region === value.split(" ")[1]
    );

    setCurrentData(targetLocation);
    setElnino(el_nino_probabilities[targetLocation.region]);
    setLanina(la_nina_probabilities[targetLocation.region]);
    setSoilIndex(soil_moisture_today[targetLocation.region]);
    setSoilPercent(soil_moisture_difference[targetLocation.region]);
    setPosition([targetLocation.lat, targetLocation.lng]);
  };

  return (
    <div className="min-h-screen bg-background text-white">
      {/* Header */}
      <header className="absolute border-b border-b-neutral-600 w-full top-0 h-[92px] flex justify-between items-center py-3 px-6 bg-background">
        <Link to={"/"}>
          <div className="text-xl font-bold">
            <img src={logo} alt="Logo" className="w-40" />
          </div>
        </Link>
      </header>
      <div className="bg-neutral-600 w-full h-0.5" />
      <div className="grid grid-cols-12 gap-6">
        <div className="flex flex-col pt-[118px] h-full min-h-screen bg-neutral-800 gap-6 col-span-2 p-8">
          <Navigation
            type={"2"}
            userData={userData}
            setSoonFeature={setSoonFeature}
            setVisible={setVisible}
          />
        </div>
        {/* Main */}
        <div className="col-span-6  pt-[103px]">
          {/* filter */}
          <div className="flex gap-3 mt-4">
            <div className="relative w-48 lg:max-w-sm">
              <select
                className="w-full p-2.5 rounded-xl text-white bg-stone-500 border border-stone-500 shadow-sm outline-none appearance-none focus:border-stone-300"
                onChange={handleLocationChange}
              >
                {userData.map((data) => (
                  <option key={data.region}>Indonesia, {data.region}</option>
                ))}
              </select>
              <img
                src={dropdown}
                alt="dropdown"
                className="absolute right-3 top-5 w-3"
              />
            </div>
            <div className="p-2.5 rounded-xl bg-stone-500">{crop}</div>
            <SelectionComponent
              selectedMode={selectedMode}
              setSelectedMode={setSelectedMode}
            />
          </div>

          <div className="w-full py-8 rounded-lg">
            <div className="flex flex-col lg:flex-row items-center mb-4 gap-4">
              {/* Soil Moisture */}
              <div className="lg:max-w-[352px] w-full border-2 border-neutral-500 px-6 py-2 pb-3 rounded-lg">
                <h3 className="text-lg">Soil Moisture</h3>
                <div className="flex justify-between mb-3">
                  <h3 className="text-md font-bold">{soilIndex}L</h3>
                  <h3 className="text-md font-bold">
                    Today <span className="text-green-600">{soilPercent}</span>
                  </h3>
                </div>
                <div className="bg-gray-700 rounded-lg">
                  <div className="bg-white shadow-md h-36 rounded-lg">
                    <Line data={data} options={options} />
                  </div>
                </div>
              </div>

              <div className="flex flex-col w-full h-full ">
                {/* El nino probability */}
                <div className="flex flex-col justify-center h-28 border-2 border-neutral-500 px-4 py-1 rounded-xl mb-2">
                  <h3 className="text-lg text-center mb-4">
                    El Nino Probability
                  </h3>
                  <div className="flex items-center gap-3">
                    <div className="w-full bg-neutral-500 h-3">
                      <div
                        className="bg-blue-600 text-xs font-medium text-white text-center p-0.5 leading-none h-3"
                        style={{ width: `${elnino}%` }}
                      />
                    </div>
                    <h3 className="">{elnino}%</h3>
                  </div>
                </div>
                {/* La nina probability */}
                <div className="flex flex-col justify-center h-28 border-2 border-neutral-500 px-4 py-1 rounded-xl">
                  <h3 className="text-lg text-center mb-4">
                    La Niña Probability
                  </h3>
                  <div className="flex items-center gap-3">
                    <div className="w-full bg-neutral-500 h-3">
                      <div
                        className="bg-red-600 text-lg font-medium text-white text-center p-0.5 leading-none h-3"
                        style={{ width: `${lanina}%` }}
                      ></div>
                    </div>
                    <h3 className="">{lanina}%</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-64 bg-gray-700 rounded-lg z-0">
              {selectedMode !== "growth" ? (
                <div className="w-full h-72 z-0">
                  <MapContainer
                    center={position}
                    zoom={10}
                    scrollWheelZoom={false}
                    className="w-full h-full z-0"
                  >
                    <TileLayer
                      url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={position} icon={markerIcon}>
                      <Popup>
                        Koordinat: {position[0]}, {position[1]}
                      </Popup>
                    </Marker>
                    <Circle
                      center={position}
                      radius={radius}
                      pathOptions={{
                        color: "red",
                        fillColor: "red",
                        fillOpacity: 0.5,
                      }}
                    />
                  </MapContainer>
                </div>
              ) : (
                <div className="flex justify-center w-full h-72 z-0">
                  <CropDistribution crop={crop} />
                </div>
              )}
            </div>
          </div>

          <div className="flex">
            <div className="flex w-96 text-black mt-6">
              <input
                type="date"
                onChange={handleDateChange}
                className="border p-2 rounded-md bg-blue-700 border-blue-700 text-white"
              />
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="col-span-4 pr-6 pt-[103px]">
          <div className="flex justify-end my-4 gap-2">
            <button
              className="flex group  hover:bg-sky-600 duration-500 gap-2 border-4 font-bold border-sky-600 p-3 rounded-lg"
              onClick={() => setVisibleGenerated(true)}
            >
              <img
                src={generate}
                className="group-hover:saturate-200"
                alt="generate"
              />
              Generate Insight
            </button>
            <button className="font-bold bg-blue-600 p-3 rounded-lg">
              PDF Full Report
            </button>
          </div>
          <div className="border-2 border-neutral-500 px-6 py-4 rounded-lg">
            <div className="flex gap-3">
              <img src={warning} className="size-7" alt="research" />
              <h3 className="text-lg mb-3">Temperature</h3>
            </div>
            <div className="bg-gray-700 rounded-lg">
              <div className="bg-white shadow-md rounded-lg p-6">
                <Line data={data} options={options} />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 border-2 border-neutral-500 px-6 py-3 rounded-lg mt-4 gap-2">
            <h3 className="col-span-3 text-sm">Weather & Water Controllers</h3>
            <div className="col-span-3 border-2 border-neutral-500 p-6 rounded-lg gap-2"></div>
            <WaterCard title={"Humidity"} logo={supply} value={70}/>
            <div className="col-span-3 xl:col-span-2 border-2 border-neutral-500 p-6 rounded-lg gap-2">
              <p>
                Today after sunrise it will be slightly cloudy. After lunchtime
                it will be cloudy. About 11 hours the sun will be shining. It
                stays cool with temperatures between 3°C and 15°C. After sunrise
                there is a light easterly breeze which veers afterwards to a
                light southeasterly breeze. In the night the sky is partly
                cloudy.
              </p>
            </div>
          </div>
        </div>
        {visible && (
          <SoonFeatureModal setVisible={setVisible} soonFeature={soonFeature} />
        )}
        {visibleGenerated && (
          <GeneratedRecommend
            data={ensoInsightData}
            setVisible={setVisibleGenerated}
          />
        )}
      </div>
    </div>
  );
}
