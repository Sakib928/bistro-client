import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaCartShopping } from "react-icons/fa6";
import useCart from "../../hooks/useCart";
import toast, { Toaster } from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();
  const handleLogout = () => {
    logOut().then(() => {
      toast.success("logged out successfully");
    });
  };
  const navOptions = (
    <div className="flex items-center navigation">
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/ourMenu"}>Our Menu</NavLink>
      </li>
      <li>
        <NavLink to={"/order/salad"}>Order Food</NavLink>
      </li>
      <li>
        <NavLink to={"/dashboard"}>
          {" "}
          <button className="flex gap-3">
            <FaCartShopping className="text-xl font-bold" />
            <div className="badge badge-secondary ">{cart.length}</div>
          </button>
        </NavLink>
      </li>
      <li>
        {user ? (
          <button className="btn btn-ghost" onClick={handleLogout}>
            Log Out
          </button>
        ) : (
          <NavLink to={"/login"}>Log In</NavLink>
        )}
      </li>
    </div>
  );
  return (
    <div>
      <Toaster />
      <div className="navbar bg-black text-white max-w-screen-xl bg-opacity-30 fixed z-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-bold text-md"
            >
              {navOptions}
            </ul>
          </div>
          <a className="font-bold text-3xl text-center">
            BISTRO BOSS <br />{" "}
            <span
              style={{
                letterSpacing: "0.25rem",
              }}
              className="text-lg"
            >
              RESTAURANT
            </span>
          </a>
        </div>
        <div className="navbar-end">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 font-bold text-md">
              {navOptions}
            </ul>
          </div>
          {/* <a className="btn">Button</a> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
