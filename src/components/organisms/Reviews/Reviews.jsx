import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getFromApi } from '../../atoms/getFromApi/getFromApi';

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
      return (
        <ul>
          {arr.map(element => (
            <li key={element.id}>
              <p>{element.author}</p>
              <p>{element.content}</p>
            </li>
          ))}
        </ul>
      );
    } else {
      return <p>We don't have any reviews for this movie</p>;
    }
  }

  return checkArray(response.results);
};
