import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

export default function Login() {
  const { loginUser, setError, setSuccess, success, error } =
    useContext(AuthContext);

  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";
  console.log(from);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    setSuccess("");
    setError("");

    loginUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setSuccess("User Login Successfully!!!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
        console.log(error);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body pb-0">
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <p>New to this website?</p>
                  <Link
                    to="/resister"
                    className="text-green-500 ml-2 underline font-medium text-md"
                  >
                    Please Resister
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn border-0 bg-green-500">Login</button>
              </div>
              <div className="mt-4">
                {success ? (
                  <p className="text-green-500">{success}</p>
                ) : (
                  <p className="text-red-500">{error}</p>
                )}
              </div>
            </form>
          </div>
          <SocialLogin />
        </div>
      </div>
    </div>
  );
}
