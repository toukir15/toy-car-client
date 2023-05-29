import { BiDetail } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function SingleToy({ singleToyData }) {
  const { img, name, Category, price, _id, seller_name, seller_email } =
    singleToyData;
  return (
    <tr>
      <th></th>
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
        <Link to={`/singleToyDetails/${_id}`}>
          <button className="bg-green-500 text-white  py-2 px-4 rounded-md">
            <BiDetail />
          </button>
        </Link>
      </th>
    </tr>
  );
}
