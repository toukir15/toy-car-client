import { useEffect, useState } from "react";

import SingleCategory from "./SingleCategory";
import { BsBookmark } from "react-icons/bs";

export default function Category() {
  const [category, setCategory] = useState("sports");
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_SERVER}/cars?category=${category}`)
      .then((res) => res.json())
      .then((data) => setCategoryData(data));
  }, [category]);
  return (
    <div className="container mx-auto">
      <div className="flex justify-center">
        <h1 className="mt-20 mb-5 text-center font-medium text-4xl border-b-2 pb-3 w-80">
          Shop by Category
        </h1>
      </div>
      <div className="flex justify-center gap-8 text-lg font-medium">
        <p
          onClick={() => setCategory("sports")}
          className={`${
            category === "sports"
              ? "border-b-2 border-b-green-500"
              : "border-b-2"
          } pb-2 cursor-pointer hover:text-green-500 transition flex items-center gap-1`}
        >
          <BsBookmark /> Sports
        </p>
        <p
          onClick={() => setCategory("regular")}
          className={`${
            category === "regular"
              ? "border-b-2 border-b-green-500"
              : "border-b-2"
          } pb-2 cursor-pointer hover:text-green-500 transition flex items-center gap-1`}
        >
          <BsBookmark /> Regular
        </p>
        <p
          onClick={() => setCategory("truck")}
          className={`${
            category === "truck"
              ? "border-b-2 border-b-green-500"
              : "border-b-2"
          } pb-2 cursor-pointer hover:text-green-500 transition flex items-center gap-1`}
        >
          <BsBookmark /> Truck
        </p>
      </div>
      {/* sports  */}
      <div className="flex justify-center">
        <div
          data-aos="fade-up-right"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 mt-10"
        >
          {categoryData.map((SingleCategoryData) => (
            <SingleCategory
              key={SingleCategoryData._id}
              SingleCategoryData={SingleCategoryData}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-center  ">
        <button className="bg-green-500 text-lg font-lg text-white py-3 px-4 rounded-sm">
          See More
        </button>
      </div>
    </div>
  );
}
