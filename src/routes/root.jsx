import { Outlet, useLoaderData } from "react-router-dom";
import Nav, { loader as asideLoader } from "./nav";

export default function Root() {
  return (
    <>
      <Nav />
      <main className="m-5">
        <Outlet />
      </main>
    </>
  );
}
