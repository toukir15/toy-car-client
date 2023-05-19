import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Rating from "react-rating";
import { useLoaderData } from "react-router-dom";

export default function SingleToyDetails() {
  const { img, name, Category, price, description } = useLoaderData();
  return (
    <div className="h-screen container mx-auto">
      <a
        href="#"
        className="flex flex-col items-center h-screen bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-screen hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 p-8"
      >
        <img
          className="object-cover rounded-xl shadow-lg w-2/4"
          src={img}
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className=" text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
          <p className="text-lg font-medium mb-4">{Category}</p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>
          <div className="flex justify-between items-center">
            <div>
              <p>
                <span className="text-lg font-medium">Seller Name</span>: Toukir
                Ahmed
              </p>
              <p>
                <span className="text-lg font-medium">Seller Email</span>:
                toukir.developer.bd@gmail.com
              </p>
            </div>
            <p className="text-2xl font-medium text-green-500">{price}</p>
            <div>
              <Rating
                placeholderRating={3.5}
                emptySymbol={
                  <AiOutlineStar className="text-gray-300 text-2xl" />
                }
                placeholderSymbol={
                  <AiFillStar className="text-yellow-500 text-2xl" />
                }
                fullSymbol={<AiFillStar className="text-yellow-500 text-2xl" />}
              />
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
