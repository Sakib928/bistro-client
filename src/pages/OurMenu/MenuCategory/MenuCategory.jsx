import MenuItem from "../../../components/MenuItem/MenuItem";

const MenuCategory = ({ items }) => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {items.map((menu) => (
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

export default MenuCategory;
