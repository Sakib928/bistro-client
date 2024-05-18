const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title mx-auto">{name}</h2>
        <p className="text-left absolute top-3 right-5 bg-black p-3 rounded-lg">
          ${price}
        </p>
        <p className="text-left">{recipe}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-primary">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
