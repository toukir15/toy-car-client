import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import ButtonLoading from "../ui/ButtonLoading";

export default function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log("private Route", user, loading);

  if (loading) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <ButtonLoading />
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
}
