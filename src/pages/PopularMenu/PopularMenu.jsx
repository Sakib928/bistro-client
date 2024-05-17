import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenuItem from "../../components/MenuItem/MenuItem";

const PopularMenu = () => {
  const heading = "from our menue";
  const subHeading = "---Check it out---";
  const [menus, setMenus] = useState([]);
  console.log(menus);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setMenus(data.filter((item) => item.category === "popular"));
      });
  }, []);
  return (
    <div>
      <SectionTitle heading={heading} subHeading={subHeading}></SectionTitle>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {menus.map((menu) => (
          <MenuItem key={menu._id} menu={menu}></MenuItem>
        ))}
      </div>
    </div>
  );
};

export default PopularMenu;
