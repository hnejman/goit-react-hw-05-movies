import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { ButtonBack } from "./page/ButtonBack";

export const SharedLayout = () => {
  return (
    <div>
      <ul className="navigation">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading page...</div>}>
        <ButtonBack/>
        <Outlet />
      </Suspense>
    </div>
  );
};