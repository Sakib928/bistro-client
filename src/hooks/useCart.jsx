import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useCart = () => {
  const { user } = useAuth();
  // tanstack query
  const axiosSecure = useAxiosSecure();
  const { data: cart = [], refetch } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const result = await axiosSecure.get(`/carts?email=${user.email}`);
      //   console.log(result.data);
      return result.data;
    },
  });
  return [cart, refetch];
};

export default useCart;
