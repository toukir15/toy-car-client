import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Rating from "react-rating";

export default function SingleFlashSale({ singleFlashSaleData }) {
  const { name, price, img } = singleFlashSaleData;
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="rounded-lg">
        <img className="rounded p-4 " src={img} alt="" />
      </div>
      <div className="px-5 pb-5">
        <h5 className="mb-2 text-2xl font-medium tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
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
        <div className="flex justify-between">
          <div>
            <p className="text-gray-300">Price</p>
            <p className="font-medium">${price}</p>
          </div>
          <div>
            <button className="px-4 py-2 border rounded-lg hover:text-green-500 transition">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
