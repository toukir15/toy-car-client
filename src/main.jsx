import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes.jsx";
import AuthProvider from "./providers/AuthProvider";
import CarProvider from "./providers/ToyProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <CarProvider>
      <RouterProvider router={router} />
    </CarProvider>
  </AuthProvider>
);
