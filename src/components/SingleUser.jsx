import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import Navbar from "./Navbar";

const SingleUser = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    mobileNo: "",
    email: "",
    needUserId: "",
    businessName: "",
    businessCategory: "",
    address: "",
    businessMobileNo: "",
    businessEmail: "",
    referralCode: "",
    referralName: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Registration Successful!");
  };

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
          <Link to="/register">
            <div className="text-2xl cursor-pointer">{"<"}</div>
          </Link>
        </div>

        <div className="h-[550px] overflow-y-scroll no-scrollbar p-2">
          <h2 className="text-xl font-bold text-center mb-4">
            Single Registration
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
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
                type="email"
                name="email"
                placeholder="Email Id"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border rounded-full  border-purple-700 "
                required
              />
            </div>

            <h3 className="text-md font-semibold text-center">
              Business Info (Optional)
            </h3>

            <div>
              <input
                type="number"
                name="needUserId"
                placeholder="Need User Id (Number)"
                value={formData.needUserId}
                onChange={handleChange}
                className="w-full p-2 border rounded-full border-purple-700"
              />
            </div>

            <div>
              <input
                type="text"
                name="businessName"
                placeholder="Business Name"
                value={formData.businessName}
                onChange={handleChange}
                className="w-full p-2 border rounded-full border-purple-700"
              />
            </div>

            <div>
              <input
                type="text"
                name="businessCategory"
                placeholder=" Business Category"
                value={formData.businessCategory}
                onChange={handleChange}
                className="w-full p-2 border rounded-full border-purple-700"
              />
            </div>

            <div>
              <textarea
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                className="w-full p-2 border rounded-full border-purple-700"
              ></textarea>
            </div>

            <div className="flex space-x-2">
              <div className="w-1/2">
                <input
                  type="tel"
                  name="businessMobileNo"
                  placeholder="Mobile No"
                  value={formData.businessMobileNo}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-full border-purple-700"
                />
              </div>
              <div className="w-1/2">
                <input
                  type="email"
                  name="businessEmail"
                  placeholder="B. Email"
                  value={formData.businessEmail}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-full border-purple-700"
                />
              </div>
            </div>

            <div>
              <input
                type="text"
                name="referralCode"
                placeholder="Referral Code"
                value={formData.referralCode}
                onChange={handleChange}
                className="w-full p-2 border rounded-full border-purple-700"
              />
            </div>

            <div>
              <input
                type="text"
                name="referralName"
                placeholder="Referral Name"
                value={formData.referralName}
                onChange={handleChange}
                className="w-full p-2 border rounded-full border-purple-700"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 text-white p-2 rounded hover:bg-purple-700"
            >
              Submit
            </button>
          </form>

          <p className="text-center mt-4">
            ALredy a user?{" "}
            <Link to="/" className="text-blue-500 font-bold">
              Login
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

export default SingleUser;
