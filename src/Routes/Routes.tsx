import App from "@/App";
import CreateProject from "@/components/CreateProject";
import LayOut from "@/LayOut";
import DashBoard from "@/Pages/DashBoard";
import Details from "@/Pages/Details";
import LoginForm from "@/Pages/SignIn";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    errorElement: <p>Something went wrong</p>,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/:id",
        element: <Details />,
      },

      {
        path: "/signIn",
        element: <LoginForm />,
      },
    ],
  },
  {
    path: "/dashBoard",
    element: <DashBoard />,
    children: [
      {
        path: "addProject",
        element: <CreateProject />,
      },
      {
        path: "addBlog",
        element: <CreateProject />,
      },
    ],
  },
]);
