import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AllToys from "../pages/AllToys/AllToys";
import PrivateRoute from "./PrivateRoute";
import MyToys from "../pages/Login/MyToys/MyToys";
import AddToy from "../pages/AddToy/AddToy";
import UpdateToys from "../pages/Login/MyToys/UpdateToys";
import SingleToyDetails from "../pages/Shared/SingleToyDetails/SingleToyDetails";
import Login from "../pages/Login/Login";
import Resister from "../pages/Resister/Resister";
import Blog from "../pages/Blog/Blog";

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
        loader: () => fetch(`${import.meta.env.VITE_SERVER}/cars`),
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
          fetch(`${import.meta.env.VITE_SERVER}/cars/${params.id}`),
      },
      {
        path: "singleToyDetails/:id",
        element: (
          <PrivateRoute>
            <SingleToyDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_SERVER}/cars/${params.id}`),
      },
      {
        path: "blog",
        element: <Blog />,
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
