import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Index from "./routes";
import Project from "./routes/project";
import Skills from "./routes/skills";
import Contact from "./routes/contact";
import { loader } from './routes/nav';
import "./index.css";
import 'flowbite';

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
