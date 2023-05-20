import { BiEdit } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function SingleMyToy({ singleToyData, handleDelete }) {
  const { img, name, Category, price, _id, seller_name, seller_email } =
    singleToyData;

  return (
    <tr>
      <th>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-circle btn-sm bg-red-600 border-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
            <div className="text-sm opacity-50">{Category}</div>
          </div>
        </div>
      </td>
      <td>
        {seller_name}
        <br />
        <span className="badge badge-ghost badge-sm">{seller_email}</span>
      </td>
      <td>$ {price}</td>
      <th>
        <Link to={`/updateToys/${_id}`}>
          <button
            // onClick={handleUpdate}
            className="bg-green-500 text-white  py-2 px-4 rounded-md"
          >
            <BiEdit />
          </button>
        </Link>
      </th>
    </tr>
  );
}
