/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import Navbar from "./Navbar";
import logo from "../images/logo.jpg";

const Login = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    userId: "",
    mobileNo: "",
    name: "",
  });
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Registration Successful!");

    // Basic validation
    if (!formData.userId || !formData.mobileNo || !formData.name) {
      setError("All fields are required.");
      return;
    }

    if (!/^\d{10}$/.test(formData.mobileNo)) {
      setError("Invalid mobile number. Must be 10 digits.");
      return;
    }

    setError("");

    navigate("/home"); // Redirect to the home page
  };

  return (
    <div className="w-full h-screen bg-gray-100 flex justify-center items-center">
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
            aria-label="Open menu"
          />
          <h2 className="text-lg font-semibold">Login</h2>
          <Link to="/">
            <div className="text-2xl cursor-pointer">{"<"}</div>
          </Link>
        </div>

        {/* Login Form */}
        <div className="h-[550px] overflow-y-scroll no-scrollbar p-2">
          <img src={logo} alt="logo" />

          <h2 className="text-xl font-bold text-center mb-4">Login</h2>

          {error && (
            <p className="text-red-500 text-sm text-center mb-4">{error}</p>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="userId"
                placeholder="User ID"
                value={formData.userId}
                onChange={handleChange}
                className="w-full p-2 border rounded-full border-purple-700"
                required
              />
            </div>

            <div>
              <input
                type="tel"
                name="mobileNo"
                placeholder="Mobile No."
                value={formData.mobileNo}
                onChange={handleChange}
                className="w-full p-2 border rounded-full border-purple-700"
                required
              />
            </div>

            <div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border rounded-full border-purple-700"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 text-white p-2 rounded-full hover:bg-purple-700"
            >
              Submit
            </button>
          </form>

          <p className="text-center mt-4">
            Not a user?{" "}
            <Link to="/register" className="text-blue-500 font-bold">
              Signup
            </Link>
          </p>

          <p className="text-center mt-4">
            If not Login Contact to{" "}
            <Link to="#" className="text-blue-500 font-bold">
              Support
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
