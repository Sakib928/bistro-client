import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
// import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    reset,
    // watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data.email);
    createUser(data.email, data.password)
      .then((res) => {
        console.log(res.user);
      })
      .catch((err) => {
        console.log(err);
      });
    reset();
  };

  //   console.log(register);
  //   console.log(watch("name"));

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Sign Up</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up now!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  // required
                />
                {errors.name && (
                  <p className="text-red-600">This field is required</p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email")}
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  {...register("password", {
                    required: "true",
                    minLength: 6,
                    maxLength: 20,
                    pattern:
                      /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{6}/,
                  })}
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  // required
                />
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600">
                    password should contain 1 uppercase, 1 special case,1
                    number, 1 lowercase and should be 6 characters long
                  </p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600">
                    password should be more than 6 characters
                  </p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-600">
                    password should be less than 20 characters
                  </p>
                )}
              </div>
              {/* <div className="form-control">
              <label className="label">
                <LoadCanvasTemplate />
              </label>
              <input
                // ref={captchaRef}
                type="text"
                name="captcha"
                placeholder="type the captcha"
                className="input input-bordered"
                required
              />
            </div>
            <button
              //   onClick={handleValidateCaptcha}
              className="btn-outline btn-xs font-bold"
            >
              Validate captcha
            </button> */}

              <div className="form-control mt-6">
                <button
                  // disabled={disabled}
                  type="submit"
                  className="btn btn-primary"
                >
                  Login
                </button>
              </div>
              <p>
                Have an account ?{" "}
                <Link to={"/login"}>
                  <span className="underline">Log In here</span>
                </Link>{" "}
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
