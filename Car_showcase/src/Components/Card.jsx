import React from "react";
import { BsFillPeopleFill } from "react-icons/bs";
import { BiGasPump } from "react-icons/bi";
import { PiSteeringWheelBold } from "react-icons/pi";
import { BsSpeedometer } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
const Card = ({data}) => {

  return (
    <div className="h-[25rem] w-[29rem] shadow-md shadow-[#c8d8f6] border-[1.5px] rounded-2xl border-white p-2">
      <img
        src={data.img}
        className="w-full h-[50%] object-cover rounded-2xl"
        alt=""
      />
      <div className="flex justify-between mt-3 px-2 items-center">
        <h1 className="text-2xl font-semibold">{data.model}</h1>
        <p className="px-5 py-1 rounded-2xl text-md border-2 border-dotted border-blue-500 font-bold">
          {data.year}
        </p>
      </div>

      <div className=" mt-3">
        <div className="flex ">
          <span className="ml-3 flex items-center justify-center font-semibold text-lg">
            <BsFillPeopleFill className="mr-2 text-blue-600" />
            <p>{data.personCapacity} People</p>
          </span>
          <span className="ml-[7.3rem] flex items-center justify-center font-semibold text-lg">
            <BiGasPump className="mr-2 text-blue-600" />
            <p>{data.fuelType}</p>
          </span>
        </div>
        <div className="flex ">
          <span className="ml-3 flex items-center justify-center font-semibold text-lg">
            <BsSpeedometer className="mr-2 text-blue-600" />
            <p>{data.distancePerLitre}km/ 1-litre</p>
          </span>
          <span className="ml-20 flex items-center justify-center font-semibold text-lg">
            <PiSteeringWheelBold className="mr-2 text-blue-600" />
            <p>{data.transmission}</p>
          </span>
        </div>
      </div>
      <div className="flex pt-5 justify-between px-2 border-t-2 border-blue-300 mt-3">
        <p className="text-2xl font-semibold">
          ${data.rentDaily} <span className="text-lg">/month</span>
        </p>
        <div className="flex items-center justify-center pr-5 ">
          <span className="flex items-center justify-center p-1 text-2xl text-blue-600 rounded-md bg-[#c8d8f6]">
            <AiOutlineHeart />
          </span>
          <button className="ml-5 px-4 py-1 rounded-md bg-blue-600 text-white font-bold">Rent Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
