import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
const AddItems = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <SectionTitle
        heading={"add an item"}
        subHeading={"What's new?"}
      ></SectionTitle>
      <section className="p-6 dark:bg-gray-800 dark:text-gray-50 text-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="container flex flex-col mx-auto space-y-12"
        >
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-800 text-left">
            <div className="col-span-full sm:col-span-4">
              <label htmlFor="email" className="text-sm">
                Recipe Name
              </label>
              <input
                {...register("name")}
                id="email"
                type="text"
                placeholder="Recipe Name"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 p-2"
              />
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-4">
              <div className="col-span-full sm:col-span-3">
                <p className="label-text text-gray-50">Category</p>
                <select
                  id="firstname"
                  {...register("category")}
                  className="select select-bordered w-full max-w-xs rounded-md  dark:text-gray-50 bg-[#121212] p-2"
                >
                  <option disabled selected>
                    Choose a category
                  </option>
                  <option value="salad">Salad</option>
                  <option value="pizza">Pizza</option>
                  <option value="soup">Soup</option>
                  <option value="dessert">Dessert</option>
                  <option value="drinks">Drinks</option>
                </select>
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="lastname" className="text-sm">
                  Price
                </label>
                <input
                  {...register("price")}
                  id="lastname"
                  type="text"
                  placeholder="Price"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 p-2"
                />
              </div>
              <div className="col-span-full">
                <label className="form-control ">
                  <div className="label">
                    <span className="label-text">Recipe Details</span>
                  </div>
                  <textarea
                    {...register("recipe", { required: true })}
                    className="textarea textarea-bordered h-24 bg-[#121212]"
                    placeholder="Recipe Details"
                  ></textarea>
                </label>
              </div>
            </div>
            <div className="form-control w-full my-6 col-span-2">
              <input
                {...register("image", { required: true })}
                type="file"
                className="file-input w-full bg-[#121212]"
              />
            </div>
          </fieldset>
          <button className="btn" type="submit">
            Add Item <FaUtensils></FaUtensils>
          </button>
        </form>
      </section>
    </div>
  );
};

export default AddItems;
