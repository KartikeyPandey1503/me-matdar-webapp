import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../images/logo.jpg";

const Login = () => {
  const [userId, setUserId] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    if (!userId || !mobileNo || !password) {
      setError("All fields are required.");
      return;
    }

    setLoading(true);

    // ✅ Retrieve stored user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem("registeredUser"));

    if (
      storedUser &&
      storedUser.userId === userId &&
      storedUser.mobileNo === mobileNo &&
      storedUser.password === password
    ) {
      // ✅ Save login session
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("loggedInUserId", userId);

      setTimeout(() => {
        setLoading(false);
        alert("Login Successful!");
        navigate("/home");
      }, 1500);
    } else {
      setLoading(false);
      setError("Invalid User ID, Mobile Number, or Password");
    }
  };

  return (
    <div className="w-full h-screen bg-gray-100 flex justify-center items-center">
      <div className="w-[375px] h-full bg-white shadow-md rounded-xl p-4 relative">
        <div className="text-center p-2 border-b">
          <h2 className="text-lg font-semibold">User Login</h2>
        </div>

        <div className="h-[550px] overflow-y-scroll no-scrollbar p-2">
          <img src={logo} alt="logo" className="mx-auto w-50" />

          {error && (
            <p className="text-red-500 text-sm text-center mb-4">{error}</p>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="User ID"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                className="w-full p-2 border rounded-full border-purple-700"
                required
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="Mobile Number"
                value={mobileNo}
                onChange={(e) => setMobileNo(e.target.value)}
                className="w-full p-2 border rounded-full border-purple-700"
                required
              />
            </div>

            <div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border rounded-full border-purple-700"
                required
              />
            </div>

            <button
              type="submit"
              className={`w-full p-2 rounded-full text-white ${
                loading
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-purple-600 hover:bg-purple-700"
              }`}
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <p className="text-center mt-4">
            New user?{" "}
            <Link to="/register" className="text-blue-500 font-bold">
              Register
            </Link>
          </p>

          <p className="text-center mt-4">
            If not Login Contact{" "}
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
