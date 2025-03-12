import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";

const DailyBanner = () => {
  console.log("DailyBanner component is rendering..."); // Debugging log
  const navigate = useNavigate();

  // ✅ Temporary images from Unsplash & Google
  const defaultBanners = [
    "https://source.unsplash.com/400x200/?banner",
    "https://source.unsplash.com/400x200/?festival",
    "https://source.unsplash.com/400x200/?business",
  ];

  const festivalGraphics = [
    "https://source.unsplash.com/100x100/?celebration",
    "https://source.unsplash.com/100x100/?festival",
  ];

  const festivalReels = [
    "https://source.unsplash.com/100x100/?video",
    "https://source.unsplash.com/100x100/?music",
  ];

  const businessGraphics = [
    "https://source.unsplash.com/100x100/?startup",
    "https://source.unsplash.com/100x100/?corporate",
  ];

  const businessReels = [
    "https://source.unsplash.com/100x100/?marketing",
    "https://source.unsplash.com/100x100/?advertising",
  ];

  // OR Use Google Image Links (temporary placeholders)
  const googleImages = [
    "https://upload.wikimedia.org/wikipedia/commons/3/3f/Fronalpstock_big.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/6/6a/Moon.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
  ];

  const [banners, setBanners] = useState(defaultBanners);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    console.log("Banners state: ", banners);
  }, [banners]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === banners.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [banners]);

  return (
    <div className="w-full h-screen flex flex-col items-center bg-gray-100">
      {/* ✅ Header Section */}
      <div className="w-[375px] bg-white shadow-lg rounded-xl p-4">
        <div className="flex justify-between items-center p-2 border-b">
          <IoMdArrowBack
            className="text-2xl cursor-pointer"
            onClick={() => navigate(-1)}
          />
          <h2 className="text-lg font-semibold">Daily Banner</h2>
          <div className="text-transparent">{"<"}</div>
        </div>

        {/* ✅ Image Banner */}
        {banners.length > 0 ? (
          <div className="mt-4 border-2 border-purple-500 rounded-lg text-center">
            <img
              src={banners[currentIndex]}
              alt="Banner"
              className="w-full h-40 object-cover transition-all duration-500 ease-in-out"
            />
          </div>
        ) : (
          <p className="text-gray-500 text-center mt-4">No banners available</p>
        )}

        {/* ✅ Festival Graphics Section */}
        <div className="mt-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold">Festival Graphics</h3>
            <Link to="/festival-graphics">
              <button className="text-purple-600 font-semibold">See All</button>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-2">
            {festivalGraphics.map((img, idx) => (
              <img key={idx} src={img} alt="Festival" className="w-full h-20 object-cover rounded-lg" />
            ))}
          </div>
        </div>

        {/* ✅ Festival Reels Section */}
        <div className="mt-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold">Festival Reels</h3>
            <Link to="/festival-reels">
              <button className="text-purple-600 font-semibold">See All</button>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-2">
            {festivalReels.map((img, idx) => (
              <img key={idx} src={img} alt="Reel" className="w-full h-20 object-cover rounded-lg" />
            ))}
          </div>
        </div>

        {/* ✅ Business Graphics Section */}
        <div className="mt-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold">Business Graphics</h3>
            <Link to="/business-graphics">
              <button className="text-purple-600 font-semibold">See All</button>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-2">
            {businessGraphics.map((img, idx) => (
              <img key={idx} src={img} alt="Business" className="w-full h-20 object-cover rounded-lg" />
            ))}
          </div>
        </div>

        {/* ✅ Business Reels Section */}
        <div className="mt-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold">Business Reels</h3>
            <Link to="/business-reels">
              <button className="text-purple-600 font-semibold">See All</button>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-2">
            {businessReels.map((img, idx) => (
              <img key={idx} src={img} alt="Reel" className="w-full h-20 object-cover rounded-lg" />
            ))}
          </div>
        </div>

        {/* ✅ Back to Home Button */}
        <div className="mt-4 text-center">
          <Link to="/home">
            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DailyBanner;
