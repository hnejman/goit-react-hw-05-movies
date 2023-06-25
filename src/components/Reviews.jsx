import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getFromApi } from './getFromApi';

export const Reviews = () => {
  const [response, setResponse] = useState([]);
  let location = useLocation();
  location = location.pathname.split('/');

  useEffect(() => {
    getFromApi(`3/movie/${location[2]}/reviews`).then(response => {
      setResponse(response.data);
    });
  }, [location]);

  function checkArray(arr) {
    if (Array.isArray(arr) && arr.length !== 0) {
      return arr.map(element => (
        <li key={element.id}>
          <p>{element.author}</p>
          <p>{element.content}</p>
        </li>
      ));
    } else {
      return "We don't have any reviews for this movie";
    }
  }

  return (
    <div>
      {checkArray(response.results)}
    </div>
  );
};
