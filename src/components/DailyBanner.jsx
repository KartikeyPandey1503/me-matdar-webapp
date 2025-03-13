import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";

const DailyBanner = () => {
  const navigate = useNavigate();

  // ✅ Default Banner Images (for slideshow)
  const defaultBanners = [
    "https://source.unsplash.com/400x200/?banner",
    "https://source.unsplash.com/400x200/?festival",
    "https://source.unsplash.com/400x200/?business",
  ];

  // ✅ Full Image Sets for Each Section
  const festivalGraphics = new Array(7).fill("https://wallpapercave.com/wp/wp1989190.jpg");
  const festivalReels = new Array(7).fill("https://wallpapercave.com/wp/wp1989190.jpg");
  const businessGraphics = new Array(7).fill("https://d1csarkz8obe9u.cloudfront.net/posterpreviews/small-business-flyers-instagram-reel-design-template-92fa20d3bf826eceac3fa59c805a8f53_screen.jpg?ts=1672718892");
  const businessReels = new Array(7).fill("https://d1csarkz8obe9u.cloudfront.net/posterpreviews/small-business-flyers-instagram-reel-design-template-92fa20d3bf826eceac3fa59c805a8f53_screen.jpg?ts=1672718892");

  const [banners, setBanners] = useState(defaultBanners);
  const [currentIndex, setCurrentIndex] = useState(0);

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

        {/* ✅ Image Banner (Slideshow) */}
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

        {/* ✅ Horizontal Scrollable Sections with Full Images */}
        <Section title="Festival Graphics" images={festivalGraphics} />
        <Section title="Festival Reels" images={festivalReels} />
        <Section title="Business Graphics" images={businessGraphics} />
        <Section title="Business Reels" images={businessReels} />

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

// ✅ Reusable Horizontal Scrollable Section Component
const Section = ({ title, images }) => {
  console.log(`Images for ${title}:`, images); // Debugging

  return (
    <div className="mt-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-bold">{title}</h3>
        <Link to={`/${title.toLowerCase().replace(" ", "-")}`}>
          <button className="text-purple-600 font-semibold">See All</button>
        </Link>
      </div>

      {/* ✅ Horizontal Scroll Fix */}
      <div className="overflow-x-scroll flex gap-2 scrollbar-hide whitespace-nowrap mt-2">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={title}
            className="w-32 h-32 object-cover rounded-lg flex-shrink-0"
          />
        ))}
      </div>
    </div>
  );
};

export default DailyBanner;
