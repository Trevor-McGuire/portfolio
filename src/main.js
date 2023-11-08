import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root.js";
import ErrorPage from "./error-page.js";
import Index from "./routes/index.js";
import Project from "./routes/project.js";
import Skills from "./routes/skills.js";
import Contact from "./routes/contact.js";
import { loader } from './routes/header/index.js';
import "./style/index.scss";
import "./normalize.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: loader,
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
          }
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
