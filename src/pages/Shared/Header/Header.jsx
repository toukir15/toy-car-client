import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { AiOutlineClose, AiOutlineMenuUnfold } from "react-icons/ai";

export default function Header() {
  const { user, logout } = useContext(AuthContext);

  console.log("user", user);

  const handleLogout = () => {
    logout();
  };

  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <nav className="bg-base-200 border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 relative ">
          <a href="https://flowbite.com/" className="flex items-center">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              ToyCarsWorld
            </span>
          </a>

          <button
            onClick={() => setToggle(!toggle)}
            className="text-2xl md:hidden"
          >
            {toggle ? <AiOutlineClose /> : <AiOutlineMenuUnfold />}
          </button>

          <div
            className=" w-full md:w-auto flex items-center gap-8"
            id="navbar-default"
          >
            <ul
              className={` font-medium flex flex-col  p-4 px-12 md:p-0 mt-4 border  bg-gray-200 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-base-200  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-500 absolute md:static  ${
                toggle ? " z-10 top-10 right-8" : " -top-[400px] right-8"
              }`}
            >
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 border-b-green-500 pb-2"
                    : "border-b-2 pb-2"
                }
              >
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-500 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-500 dark:hover:text-white md:dark:hover:bg-transparent"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
              </NavLink>
              <NavLink
                to="/allToys"
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 border-b-green-500 pb-2"
                    : "border-b-2 pb-2"
                }
              >
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-500 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-500 dark:hover:text-white md:dark:hover:bg-transparent"
                    aria-current="page"
                  >
                    All Toys
                  </a>
                </li>
              </NavLink>
              <NavLink
                to="blog"
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 border-b-green-500 pb-2"
                    : "border-b-2 pb-2"
                }
              >
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-500 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-500 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Blogs
                  </a>
                </li>
              </NavLink>
              {user ? (
                <>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "border-b-2 border-b-green-500 pb-2"
                        : "border-b-2 pb-2"
                    }
                    to="/myToys"
                  >
                    <li>
                      <a
                        href="#"
                        className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-500 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-500 dark:hover:text-white md:dark:hover:bg-transparent"
                      >
                        My Toys
                      </a>
                    </li>
                  </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "border-b-2 border-b-green-500 pb-2"
                        : "border-b-2 pb-2"
                    }
                    to="/addToy"
                  >
                    <li>
                      <a
                        href="#"
                        className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-500 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-500 dark:hover:text-white md:dark:hover:bg-transparent"
                      >
                        Add a Toys
                      </a>
                    </li>
                  </NavLink>
                  <div className="my-2 md:my-0 flex justify-center">
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
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "border-b-2 border-b-green-500 pb-2"
                      : "border-b-2 pb-2"
                  }
                  to="/login"
                >
                  <button
                    type="button"
                    className=" bg-green-500 text-white transition hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-sm text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-green-600 dark:hover:bg-green-500 dark:focus:ring-green-800"
                  >
                    Login
                  </button>
                </NavLink>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
