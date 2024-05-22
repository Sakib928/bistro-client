import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
const Login = () => {
  const captchaRef = useRef();
  const [disabled, setDisabled] = useState(true);
  const handleLogin = (e) => {
    e.preventDefault();
    // const form = e.target;
    // const email = form.email.value;
    // const password = form.password.value;
    // console.log(email, password);
  };

  const handleValidateCaptcha = () => {
    const userCaptchaValue = captchaRef.current.value;
    if (validateCaptcha(userCaptchaValue) === true) {
      // alert("captcha matched");
      setDisabled(false);
    } else {
      // alert("captcha did not match");
      setDisabled(true);
    }
  };

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          {/* <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p> */}
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
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
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <LoadCanvasTemplate />
              </label>
              <input
                ref={captchaRef}
                type="text"
                name="captcha"
                placeholder="type the captcha"
                className="input input-bordered"
                required
              />
            </div>
            <button
              onClick={handleValidateCaptcha}
              className="btn-outline btn-xs font-bold"
            >
              Validate captcha
            </button>

            <div className="form-control mt-6">
              <button
                disabled={disabled}
                type="submit"
                className="btn btn-primary"
              >
                Login
              </button>
            </div>
            <p>
              New here ?{" "}
              <Link to={"/signup"}>
                <span className="underline">Create an account</span>
              </Link>{" "}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
