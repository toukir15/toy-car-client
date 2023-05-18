import Rating from "react-rating";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export default function SportsCar({ sportsCategoryData }) {
  console.log(sportsCategoryData);
  const { img, category, description, price, ratings } = sportsCategoryData;
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg" src={img} alt="" />
      </a>
      <div className="p-2 flex justify-between items-center">
        <div>
          <p className="text-2xl font-medium">{category}</p>
          <p>{price}</p>
        </div>
        <div>
          <Rating
            placeholderRating={3.5}
            emptySymbol={<AiOutlineStar className="text-gray-300 text-2xl" />}
            placeholderSymbol={
              <AiFillStar className="text-yellow-500 text-2xl" />
            }
            fullSymbol={<AiFillStar className="text-yellow-500 text-2xl" />}
          />
        </div>
      </div>
    </div>
  );
}
