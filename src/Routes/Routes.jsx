import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";

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
    ],
  },
]);
