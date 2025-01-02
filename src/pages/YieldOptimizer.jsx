/* eslint-disable no-constant-binary-expression */
import logo from "@/assets/logo.png";
import dropdown from "@/assets/dropdown.png";
import generate from "@/assets/generate.png";
import L from "leaflet";
import locationIc from "@/assets/location_ic.png";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
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
import RevenueCalculator from "@/components/molecule/revenueCalculator";
import CommoditySelector from "@/components/molecule/comoditySelector";
import PricePredictions from "@/components/molecule/pricePrediction";
import SelectionComponent from "@/components/molecule/selectMode";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Rectangle,
} from "react-leaflet";
import { useQueries } from "@tanstack/react-query";
import axios from "axios";
import Navigation from "@/components/molecule/navigation";
import SoonFeatureModal from "@/components/molecule/soonfeatureModal";
import GeneratedRecommend from "@/components/molecule/generatedRecommendModal";
import { ccFusionInsightData } from "../data/insightsData";

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

const fetchDateData = async (dateData) => {
  const response = await axios.post(
    "https://f9d0-114-10-119-91.ngrok-free.app/predict",
    dateData
  );
  return response.data;
};

const fetchPriceData = async (dateData) => {
  const response = await axios.post(
    "https://f9d0-114-10-119-91.ngrok-free.app/predict_seasonal",
    dateData
  );
  return response.data;
};

