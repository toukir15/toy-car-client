import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Resister from "../pages/Resister/Resister";
import AllToys from "../pages/AllToys/AllToys";
import SingleToyDetails from "../pages/Shared/SingleToyDetails/SingleToyDetails";
import AddToy from "../pages/AddToy/AddToy";
import MyToys from "../pages/MyToys/MyToys";
import UpdateToys from "../pages/MyToys/UpdateToys";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "allToys",
        element: <AllToys />,
        loader: () => fetch("http://localhost:5000/cars"),
      },
      {
        path: "myToys",
        element: (
          <PrivateRoute>
            <MyToys />
          </PrivateRoute>
        ),
      },
      {
        path: "addToy",
        element: (
          <PrivateRoute>
            <AddToy />
          </PrivateRoute>
        ),
      },
      {
        path: "updateToys/:id",
        element: <UpdateToys />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/cars/${params.id}`),
      },
      {
        path: "singleToyDetails/:id",
        element: (
          <PrivateRoute>
            <SingleToyDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/cars/${params.id}`),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "resister",
        element: <Resister />,
      },
    ],
  },
]);
export default router;
