import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import Navbar from "./Navbar";
import logo from "../images/logo2.jpg";
const Register = () => {
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
          <h2 className="text-lg font-semibold">Register</h2>
          <Link to="/">
            <div className="text-2xl cursor-pointer">{"<"}</div>
          </Link>
        </div>

        <div className="flex flex-col mt-11 pt-10 items-center">
          <img src={logo} alt="Logo" className="w-40" />
          <div className="flex flex-col items-center">
            <Link to="/singleuser">
              <button className="w-[300px] bg-purple-600 text-white rounded-full py-2 mt-4 text-lg">
                Single User
              </button>
            </Link>
            <Link to="/corporateuser">
              <button className="w-[300px] bg-purple-600 text-white rounded-full py-2 mt-4 text-lg">
                Corporate User
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
