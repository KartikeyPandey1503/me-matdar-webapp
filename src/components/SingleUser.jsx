import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const SingleUser = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    mobileNo: "",
    email: "",
    password: "",
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
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    //navigate

    // Generate a unique user ID
    const userId = `USER-${Date.now()}`;

    const userData = { ...formData, userId };

    // Store user data in localStorage
    localStorage.setItem("registeredUser", JSON.stringify(userData));

    console.log("User Registered:", userData);
    alert(`Registration Successful! Your User ID: ${userId}`);

    navigate("/");
  };

  return (
    <div className="w-full h-full bg-gray-100 flex justify-center items-center relative">
      {menuOpen && (
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50">
          <Navbar closeMenu={() => setMenuOpen(false)} />
        </div>
      )}

      <div className="w-[375px] bg-white shadow-md rounded-xl p-4 relative mx-auto">
        <div className="flex justify-between items-center p-2 border-b">
          <IoMdMenu
            className="text-2xl cursor-pointer"
            onClick={() => setMenuOpen(true)}
          />
          <h2 className="text-lg font-semibold">Single User</h2>
          <Link onClick={() => navigate(-1)}>
            <div className="text-2xl cursor-pointer">{"<"}</div>
          </Link>
        </div>

        <div className="overflow-y-auto">
          <h2 className="text-xl font-bold text-center mb-1">
            Single Registration
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
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
                className="w-full p-2 border rounded-full border-purple-700"
                required
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-2 border rounded-full border-purple-700"
                required
              />
            </div>

            <h3 className="text-md font-semibold text-center mt-auto">
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
                placeholder="Business Category"
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
                className="w-full p-2 border rounded-lg border-purple-700"
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
            Already a user?{" "}
            <Link to="/" className="text-blue-500 font-bold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleUser;
