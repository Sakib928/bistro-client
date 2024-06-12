import { FaBook, FaHome, FaSearch } from "react-icons/fa";
import {
  FaCalendar,
  FaCartArrowDown,
  FaEnvelope,
  FaList,
  FaUsers,
  FaUtensils,
} from "react-icons/fa6";
import { MdRateReview } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const DashBoard = () => {
  const [cart] = useCart();
  const [isAdmin] = useAdmin();
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-orange-500">
        <ul className="menu text-black font-medium text-lg">
          {isAdmin ? (
            <>
              <li>
                <NavLink to={"/dashboard/adminHome"}>
                  <FaHome></FaHome>Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/addItems"}>
                  <FaUtensils /> Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/manageItems"}>
                  <FaList /> Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/manageBookings"}>
                  <FaBook /> Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/allUsers"}>
                  <FaUsers /> All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to={"/dashboard/home"}>
                  <FaHome></FaHome>My Home
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/reservation"}>
                  <FaCalendar></FaCalendar> Reservation
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/cart"}>
                  <FaCartArrowDown></FaCartArrowDown> My Cart({cart.length})
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/review"}>
                  <MdRateReview /> Add a review
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/paymentHistory"}>
                  <FaList></FaList> Payment History
                </NavLink>
              </li>
            </>
          )}
          <hr />
          <li>
            <NavLink to={"/"}>
              <FaHome /> Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/order/salad"}>
              <FaSearch /> Menu
            </NavLink>
          </li>
          <li>
            <NavLink to={"/order/salad"}>
              <FaEnvelope /> Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashBoard;
