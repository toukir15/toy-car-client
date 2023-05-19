import Rating from "react-rating";
import {
  AiFillStar,
  AiOutlineEye,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineStar,
} from "react-icons/ai";
import SingleToyDetails from "../../Shared/SingleToyDetails/SingleToyDetails";

export default function SingleCategory({ SingleCategoryData }) {
  console.log(SingleCategoryData);
  const { img, category, description, price, ratings, name } =
    SingleCategoryData;
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative">
      <a href="#">
        <img className="rounded-t-lg" src={img} alt="" />
      </a>
      <div className="p-2 flex flex-col justify-center items-center">
        <div className="flex flex-col items-center">
          <p className="text-2xl font-medium">{name}</p>
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
        <p className="text-2xl font-medium text-green-500">{price}</p>
      </div>

      <div className="flex justify-center gap-4 text-2xl bg-gray-100 py-8 absolute bottom-[108px] w-full ">
        <div className="hover:text-green-500 transition">
          <AiOutlineShoppingCart />
        </div>
        <div className="hover:text-green-500 transition">
          <AiOutlineHeart />
        </div>
        <div className="hover:text-green-500 transition">
          {/* The button to open modal */}
          <label htmlFor="my-modal-3" className="">
            <AiOutlineEye />
          </label>
        </div>
      </div>
      <SingleToyDetails SingleCategoryData={SingleCategoryData} />
    </div>
  );
}
