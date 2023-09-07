import { Outlet, useLoaderData } from "react-router-dom";
import Nav, { loader as asideLoader } from "./header";

export default function Root() {
  return (
    <>
      <Nav />
      <main >
        <Outlet />
      </main>
    </>
  );
}
