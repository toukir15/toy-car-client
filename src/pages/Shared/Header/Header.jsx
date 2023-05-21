import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

export default function Header() {
  const { user, logout } = useContext(AuthContext);
  const [navItem, setNavItem] = useState("home");

  console.log("user", user);

  const handleLogout = () => {
    logout();
  };
  return (
    <div>
      <nav className="bg-base-200 border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://flowbite.com/" className="flex items-center">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              ToyCarsWorld
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-500 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            className=" w-full md:w-auto flex items-center gap-8"
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col  p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-base-200 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-base-200 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-500">
              <Link to="/">
                <li
                  onClick={() => setNavItem("home")}
                  className={`${
                    navItem === "home"
                      ? "border-b-2 border-b-green-500"
                      : "border-b-2"
                  }  pb-2`}
                >
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-500 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-500 dark:hover:text-white md:dark:hover:bg-transparent"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
              </Link>
              <li
                onClick={() => setNavItem("All Toys")}
                className={`${
                  navItem === "All Toys"
                    ? "border-b-2 border-b-green-500"
                    : "border-b-2"
                }  pb-2`}
              >
                <Link to="/allToys">
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-500 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-500 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    All Toys
                  </a>
                </Link>
              </li>
              <Link to="blog">
                <li
                  onClick={() => setNavItem("Blog")}
                  className={`${
                    navItem === "Blog"
                      ? "border-b-2 border-b-green-500"
                      : "border-b-2"
                  }  pb-2`}
                >
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-500 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-500 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Blogs
                  </a>
                </li>
              </Link>
              {user ? (
                <>
                  <Link to="/myToys">
                    <li
                      onClick={() => setNavItem("My Toys")}
                      className={`${
                        navItem === "My Toys"
                          ? "border-b-2 border-b-green-500"
                          : "border-b-2"
                      }  pb-2`}
                    >
                      <a
                        href="#"
                        className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-500 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-500 dark:hover:text-white md:dark:hover:bg-transparent"
                      >
                        My Toys
                      </a>
                    </li>
                  </Link>
                  <Link to="/addToy">
                    <li
                      onClick={() => setNavItem("Add Toy")}
                      className={`${
                        navItem === "Add Toy"
                          ? "border-b-2 border-b-green-500"
                          : "border-b-2"
                      }  pb-2`}
                    >
                      <a
                        href="#"
                        className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-500 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-500 dark:hover:text-white md:dark:hover:bg-transparent"
                      >
                        Add a Toys
                      </a>
                    </li>
                  </Link>
                  <div>
                    <img
                      className="w-8 h-8 rounded-full"
                      src={user?.photoURL}
                      title={user?.displayName}
                      alt="user photo"
                    />
                  </div>

                  <button
                    onClick={handleLogout}
                    type="button"
                    className=" bg-green-500 text-white transition hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-sm text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-green-600 dark:hover:bg-green-500 dark:focus:ring-green-800"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link to="/login">
                  <button
                    type="button"
                    className=" bg-green-500 text-white transition hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-sm text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-green-600 dark:hover:bg-green-500 dark:focus:ring-green-800"
                  >
                    Login
                  </button>
                </Link>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
