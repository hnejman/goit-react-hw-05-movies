import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Cast } from './Cast';
import { Reviews } from './Reviews';
import { lazy } from 'react';
import { SharedLayout } from './SharedLayout';

const MovieDetails = lazy(()=>import('./page/MovieDetails'));
const Movies = lazy(()=>import('./page/Movies'));
const Home = lazy(() => import("./page/Home"));

export const App = () => {
  return (
    <div>
      <Routes path="/goit-react-hw-05-movies">
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element = { <Movies />}/>
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
