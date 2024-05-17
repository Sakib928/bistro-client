import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer/Footer";

const Main = () => {
  return (
    <>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default Main;
