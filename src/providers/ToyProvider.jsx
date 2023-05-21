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
    fetch(`http://localhost:5000/cars?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setAllToysData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsError(error?.message);
        setIsLoading(false);
      });
  }, [user?.email]);
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

  // handle toy add function
  const [addData, setAddData] = useState([]);
  const [addLoading, setAddLoading] = useState(false);
  const [addError, setAddError] = useState("");

  const handleAddToy = (data) => {
    setAddLoading(true);
    fetch("http://localhost:5000/cars", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged === true) {
          setAllToysData((allData) => [...allData, data.data]);
          setAddData(data.data);
          setAddLoading(false);
        }
      })
      .catch((error) => {
        setAddError(error?.message);
        setAddLoading(false);
      });
  };

  const addToy = {
    function: handleAddToy,
    data: addData,
    isError: addError,
    isLoading: addLoading,
  };

  // handle toy edit function
  const [updateData, setUpdateData] = useState([]);
  const [updateLoading, setUpdateLoading] = useState(false);
  const [updateError, setUpdateError] = useState("");

  const handleUpdateToy = (id, data) => {
    setUpdateLoading(true);
    fetch(`http://localhost:5000/cars/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          console.log(data);
          const remaining = allToysData.filter((toy) => toy._id !== id);
          const updateData = [...remaining, data.data];
          setAllToysData(updateData);
          setUpdateLoading(false);
        }
      })
      .catch((error) => {
        setUpdateError(error.message);
        setUpdateLoading(false);
      });
  };

  const updateToy = {
    function: handleUpdateToy,
    data: updateData,
    isLoading: updateLoading,
    isError: updateError,
  };

  const carInfo = {
    allCarData,
    deleteSingleCar,
    addToy,
    updateToy,
  };
  return <CarContext.Provider value={carInfo}>{children}</CarContext.Provider>;
}
