import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Public, { loader as public_loader} from "./pages/public";
import Private, { loader as private_loader} from "./pages/private";
// import Admin, { loader as admin_loader} from "./pages/admin";
import Login from "./pages/login";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Willkommen. Bitte loggen Sie sich ein.</h1>,
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/public",
    loader: public_loader,
    element: <Public />
  },
  {
    path: "/private",
    loader: private_loader,
    element: <Private />
  },
 /* {
    path: "/admin",
    loader: admin_loader,
    element: <Admin />
  }*/
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);