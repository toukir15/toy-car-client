import { useContext } from "react";
import SingleMyToy from "./SingleMyToy";
import { CarContext } from "../../../providers/ToyProvider";

export default function MyToys() {
  const { allCarData } = useContext(CarContext);
  const { data: allToysData, isLoading, isError } = allCarData || {};

  // decide what to render
  let content = null;
  if (isLoading) {
    content = <div>loading...</div>;
  }
  if (!isLoading && isError) {
    content = <div>Something is wrong</div>;
  }
  if (!isLoading && allToysData.length == 0) {
    content = (
      <div className="text-3xl font-medium h-[calc(100vh_-_9.5rem)] w-screen flex justify-center items-center capitalize">
        no product found
      </div>
    );
  }
  if (!isLoading && allToysData.length > 0) {
    content = allToysData.map((singleToyData) => (
      <SingleMyToy key={singleToyData._id} singleToyData={singleToyData} />
    ));
  }

  return (
    <div className="mt-10">
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th>Delete</th>
            <th>Cars</th>
            <th>seller</th>
            <th>Price</th>
            <th>Update</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{content}</tbody>
      </table>
    </div>
  );
}
