import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import ErrorPage from "./Error-page";
import Index from "./routes/Index";
import Project from "./routes/Project";
import Skills from "./routes/Skills";
import Contact from "./routes/Contact";
import "./style/index.scss";
import "./normalize.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,

    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Index /> },
          {
            path: "contact",
            element: <Contact />,
          },
          {
            path: "project/:projectId",
            element: <Project />,
          },
          {
            path: "skills",
            element: <Skills />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
