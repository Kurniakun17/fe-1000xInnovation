import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import soybean from "../assets/soybean.png";
import corn from "../assets/corn.png";
import rice from "../assets/rice.png";
import wheat from "../assets/wheat.png";
import start from "../assets/start.png";

export default function Start() {
  return (
    <div className="min-h-screen bg-background text-white">
      {/* Header */}
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
            <p className="font-bold">Assets</p>
          </div>

          <div className="flex-1 h-1 bg-gray-400 mx-2" />

          <div className="flex flex-col justify-center items-center">
            <div className="flex justify-center items-center rounded-full bg-gray-400 h-6 w-6">
              <div className="rounded-full bg-white h-4 w-4" />
            </div>
            <p className="font-bold text-white">Risk Profiles</p>
          </div>

          <div className="flex-1 h-1 bg-gray-400 mx-2" />

          <div className="flex flex-col justify-center items-center">
            <div className="flex justify-center items-center rounded-full bg-gray-400 h-6 w-6">
              <div className="rounded-full bg-white h-4 w-4" />
            </div>
            <p className="font-bold text-gray-400">Locations</p>
          </div>
        </div>
        <div></div>
      </header>
      <div className="bg-neutral-600 w-full h-0.5" />

      {/* Hero Section */}
      <section className="flex flex-col items-start justify-start pt-12 mx-14 mb-8">
        <h1 className="text-4xl md:text-5xl">
          <span className="font-bold text-white inline-block text-transparent bg-clip-text">
            Welcome!
          </span>
        </h1>
        <p className="mt-4 text-lg md:text-lg max-w-3xl text-white">
          {"Let’s set up your account with the assets you have acquired"}
        </p>
      </section>
      {/* Feature Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-center justify-center md:w-5/12 mx-14">
        <Link to={"/risk/Soybean"}>
          <div className="flex justify-center items-center gap-3 bg-background text-white p-6 rounded-lg shadow-3xl hover:bg-neutral-600 hover:cursor-pointer w-60">
            <img src={soybean} alt="" className="w-10" />
            <h3 className="text-xl font-semibold z-50">Soybeans</h3>
          </div>
        </Link>
        <Link to={"/risk/Wheat"}>
          <div className="flex justify-center items-center gap-3 bg-background text-white p-6 rounded-lg shadow-3xl hover:bg-neutral-600 hover:cursor-pointer w-60">
            <img src={wheat} alt="" className="w-10" />
            <h3 className="text-xl font-semibold">Wheat</h3>
          </div>
        </Link>
        <Link to={"/risk/Corn"}>
          <div className="flex justify-center items-center gap-3 bg-background text-white p-6 rounded-lg shadow-3xl hover:bg-neutral-600 hover:cursor-pointer w-60">
            <img src={corn} alt="" className="w-10" />
            <h3 className="text-xl font-semibold">Corn</h3>
          </div>
        </Link>
        <Link to={"/risk/Rice"}>
          <div className="flex justify-center items-center gap-3 bg-background text-white p-6 rounded-lg shadow-3xl hover:bg-neutral-600 hover:cursor-pointer w-60">
            <img src={rice} alt="" className="w-10" />
            <h3 className="text-xl font-semibold">Rice</h3>
          </div>
        </Link>
      </section>
      <section className="flex flex-col items-start justify-start pt-12 mx-14 pb-10">
        <p className="text-lg text-white">
          You will find preset configurations which you can tailor to your own
          needs.
        </p>
      </section>
      <img src={start} alt="start" className="hidden lg:flex lg:w-96 xl:w-auto absolute top-1/4 right-20" />
    </div>
  );
}
