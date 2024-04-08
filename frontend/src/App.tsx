import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./styles/global.scss";
import { Layout } from "./components";
import Home from "./pages/home/Home";
import Users from "./pages/users/Users";
import Products from "./pages/products/Products";
import Login from "./pages/login/Login";
import User from "./pages/user/User";
import Product from "./pages/product/Product";
import Orders from "./pages/orders/Orders";
import Order from "./pages/order/Order";
import Posts from "./pages/posts/Posts";
import Post from "./pages/post/Post";
import Elements from "./pages/elements/Elements";
import Notes from "./pages/notes/Notes";
import Forms from "./pages/forms/Forms";
import Calendar from "./pages/calendar/Calendar";
import Settings from "./pages/settings/Settings";
import Backups from "./pages/backups/Backups";
import Charts from "./pages/charts/Charts";
import Logs from "./pages/logs/Logs";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/users/:id",
          element: <User />,
        },
        {
          path: "/products/:id",
          element: <Product />,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
        {
          path: "/orders/:id",
          element: <Order />,
        },
        {
          path: "/posts",
          element: <Posts />,
        },
        {
          path: "/posts/:id",
          element: <Post />,
        },
        {
          path: "/elements",
          element: <Elements />,
        },
        {
          path: "/notes",
          element: <Notes />,
        },
        {
          path: "/forms",
          element: <Forms />,
        },
        {
          path: "/calendar",
          element: <Calendar />,
        },
        {
          path: "/settings",
          element: <Settings />,
        },
        {
          path: "/backups",
          element: <Backups />,
        },
        {
          path: "/charts",
          element: <Charts />,
        },
        {
          path: "/logs",
          element: <Logs />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
