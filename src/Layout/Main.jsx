import { Outlet, useLocation } from "react-router-dom";
import Footer from "../shared/Footer/Footer";
import Navbar from "../shared/Navbar/Navbar";

const Main = () => {
  const location = useLocation();
  // console.log(location);
  const noHeaderFooter =
    location.pathname.includes("login") ||
    location.pathname.includes("signup") ||
    location.pathname.includes("dashboard");
  return (
    <>
      {noHeaderFooter || <Navbar></Navbar>}
      <Outlet></Outlet>
      {noHeaderFooter || <Footer></Footer>}
    </>
  );
};

export default Main;
