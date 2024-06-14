import Home from "../pages/home/Home";
import CreatePage from "../pages/createPage/CreatePage.jsx";

export default [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/create",
    element: <CreatePage />,
  },
];
