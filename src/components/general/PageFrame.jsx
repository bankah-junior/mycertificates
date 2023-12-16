import { useState } from "react";
import React from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'

const PageFrame = ({ title, data }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activePage, setActivePage] = useState(1); // Change from currentPage to activePage

  // Filter cards based on the search query
  const filteredCards = data.filter((card) =>
    card.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // PAGINATION
  const numCardsPerPage = 6;
  const indexOfLastCard = activePage * numCardsPerPage;
  const indexOfFirstCard = indexOfLastCard - numCardsPerPage;
  const currentCards = filteredCards.slice(indexOfFirstCard, indexOfLastCard);

  const totalPages = Math.ceil(filteredCards.length / numCardsPerPage);

  const prevPage = () => {
    if (activePage > 1) {
      setActivePage((prevPage) => prevPage - 1);
    }
  };

  const nextPage = () => {
    if (activePage < totalPages) {
      setActivePage((prevPage) => prevPage + 1);
    }
  };

  return (
    <section className="">

      {/* CARDS */}
      <div className="grid items-center grid-cols-1 gap-6 px-8 mt-4 sm:ml-20 lg:mt-6 sm:mx-4 sm:grid-cols-2 lg:grid-cols-3">
        {currentCards.map((card, index) => (
          <div
            key={index}
            className="w-full max-w-sm border rounded-lg shadow cursor-pointer"
          >
            {/* ... (card JSX structure) */}
            <div className="flex flex-col items-center">
              <img
                className=""
                src={card.link}
                alt={`${card.name}`}
              />
            </div>
          </div>
        ))}
      </div>

      {/* PAGINATION */}
      <div className="lg:ml-[40em] lg:mt-8 my-8 flex flex-col sm:flex-row items-center gap-4">
        <button
          variant="text"
          className="flex items-center gap-2 mb-2 rounded-full sm:mb-0"
          onClick={prevPage}
          disabled={activePage === 1}
        >
          <AiOutlineArrowLeft  className="w-4 h-4" /> Previous
        </button>
        <div className="flex items-center gap-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <div
              key={index + 1}
              color={activePage === index + 1 ? "blue" : "white"}
              onClick={() => setActivePage(index + 1)}
            >
              {index + 1}
            </div>
          ))}
        </div>
        <button
          variant="text"
          className="flex items-center gap-2 rounded-full"
          onClick={nextPage}
          disabled={activePage === totalPages}
        >
          Next <AiOutlineArrowRight  className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};

export default PageFrame;
