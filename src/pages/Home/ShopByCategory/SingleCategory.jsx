import Rating from "react-rating";
import {
  AiFillStar,
  AiOutlineEye,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineStar,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { BiDollar } from "react-icons/bi";
import { toast } from "react-toastify";

export default function SingleCategory({ SingleCategoryData }) {
  const { _id, img, price, name } = SingleCategoryData;
  const notify = () => toast("Wow so easy !");
  return (
    <div className="max-w-sm my-5  md:my-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 group/card">
      <div className="relative w-full h-[16.6rem] overflow-hidden ">
        <img className="rounded-t-lg object-fill" src={img} alt="" />
        <div className="flex justify-center gap-4 text-2xl bg-gray-100 py-8 absolute -bottom-[108px] group-hover/card:bottom-0 duration-500 ease-in-out w-full ">
          <div className="hover:text-green-500 transition">
            <AiOutlineShoppingCart />
          </div>
          <div onClick={notify} className="hover:text-green-500 transition">
            <AiOutlineHeart />
          </div>
          <Link to={`singleToyDetails/${_id}`}>
            <div onClick={notify} className="hover:text-green-500 transition">
              <AiOutlineEye />
            </div>
          </Link>
        </div>
      </div>

      <div className="p-2 flex flex-col justify-center items-center">
        <div className="flex flex-col items-center">
          <p className="text-xl md:text-2xl font-medium mb-2">{name}</p>
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
        <p className="text-2xl font-medium text-green-500 flex items-center">
          <BiDollar />
          {price}
        </p>
      </div>
    </div>
  );
}
