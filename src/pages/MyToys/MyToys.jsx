import { useContext, useEffect, useState } from "react";
import SingleMyToy from "./SingleMyToy";
import { AuthContext } from "../../providers/AuthProvider";

export default function MyToys() {
  const [allToysData, setAllToysData] = useState([]);
  const { user } = useContext(AuthContext);
  console.log(user.email);

  useEffect(() => {
    fetch(`http://localhost:5000/cars?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setAllToysData(data));
  }, [user.email]);
  return (
    <div>
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Cars</th>
            <th>Job</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {allToysData.map((singleToyData) => (
            <SingleMyToy
              key={singleToyData._id}
              singleToyData={singleToyData}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
