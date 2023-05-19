import { Link } from "react-router-dom";

export default function SingleMyToy({ singleToyData }) {
  const { img, name, Category, price, _id } = singleToyData;
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
        Zemlak, Daniel and Leannon
        <br />
        <span className="badge badge-ghost badge-sm">
          Desktop Support Technician
        </span>
      </td>
      <td>{price}</td>
      <th>
        <Link to={`/singleToyDetails/${_id}`}>
          <button className="bg-green-500 text-white  py-2 px-4 rounded-md">
            details
          </button>
        </Link>
      </th>
    </tr>
  );
}
