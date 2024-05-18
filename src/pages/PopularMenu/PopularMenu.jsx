import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenuItem from "../../components/MenuItem/MenuItem";
import useMenu from "../../hooks/useMenu";

const PopularMenu = () => {
  const heading = "from our menue";
  const subHeading = "---Check it out---";
  const [menus, loading] = useMenu();
  const popularMenus = menus.filter((menu) => menu.category === "popular");
  if (loading) {
    return (
      <div className="text-center">
        <span className="loading loading-dots loading-xs"></span>
        <span className="loading loading-dots loading-sm"></span>
        <span className="loading loading-dots loading-md"></span>
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }
  return (
    <div>
      <SectionTitle heading={heading} subHeading={subHeading}></SectionTitle>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {popularMenus.map((menu) => (
          <MenuItem key={menu._id} menu={menu}></MenuItem>
        ))}
      </div>
      <div className="text-center mb-8">
        <button className="btn mt-6 border-0 border-b-4 border-white text-white ">
          ORDER NOW
        </button>
      </div>
    </div>
  );
};

export default PopularMenu;
