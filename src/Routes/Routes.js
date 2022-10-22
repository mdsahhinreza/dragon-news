import Main from "../layout/Main";
import Category from "../Pages/Category/Category/Category";
import Home from "../Pages/Home/Home/Home";
import News from "../Pages/News/News/News";

const { createBrowserRouter } = require("react-router-dom");

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "home",
        element: <Home></Home>,
      },
      {
        path: "category/:id",
        element: <Category></Category>,
      },
      {
        path: "news/:id",
        element: <News></News>,
      },
    ],
  },
]);
