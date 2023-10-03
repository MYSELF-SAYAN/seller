import React from "react";
import { LiaHotelSolid } from "react-icons/lia";
import { BiBed } from "react-icons/bi";
import { BiBath } from "react-icons/bi";
import { BsArrowsMove } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { AiOutlineHeart } from "react-icons/ai";
import {Link} from 'react-router-dom'
import { useDispatch } from "react-redux";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { createData } from "../Store/Slices/DataSlice";
import { useNavigate } from "react-router-dom";
const Cards = ({ data }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = () => {
    dispatch(createData(data))
    navigate(`/property/${data.id}`);
  }
  return (
    <div className="p-2 h-[33rem] w-[25rem] bg-white rounded-lg">
      <div className="h-1/2 w-full overflow-hidden rounded-lg relative">
        <Splide
          className="h-full w-full object-cover "
          options={{
            arrows: false,
            drag: true,
          }}
        >
          {data.image.map((image) => (
            <SplideSlide key={image}>
              <img src={image} alt="" />
            </SplideSlide>
          ))}
        </Splide>
        <p className="absolute px-3 py-2 top-3 left-3  rounded-full flex items-center justify-center  font-bold text-blue-600 bg-white">
          For {data.for}
        </p>
        <span className="absolute px-2 py-2 top-3 right-3  rounded-full flex items-center justify-center text-2xl font-bold text-blue-600 bg-white">
          <AiOutlineHeart />
        </span>
      </div>

      <div className="">
        <span className="flex items-center p-3">
          <GoLocation className="text-md text-yellow-600 mr-2" />
          <p className="font-semibold text-blue-900">{data.location}</p>
        </span>
        <h1 className="px-3 text-xl font-semibold">{data.title}</h1>
        <div className="flex p-3 justify-center">
          <span className="pr-5 mr-3 text-blue-900 text-md font-bold border-r-[2px] border-dotted">
            <LiaHotelSolid />
            <p>{data.rooms} room</p>
          </span>
          <span className="pr-5  mr-3 text-blue-900 text-md font-bold border-r-[2px] border-dotted">
            <BiBed />
            <p>{data.bed} Bed</p>
          </span>
          <span className="pr-5 text-blue-900 mr-3 text-md font-bold border-r-[2px] border-dotted">
            <BiBath />
            <p>{data.bathrooms} Bath</p>
          </span>
          <span className="pr-5 text-blue-900 mr-3 text-md font-bold ">
            <BsArrowsMove />
            <p>{data.area} sqft</p>
          </span>
        </div>
      </div>


      <div className="flex justify-between p-3 border-t-[2px] border-dotted items-center">
        <h1 className="text-xl font-semibold">
          <span className="text-blue-600 text-2xl">${data.price}</span>/month
        </h1>
        
        <button className="p-2 w-32 border-2 border-blue-600 rounded-full text-blue-600 font-bold" onClick={handleClick}>
          Read More
        </button>
   
      </div>
    </div>
  );
};

export default Cards;
