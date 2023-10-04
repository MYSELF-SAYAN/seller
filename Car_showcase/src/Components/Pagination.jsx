import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const renderPageNumbers = () => {
    const pageRange = 5; 

    let startPage = Math.max(1, currentPage - pageRange);
    let endPage = Math.min(totalPages, currentPage + pageRange);


    if (endPage - startPage + 1 > 10) {
      if (currentPage <= totalPages / 2) {
        endPage = startPage + 10 - 1;
      } else {
        startPage = endPage - 10 + 1;
      }
    }

    return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i).map((page) => (
      <li
        key={page}
        className={`mx-1 px-3 py-1 ${
          page === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-300'
        } cursor-pointer`}
        onClick={() => onPageChange(page)}
      >
        {page}
      </li>
    ));
  };

  return (
    <div className="flex justify-center mt-4">
      <ul className="flex list-none">
        <li
          className={`mx-1 px-3 py-1 ${
            currentPage === 1 ? 'pointer-events-none' : 'cursor-pointer'
          } bg-gray-300`}
          onClick={() => onPageChange(currentPage - 1)}
        >
          Previous
        </li>
        {renderPageNumbers()}
        <li
          className={`mx-1 px-3 py-1 ${
            currentPage === totalPages ? 'pointer-events-none' : 'cursor-pointer'
          } bg-gray-300`}
          onClick={() => onPageChange(currentPage + 1)}
        >
          Next
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
