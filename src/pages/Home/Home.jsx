import { Helmet } from "react-helmet-async";
import PopularMenu from "../PopularMenu/PopularMenu";
import Banner from "./Banner";
import Category from "./Category";
import Featured from "./Featured";
import MiniBanner from "./MiniBanner";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <MiniBanner></MiniBanner>
      <PopularMenu></PopularMenu>
      <Featured></Featured>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
