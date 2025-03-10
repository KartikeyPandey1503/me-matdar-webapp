import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import logo from "../images/logo2.jpg";
const Register = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen bg-gray-100 flex justify-center items-center ">
      <div className="w-[375px] h-full bg-white shadow-md rounded-xl p-4 relative">
        {/* Header */}

        <div className="flex  items-center p-2 border-b">
          <h2 className="text-lg font-semibold mx-auto ">Register</h2>
          <Link onClick={() => navigate(-1)}>
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
