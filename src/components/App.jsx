import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Cast } from './Cast';
import { Reviews } from './Reviews';
import { lazy } from 'react';
import { SharedLayout } from './SharedLayout';
import { useState } from 'react';

const MovieDetails = lazy(()=>import('./page/MovieDetails'));
const Movies = lazy(()=>import('./page/Movies'));
const Home = lazy(() => import("./page/Home"));

export const App = () => {

  const [adr, setAdr] = useState(""); 

  const setHome = () => {
    const address = "/"
    setAdr(address);
  }

  const setMovies = () =>{
    const address = "/movies"
    setAdr(address);
  }

  const setSearch = (search) => {
    const address = "/movies?query=" + search
    setAdr(address);
  }

  return (
    <div>
      <Routes path="/goit-react-hw-05-movies">
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home setHome={setHome} />} />
          <Route path="movies" element = { <Movies  setMovies={setMovies} setSearch={setSearch}/>}/>
          <Route path="movies/:movieId" element={<MovieDetails adr={adr} />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
