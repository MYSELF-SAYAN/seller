import React, { useState } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import Card from "../Components/Card";
import carDatabase from "../api";
import Pagination from "@mui/material/Pagination";
import { useNavigate } from "react-router-dom";

const Page = () => {
  const cardsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [searching, setSearching] = useState("");
  const [searched, setSearched] = useState("");
  const navigate = useNavigate();

  const filteredCars = carDatabase.filter(
    (car) => car.model.toLowerCase().includes(searching.toLowerCase())
  );
const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = filteredCars.slice(indexOfFirstCard, indexOfLastCard);

  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
    navigate(`/pages/${newPage}`);
  };

  const handleSearch = () => {
    setSearched(searching);
    setCurrentPage(1);
  };

  return (
    <div className="bg-[#e1e9fc] w-full px-5 py-2 min-h-screen">
      <div className="flex justify-center">
        <div className="flex h-20 px-5 w-[96%] items-center shadow-md shadow-[#c8d8f6] border-[1.5px] rounded-2xl border-white">
          <input
            type="text"
            className="h-10 w-[20rem] bg-white rounded-l-2xl px-2 placeholder:text-slate-400 placeholder:font-bold outline-none"
            placeholder="Search.."
            value={searching}
            onChange={(e) => setSearching(e.target.value)}
          />
          <span
            className="flex justify-center items-center h-10 p-5 bg-white rounded-r-2xl text-2xl text-slate-600 cursor-pointer"
            onClick={handleSearch}
          >
            <HiMagnifyingGlass />
          </span>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="mt-5 grid grid-cols-3 gap-x-4 gap-y-4">
          {currentCards.map((car) => (
            <Card key={car.id} data={car} />
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex mt-5 h-20 px-5 w-[96%] items-center justify-between shadow-md shadow-[#c8d8f6] border-[1.5px] rounded-2xl border-white">
          <p className="text-blue-800 font-semibold">
            {currentPage} from 10
          </p>
          <Pagination
            count={10}
            page={currentPage}
            variant="outlined"
            shape="rounded"
            onChange={handleChangePage}
          
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
