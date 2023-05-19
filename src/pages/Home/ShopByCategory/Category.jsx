import { useEffect, useState } from "react";
// import SportsCar from "./SingleCategory";
// import RegularCar from "./RegularCar";
import SingleCategory from "./SingleCategory";

export default function Category() {
  const [category, setCategory] = useState("sports");
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/cars?category=${category}`)
      .then((res) => res.json())
      .then((data) => setCategoryData(data));
  }, [category]);
  return (
    <div className="container mx-auto">
      <h1 className="mt-20 mb-5 text-center font-medium text-4xl">
        Shop by Category
      </h1>
      <div className="flex justify-center gap-8 text-lg font-medium">
        <p
          onClick={() => setCategory("sports")}
          className="border-b-2 pb-2 cursor-pointer hover:text-green-500 transition"
        >
          Sports
        </p>
        <p
          onClick={() => setCategory("regular")}
          className="border-b-2 pb-2 cursor-pointer hover:text-green-500 transition"
        >
          Regular
        </p>
        <p
          onClick={() => setCategory("truck")}
          className="border-b-2 pb-2 cursor-pointer hover:text-green-500 transition"
        >
          Truck
        </p>
      </div>
      {/* sports  */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
        {categoryData.map((SingleCategoryData) => (
          <SingleCategory
            key={SingleCategoryData._id}
            SingleCategoryData={SingleCategoryData}
          />
        ))}
      </div>
      <div className="flex justify-center mt-10 ">
        <button className="border-green-500 border-2 py-3 px-4 rounded-sm">
          See More
        </button>
      </div>
    </div>
  );
}
