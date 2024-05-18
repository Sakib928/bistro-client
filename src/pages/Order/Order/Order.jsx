import Cover from "../../../shared/Cover/Cover";
import Banner from "../../../assets/shop/banner2.jpg";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useMenu from "../../../hooks/useMenu";
import FoodCard from "../../../components/FoodCard/FoodCard";
import "./Order.css";
import { useParams } from "react-router-dom";

const Order = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  console.log(category);
  const [menus] = useMenu();
  console.log(menus);
  const dessert = menus.filter((menu) => menu.category === "dessert");
  const soup = menus.filter((menu) => menu.category === "soup");
  const salad = menus.filter((menu) => menu.category === "salad");
  const pizza = menus.filter((menu) => menu.category === "pizza");
  const drinks = menus.filter((menu) => menu.category === "drinks");
  console.log(soup);

  return (
    <div>
      <Cover
        banner={Banner}
        title={"ORDER FOOD"}
        details={"Would you like to try a dish ?"}
      ></Cover>
      <div className="text-center my-8">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList className="font-bold">
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soup</Tab>
            <Tab>Dessert</Tab>
            <Tab>Drink</Tab>
          </TabList>

          <TabPanel>
            <div className="grid grid-cols-1 lg:grid-cols-3 mt-8">
              {salad.map((item) => (
                <FoodCard key={item._id} item={item}></FoodCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 lg:grid-cols-3 mt-8">
              {pizza.map((item) => (
                <FoodCard key={item._id} item={item}></FoodCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 lg:grid-cols-3 mt-8">
              {soup.map((item) => (
                <FoodCard key={item._id} item={item}></FoodCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 lg:grid-cols-3 mt-8">
              {dessert.map((item) => (
                <FoodCard key={item._id} item={item}></FoodCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 lg:grid-cols-3 mt-8">
              {drinks.map((item) => (
                <FoodCard key={item._id} item={item}></FoodCard>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
