/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../images/logo.jpg";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { IoMdMenu } from "react-icons/io";

const Signup = () => {
  const [userId, setUserId] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!userId || !mobileNo || !name) {
      setError("All fields are required.");
      return;
    }

    if (!/^\d{10}$/.test(mobileNo)) {
      setError("Invalid mobile number. Must be 10 digits.");
      return;
    }

    setError("");
    navigate("/"); //homr page
  };

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
        <div className="flex justify-between items-center">
          <IoMdMenu
            className="text-2xl cursor-pointer"
            onClick={() => setMenuOpen(true)}
          />
          <h2 className="text-lg font-bold">Sign Up</h2>
          <button className="text-2xl"></button>
        </div>

        {/* Logo */}
        <div className="flex flex-col items-center my-6">
          <img src={logo} alt="Logo" className="w-40" />
          <h2 className="text-2xl font-bold">मी मतदार</h2>
        </div>

        {/* Login Form */}
        <h3 className="text-lg font-bold text-center">Signup</h3>
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        <form onSubmit={handleSubmit} className="mt-4">
          <input
            type="text"
            placeholder="Full Name"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            className="w-full border border-gray-300 rounded-full px-4 py-2 my-2"
          />
          <input
            type="text"
            placeholder="Mobile No"
            value={mobileNo}
            onChange={(e) => setMobileNo(e.target.value)}
            className="w-full border border-gray-300 rounded-full px-4 py-2 my-2"
          />
          <input
            type="text"
            placeholder="Enter OTP"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded-full px-4 py-2 my-2"
          />
          <button
            type="submit"
            className="w-full bg-purple-600 text-white rounded-full py-2 mt-4 text-lg"
          >
            Submit
          </button>
        </form>

        {/* Support Link */}
        <p className="text-center mt-4">
          ALredy a user?{" "}
          <Link to="/" className="text-blue-500 font-bold">
            Login
          </Link>
        </p>

        <p className="text-center mt-4">
          If not Login Contact to{" "}
          <a href="#" className="text-blue-500 font-bold">
            Support
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
