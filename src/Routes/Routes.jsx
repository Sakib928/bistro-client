import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import OurMenu from "../pages/OurMenu/OurMenu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import DashBoard from "../Layout/DashBoard";
import Cart from "../pages/DashBoard/Cart";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../pages/DashBoard/AllUsers/AllUsers";
import AdminRoute from "./AdminRoute";
import AddItems from "../pages/DashBoard/AddItems/AddItems";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <h1>something went wrong</h1>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/ourMenu",
        element: <OurMenu></OurMenu>,
      },
      {
        path: "/order/:category",
        element: <Order></Order>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "dashboard",
        element: (
          <PrivateRoute>
            <DashBoard></DashBoard>
          </PrivateRoute>
        ),
        errorElement: <h1>something went wrong</h1>,
        children: [
          {
            path: "cart",
            element: <Cart></Cart>,
          },
          //  admin routes

          {
            path: "allUsers",
            element: (
              <AdminRoute>
                <AllUsers />
              </AdminRoute>
            ),
          },
          {
            path: "adminHome",
            element: <AdminRoute>uifhiuashuih</AdminRoute>,
          },
          {
            path: "addItems",
            element: (
              <AdminRoute>
                <AddItems />
              </AdminRoute>
            ),
          },
        ],
      },
    ],
  },
]);
