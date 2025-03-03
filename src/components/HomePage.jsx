import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { FiShare2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const HomePage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full h-screen bg-gray-100 flex justify-center items-center relative">
      {menuOpen && (
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50">
          <Navbar closeMenu={() => setMenuOpen(false)} />
        </div>
      )}

      <div className="w-[375px] h-full bg-white shadow-md rounded-xl p-4 relative">
        {/* Header */}
        <div className="flex justify-between items-center p-2 border-b">
          <IoMdMenu
            className="text-2xl cursor-pointer"
            onClick={() => setMenuOpen(true)}
          />
          <h2 className="text-lg font-semibold cursor-pointer">Home Page</h2>
          <Link to="/shareapp">
            <FiShare2 className="text-2xl cursor-pointer" />
          </Link>
        </div>

        {/* Slider Image Section */}
        <div className="mt-4 p-10 border-2 border-purple-500 rounded-lg text-center cursor-pointer">
          <p className="font-semibold">Slider Image</p>
          <p className="text-sm text-gray-600">(Super admin can change)</p>
        </div>

        {/* Feature Buttons */}
        <div className="grid grid-cols-3 gap-4 mt-2 p-2">
          {features.map((feature, index) => (
            <Link
              key={index}
              to={feature.link || "#"}
              className="flex flex-col items-center border-2 border-purple-500 p-3 rounded-lg transition-transform duration-150 hover:scale-105 cursor-pointer"
            >
              <div className="bg-purple-500 text-white p-2 rounded-full text-xl">
                {feature.icon || <div>ICON</div>}
              </div>
              <p className="text-sm mt-2 text-center">{feature.label}</p>
            </Link>
          ))}
        </div>

        {/* Info Cards */}
        <div className="">
          <div className="mt-2 p-4 border rounded-lg flex justify-between hover:bg-sky-700 transition-transform duration-150 hover:scale-105 cursor-pointer">
            <span className="font-semibold">Remaining Days</span>
            <span className="text-purple-600 font-bold">365</span>
          </div>
          <div className="mt-2 p-4 border rounded-lg flex justify-between hover:bg-sky-700 transition-transform duration-150 hover:scale-105 cursor-pointer">
            <span className="font-semibold">Referral Count</span>
            <span className="text-purple-600 font-bold">20</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const features = [
  { label: "Auto call Message", icon: <FaPhoneAlt />, link: "/page3" }, // Corrected Link format
  { label: "Daily Banner", icon: null },
  { label: "Mini website", icon: null },
  { label: "Bulk Messenger", icon: null },
  { label: "Voter APP", icon: null },
  { label: "Earning Money", icon: null },
];

export default HomePage;
