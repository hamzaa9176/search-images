import React, { useState } from "react";

const Search = ({ setSearchTerm, setData,setPage }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(query);
    setPage(1)
    setData([]);
    setQuery('')
  };

  return (
    <>
    <nav className="drop-shadow-lg sticky top-0 z-50 flex items-center flex-wrap justify-between px-20 bg-slate-700 p-6 ">
      <div className="text-white mr-6 flex w-full justify-center mb-6 lg:w-auto lg:flex lg:items-center lg:mb-0 ">
        <span className="font-semibold text-xl tracking-tight">Find Images</span>
      </div>

      <div className="w-full lg:flex lg:items-center lg:w-2/4">
        <form onSubmit={handleSubmit} className="w-full">
          <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              id="default-search"
              className="block outline-none w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-white-600 dark:hover:border-green-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-600 dark:focus:border-green-600"
              placeholder="Search Images"
              required
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-600"
            >
              Search
            </button>
          </div>
        </form>
        </div>
    </nav>
    </>
  );

};

export default Search;
