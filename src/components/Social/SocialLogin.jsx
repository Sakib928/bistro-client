import { FaGoogle } from "react-icons/fa6";
import useAuth from "../../hooks/useAuth";
import toast, { Toaster } from "react-hot-toast";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleLogin } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const handleGoogleLogin = () => {
    googleLogin().then((res) => {
      console.log(res.user);
      const userInfo = {
        email: res.user?.email,
        name: res.user?.displayName,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
        navigate("/");
      });
      toast.success("succesfully logged in");
    });
  };
  return (
    <div className="mt-4 flex">
      <Toaster />
      <p
        onClick={handleGoogleLogin}
        className="flex place-items-center gap-3 btn btn-ghost"
      >
        <FaGoogle></FaGoogle>Google
      </p>
    </div>
  );
};

export default SocialLogin;
