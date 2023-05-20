import { Link } from "react-router-dom";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

export default function Login() {
  const { loginUser } = useContext(AuthContext);
  const handleLogin = (event) => {
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
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
                  type="text"
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
            </form>
          </div>
          <SocialLogin />
        </div>
      </div>
    </div>
  );
}
