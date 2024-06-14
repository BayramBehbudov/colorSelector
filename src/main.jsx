import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./index.css";

const routes = createBrowserRouter(router);
import router from "./router";
import { ContextProvider } from "./colorContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <RouterProvider router={routes} />
  </ContextProvider>
);
