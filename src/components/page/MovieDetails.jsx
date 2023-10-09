import { Outlet, Link } from 'react-router-dom';
import { getFromApi } from '../getFromApi';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import { ButtonBack } from "./ButtonBack";
import { Routes, Route } from 'react-router-dom'; 
import React from 'react';

const MovieDetails = ({adr}) => {
  const [response, setResponse] = useState([]);
  let location = useLocation();
  location = location.pathname.split('/');
  let to = location.length - 2;

  useEffect(() => {
    getFromApi(`3/movie/${location[2]}`).then(response => {
      setResponse(response.data);
    });
  }, [location]);

  function checkArray(arr) {
    if (Array.isArray(arr)) {
      return arr.map(element => <li key={element.id}>{element.name}</li>);
    }
  }

  function image(response) {
    if (response.poster_path !== undefined && response.poster_path !== null) {
      return (
        <img
          alt={'poster of ' + response.original_title}
          src={`https://image.tmdb.org/t/p/w300` + response.poster_path}
        />
      );
    } else {
      return (
        <img
          alt={'substitute'}
          src={'https://upload.wikimedia.org/wikipedia/en/1/1b/NPC_wojak_meme.png'}
        />
      );
    }
  }

  return (
    <div>
        <ButtonBack adr={adr}/>
      {image(response)}
      <div>
        <h2>{response.original_title}</h2>
        <p>
          <span>Vote average: </span>
          {response.vote_average}
        </p>
        <h3>Overview</h3>
        <p>{response.overview}</p>
        <h3>Genres</h3>
        <ul>{checkArray(response.genres)}</ul>
      </div>
      <p> More information</p>
      <Link to="cast">Cast</Link>
      <span> </span>
      <Link to="reviews">Reviews</Link>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
