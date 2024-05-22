import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  //   console.log(register);
  //   console.log(watch("name"));

  return (
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
                {...register("password")}
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
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
  );
};

export default SignUp;
