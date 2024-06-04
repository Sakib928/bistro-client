import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast, { Toaster } from "react-hot-toast";

const image_hosting_key = import.meta.env.VITE_IMAGE_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddItems = () => {
  const { register, handleSubmit } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const onSubmit = async (data) => {
    console.log(data);
    // upload to imagebb and get the url
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      // time to send the rest of the form data
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };
      // now send with admin access
      const menuRes = await axiosSecure.post("/menu", menuItem);
      console.log(menuRes.data);
      if (menuRes.data.insertedId) {
        toast.success("added item successfully");
      } else {
        toast.error("only admins can add item");
      }
    }
  };
  return (
    <div>
      <Toaster />
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
                  defaultValue={"default"}
                  {...register("category")}
                  className="select select-bordered w-full max-w-xs rounded-md  dark:text-gray-50 bg-[#121212] p-2"
                >
                  <option value="default" disabled>
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
          <button className="btn bg-[#121212]" type="submit">
            Add Item <FaUtensils></FaUtensils>
          </button>
        </form>
      </section>
    </div>
  );
};

export default AddItems;
