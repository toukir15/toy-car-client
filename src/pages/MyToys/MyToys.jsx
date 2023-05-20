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

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/cars/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          const remaining = allToysData.filter(
            (toysData) => toysData._id !== id
          );
          console.log(remaining);
          setAllToysData(remaining);
        }
      });

    // const handleUpdate = (id) => {};

    // fetch(`http://localhost:5000/cars/${_id}`, {
    //   method: "PATCH",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(toyInfo),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //   });
  };
  return (
    <div className="mt-10">
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
              handleDelete={handleDelete}
              // allToysData={allToysData}
              // setAllToysData={setAllToysData}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
