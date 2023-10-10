import { Routes, Route } from 'react-router-dom';
import { Cast } from '../../components/Cast/Cast';
import { Reviews } from '../../components/Reviews/Reviews';
import React, { lazy, useState } from 'react';
import { SharedLayout } from '../../components/SharedLayout/SharedLayout';

const MovieDetails = lazy(()=>import('../MovieDetails/MovieDetails'));
const Movies = lazy(()=>import('../Movies/Movies'));
const Home = lazy(() => import("../Home/Home"));

export const App = () => {

  const [adr, setAdr] = useState(""); 

  const setHome = () => {
    const address = ""
    setAdr(address);
  }

  const setSearch = (search) => {
    const address = "movies?query=" + search
    setAdr(address);
  }

  return (
    <div>
      <Routes path="/goit-react-hw-05-movies">
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home setHome={setHome} />} />
          <Route path="movies" element = { <Movies setSearch={setSearch}/>}/>
          <Route path="movies/:movieId" element={<MovieDetails adr={adr} />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
