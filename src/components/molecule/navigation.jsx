/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import soon from "../../assets/soon.png";

export default function Navigation({
  userData,
  type,
  setSoonFeature,
  setVisible,
}) {
  return (
    <>
      <Link to={"/dashboard/yield-optimizer"} state={userData}>
        <div
          className={`rounded-md border-2 duration-500 text-ellipsis border-neutral-600 px-2 py-1 text-center ${
            type === "1" ? "shadow-3xl shadow-white/10 bg-neutral-500 " : "shadow-2xl"
          }`}
        >
          CC - Fusion
        </div>
      </Link>
      <Link to={"/dashboard/enso-forecasting"} state={userData}>
        <div
          className={`rounded-md border-2 duration-500 border-neutral-600 px-2 py-1 text-center ${
            type === "2" ? "shadow-3xl shadow-white/10 bg-neutral-500 " : "shadow-2xl"
          }`}
        >
          <p className="text-ellipsis overflow-hidden">Enso Forecasting</p>
        </div>
      </Link>
      <button
        onClick={() => {
          setVisible(true);
          setSoonFeature("realtime");
        }}
      >
        <img src={soon} alt="soon" className="ml-2 w-10" />
        <div
          className={`rounded-md text-ellipsis overflow-hidden border-2 border-neutral-600 px-2 py-1 text-center shadow-2xl`}
        >
          Real-time W & S
        </div>
      </button>
      <button
        onClick={() => {
          setVisible(true);
          setSoonFeature("manual");
        }}
      >
        <img src={soon} alt="soon" className="ml-2 w-10" />
        <div
          className={`rounded-md border-2 text-ellipsis overflow-hidden border-neutral-600 px-2 py-1 text-center shadow-2xl`}
        >
          Manual Adjust
        </div>
      </button>
      <button
        onClick={() => {
          setVisible(true);
          setSoonFeature("water");
        }}
      >
        <img src={soon} alt="soon" className="ml-2 w-10" />
        <div
          className={`rounded-md border-2 text-ellipsis overflow-hidden border-neutral-600 px-2 py-1 text-center shadow-2xl`}
        >
          Water Sharing
        </div>
      </button>
    </>
  );
}
