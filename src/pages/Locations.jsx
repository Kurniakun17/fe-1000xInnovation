import { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import locationIc from "@/assets/location_ic.png";
import locationWIc from "@/assets/location_w_ic.png";
import logo from "@/assets/logo.png";
import soybean from "../assets/soybean.png";
import wheat from "../assets/wheat.png";
import rice from "../assets/rice.png";
import corn from "../assets/corn.png";
import { Link, useParams } from "react-router-dom";

const MapComponent = () => {
  const { crop } = useParams(); 
  const [markers, setMarkers] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [confirmationVisible, setConfirmationVisible] = useState(false);
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [region, setRegion] = useState("");
  const [farmName, setFarmName] = useState("");
  const [landArea, setLandArea] = useState("");
  const [irrigationAreaLength, setIrrigationAreaLength] = useState("");
  const [irrigationAreaWidth, setIrrigationAreaWidth] = useState("");
  const [irrigationAreaDepth, setIrrigationAreaDepth] = useState("");
  const [status, setStatus] = useState("Planting");

  const markerIcon = new L.Icon({
    iconUrl: locationIc,
    iconSize: [41, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  const addMarker = () => {
    if (latitude && longitude) {
      const newMarker = {
        lat: parseFloat(latitude),
        lng: parseFloat(longitude),
        region,
        farmName,
        landArea,
        irrigationAreaLength,
        irrigationAreaDepth,
        irrigationAreaWidth,
        status,
        crop,
      };
      setMarkers([...markers, newMarker]);
      setLatitude("");
      setLongitude("");
      setRegion("");
      setFarmName("");
      setLandArea("");
      setIrrigationAreaLength("");
      setIrrigationAreaWidth("");
      setIrrigationAreaDepth("");
      setStatus("");
      setModalVisible(false);
    } else {
      alert("Please input valid locations.");
    }
  };

  const handleStatusChange = (e) => {
    const { value } = e.target;
    setStatus(value);
  };

  const MapClickHandler = () => {
    useMapEvents({
      click(e) {
        setLatitude(e.latlng.lat);
        setLongitude(e.latlng.lng);
        setModalVisible(true);
      },
    });
    return null;
  };

  return (
    <div className="min-h-screen bg-background text-white">
      <header className="flex justify-between items-center p-6 bg-background">
        <Link to={"/"}>
          <div className="text-xl font-bold">
            <img src={logo} alt="Logo" className="w-40" />
          </div>
        </Link>
        <div className="hidden md:flex items-center w-1/2 h-16">
          <div className="flex flex-col justify-center items-center">
            <div className="flex justify-center items-center rounded-full bg-blue-700 h-6 w-6">
              <div className="rounded-full bg-white h-4 w-4" />
            </div>
            <p className="font-bold text-white">Assets</p>
          </div>

          <div className="flex-1 h-1 bg-blue-700 mx-2" />

          <div className="flex flex-col justify-center items-center">
            <div className="flex justify-center items-center rounded-full bg-blue-700 h-6 w-6">
              <div className="rounded-full bg-white h-4 w-4" />
            </div>
            <p className="font-bold text-white">Risk Profiles</p>
          </div>

          <div className="flex-1 h-1 bg-blue-700 mx-2" />

          <div className="flex flex-col justify-center items-center">
            <div className="flex justify-center items-center rounded-full bg-blue-700 h-6 w-6">
              <div className="rounded-full bg-white h-4 w-4" />
            </div>
            <p className="font-bold text-white">Locations</p>
          </div>
        </div>
        <div></div>
      </header>
      <div className="bg-neutral-600 w-full h-0.5" />
      <section className="bg-background py-4 px-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="pb-6">
              <div className="mb-6">
                <div className="flex flex-row space-x-2">
                  <h1 className="text-xl font-semibold">
                    Locations for <span className="text-blue-700">{crop}</span>
                  </h1>
                  <img
                    src={
                      crop === "soybean"
                        ? soybean
                        : crop === "wheat"
                        ? wheat
                        : crop === "rice"
                        ? rice
                        : corn
                    }
                    alt="Logo"
                    className="w-10"
                  />
                </div>
                <p className="text-sm font-normal">
                  Add one or more locations you want to monitor for {crop}
                </p>
              </div>
              <div className="flex justify-between mr-4">
                <button
                  className="hover:bg-gray-600 bg-gradient-to-r from-blue-800 to-sky-600 text-white px-6 py-1 rounded-lg"
                  onClick={() => setModalVisible(true)}
                >
                  + New Location
                </button>
                <button className="flex justify-center items-center gap-2 hover:bg-gray-600 bg-gradient-to-r hover:cursor-default from-blue-800 to-sky-700 text-white px-6 py-1 rounded-lg">
                  <img src={locationWIc} alt="Logo" className="w-4" />
                  {markers.length}/20 Locations
                </button>
              </div>
              <div className="pr-4 my-4">
                <table className="min-w-full bg-neutral-800 rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-neutral-700">
                      <th className="py-2 px-4 text-white text-left">Name</th>
                      <th className="py-2 px-4 text-white text-left">Region</th>
                      <th className="py-2 px-4 text-white text-left">Assets</th>
                    </tr>
                  </thead>
                  <tbody>
                    {markers.map((marker, index) => (
                      <tr
                        key={index}
                        className={
                          index % 2 === 0 ? "bg-neutral-800" : "bg-neutral-700"
                        }
                      >
                        <td className="py-2 px-4 text-white">
                          {marker.farmName}
                        </td>
                        <td className="py-2 px-4 text-white">
                          {marker.region}
                        </td>
                        <td className="py-2 px-4 text-white">Assets</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div>
              <MapContainer
                center={[0.0, 117.0]}
                zoom={4}
                style={{
                  height: "450px",
                  width: "100%",
                  zIndex: 1,
                  borderRadius: 8,
                }}
              >
                <TileLayer
                  url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <MapClickHandler />
                {markers.map((marker, index) => (
                  <Marker
                    key={index}
                    position={[marker.lat, marker.lng]}
                    icon={markerIcon}
                  >
                    <Popup>
                      <strong>{marker.farmName}</strong>
                      <br />
                      Region: {marker.region}
                      <br />
                      Lokasi: {marker.lat}, {marker.lng}
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>
          </div>

          {modalVisible && (
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 text-white">
              <div className="bg-background p-6 rounded shadow-lg max-w-md w-full z-60">
                <h2 className="text-xl font-semibold mb-4">
                  Add to My Locations
                </h2>
                <button className="flex justify-center items-center gap-2 mb-4 hover:bg-gray-600 bg-gradient-to-r hover:cursor-default from-blue-800 to-sky-700 text-white px-6 py-1 rounded-lg">
                  <img src={locationWIc} alt="Logo" className="w-4" />
                  {markers.length}/20 Locations
                </button>
                <input
                  type="text"
                  placeholder="Latitude"
                  value={latitude}
                  onChange={(e) => setLatitude(e.target.value)}
                  className="border p-2 mb-2 w-full rounded-md bg-neutral-800 border-neutral-500"
                />
                <input
                  type="text"
                  placeholder="Longitude"
                  value={longitude}
                  onChange={(e) => setLongitude(e.target.value)}
                  className="border p-2 mb-2 w-full rounded-md bg-neutral-800 border-neutral-500"
                />
                <input
                  type="text"
                  placeholder="Farm Name"
                  value={farmName}
                  onChange={(e) => setFarmName(e.target.value)}
                  className="border p-2 mb-2 w-full rounded-md bg-neutral-800 border-neutral-500"
                />
                <input
                  type="text"
                  placeholder="Region"
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                  className="border p-2 mb-2 w-full rounded-md bg-neutral-800 border-neutral-500"
                />
                <input
                  type="number"
                  placeholder="Land Area (Wide)"
                  value={landArea}
                  onChange={(e) => setLandArea(e.target.value)}
                  className="border p-2 mb-2 w-full rounded-md bg-neutral-800 border-neutral-500"
                />
                <input
                  type="number"
                  placeholder="Irrigation Area (Length)"
                  value={irrigationAreaLength}
                  onChange={(e) => setIrrigationAreaLength(e.target.value)}
                  className="border p-2 mb-2 w-full rounded-md bg-neutral-800 border-neutral-500"
                />
                <input
                  type="number"
                  placeholder="Irrigation Area (Width)"
                  value={irrigationAreaWidth}
                  onChange={(e) => setIrrigationAreaWidth(e.target.value)}
                  className="border p-2 mb-2 w-full rounded-md bg-neutral-800 border-neutral-500"
                />
                <input
                  type="number"
                  placeholder="Irrigation Area (Depth)"
                  value={irrigationAreaDepth}
                  onChange={(e) => setIrrigationAreaDepth(e.target.value)}
                  className="border p-2 mb-2 w-full rounded-md bg-neutral-800 border-neutral-500"
                />
                <div className="">
                  <select
                    className="border p-2 mb-2 w-full rounded-md bg-neutral-800 border-neutral-500"
                    value={status}
                    onChange={handleStatusChange}
                  >
                    <option>Planting</option>
                    <option>Flowering</option>
                    <option>Growing</option>
                    <option>Harvest</option>
                  </select>
                </div>
                <div className="flex justify-end">
                  <button
                    className="border-4 border-blue-700 text-blue-700 px-4 py-2 rounded mr-2"
                    onClick={() => setModalVisible(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-blue-700 text-white px-4 py-2 rounded"
                    onClick={addMarker}
                  >
                    Add Location
                  </button>
                </div>
              </div>
            </div>
          )}

          {confirmationVisible && (
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 text-white">
              <div className="bg-background p-6 rounded shadow-lg max-w-md w-full z-60">
                <h2 className="text-xl font-semibold mb-4">
                  Finish setup and continue to the platform?
                </h2>
                <p className="text-neutral-400 mt-4 mb-8">
                  You will be able to add more locations and assets later in the
                  Admin tab.
                </p>
                <div className="flex justify-end">
                  <button
                    className="border-4 border-blue-700 text-blue-700 px-4 py-2 rounded mr-2 font-bold"
                    onClick={() => setConfirmationVisible(false)}
                  >
                    Keep Editing
                  </button>
                  <Link to={"/dashboard/yield-optimizer"} state={markers}>
                    <button className="bg-blue-700 text-white px-4 py-2 rounded font-bold">
                      Finish Setup
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      <section>
        <div className="flex flex-row justify-end items-center py-4 px-12 space-x-3">
          <p className="hidden md:flex text-neutral-500">
            You will be able to edit/create custom risk profiles later in the
            Admin tab
          </p>
          <Link to={`/risk/${crop}`}>
            <button className="border-4 border-blue-700 text-blue-700 px-6 py-2 rounded-lg">
              Back
            </button>
          </Link>
          <button
            className="hover:bg-gray-600 bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-3 rounded-lg"
            onClick={() => setConfirmationVisible(true)}
          >
            Continue &gt;&gt;
          </button>
        </div>
      </section>
    </div>
  );
};

export default MapComponent;
