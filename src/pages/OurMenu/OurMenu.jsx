import { Helmet } from "react-helmet-async";
import Cover from "../../shared/Cover/Cover";
import banner1 from "../../assets/menu/banner3.jpg";
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";

const OurMenu = () => {
  const title = "OUR MENU";
  const details = "Would you like to try a dish?";
  const [menus] = useMenu();
  // console.log(menu);
  const desserts = menus.filter((menu) => menu.category === "dessert");
  const soups = menus.filter((menu) => menu.category === "soup");
  const salads = menus.filter((menu) => menu.category === "salad");
  const pizzas = menus.filter((menu) => menu.category === "pizza");
  const offered = menus.filter((menu) => menu.category === "offered");
  console.log(salads);
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover banner={banner1} title={title} details={details}></Cover>
      <SectionTitle
        heading={"TODAY'S OFFER"}
        subHeading={"---Don't miss---"}
      ></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>
      <Cover
        banner={banner1}
        title={"DESSERTS"}
        details={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></Cover>
      <br />
      <br />
      <br />
      <MenuCategory category="dessert" items={desserts}></MenuCategory>
      <Cover
        banner={banner1}
        title={"PIZZA"}
        details={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></Cover>
      <br />
      <br />
      <br />
      <MenuCategory category="pizza" items={pizzas}></MenuCategory>
      <Cover
        banner={banner1}
        title={"SALADS"}
        details={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></Cover>
      <br />
      <br />
      <br />
      <MenuCategory category="salad" items={salads}></MenuCategory>
      <Cover
        banner={banner1}
        title={"SOUPS"}
        details={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></Cover>
      <br />
      <br />
      <br />
      <MenuCategory category="soup" items={soups}></MenuCategory>
    </div>
  );
};

export default OurMenu;
