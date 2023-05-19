import { Link } from "react-router-dom";

export default function SingleToy({ singleToyData }) {
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
// [
//   {
//     img: "https://cdn.pixabay.com/photo/2020/01/18/19/47/toys-4776279_1280.jpg",
//     category: "sports",
//     seller_name: "Toukir Ahmed",
//     seller_email: "toukir@gmail.com",
//     ratings: 4.2,
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem dolores delectus suscipit perspiciatis earum dignissimos reiciendis. Explicabo eum soluta architecto, molestias obcaecati, rerum tenetur quod impedit voluptate commodi, quas eos.",
//     price: "$49.99",
//     name: "Velocity Racer",
//     available_quantity: 20,
//   },
//   {
//     img: "https://cdn.pixabay.com/photo/2020/01/18/19/47/toys-4776279_1280.jpg",
//     category: "sports",
//     seller_name: "Toukir Ahmed",
//     seller_email: "toukir@gmail.com",
//     ratings: 4.2,
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem dolores delectus suscipit perspiciatis earum dignissimos reiciendis. Explicabo eum soluta architecto, molestias obcaecati, rerum tenetur quod impedit voluptate commodi, quas eos.",
//     price: "$49.99",
//     name: "Hot Wheels",
//     available_quantity: 20,
//   },
//   {
//     img: "https://cdn.pixabay.com/photo/2020/01/18/19/47/toys-4776279_1280.jpg",
//     category: "sports",
//     seller_name: "Toukir Ahmed",
//     seller_email: "toukir@gmail.com",
//     ratings: 4.2,
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem dolores delectus suscipit perspiciatis earum dignissimos reiciendis. Explicabo eum soluta architecto, molestias obcaecati, rerum tenetur quod impedit voluptate commodi, quas eos.",
//     price: "$49.99",
//     name: "Lamborghini Aventador",
//     available_quantity: 20,
//   },
//   {
//     img: "https://cdn.pixabay.com/photo/2020/07/19/09/03/mazda-5419417_1280.jpg",
//     category: "regular",
//     seller_name: "Toukir Ahmed",
//     seller_email: "toukir@gmail.com",
//     ratings: 4.2,
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem dolores delectus suscipit perspiciatis earum dignissimos reiciendis. Explicabo eum soluta architecto, molestias obcaecati, rerum tenetur quod impedit voluptate commodi, quas eos.",
//     price: "$49.99",
//     name: "Matchbox",
//     available_quantity: 20,
//   },
//   {
//     img: "https://cdn.pixabay.com/photo/2020/07/19/09/03/mazda-5419417_1280.jpg",
//     category: "regular",
//     seller_name: "Toukir Ahmed",
//     seller_email: "toukir@gmail.com",
//     ratings: 4.2,
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem dolores delectus suscipit perspiciatis earum dignissimos reiciendis. Explicabo eum soluta architecto, molestias obcaecati, rerum tenetur quod impedit voluptate commodi, quas eos.",
//     price: "$49.99",
//     name: "Mini Motors",
//     available_quantity: 20,
//   },
//   {
//     img: "https://cdn.pixabay.com/photo/2020/07/19/09/03/mazda-5419417_1280.jpg",
//     category: "regular",
//     seller_name: "Toukir Ahmed",
//     seller_email: "toukir@gmail.com",
//     ratings: 4.2,
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem dolores delectus suscipit perspiciatis earum dignissimos reiciendis. Explicabo eum soluta architecto, molestias obcaecati, rerum tenetur quod impedit voluptate commodi, quas eos.",
//     price: "$49.99",
//     name: "Cadillac Eldorado",
//     available_quantity: 20,
//   },
//   {
//     img: "https://cdn.pixabay.com/photo/2022/01/16/11/01/model-car-6941721_1280.jpg",
//     category: "truck",
//     seller_name: "Toukir Ahmed",
//     seller_email: "toukir@gmail.com",
//     ratings: 4.2,
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem dolores delectus suscipit perspiciatis earum dignissimos reiciendis. Explicabo eum soluta architecto, molestias obcaecati, rerum tenetur quod impedit voluptate commodi, quas eos.",
//     price: "$49.99",
//     name: "Turntable Ladder",
//     available_quantity: 20,
//   },
//   {
//     img: "https://cdn.pixabay.com/photo/2022/01/16/11/01/model-car-6941721_1280.jpg",
//     category: "truck",
//     seller_name: "Toukir Ahmed",
//     seller_email: "toukir@gmail.com",
//     ratings: 4.2,
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem dolores delectus suscipit perspiciatis earum dignissimos reiciendis. Explicabo eum soluta architecto, molestias obcaecati, rerum tenetur quod impedit voluptate commodi, quas eos.",
//     price: "$49.99",
//     name: "Cable Transport",
//     available_quantity: 20,
//   },
//   {
//     img: "https://cdn.pixabay.com/photo/2017/10/17/18/22/model-car-2861651_1280.jpg",
//     category: "truck",
//     seller_name: "Toukir Ahmed",
//     seller_email: "toukir@gmail.com",
//     ratings: 4.2,
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem dolores delectus suscipit perspiciatis earum dignissimos reiciendis. Explicabo eum soluta architecto, molestias obcaecati, rerum tenetur quod impedit voluptate commodi, quas eos.",
//     price: "$49.99",
//     name: "Mercedes",
//     available_quantity: 20,
//   },
// ];
