import PopularMenu from "../PopularMenu/PopularMenu";
import Banner from "./Banner";
import Category from "./Category";
import MiniBanner from "./MiniBanner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <MiniBanner></MiniBanner>
      <PopularMenu></PopularMenu>
    </div>
  );
};

export default Home;
