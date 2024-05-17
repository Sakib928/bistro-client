const MenuItem = ({ menu }) => {
  const { name, image, price, recipe } = menu;
  return (
    <div className="flex mb-12 gap-6">
      <img
        src={image}
        alt=""
        className="h-[104px] w-[118px] rounded-r-full rounded-b-full"
      />
      <div>
        <h1 className="text-lg">{name}------------------</h1>
        <p className="text-sm">{recipe}</p>
      </div>
      <h1 className="text-[#BB8506]">${price}</h1>
    </div>
  );
};

export default MenuItem;
