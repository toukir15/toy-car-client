import { useEffect, useState } from "react";
import SingleFlashSale from "./SingleFlashSale";

export default function FlashSale() {
  const [flashSaleData, setFlashSaleData] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_SERVER}/cars?saleStatus=Flash`)
      .then((res) => res.json())
      .then((data) => {
        setFlashSaleData(data);
        console.log(data);
      });
  }, []);

  return (
    <div className="mt-16 container mx-auto px-2  ">
      <h2 className="mb-10 bg-red-500 w-24 py-2 text-center text-white">
        Flash Sale
      </h2>
      <div className="flex justify-center">
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center"
        >
          {flashSaleData.map((singleFlashSaleData) => (
            <SingleFlashSale
              key={singleFlashSaleData._id}
              singleFlashSaleData={singleFlashSaleData}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
