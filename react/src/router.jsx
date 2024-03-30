import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import GuestLayout from "./components/GuestLayout";
import Login from "./views/Login";
import Signup from "./views/Signup";
import Surveys from "./views/Surveys";

const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/survey",
    element: <Surveys />,
  },
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
