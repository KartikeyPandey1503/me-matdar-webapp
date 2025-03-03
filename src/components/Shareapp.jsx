import React from "react";
import { IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Navbar";
import { FaShare } from "react-icons/fa";
import logo from "../images/logo.jpg";

const ContactUs = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="w-full h-screen bg-gray-100 flex justify-center items-center ">
      {menuOpen && (
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50">
          <Navbar closeMenu={() => setMenuOpen(false)} />
        </div>
      )}
      <div className="w-[375px] h-full bg-white shadow-md rounded-xl p-4 relative">
        <div className="flex justify-between items-center p-2 border-b">
          <IoMdMenu
            className="text-2xl cursor-pointer"
            onClick={() => setMenuOpen(true)}
          />
          <h2 className="text-lg font-semibold">Share App</h2>
          <Link to="/">
            <div className="text-2xl cursor-pointer">{"<"}</div>
          </Link>
        </div>

        <div className="flex flex-col justify-center items-center pt-32">
          <img src={logo} alt="Logo" className="w-40" />

          <button className="flex items-center space-x-2 bg-purple-600 text-white px-6 py-3 rounded-full mt-6 shadow-lg">
            <span className="text-lg font-semibold">Share App</span>
            <FaShare className="w-5 h-5" />
          </button>

          <p className="text-gray-600 mt-3  text-center">
            Share app to accessible
            <br />
            employee
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