export default function YieldOptimizer() {
  const mockData = ccFusionInsightData;
  const location = useLocation();
  const userData = location.state;

  const [fetchedData, setFetchedData] = useState({ date: ["a"], value: [10] });
  const [dateData, setDateData] = useState({ tanggal: "28-11-2024" });
  const [seasonalMonthData, setSeasonalMonthData] = useState(null);
  const [seasonalQuarterData, setSeasonalQuarterData] = useState(null);
  const [seasonalYearData, setSeasonalYearData] = useState(null);
  const [currentData] = useState(userData[0]);
  const [position] = useState([currentData.lat, currentData.lng]);
  const [visible, setVisible] = useState(false);
  const [soonFeature, setSoonFeature] = useState("");

  const [visibleGenerated, setVisibleGenerated] = useState(true);

  const distance = 0.1;
  const bounds = [
    [position[0] - distance / 2, position[1] - distance / 2],
    [position[0] + distance / 2, position[1] + distance / 2],
  ];

  const queries = useQueries({
    queries: [
      {
        queryKey: ["fetchDate", dateData],
        queryFn: () => fetchDateData(dateData),
        enabled: true,
      },
      {
        queryKey: ["fetchMonth", seasonalMonthData],
        queryFn: () => fetchPriceData({ seasonal: 30 }),
        enabled: true,
      },
      {
        queryKey: ["fetchQuarter", seasonalQuarterData],
        queryFn: () => fetchPriceData({ seasonal: 90 }),
        enabled: true,
      },
      {
        queryKey: ["fetchYear", seasonalYearData],
        queryFn: () => fetchPriceData({ seasonal: 12 }),
        enabled: true,
      },
    ],
  });

  const [fetchDateQuery, fetchMonthQuery, fetchQuarterQuery, fetchYearQuery] =
    queries;

  const { data, error, isLoading } = fetchDateQuery;

  useEffect(() => {
    if (data && data.forecasting_data) {
      console.log(data);
      setFetchedData({
        date:
          [...data.historical_data.date, ...data.forecasting_data.date] || [],
        value:
          [...data.historical_data.value, ...data.forecasting_data.value] || [],
      });
    }
    if (fetchMonthQuery.data) {
      setSeasonalMonthData(fetchMonthQuery.data);
    }
    if (fetchQuarterQuery.data) {
      setSeasonalQuarterData(fetchQuarterQuery.data);
    }
    if (fetchYearQuery.data) {
      setSeasonalYearData(fetchYearQuery.data);
    }
  }, [data, fetchMonthQuery.data, fetchQuarterQuery.data, fetchYearQuery.data]);
  const [crop, setCrop] = useState(userData[0].crop);
  const [selectedMode, setSelectedMode] = useState("temp");

  const handleDateChange = (event) => {
    const [tahun, bulan, tanggal] = event.target.value.split("-");
    setDateData({ tanggal: `${tanggal}-${bulan}-${tahun}` });
  };

  const dataChart = {
    labels: fetchedData.date,
    datasets: [
      {
        data: fetchedData.value,
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
        tension: 0.1,
        elements: {
          point: {
            radius: 0,
          },
        },
        segment: {
          borderColor: function (context) {
            const index = context.p0DataIndex;
            const label = context.chart.data.labels[index];

            const today = new Date();
            const year = today.getFullYear();
            const month = String(today.getMonth() + 1).padStart(2, "0");
            const day = String(today.getDate()).padStart(2, "0");

            const todayDate = `${year}-${month}-${day}`;

            if (
              label === todayDate ||
              index > context.chart.data.labels.indexOf(todayDate)
            ) {
              return "orange";
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
      },
      title: {
        display: true,
        text: `${crop} Commodity Prices`,
      },
    },
    scales: {
      y: {
        beginAtZero: false,
      },
    },
  };

  return (
    <div className="min-h-screen bg-background text-white">
      {/* Header */}
      {/* {isLoading && <div>Loading...</div>} */}
      {/* {error && <div>Error: {error.message}</div>} */}
      <header className="absolute border-b border-b-neutral-600 w-full top-0 h-[92px] flex justify-between items-center py-3 px-6 bg-background">
        <Link to={"/"}>
          <div className="text-xl font-bold">
            <img src={logo} alt="Logo" className="w-40" />
          </div>
        </Link>
      </header>
      {/* <div className="bg-neutral-600 w-full h-0.5" /> */}
      <div className="grid grid-cols-12 gap-6">
        <div className="flex flex-col pt-[120px] h-full min-h-screen bg-neutral-800 gap-6 col-span-2 p-8">
          <Navigation
            type={"1"}
            userData={userData}
            setSoonFeature={setSoonFeature}
            setVisible={setVisible}
          />
        </div>
        {/* Main */}
        <div className="col-span-6 pt-[105px]">
          {/* filter */}
          <div className="flex gap-3 mt-4">
            <div className="relative w-48 lg:max-w-sm">
              <select className="w-full p-2.5 rounded-xl text-white bg-stone-500 border border-stone-500 shadow-sm outline-none appearance-none focus:border-stone-300">
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
          <div className="py-7 rounded-lg">
            {/* Line Chart */}
            <div className="w-full bg-gray-700 rounded-2xl">
              {fetchedData.date.length > 0 && (
                <div className="bg-white h-80 shadow-md rounded-lg p-6">
                  <Line data={dataChart} options={options} />
                </div>
              )}
            </div>
          </div>
          <div className="flex gap-5">
            <div className="w-full h-72 border-2 border-neutral-500 rounded-xl z-0">
              <MapContainer
                center={position}
                zoom={10}
                scrollWheelZoom={false}
                className="w-full h-full"
              >
                <TileLayer
                  url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={position} icon={markerIcon}>
                  <Popup>
                    Crop: {crop}
                    <br />
                    Last Update: {dateData.tanggal}
                  </Popup>
                </Marker>
                <Rectangle bounds={bounds} color="green" />
              </MapContainer>
            </div>
            {seasonalMonthData && seasonalQuarterData && seasonalYearData && (
              <PricePredictions
                commodity={crop}
                prices={[
                  {
                    period: "Month",
                    data: seasonalMonthData,
                  },
                  {
                    period: "Quarter",
                    data: seasonalQuarterData,
                  },
                  {
                    period: "Year",
                    data: seasonalYearData,
                  },
                ]}
              />
            )}
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
        <div className="col-span-4 pr-6  pt-[97px] ">
          <div className="flex justify-end gap-2 my-6">
            <button
              className="flex gap-2 border-4 font-bold border-sky-600 p-3 rounded-lg"
              onClick={() => setVisibleGenerated(true)}
            >
              <div>
                <img src={generate} alt="generate" />
              </div>
              Generate Insight
            </button>
            <button
              className="font-bold bg-blue-600 p-3 rounded-lg"
              onClick={() => {}}
            >
              PDF Full Report
            </button>
          </div>
          <div className="border-2 border-neutral-500 p-1 rounded-lg">
            <CommoditySelector crop={crop} setCrop={setCrop} />
          </div>

          <div className="border-2 border-neutral-500 p-6 rounded-lg mt-4">
            <RevenueCalculator crop={crop} />
          </div>
        </div>

        {visible && (
          <SoonFeatureModal setVisible={setVisible} soonFeature={soonFeature} />
        )}
        {visibleGenerated && (
          <GeneratedRecommend
            data={mockData}
            setVisible={setVisibleGenerated}
          />
        )}
      </div>
    </div>
  );
}
