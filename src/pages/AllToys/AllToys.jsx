import { useLoaderData } from "react-router-dom";
import SingleToy from "./SingleToy";
import { useState } from "react";

export default function AllToys() {
  const allToysData = useLoaderData();
  const [query, setQuery] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
  };

  const handleSearch = (e) => {
    const getData = setTimeout(() => {
      setQuery(e.target.value);
    }, 1500);

    return () => clearTimeout(getData);
  };
  return (
    <div className="overflow-x-auto w-full">
      <div className="w-2/4 ml-28 my-4">
        <form onSubmit={handleOnSubmit} className="flex items-center">
          <label className="sr-only">Search</label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              onChange={handleSearch}
              type="text"
              id="simple-search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
              required
            />
          </div>
          <button
            type="submit"
            className="p-2.5 ml-2 text-sm font-medium text-white bg-green-500 rounded-lg border border-green-600 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-600 dark:focus:ring-green-800"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </form>
      </div>
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Cars</th>
            <th>Seller</th>
            <th>Price</th>
            <th>Details</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {allToysData
            .filter((toyData) => toyData.name.toLowerCase().includes(query))
            .slice(0, 20)
            .map((singleToyData) => (
              <SingleToy
                key={singleToyData._id}
                singleToyData={singleToyData}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
}
