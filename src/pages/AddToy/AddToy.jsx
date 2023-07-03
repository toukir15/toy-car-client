import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import {
  MdOutlineAddPhotoAlternate,
  MdOutlineDriveFileRenameOutline,
  MdProductionQuantityLimits,
} from "react-icons/md";
import { BiCategoryAlt, BiDollar } from "react-icons/bi";
import { AiOutlineStar } from "react-icons/ai";
import { TbFileDescription } from "react-icons/tb";
import { CarContext } from "../../providers/ToyProvider";
import ButtonLoading from "../../ui/ButtonLoading";

export default function AddToy() {
  const { user } = useContext(AuthContext);
  const { addToy } = useContext(CarContext);
  const { function: addToyFN, isLoading, isError } = addToy || {};
  const handleAddToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const url = form.url.value;
    const toyName = form.toy_name.value;
    const sellerName = form.seller_name.value;
    const sellerEmail = form.seller_email.value;
    const sub_category = form.sub_category.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const available_quantity = form.available_quantity.value;
    const description = form.description.value;

    const toyInfo = {
      img: url,
      name: toyName,
      seller_name: sellerName,
      seller_email: sellerEmail,
      category: sub_category,
      price,
      rating,
      available_quantity,
      description,
    };
    addToyFN(toyInfo);
    form.rest();
  };

  return (
    <div className="container mx-auto px-2">
      <div className="flex justify-center ">
        <h2 className="text-3xl md:text-4xl font-medium flex justify-center pb-2 w-52 my-8 border-b-2">
          Add a Toy
        </h2>
      </div>
      <form onSubmit={handleAddToy}>
        {isError && (
          <div className="w-full my-3 px-5 py-2.5 text-base font-medium rounded-lg bg-[#ffd6d6] text-[#cd3131]">
            {isError}
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5">
          {/* picture */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Product Photo URL
            </label>
            {/* className="w-5 h-5 text-gray-500 dark:text-gray-400" */}
            <div className="relative mb-6">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <MdOutlineAddPhotoAlternate className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              </div>
              <input
                type="url"
                name="url"
                id="input-group-1"
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Product Photo URL"
              />
            </div>
          </div>
          {/* input 1  */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Toy Name
            </label>
            <div className="relative mb-6">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <MdOutlineDriveFileRenameOutline className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              </div>
              <input
                type="text"
                name="toy_name"
                id="input-group-1"
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="toy name"
              />
            </div>
          </div>
          {/* input 1  */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Seller Name
            </label>
            <div className="relative mb-6">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <MdOutlineDriveFileRenameOutline className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              </div>
              <input
                type="text"
                name="seller_name"
                id="input-group-1"
                defaultValue={user?.displayName}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="seller name"
              />
            </div>
          </div>
          {/* input 1  */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Seller Email
            </label>
            <div className="relative mb-6">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
              </div>
              <input
                type="email"
                name="seller_email"
                id="input-group-1"
                defaultValue={user?.email}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="seller@email.com"
              />
            </div>
          </div>
          {/* input 1  */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Sub-Category
            </label>
            <div className="relative mb-6">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <BiCategoryAlt className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              </div>
              <input
                type="text"
                name="sub_category"
                id="input-group-1"
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="sports/regular/truck"
              />
            </div>
          </div>
          {/* input 1  */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Price
            </label>
            <div className="relative mb-6">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <BiDollar className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              </div>
              <input
                type="number"
                name="price"
                id="input-group-1"
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="price"
              />
            </div>
          </div>
          {/* input 1  */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Rating
            </label>
            <div className="relative mb-6">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <AiOutlineStar className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              </div>
              <input
                type="number"
                name="rating"
                id="input-group-1"
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="rating"
              />
            </div>
          </div>
          {/* input 1  */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Available Quantity
            </label>
            <div className="relative mb-6">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <MdProductionQuantityLimits className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              </div>
              <input
                type="number"
                name="available_quantity"
                id="input-group-1"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="available quantity"
              />
            </div>
          </div>
          {/* input 1  */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Details Description
            </label>
            <div className="relative mb-6">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <TbFileDescription className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              </div>
              <input
                type="text"
                name="description"
                id="input-group-1"
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="detail description"
              />
            </div>
          </div>
        </div>
        <button
          disabled={isLoading}
          className="bg-green-500 py-2 rounded-md text-white text-lg font-medium w-full"
        >
          {!isLoading ? (
            "Add Toy"
          ) : (
            <div className="w-full flex justify-center items-center">
              <ButtonLoading />
            </div>
          )}
        </button>
      </form>
    </div>
  );
}
