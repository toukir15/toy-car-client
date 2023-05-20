import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

export default function Resister() {
  const { createUser, setError, setSuccess, success, error } =
    useContext(AuthContext);

  const handleResister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const url = form.url.value;
    console.log(email, password);
    setSuccess("");
    setError("");

    if (password.length < 6) {
      setError("Password is less than 6 character");
      return;
    }

    createUser(email, password)
      .then((result) => {
        updateProfile(result.user, {
          displayName: name,
          photoURL: url,
        })
          .then(() => {
            console.log("profile updated");
            setSuccess("User Successfully SignUp With Email!!!");
          })
          .catch((error) => {
            console.log(error);
            setError(error.message);
          });
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Please Resister!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body pb-0">
            <form onSubmit={handleResister}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  className="input input-bordered"
                />
              </div>
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
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">URL</span>
                </label>
                <input
                  type="url"
                  placeholder="url"
                  name="url"
                  className="input input-bordered"
                />
                <label className="label">
                  <p>Already have an account?</p>
                  <Link
                    to="/login"
                    className="text-green-500 ml-0 underline font-medium text-md"
                  >
                    Please Login
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-green-500 border-0">Resister</button>
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
