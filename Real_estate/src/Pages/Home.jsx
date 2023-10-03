import React, { useState } from "react";
import Cards from "../Components/Cards";
import hotels from "../api";
import { FaRegHourglassHalf } from "react-icons/fa6";

const Home = () => {
  const tabs = ["New York", "Mumbai", "Paris", "London"];
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const [visibleCardCount, setVisibleCardCount] = useState(6);
//func
  const handleTabClick = (tab) => {
    setSelectedTab(tab);
    setVisibleCardCount(6);
  };
  const filteredHotels = hotels.filter((hotel) => hotel.city === selectedTab);
  const visibleHotels = filteredHotels.slice(0, visibleCardCount);
  const handleShowMoreClick = () => {
    setVisibleCardCount((prevCount) => prevCount + 3);
  };

  return (
    <div className="py-2 px-8 bg-[#F9F8FF]">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-blue-950">
          Featured Listed Property
        </h1>
        <p className="text-sm mt-2 px-[32rem] text-center font-semibold">
          Real estate can be bought, sold, leased, or rented, and can be a
          valueable investment opportunity. The value of real estate can be ...
        </p>
      </div>

      <div className="flex mt-5 ml-24">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`mx-3 h-12 w-28 px-5 font-bold rounded-full 
                     ${
                       selectedTab === tab
                         ? "bg-blue-700 text-white"
                         : "bg-[#EEECFA] hover:bg-blue-700 hover:text-white"
                     }`}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className=" mt-5 grid grid-cols-3  justify-center px-24 gap-4">
        {visibleHotels.map((hotel) => (
          <Cards key={hotel.id} data={hotel} />
        ))}
      </div>
      <div className="flex items-center justify-center">
        {visibleCardCount < filteredHotels.length && (
          <button
            className="mt-3 mx-auto bg-blue-700 text-white px-4 py-2 rounded-full flex  items-center justify-center"
            onClick={handleShowMoreClick}
          >
            <span className="mr-2">
              <FaRegHourglassHalf />
            </span>
            Show More
          </button>
        )}
      </div>
    </div>
  );
};

export default Home;
