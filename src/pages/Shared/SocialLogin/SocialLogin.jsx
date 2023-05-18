import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";

export default function SocialLogin() {
  return (
    <div className="flex flex-col w-full border-opacity-50">
      <div className="divider">OR</div>
      <div className="flex justify-center gap-4 mb-8">
        <div className="border p-3 rounded-full shadow-md cursor-pointer">
          <FcGoogle className="text-2xl " />
        </div>
        <div className="border p-3 rounded-full shadow-md cursor-pointer">
          <BsGithub className="text-2xl " />
        </div>
      </div>
    </div>
  );
}
