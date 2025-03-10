import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import Navbar from "./Navbar";

const AutocallMessage = () => {
  const [smsText, setSmsText] = useState("");
  const [whatsappText, setWhatsappText] = useState("");
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setUploadedFile(file);
  };

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full h-screen bg-gray-100 flex justify-center items-center ">
      {menuOpen && (
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
          <Navbar closeMenu={() => setMenuOpen(false)} />
        </div>
      )}

      <div className="w-[375px] h-full bg-white shadow-md rounded-xl p-4 relative">
        <div className="flex justify-between items-center p-2 border-b">
          <IoMdMenu
            className="text-2xl cursor-pointer"
            onClick={() => setMenuOpen(true)}
          />
          <h2 className="text-lg font-semibold">Auto call Message</h2>
          <Link to="/home">
            <div className="text-2xl cursor-pointer">{"<"}</div>
          </Link>
        </div>

        {/* SMS Text Input */}
        <div className=" mt-8 border-2 border-purple-500 rounded-2xl p-6 mb-4">
          <input
            type="text"
            value={smsText}
            onChange={(e) => setSmsText(e.target.value)}
            placeholder="Display SMS text"
            className="w-full bg-transparent outline-none text-black text-center"
          />
        </div>

        {/* WhatsApp Text Input */}
        <div className="mt-8 border-2 border-purple-500 rounded-2xl p-6 mb-6">
          <input
            type="text"
            value={whatsappText}
            onChange={(e) => setWhatsappText(e.target.value)}
            placeholder="Display WhatsApp text"
            className="w-full bg-transparent outline-none text-black text-center"
          />
        </div>

        {/* File Upload Section */}
        <div className="border-2 border-purple-500 rounded-lg p-10 mb-4 mx-10 text-center">
          <label className="text-purple-600 font-semibold cursor-pointer">
            Set up File here display
            <input type="file" className="hidden" onChange={handleFileUpload} />
          </label>
          {uploadedFile && (
            <p className="text-gray-600 text-sm mt-2">{uploadedFile.name}</p>
          )}
        </div>

        <div className="flex flex-col justify-center items-center">
          {/* Upload Media Button */}
          <Link to="/page4">
            <button className="w-[250px] bg-purple-500 text-white py-2 rounded-full mb-2">
              Set Messages & Media
            </button>
          </Link>

          {/* Save Button */}
          <Link to="/page5">
            <button className="w-[250px] bg-purple-500 text-white py-2 rounded-full mb-2">
              Settings
            </button>
          </Link>

          <button className="w-[250px] bg-purple-500 text-white py-2 rounded-full">
            Refresh{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AutocallMessage;
