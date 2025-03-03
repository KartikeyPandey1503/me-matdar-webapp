import React from "react";
import { IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Navbar";
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
          <h2 className="text-lg font-semibold">Contact Us</h2>
          <Link to="/home">
            <div className="text-2xl cursor-pointer">{"<"}</div>
          </Link>
        </div>

        <div className="flex flex-col justify-center items-center pt-8">
          {/* WhatsApp Chat */}
          <button className="w-[250px] bg-purple-500 text-white py-2 rounded-3xl mb-6 ">
            WhatsApp Chat
          </button>

          {/* Email Button */}
          <button className="w-[250px] bg-purple-500 text-white py-2 rounded-full mb-6">
            Email Button
          </button>

          {/* Call */}
          <button className="w-[250px] bg-purple-500 text-white py-2 rounded-full">
            Call
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
