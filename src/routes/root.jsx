import { Outlet, useLoaderData, } from "react-router-dom";
import Header from "../components/header";
import Aside, { loader as asideLoader }  from "../components/aside";
import "../style/root.css";

export default function Root() {
  return (
    <div id="container-outside">
      <div id="container-tl"></div>
      <div id="container-br"></div>
      <div id="container-inside">
        <Header />
        <Aside />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
