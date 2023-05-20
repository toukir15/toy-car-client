import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
export default function SocialLogin() {
  const { googleSignIn, githubSignIn, setSuccess, setError } =
    useContext(AuthContext);

  // google singIn
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setSuccess("User Successfully SignIn with Google");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // github signIn
  const handleGithubSignIn = () => {
    githubSignIn()
      .then((result) => {
        console.log(result.user);
        setSuccess("User Successfully SignIn with Github");
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };
  return (
    <div className="flex flex-col w-full border-opacity-50">
      <div className="divider">OR</div>
      <div className="flex justify-center gap-4 mb-8">
        <div
          onClick={handleGoogleSignIn}
          className="border p-3 rounded-full shadow-md cursor-pointer"
        >
          <FcGoogle className="text-2xl " />
        </div>
        <div
          onClick={handleGithubSignIn}
          className="border p-3 rounded-full shadow-md cursor-pointer"
        >
          <BsGithub className="text-2xl " />
        </div>
      </div>
    </div>
  );
}
