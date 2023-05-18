import { useEffect, useState } from "react";
import SportsCar from "./SportsCar";
import RegularCar from "./RegularCar";

export default function Category() {
  const [category, setCategory] = useState("sports");
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/cars/${category}`)
      .then((res) => res.json())
      .then((data) => setCategoryData(data));
  }, []);
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
        {categoryData.map((sportsCategoryData) => (
          <SportsCar
            key={sportsCategoryData._id}
            sportsCategoryData={sportsCategoryData}
          />
        ))}
      </div>
      {/* regular  */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
        {categoryData.map((regularCategoryData) => (
          <RegularCar
            key={regularCategoryData._id}
            sportsCategoryData={regularCategoryData}
          />
        ))}
      </div>
    </div>
  );
}
