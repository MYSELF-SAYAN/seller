import React from "react";
import { BsArrowLeftSquare } from "react-icons/bs";
import { LiaHotelSolid } from "react-icons/lia";
import { BiBed } from "react-icons/bi";
import { BiBath } from "react-icons/bi";
import { BsArrowsMove } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteData } from "../Store/Slices/DataSlice";
const Property = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.data.data;
  });
  const getPrev = () => {
    dispatch(deleteData());
    navigate("/");
  };

  return (
    <div className="p-10 bg-[#F9F8FF] min-h-screen max-h-screen ">
      <span
        className="text-5xl font-bold text-blue-800 cursor-pointer"
        onClick={getPrev}
      >
        <BsArrowLeftSquare />
      </span>
      <div className="flex mt-6 px-20 ">
        <div className="w-1/2 h-[450px] overflow-hidden px-[8rem] ">
          <Splide
            className="h-full w-full  "
            options={{
              arrows: false,
              drag: true,
            }}
          >
            {data.image.map((image) => (
              <SplideSlide key={image}>
                <img
                  src={image}
                  alt=""
                  className="h-full w-full object-contain min-h-full min-w-full "
                />
              </SplideSlide>
            ))}
          </Splide>
        </div>
        <div className="w-1/2">
          <h1 className="text-4xl font-semibold">{data.title}</h1>
          <p className="flex  items-center text-lg mt-5 text-blue-900">
            <span className="text-yellow-700 mr-2">
              <GoLocation />
            </span>
            {data.location}
          </p>
          <p className="text-sm font-bold mt-5">
            Discover the epitome of coastal living in this exquisite seaside
            real estate available for rent. With its prime location along the
            shimmering shoreline, this building offers a harmonious blend of
            luxury and natural beauty. From the spacious interiors flooded with
            sunlight to the panoramic views of the sea that grace every room,
            this property is a testament to refined living. Imagine waking up to
            the gentle sounds of waves, enjoying sunsets from your private
            balcony, and hosting gatherings in a space designed for both comfort
            and sophistication. Conveniently situated near essential amenities,
            this real estate gem provides not just a home but a lifestyle, where
            the calming embrace of the sea becomes an integral part of everyday
            living.
          </p>
          <div className="flex  mt-5">
            <span className="pr-5  text-blue-900 mr-6 text-xl font-bold ">
              <LiaHotelSolid />
              <p>{data.rooms} room</p>
            </span>
            <span className="pr-5  mr-6 text-blue-900 text-xl  font-bold ">
              <BiBed />
              <p>{data.bed} Bed</p>
            </span>
            <span className="pr-5 text-blue-900 mr-6 text-xl  font-bold ">
              <BiBath />
              <p>{data.bathrooms} Bath</p>
            </span>
            <span className="pr-5 text-blue-900 mr-6 text-xl font-bold ">
              <BsArrowsMove />
              <p>{data.area} sqft</p>
            </span>
          </div>
          <h1 className="text-xl font-semibold mt-5">
            Price:-
            <span className="text-blue-600 text-2xl"> ${data.price}</span>/month
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Property;
