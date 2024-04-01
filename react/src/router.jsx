import { Navigate, createBrowserRouter } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import GuestLayout from "./components/GuestLayout";
import Login from "./views/Login";
import Signup from "./views/Signup";
import Surveys from "./views/Surveys";
import DefaultLayout from "./components/DefaultLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/Dashboard",
        element: <Navigate to="/" />,
      },
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/surveys",
        element: <Surveys />,
      },
    ],
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
