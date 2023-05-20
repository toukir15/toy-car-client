import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthProvider";

export const CarContext = createContext();

export default function CarProvider({ children }) {
  const { user } = useContext(AuthContext);

  // get all Toy data
  const [allToysData, setAllToysData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    fetch(`http://localhost:5000/cars?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setAllToysData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsError(error?.message);
        setIsLoading(false);
      });
  }, [user.email]);
  const allCarData = { data: allToysData, isLoading, isError };

  // handle single toy data function
  const [deleteData, setDeleteData] = useState([]);
  const [isDeleteLoading, setIsDeleteLoading] = useState(false);
  const [isDeleteError, setIsDeleteError] = useState("");
  const handleDelete = (id) => {
    setIsDeleteLoading(true);

    fetch(`http://localhost:5000/cars/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        setDeleteData(data);
        setIsDeleteLoading(false);
        if (data.deletedCount > 0) {
          const remaining = allToysData.filter(
            (toysData) => toysData._id !== id
          );
          setAllToysData(remaining);
        }
      })
      .catch((error) => {
        setIsDeleteError(error?.message);
        setIsDeleteLoading(false);
      });
  };

  const deleteSingleCar = {
    function: handleDelete,
    data: deleteData,
    isLoading: isDeleteLoading,
    isError: isDeleteError,
  };

  const carInfo = {
    allCarData,
    deleteSingleCar,
  };
  return <CarContext.Provider value={carInfo}>{children}</CarContext.Provider>;
}
