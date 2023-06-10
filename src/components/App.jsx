import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./Home";
import { Movies } from "./Movies";

export const App = () => {
//   const [id, setId] = useState(510);

// const submit = (e) => {
//   e.preventDefault();
//   const pageValue = e.target.elements.page;
//   setId(pageValue);
// }

  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/*" element={<Movies />} />
      </Routes>
      {/* <form onSubmit={submit}>
        <input name="page">
        </input>
        <input name="search">
        </input> 
      </form>
      <button type="button" onClick={console.log(id)}>
        show search
      </button>
      <button type="button" onClick={console.log(getFromApi(id))}>
        get from api
      </button> */}
    </div>
  );
};
