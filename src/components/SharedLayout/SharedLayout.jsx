import { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";


export const SharedLayout = () => {
  return (
    <>
      <ul className="navigation">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
      </ul>
      <div className="container">
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
      </div>
      <footer>
        
      </footer>
    </>
  );
};