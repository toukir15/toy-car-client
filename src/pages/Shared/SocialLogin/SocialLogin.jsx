import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
export default function SocialLogin() {
  const { googleSignIn } = useContext(AuthContext);
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => console.log(error));
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
        <div className="border p-3 rounded-full shadow-md cursor-pointer">
          <BsGithub className="text-2xl " />
        </div>
      </div>
    </div>
  );
}
